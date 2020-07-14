const search = document.querySelector("#search");
const resultName = document.querySelector("#result_name");
const apply = document.querySelector("#apply");
const age = document.querySelector(".display_age");
const phone = document.querySelector(".display_phone-no");
const email = document.querySelector(".display_email");
const residence = document.querySelector(".display_residence");
const user = document.querySelector(".display_name");
const phoneIp = document.querySelector("#phone-input");
const next = document.querySelector("#next");

next.addEventListener("click", () => {
  window.location = "./test.html";
});

search.addEventListener("click", () => {
  if (phoneIp.value.trim() === "") {
    phoneIp.style.border = "2px solid red";
    return false;
  } else {
    setTimeout(() => {
      resultName.textContent = "Abdul Mannan Malik";
    }, 1000);
  }
});
apply.addEventListener("click", () => {
  setTimeout(() => {
    user.textContent = "Abdul Manan Malik";
    age.textContent = "22";
    phone.textContent = "7006982627";
    email.textContent = "malikmanan97@gmail.com";
    residence.textContent = "341, Jawahar-Nagar";
  }, 1000);
});
