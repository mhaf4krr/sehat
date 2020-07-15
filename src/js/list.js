// console.log("start");
// const list = document.querySelector("#list");

// const remList = document.querySelector("#list-send");
// let count = 0;
// let array = [];
// let sum = 0;

// const removeUl = document.querySelector("#list-send");
// const total = document.querySelector(".total");
// console.log(list);

// list.addEventListener("click", (e) => {
//   console.log("c");
//   count++;
//   let remItem = document.createElement("li");
//   const serNo = document.createElement("span");
//   const remText = document.createElement("span");
//   const remove = document.createElement("button");
//   const price = document.createElement("span");
//   price.textContent = parseInt(Math.random() * 500);
//   price.classList.add(".price");
//   serNo.classList.add(".serial-no");
//   serNo.textContent = `${count}. `;
//   remItem.append(serNo, remText, price, remove);

//   array.push(parseFloat(price.textContent));
//   if (e.target.className === "add") {
//     const item = e.target.previousElementSibling.textContent;
//     remText.textContent = item;
//     remove.textContent = "Remove";
//     remove.classList.add("remove");
//     remItem.classList.add("item-send");

//     array.forEach((p) => {
//       sum += p;
//     });
//     array.pop();

//     total.textContent = sum;
//     remList.append(remItem);
//     console.log(remItem);
//   }
// });

// // removeUl.addEventListener("click", (s) => {
// //   count--;
// //   if (s.target.className === "remove") {
// //     const remL = s.target.parentElement;
// //     const serial = remL.children;
// //     const price = remL.children[2].textContent;
// //     console.log(price);
// //     total.textContent -= price;

// //     remL.style.display = "none";
// //   }
// // });
const testIp = document.querySelector("#test-ip");
console.log(testIp);
const search = document.querySelector("#test-search-icon");

const testConfirmation = document.querySelector(".test-confirmation");

const completeBtn = document.querySelector(".complete");
const partailBtn = document.querySelector(".partial");

const recieveSection = document.querySelector(".recieve");
const addBtn = document.querySelectorAll(".btn-add");

search.addEventListener("click", () => {
  // if (testIp.value.trim() === "") {
  //   testIp.style.border = "2px solid red";
  // } else if (testIp.value.trim() === "Biotechnology") {
  setTimeout(() => {
    testConfirmation.style.opacity = 1;
    testConfirmation.style.visibility = "visible";

    testConfirmation.style.transition = "all .3s";
    testIp.style.border = "2px solid #224f6d";
  }, 1000);
  // } else {
  //   testIp.style.border = "2px solid red";
  // }
});
completeBtn.addEventListener("click", () => {
  recieveSection.style.display = "inline-block";
  recieveSection.style.transition = "all .4s";
  addBtn.forEach((e) => {
    e.style.backgroundColor = "#b6eb7a";
  });
});
partailBtn.addEventListener("click", () => {
  console.log(addBtn);
  recieveSection.style.display = "inline-block";
  recieveSection.style.transition = "all .4s";
  addBtn.forEach((e) => {
    e.style.backgroundColor = "#f3c623";
  });
});
