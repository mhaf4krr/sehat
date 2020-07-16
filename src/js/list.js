const testIp = document.querySelector("#test-ip");
const printNext = document.querySelector(".print_next");

const search = document.querySelector("#test-search-icon");
const listP = document.querySelector("#list");
const listSend = document.querySelector(".list-send");

const testConfirmation = document.querySelector(".test-confirmation");

const completeBtn = document.querySelector(".complete");
const partailBtn = document.querySelector(".partial");

const recieveSection = document.querySelector(".recieve");
const addBtn = document.querySelectorAll(".btn-add");

search.addEventListener("click", () => {
  testIp.style.textTransform = "capitalize";
  if (testIp.value.trim() === "") {
    testIp.style.border = "2px solid red";
  } else if (testIp.value.trim() === "Biotechnology") {
    setTimeout(() => {
      testConfirmation.style.opacity = 1;
      testConfirmation.style.visibility = "visible";

      testConfirmation.style.transition = "all .3s";
      testIp.style.border = "2px solid #224f6d";
    }, 1000);
  } else {
    testIp.style.border = "2px solid red";
  }
});
completeBtn.addEventListener("click", () => {
  printNext.style.opacity = 1;
  printNext.style.visibility = "visible";
  printNext.style.transition = "all .3s";
  recieveSection.style.display = "inline-block";
  recieveSection.style.transition = "all .4s";
  addBtn.forEach((e) => {
    e.style.backgroundColor = "#b6eb7a";
  });
});
partailBtn.addEventListener("click", () => {
  printNext.style.opacity = 1;
  printNext.style.visibility = "visible";
  printNext.style.transition = "all .3s";
  recieveSection.style.display = "inline-block";
  recieveSection.style.transition = "all .4s";
  addBtn.forEach((e) => {
    e.style.backgroundColor = "#f3c623";
  });
});

printNext.addEventListener("click", () => {
  window.location = "../public/print.html";
});
