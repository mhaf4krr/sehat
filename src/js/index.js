const add = document.querySelector("#add");
const view = document.querySelector("#view");

add.addEventListener("click", () => {
  window.location = "../public/patient.html";
});

view.addEventListener("click", () => {
  window.location = "../public/report.html";
});
