const list = document.querySelector("#list");
const remList = document.querySelector("#list-send");
const removeUl = document.querySelector(".list-send");
const total = document.querySelector(".total");
const money = document.createElement("span");
let sum = 0;

let array = [];
let priceArray = [];

list.addEventListener("click", (e) => {
  let remItem = document.createElement("li");
  let serNo = document.createElement("span");
  const remText = document.createElement("span");
  const remove = document.createElement("button");
  const price = document.createElement("span");
  price.textContent = parseInt(Math.random() * 500);
  serNo.classList.add("serial-no");
  remItem.append(serNo, remText, price, remove);

  if (e.target.className === "btn-add") {
    const item = e.target.previousElementSibling.textContent;
    remText.textContent = item;
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
});
total.append(money);
removeUl.addEventListener("click", (s) => {
  if (s.target.className === "btn-remove") {
    let remL = s.target.parentElement;
    const price = remL.children[2].textContent;

    money.textContent -= price;
    while (removeUl.firstChild) {
      removeUl.removeChild(removeUl.firstChild);
    }
    let index = array.indexOf(remL);
    array.splice(index, 1);
    array.forEach((trace) => {
      let serial = trace.firstChild;
      serial.textContent = array.indexOf(trace) + 1;
      removeUl.append(trace);
    });
  }
});
