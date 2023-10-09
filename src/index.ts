const updateYears = () => {
  const years = 1 + new Date().getFullYear() - 2014;
  const element = document.getElementById("years");
  if (element) {
    element.innerText = years.toString();
  }
};

window.addEventListener("load", () => {
  updateYears();
});
