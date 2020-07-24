const list = document.querySelector("#list");
const remList = document.querySelector("#list-send");
const removeUl = document.querySelector(".list-send");
const total = document.querySelector(".total");
const money = document.createElement("span");
const next = document.querySelector(".print_next");
console.log(next);
money.classList.add("total-value");
let sum = 0;

let array = [];
let priceArray = [];
let testArray = [];
let serverArray = [];
const { FULL_NAME, PHONE, EMAIL, REGION, AGE } = data;
let timeStamp = new Date();
timeStamp = `${timeStamp.getDate()}-${
  timeStamp.getMonth() + 1
}-${timeStamp.getFullYear()}`;
console.log(timeStamp);
let mainObj = {
  FULL_NAME,
  PHONE,
  EMAIL,
  REGION,
  AGE,
  test: [],
  timeStamp: timeStamp,
};
console.log(mainObj);
const patientName = document.querySelector("#patient-name");
const patientPhone = document.querySelector("#patient-phone");
const patientEmail = document.querySelector("#patient-email");
const patientgender = document.querySelector("#patient-gender");
const patientResidence = document.querySelector("#patient-address");
const patientAge = document.querySelector("#patient-age");
// serverArray.push(data);
// console.log(serverArray);
patientName.textContent = data.FULL_NAME;
patientPhone.textContent = data.PHONE;
patientEmail.textContent = data.EMAIL;
patientgender.textContent = "Male";
patientResidence.textContent = data.REGION;
patientAge.textContent = data.AGE;

list.addEventListener("click", (e) => {
  let obj = {};
  let remItem = document.createElement("li");
  let serNo = document.createElement("span");
  const remText = document.createElement("span");
  const remove = document.createElement("button");
  const price = document.createElement("span");
  price.textContent = parseInt(Math.random() * 500);
  serNo.classList.add("serial-no");
  remItem.append(serNo, remText, price, remove);

  if (e.target.className === "btn-add") {
    const item = e.target.previousElementSibling;
    const itemContent = item.textContent;
    const itemId = item.previousElementSibling.textContent;
    obj["LABEL"] = itemContent;
    obj["CID"] = itemId;
    testArray.push(obj);

    mainObj["test"].push(obj);
    console.log(testArray);
    console.log(serverArray);
    console.log(mainObj);

    remText.textContent = itemContent;
    remove.textContent = "Remove";
    remove.classList.add("btn-remove");
    remItem.classList.add("item-send");

    priceArray.push(parseInt(price.textContent));

    array.push(remItem);

    priceArray.forEach((p) => {
      sum += p;
    });
    priceArray.pop();
    money.textContent = sum;

    array.forEach((trace) => {
      serNo.textContent = array.lastIndexOf(trace) + 1;
    });
    removeUl.append(remItem);
  }
  console.log(priceArray);
});
total.append(money);
console.log(priceArray);
removeUl.addEventListener("click", (s) => {
  sum = 0;
  if (s.target.className === "btn-remove") {
    let remL = s.target.parentElement;
    const price = remL.children[2].textContent;

    money.textContent -= price;
    while (removeUl.firstChild) {
      removeUl.removeChild(removeUl.firstChild);
    }

    let index = array.indexOf(remL);
    array.splice(index, 1);
    testArray.splice(index, 1);
    mainObj["test"].splice(index, 1);
    console.log(mainObj);
    console.log(testArray);
    array.forEach((trace) => {
      let serial = trace.firstChild;
      serial.textContent = array.indexOf(trace) + 1;
      removeUl.append(trace);
    });
  }
});

next.addEventListener("click", async () => {
  console.log("here");
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mainObj),
  };
  console.log(mainObj);
  const response = await fetch(`${URLApi}/tests/add`, options);
  const uniqueId = await response.text();
  console.log(uniqueId);
  mainObj.uniqueId = uniqueId;
  mainObj.price = money.textContent;
  console.log(mainObj);

  if (response.status === 200) {
    mainObj = JSON.stringify(mainObj);
    let path = `../public/print.html?paramData=${mainObj}`;
    window.location.assign(path);
  }
});
