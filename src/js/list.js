console.log("stacrt");
const list = document.querySelector("#list");

const remList = document.querySelector("#list-send");
let count = 0;
let array = [];
let sum = 0;

const removeUl = document.querySelector("#list-send");
const total = document.querySelector(".total");

list.addEventListener("click", (e) => {
  count++;
  let remItem = document.createElement("li");
  const serNo = document.createElement("span");
  const remText = document.createElement("span");
  const remove = document.createElement("button");
  const price = document.createElement("span");
  price.textContent = parseInt(Math.random() * 500);
  price.classList.add(".price");
  serNo.classList.add(".serial-no");
  serNo.textContent = `${count}. `;
  remItem.append(serNo, remText, price, remove);

  array.push(parseFloat(price.textContent));
  if (e.target.className === "add") {
    const item = e.target.previousElementSibling.textContent;
    remText.textContent = item;
    remove.textContent = "Remove";
    remove.classList.add("remove");
    remItem.classList.add("item-send");

    array.forEach((p) => {
      sum += p;
    });
    array.pop();

    total.textContent = sum;
    remList.append(remItem);
    console.log(remItem);
  }
});

removeUl.addEventListener("click", (s) => {
  count--;
  if (s.target.className === "remove") {
    const remL = s.target.parentElement;
    const serial = remL.children;
    const price = remL.children[2].textContent;
    console.log(price);
    total.textContent -= price;

    remL.style.display = "none";
  }
});
