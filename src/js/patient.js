const URL = "https://sehat.hyderdevelops.ml";

const search = document.querySelector("#search");
const send = document.querySelector("#send");

const errorResult = document.querySelector(".result_error");
const create = document.querySelector(".create-btn");
const resultName = document.querySelector("#result_name");
const apply = document.querySelector("#apply");

const age = document.querySelector(".display_age");
const phone = document.querySelector(".display_phone-no");
const email = document.querySelector(".display_email");
const residence = document.querySelector(".display_residence");
const user = document.querySelector(".display_name");
const phoneIp = document.querySelector("#phone-input");

const next = document.querySelector("#next");
const inputContainer = document.querySelector(".input_details");
const displayContainer = document.querySelector(
  ".display_container_inner-container"
);
const label = "object";

let data = {};

create.addEventListener("click", async () => {
  displayContainer.style.left = "-50%";
  displayContainer.style.transition = "all .5s";

  inputContainer.style.left = "50%";

  inputContainer.style.transition = "all .5s";
});

search.addEventListener("click", async () => {
  if (phoneIp.value.trim() === "") {
    phoneIp.style.border = "2px solid red";
    return false;
  } else {
    phoneIp.style.border = "2px solid rgb(34, 79, 109)";
  }
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(
      `${URL}/users/getUserByPhone?phone=${phoneIp.value}`,
      options
    );
    const text = await response.text();

    data = JSON.parse(text);
    console.log("per");
    result.textContent = data.FULL_NAME;
    result.style.color = "rgb(34, 79, 109)";
    result.style.border = "2px solid rgb(34, 79, 109)";
    apply.style.display = "block";
    create.style.top = "100%";
    create.style.opacity = 0;
    create.style.visibility = "hidden";
    create.style.transition = "all .5s";
  } catch (err) {
    result.textContent = "! User Not Found";
    result.style.color = "red";
    result.style.border = "2px solid red";
    apply.style.display = "none";
    create.style.top = "88%";
    create.style.opacity = 1;
    create.style.visibility = "visible";
    create.style.transition = "all .5s";

    // errorResult.style.display = "block";
    console.log("here");
  }
  // 7006225524
});
apply.addEventListener("click", () => {
  displayContainer.style.left = "50%";
  displayContainer.style.transition = "all .5s";

  inputContainer.style.left = "-50%";
  inputContainer.style.transition = "all .5s";

  user.textContent = data.FULL_NAME;
  age.textContent = data.AGE;
  phone.textContent = data.PHONE;
  email.textContent = data.EMAIL;
  residence.textContent = data.REGION;
});
// 9652145897
// console.log(age);
const dateField = document.querySelector("#patient-age");

const userInput = document.querySelector(".form_input");

dateField.addEventListener("keyup", (e) => {
  if (e.which !== 8) {
    let numChars = e.target.value.length;
    if (numChars === 2 || numChars === 5) {
      let thisVal = e.target.value;
      thisVal += "/";
      e.target.value = thisVal;
    }
  }
});

send.addEventListener("click", async () => {
  const FULL_NAME = document.querySelector("#patient-name").value;
  const EMAIL = document.querySelector("#patient-email").value;
  const REGION = document.querySelector("#patient-address").value;
  const PHONE = document.querySelector("#patient-phone").value;

  var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

  // Age Calculation
  // console.log(dateField);
  const array = dateField.value.split("/");
  console.log(array);
  const userDate = parseInt(array[2]);
  const currDate = new Date().getFullYear();
  const AGE = currDate - userDate;

  if (!dateformat.test(dateField.value)) {
    dateField.style.borderBottom = `3px solid red`;
    return false;
  }
  // Fetch
  let data = {
    FULL_NAME,
    EMAIL,
    REGION,
    AGE,
    PHONE,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  console.log(data.FULL_NAME);
  const response = await fetch(`${URL}/users/register`, options);
  const status = response.status;
  if (status === 200) {
    data = JSON.stringify(data);
    let path = `../public/test.html?paramData=${data}`;
    window.location.assign(path);
  }
});

next.addEventListener("click", () => {
  let paramData = {
    FULL_NAME: user.textContent,
    PHONE: phone.textContent,
    EMAIL: email.textContent,
    REGION: residence.textContent,
    AGE: age.textContent,
  };
  paramData = JSON.stringify(paramData);
  let path = `../public/test.html?paramData=${paramData}`;
  window.location.assign(path);
});
