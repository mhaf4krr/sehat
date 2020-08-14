// tsting.js
const URLApi = "https://sehat.hyderdevelops.ml";
const testIp = document.querySelector("#test-ip");
// const next = document.querySelector(".print_next");
// console.log(next);

const search = document.querySelector("#test-search-icon");
const listP = document.querySelector("#list");
const listC = document.querySelector("#list-complete");
const listSend = document.querySelector(".list-send");

const testConfirmation = document.querySelector(".test-confirmation");

const completeBtn = document.querySelector(".complete");
const partialBtn = document.querySelector(".partial");

const recieveSection = document.querySelector(".recieve");
const addBtn = document.querySelectorAll(".btn-add");
const item = document.querySelectorAll("#addItem");
console.log(item);

let completePriceArray = [];
let completeSum = 0;
// let array = [];
// console.log(removeUl);
let test = [];
search.addEventListener("click", async () => {
  // testIp.style.textTransform = "capitalize";
  if (testIp.value.trim() === "") {
    testIp.style.border = "2px solid red";
    // } else if (testIp.value.trim() === "Biotechnology") {
    //   setTimeout(() => {
    //     testConfirmation.style.opacity = 1;
    //     testConfirmation.style.visibility = "visible";

    //     testConfirmation.style.transition = "all .3s";
    //     testIp.style.border = "2px solid #224f6d";
    //   }, 1000);
  } else {
    testIp.style.border = "2px solid red";
  }
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  // BIOCHEMISTRY
  try {
    const response = await fetch(
      `${URLApi}/infoStore/query?title=BIOCHEMISTRY`,
      options
    );
    test = await response.json();
    testConfirmation.style.opacity = 1;
    testConfirmation.style.visibility = "visible";
    testConfirmation.style.transition = "all .3s";
    testIp.style.border = "2px solid #224f6d";
  } catch (err) {
    console.log("err");
  }
  console.log(test);
  test.forEach((t) => {
    console.log(t);
  });
});
let leftArray = [];
completeBtn.addEventListener("click", () => {
  //   test.forEach((t) => {
  //     let getItem = document.createElement("li");
  //     let getSerNo = document.createElement("span");
  //     let getRemText = document.createElement("span");
  //     const completeMoney = document.createElement("span");
  //     getItem.classList.add("recieve-list-item");
  //     getSerNo.classList.add("left-serial-no");
  //     getRemText.classList.add("addItem");
  //     let getId = document.createElement("span");
  //     getId.classList.add("cId");
  //     getId.textContent = t.CID;

  //     getItem.append(getSerNo, getId, getRemText);
  //     getSerNo.textContent = test.lastIndexOf(t) + 1;
  //     getRemText.textContent = t.LABEL;
  //     listC.append(getItem);
  //     const completePrice = document.createElement("span");
  //     completePrice.textContent = parseInt(Math.random() * 500);
  //     completePriceArray.push(parseInt(completePrice.textContent));

  //     // array.push(remItem);

  //     completePriceArray.forEach((trace) => {
  //       completeMoney.textContent = trace;
  //     });
  //     completePriceArray.forEach((p) => {
  //       completeSum += p;
  //     });
  //     completePriceArray.pop();
  //     total.textContent = completeSum;
  //     listP.style.display = "none";
  //     console.log(completePriceArray);
  //     setTimeout(() => {
  //       getItem.append(completeMoney);
  //       removeUl.append(getItem);
  //     }, 1000);
  //   });
  //   // printNext.style.opacity = 1;
  //   // printNext.style.visibility = "visible";
  //   // printNext.style.transition = "all .3s";
  //   // recieveSection.style.display = "inline-block";
  //   // recieveSection.style.transition = "all .4s";
  //   // addBtn.forEach((e) => {
  //   //   e.style.backgroundColor = "#b6eb7a";
  //   // });
  console.log(array[0].children);
});
let partialCount = 0;
partialBtn.addEventListener("click", () => {
  console.log(partialCount);
  if (partialCount > 1) {
    partialBtn.disabled = true;
  }
  // test.forEach((trace) => {
  //   console.log(trace);
  //   leftArray.push(trace);
  //   console.log(leftArray);
  // });
  // console.log(leftArray);

  // test.forEach((trace) => {
  //   let testName = trace.LABEL;
  //   // console.log(testName.textContent);

  //     let testTestName = c.LABEL;
  //     // console.log(testTestName);
  //     if (testName === testTestName) {
  //       partailBtn.disabled = false;
  //     }
  //   });
  // });
  else {
    test.forEach((t) => {
      let getItem = document.createElement("li");
      let getSerNo = document.createElement("span");
      let getRemText = document.createElement("span");
      const add = document.createElement("button");
      getItem.classList.add("recieve-list-item");
      getSerNo.classList.add("left-serial-no");
      getRemText.classList.add("addItem");

      let getId = document.createElement("span");
      getId.classList.add("cId");
      getId.textContent = t.CID;

      let minRange = document.createElement("span");
      minRange.classList.add("cId");
      minRange.textContent = t.RANGE.min;
      console.log(minRange);
      let maxRange = document.createElement("span");
      minRange.classList.add("cId");
      maxRange.textContent = t.RANGE.max;

      console.log(t.RANGE.min);

      add.classList.add("btn-add");
      getItem.append(getSerNo, maxRange, minRange, getId, getRemText, add);
      getSerNo.textContent = test.lastIndexOf(t) + 1;
      getRemText.textContent = t.LABEL;
      add.textContent = "ADD";
      console.log(getItem);
      listP.style.display = "";
      listP.append(getItem);
      listC.style.display = "none";
    });
    // next.style.opacity = 1;
    // next.style.visibility = "visible";
    // next.style.transition = "all .3s";
    recieveSection.style.display = "inline-block";
    recieveSection.style.transition = "all .4s";
    addBtn.forEach((e) => {
      e.style.backgroundColor = "#f3c623";
    });
  }
});

// list.js
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
  TIMESTAMP: timeStamp,
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
    console.log(e.target.parentElement);

    const item = e.target.previousElementSibling;
    item.classList.add("k");
    console.log(item);
    const itemContent = item.textContent;
    const id = item.previousElementSibling;
    const itemId = id.textContent;
    console.log(itemId);
    const min = id.previousElementSibling;
    const minRange = min.textContent;
    const max = min.previousElementSibling;
    const maxRange = max.textContent;
    console.log(min);
    // const maxRange = minRange.previousElementSibling.textContent;

    obj["LABEL"] = itemContent;
    obj["CID"] = itemId;
    obj["RESULT"] = null;
    obj["RANGE"] = {
      min: minRange,
      max: maxRange,
    };
    testArray.push(obj);

    mainObj["test"].push(obj);

    console.log(testArray);
    // console.log(serverArray);
    console.log(mainObj);

    remText.textContent = itemContent;
    remove.textContent = "Remove";
    remove.classList.add("btn-remove");

    priceArray.push(parseInt(price.textContent));

    array.push(remItem);

    priceArray.forEach((p) => {
      sum += p;
    });
    priceArray.pop();
    money.textContent = sum;

    array.forEach((trace) => {
      serNo.textContent = array.lastIndexOf(trace) + 1;
      removeUl.append(trace);
    });
  }
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
    // console.log(mainObj);
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
