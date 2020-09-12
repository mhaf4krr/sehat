// Adding Tests
const upgardeAddBtn = document.querySelector("#upgrade_add");
const CATEGORY = document.querySelector("#add_category");
const LABEL = document.querySelector("#add-test-name");
const PRICE = document.querySelector("price");
const min = document.querySelector("#min");
const max = document.querySelector("#max");
const UNIT = document.querySelector("#units");
const DESCRIPTION = document.querySelector("#add_Description");
const upgradeAddSubmit = document.querySelector("upgrade_submit");

const addContainer = document.querySelector(".upgrade_add-container");
const retrieveContainer = document.querySelector(".upgrade_retrieve-container");

upgardeAddBtn.addEventListener("click", () => {
  addContainer.style.opacity = 1;
  addContainer.style.visibility = "visible";
  retrieveContainer.style.opacity = 0;
  retrieveContainer.style.visibility = "hidden";
});

upgradeAddSubmit.addEventListener('click',()=>{
    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };
    
      const response = await fetch(
        `${URL}/tests/getOne?id=${testId.value}`,
        options
      );
})
