const URL = "https://sehat.hyderdevelops.ml";

const search = document.querySelector("#search");

const errorResult = document.querySelector(".result_error");
const create = document.querySelector("#create");
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
const displayContainer = document.querySelector(".display_details");
const label = "object";

let data = {};

next.addEventListener("click", async () => {
  window.location = "../public/test.html";
});

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

search.addEventListener("click", async () => {
  if (phoneIp.value.trim() === "") {
    phoneIp.style.border = "2px solid red";
    return false;
  }
  try {
    const response = await fetch(
      `${URL}/users/getUserByPhone?phone=${phoneIp.value}`,
      options
    );
    const text = await response.text();
    data = JSON.parse(text);
    result.textContent = data.FULL_NAME;
  } catch (err) {
    resultName.style.display = "none";
    create.style.display = "block";
    errorResult.style.display = "block";
    apply.style.display = "none";
    err.style.transition = "all .3s";
  }
});
apply.addEventListener("click", () => {
  user.textContent = data.FULL_NAME;
  age.textContent = data.AGE;
  phone.textContent = data.PHONE;
  email.textContent = data.EMAIL;
  residence.textContent = data.REGION;
});
// 9652145897

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

create.addEventListener("click", async () => {
  inputContainer.style.display = "block";

  displayContainer.style.display = "none";

  const FULL_NAME = document.querySelector("#patient-name").value;
  const EMAIL = document.querySelector("#patient-email").value;
  const REGION = document.querySelector("#patient-address").value;
  const HEIGHT = document.querySelector("#patient-height").value;
  const WEIGHT = document.querySelector("#patient-weight").value;
  const KNOWN_ILLNESS = [`Diabetes`];
  const PHONE = document.querySelector("#patient-phone").value;

  var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

  // Age Calculation
  const userDate = new Date(dateField.value).getFullYear();
  const currDate = new Date().getFullYear();
  const AGE = currDate - userDate;

  if (!dateformat.test(dateField.value)) {
    dateField.style.borderBottom = `3px solid red`;
    return false;
  }
  // Fetch
  const data = {
    FULL_NAME,
    EMAIL,
    REGION,
    AGE,
    HEIGHT,
    WEIGHT,
    KNOWN_ILLNESS,
    PHONE,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(`${url}/users/register`, options);
  const status = response.status;
  console.log(status);
});
