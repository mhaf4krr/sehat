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

  // if (response.status === 200) {
  //   console.log(data);
  // } else {
  //   window.location = "../public/faluire.html";
  // }
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

const drop = document.querySelector(".flex-end");
const notificationArea = document.querySelector(".notification-area");
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
