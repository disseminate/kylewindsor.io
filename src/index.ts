let mouseLocation: [number, number] = [-100000, -100000];
let lerpedMouseLocation: [number, number] = [-100000, -100000];

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

window.addEventListener('load', () => {
  updateYears();
  resize();
});

window.addEventListener('resize', () => {
  resize();
});

document.addEventListener('mousemove', (event) => {
  mouseLocation = [event.clientX, event.clientY];

  if (lerpedMouseLocation[0] < 0) {
    lerpedMouseLocation[0] = mouseLocation[0];
    lerpedMouseLocation[1] = mouseLocation[1];
  }
});
