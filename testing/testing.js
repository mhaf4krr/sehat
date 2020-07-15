const list = document.querySelector("#list");
const remList = document.querySelector("#list-send");
// console.log(remList);
let array = [];

// let count = 0;
// let sum = 0;

const removeUl = document.querySelector(".list-send");
console.log(removeUl);
const total = document.querySelector(".total");
console.log(list);

list.addEventListener("click", (e) => {
  console.log("c");
  //   count++;
  let remItem = document.createElement("li");

  let serNo = document.createElement("span");
  const remText = document.createElement("span");
  const remove = document.createElement("button");
  const price = document.createElement("span");
  price.textContent = parseInt(Math.random() * 500);

  //   price.classList.add(".price");
  //   serNo.classList.add(".serial-no");
  //   serNo.textContent = `${count}. `;
  remItem.append(serNo, remText, price, remove);
  // console.log(remItem);

  //   array.push(parseFloat(price.textContent));
  if (e.target.className === "add") {
    const item = e.target.previousElementSibling.textContent;
    remText.textContent = item;
    remove.textContent = "Remove";
    remove.classList.add("remove");
    remItem.classList.add("item-send");
    // array.forEach((p) => {
    //   sum += p;
    // });
    array.push(remItem);
    // console.log(array);
    array.forEach((trace) => {
      serNo.textContent = array.lastIndexOf(trace) + 1;
      // console.log(serNo);
    });
    removeUl.append(remItem);
    // array.pop();

    // total.textContent = sum;
    // remList.append(remItem);
  }

  //   console.log(serNo.textContent);
});
removeUl.addEventListener("click", (s) => {
  if (s.target.className === "remove") {
    let remL = s.target.parentElement;

    // array.pop(remL);

    console.log(remL);
    while (removeUl.firstChild) {
      removeUl.removeChild(removeUl.firstChild);
    }

    array.pop(remL);
    array.forEach((trace) => {
      // console.log(array);
      // console.log(removeUl);
      // serNo.textContent = array.lastIndexOf(trace) + 1;
      // console.log(serNo);
      removeUl.append(trace);
      console.log(removeUl);
    });
  }
});
