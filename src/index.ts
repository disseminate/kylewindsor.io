let mouseLocation: [number, number] = [100000, 100000];

const updateYears = () => {
  const years = new Date().getFullYear() - 2013;
  const element = document.getElementById('years');
  if (element) {
    element.innerText = years.toString();
  }
};

const resize = () => {
  const canvas = document.getElementById('background-canvas');

  if (!canvas) {
    return;
  }

  canvas.setAttribute('width', window.innerWidth.toString(10));
  canvas.setAttribute('height', window.innerHeight.toString(10));
};

const sineFunction = (colorIndex: number, maxWidth: number, colorCount: number, height: number, scrollSpacing: number, time: number) => {
  let x =
    colorIndex * ((0.5 * maxWidth) / (colorCount * 2)) +
    100 +
    Math.sin(height / scrollSpacing + time / 5000 + window.scrollY / scrollSpacing) * 50;

  const dx = Math.abs(x - mouseLocation[0]);
  const dy = Math.abs(height - mouseLocation[1]);
  const dist = Math.sqrt(dx * dx + dy * dy);
  let mouseMult = dist / 800;
  if (mouseMult > 1) {
    mouseMult = 1;
  }
  if (mouseMult < 0) {
    mouseMult = 0;
  }
  x = x * mouseMult;

  return x;
};

let animationIndex = -1;

const updateCanvas = () => {
  const scrollSpacing = 80;

  const animate = (time: number) => {
    const canvas = document.getElementById('background-canvas') as HTMLCanvasElement;

    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    const w = ctx.canvas.width;
    const h = ctx.canvas.height;

    if (w <= 800) {
      // Don't pull resources on mobile
      return;
    }

    const maxWidth = w - 1000 - 200;
    if (maxWidth <= 0) {
      return;
    }

    const colors = [
      'rgb(209, 77, 65)', // --bg2
      'rgb(218, 112, 44)', // --ui
      'rgb(208, 162, 21)', // --ui2
      'rgb(135, 154, 57)', // --ui3
      'rgb(58, 169, 159)',
    ];

    ctx.fillStyle = 'rgb(16, 15, 15)';
    ctx.fillRect(0, 0, w, h);

    const timeOffset = time + 55000;

    for (let colorIndex = 0; colorIndex < colors.length; colorIndex++) {
      ctx.beginPath();
      const interval = 10;
      const start = sineFunction(colorIndex, maxWidth, colors.length, 0, scrollSpacing, timeOffset);
      ctx.moveTo(start, 0);
      ctx.lineWidth = 1;
      for (let i = 0; i <= h + interval; i += interval) {
        ctx.lineTo(sineFunction(colorIndex, maxWidth, colors.length, i, scrollSpacing, timeOffset), i);
      }
      ctx.strokeStyle = colors[colorIndex]!;
      ctx.stroke();
    }

    requestAnimationFrame(animate);
  };

  if (animationIndex > -1) {
    cancelAnimationFrame(animationIndex);
    animationIndex = -1;
  }

  animationIndex = requestAnimationFrame(animate);
};

window.addEventListener('load', () => {
  updateYears();
  resize();
  updateCanvas();
});

window.addEventListener('resize', () => {
  resize();
  updateCanvas();
});

document.addEventListener('mousemove', (event) => {
  mouseLocation = [event.clientX, event.clientY];
});
