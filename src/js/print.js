console.log("start");
const patientName = document.querySelector("#patient-name");
const patientPhone = document.querySelector("#patient-phone");
const patientEmail = document.querySelector("#patient-email");
let patientgender = document.querySelector("#patient-gender");
const print = document.querySelector(".print_print");

const patientResidence = document.querySelector("#patient-address");
const patientAge = document.querySelector("#patient-age");
const list = document.querySelector("#list");
const total = document.querySelector("#total");
const date = document.querySelector("#date");

patientName.textContent = data.FULL_NAME;
patientResidence.textContent = data.uniqueId;
patientgender.textContent = "Male";
patientPhone.textContent = data.PHONE;
patientEmail.textContent = data.EMAIL;
patientAge.textContent = data.AGE;
date.textContent = data.timeStamp;
total.textContent = `Rs. ${data.PRICE}`;

const test = data.test;
test.forEach((trace) => {
  let getItem = document.createElement("li");
  let getSerNo = document.createElement("span");
  let getRemText = document.createElement("span");
  getSerNo.classList.add("left-serial-no");
  getRemText.classList.add("addItem");
  getItem.classList.add("recieve-list-item");
  getRemText.textContent = trace.LABEL;
  getSerNo.textContent = test.lastIndexOf(trace) + 1;
  getItem.append(getSerNo, getRemText);
  list.append(getItem);
});

print.addEventListener("click", () => {
  window.print();
});
