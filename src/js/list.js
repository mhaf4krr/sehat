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
    // test.push(data);
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
      add.classList.add("btn-add");
      getItem.append(getSerNo, getId, getRemText, add);
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
