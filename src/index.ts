const updateYears = () => {
  const years = new Date().getFullYear() - 2013;
  const element = document.getElementById("years");
  if (element) {
    element.innerText = years.toString();
  }
};

window.addEventListener("load", () => {
  updateYears();
});
