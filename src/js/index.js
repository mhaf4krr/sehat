const URLMain = "https://sehat.hyderdevelops.ml";
const add = document.querySelector("#add");
const view = document.querySelector("#view");
const owner = document.querySelector("#owner");
const labName = document.querySelector("#lab-name");
const labContact = document.querySelector("#lab-contact");
const labLocation = document.querySelector("#lab-location");

const currentYear = document.querySelector("#current-year");
let currYear = new Date().getFullYear();
currentYear.textContent = currYear;
const notificationPanel = document.querySelector(".notification-panel");
const notification = document.querySelector("#notifications");

notification.addEventListener("click", async () => {
  console.log("here");
  const labID = data.LAB_ID;
  const LABID = {
    SELECTED_LAB: labID,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(LABID),
  };

  const response = await fetch(`${URLMain}:/appointments/check`, options);
  const labD = await response.json();
  console.log(labD);

  const notificationAreaName = document.createElement("div");
  notificationAreaName.classList.add("notification-area-name");

  // Name

  const nameDiv = document.createElement("div");
  nameDiv.classList.add("name");

  const notiNameIcon = document.createElement("span");
  notiNameIcon.classList.add("material-icons", "noti-icon-style");
  notiNameIcon.textContent = "account_circle";

  const notiNameValue = document.createElement("span");
  notiNameValue.setAttribute("id", "patient-name-noti");

  const drop = document.createElement("span");
  drop.classList.add("material-icons", "noti-icon-style");
  drop.textContent = " arrow_drop_down";

  nameDiv.append(notiNameIcon, notiNameValue, drop);
  notificationAreaName.append(nameDiv);

  // notification area
  const notificationArea = document.createElement("div");
  notificationArea.classList.add("notification-area");

  // Phone

  const notiPhone = document.createElement("div");
  notiPhone.classList.add("name");
  notiPhone.setAttribute("id", "phone");

  const notiPhoneIcon = document.createElement("span");
  notiPhoneIcon.classList.add("material-icons", "noti-icon-style");
  notiPhoneIcon.textContent = "settings_cell";

  const notiPhoneValue = document.createElement("span");
  notiPhoneValue.setAttribute("id", "patient-number-noti");
  notiPhone.append(notiPhoneIcon, notiPhoneValue);

  // Mail
  const notiMail = document.createElement("div");
  notiMail.classList.add("name");
  notiMail.setAttribute("id", "mail");

  const notiMailIcon = document.createElement("span");
  notiMailIcon.classList.add("material-icons", "noti-icon-style");
  notiMailIcon.textContent = "mail";

  const notiMailValue = document.createElement("span");
  notiMailValue.setAttribute("id", "patient-mail-noti");
  notiMail.append(notiMailIcon, notiMailValue);

  // location
  const notiLocation = document.createElement("div");
  notiLocation.classList.add("name");
  notiLocation.setAttribute("id", "location");

  const notiLocationIcon = document.createElement("span");
  notiLocationIcon.classList.add("material-icons", "noti-icon-style");
  notiLocationIcon.textContent = "location_on";

  const notiLocationValue = document.createElement("span");
  notiLocationValue.setAttribute("id", "patient-location-noti");
  notiLocation.append(notiLocationIcon, notiLocationValue);

  // date
  const notiDate = document.createElement("div");
  notiDate.classList.add("name");
  notiDate.setAttribute("id", "date");

  const notiDateIcon = document.createElement("span");
  notiDateIcon.classList.add("material-icons", "noti-icon-style");
  notiDateIcon.textContent = "today";

  const notiDateValue = document.createElement("span");
  notiDateValue.setAttribute("id", "patient-date-noti");
  notiDate.append(notiDateIcon, notiDateValue);

  // Tests

  const notiTest = document.createElement("div");
  notiTest.classList.add("name");
  notiTest.setAttribute("id", "test");

  const notiTestIcon = document.createElement("span");
  notiTestIcon.classList.add("material-icons", "noti-icon-style");
  notiTestIcon.textContent = "biotech";

  const notiTestValue = document.createElement("span");
  notiTestValue.setAttribute("id", "patient-number-noti");

  const notiRightArrow = document.createElement("span");
  notiRightArrow.classList.add(
    "material-icons",
    "noti-icon-style",
    "custom-size"
  );
  notiRightArrow.textContent = "arrow_right";
  notiTest.append(notiTestIcon, notiTestValue, notiRightArrow);

  // price

  const notiPrice = document.createElement("div");
  notiPrice.classList.add("name");
  notiPrice.setAttribute("id", "price");

  const notiPriceIcon = document.createElement("span");
  notiPriceIcon.classList.add("material-icons", "noti-icon-style");
  notiPhoneIcon.textContent = "credit_card";

  const notiPriceValue = document.createElement("span");
  notiPriceValue.setAttribute("id", "patient-price-noti");
  notiPrice.append(notiPriceIcon, notiPriceValue);

  notificationArea.append(
    notiPhone,
    notiMail,
    notiLocation,
    notiDate,
    notiTest,
    notiPrice
  );
  notificationPanel.append(notificationAreaName, notificationArea);

  // if (response.status === 200) {
  //   console.log(data);
  // } else {
  //   window.location = "../public/faluire.html";
  // }
  // const top
  // drop = document.querySelector(".flex-end");
  // notificationArea = document.querySelector(".notification-area");
  drop.addEventListener("click", () => {
    if (drop.textContent === "arrow_drop_down") {
      notificationArea.style.opacity = 1;
      notificationArea.style.visibility = "visible";
      drop.textContent = "arrow_drop_up";
    } else {
      notificationArea.style.opacity = 0;
      notificationArea.style.visibility = "hidden";
      drop.textContent = "arrow_drop_down";
    }
  });

  notiRightArrow.addEventListener("click", (e) => {
    console.log("j");
    const testUl = document.createElement("ul");
    testUl.classList.add("notification-test-list");
    const backBtn = document.createElement("span");
    backBtn.classList.add("material-icons", "noti-icon-style", "custom");
    backBtn.textContent = "keyboard_backspace";
    testUl.append(backBtn);
    // testUl.classList.add("notification-area");
    const test = ["Sodium", "LFT", "Blood", "Urea"];

    test.forEach((t) => {
      const testItem = document.createElement("li");
      testItem.classList.add("name");
      testItem.textContent = t;
      console.log(t);
      testUl.append(testItem);
    });
    notificationPanel.append(testUl);

    if (notiRightArrow.textContent === "arrow_right") {
      notificationArea.style.opacity = 0;
      notificationArea.style.visibility = "hidden";
      notificationArea.style.transform = "translateX(50rem)";
      // notiRightArrow.textContent = "bla";
    }

    // console.log("here");
    backBtn.addEventListener("click", () => {
      console.log("here");
      notificationArea.style.opacity = 1;
      notificationArea.style.visibility = "visible";
      notificationArea.style.transform = "translateX(0rem)";
    });
  });
});

labName.textContent = data.LAB_NAME;
owner.textContent = data.OWNER;
labContact.textContent = data.CONTACT;
labLocation.textContent = data.LOCATION;
add.addEventListener("click", () => {
  window.location = "../public/patient.html";
});

view.addEventListener("click", () => {
  window.location = "../public/report.html";
});
