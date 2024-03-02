const updateYears = () => {
  const element = document.getElementById('years');

  if (!element) {
    throw new Error('No #years found.');
  }

  const years = new Date().getFullYear() - 2013;
  element.innerText = years.toString();
};

window.addEventListener('load', () => {
  updateYears();
});
