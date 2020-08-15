const URL = "https://sehat.hyderdevelops.ml";
console.log("start");
const testId = document.querySelector("#unique_id");
const reportSearch = document.querySelector("#report_search");
const reportInput = document.querySelector(".report_input");
const reportContainer = document.querySelector(".report_container");

const patientName = document.querySelector("#patient-name");
const patientPhone = document.querySelector("#patient-phone");
const patientEmail = document.querySelector("#patient-email");
const patientgender = document.querySelector("#patient-gender");
const patientResidence = document.querySelector("#patient-address");
const patientAge = document.querySelector("#patient-age");

let data = {};
reportSearch.addEventListener("click", async () => {
  console.log("clik");
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
  const patient = await response.json();
  data = patient;
  patientName.textContent = patient.FULL_NAME;
  patientPhone.textContent = patient.PHONE;
  patientEmail.textContent = patient.EMAIL;
  patientResidence.textContent = patient.REGION;
  patientgender.textContent = patient.GENDER;
  patientAge.textContent = patient.AGE;
  console.log(patient);
  data.test.forEach((test) => {
    const testContainer = document.createElement("div");
    testContainer.classList.add("test-Description");
    const testHeading = document.createElement("h2");
    testHeading.classList.add(".test_heading");
    console.log(testContainer);
    // const cId = document.createElement("span");
    const rGLT = document.createElement("ul");
    rGLT.classList.add("report-generation-list");
    const reportValueT = document.createElement("span");
    reportValueT.textContent = "Input-Value";
    const threshholdT = document.createElement("span");
    threshholdT.textContent = "DEFAULT";
    const minRangeT = document.createElement("li");
    const maxRangeT = document.createElement("li");
    const unitsT = document.createElement("li");
    rGLT.append(reportValueT, threshholdT, minRangeT, maxRangeT, unitsT);
    // testLabel.textContent = test.LABEL;
    // 721713
    unitsT.textContent = "Unit";
    minRangeT.textContent = `Min`;
    maxRangeT.textContent = `Max`;

    const rGL = document.createElement("ul");
    testHeading.textContent = test.LABEL;

    rGL.classList.add("report-generation-list");
    const reportValue = document.createElement("input");
    reportValue.classList.add("form_report");
    const threshhold = document.createElement("button");
    threshhold.classList.add("btn-grey");
    threshhold.textContent = "DEFAULT";
    const minRange = document.createElement("li");
    const maxRange = document.createElement("li");
    const units = document.createElement("li");
    rGL.append(reportValue, threshhold, minRange, maxRange, units);
    // testLabel.textContent = test.LABEL;
    units.textContent = "g/mL";
    minRange.textContent = `${test.RANGE.min} `;
    maxRange.textContent = `${test.RANGE.max} `;
    rGL.style.background = "white";
    rGL.style.color = "rgb(34, 79, 109)";

    // rGL.children.forEach((c) => {
    //   c.classList.add("report-generation-list_item");
    // });
    const testElaboration = document.createElement("div");
    testElaboration.classList.add("test-elaboration");
    const spanLine = document.createElement("span");
    spanLine.classList.add("font-small");
    spanLine.textContent = "Test-Description:";
    const testExplain = document.createElement("p");
    testExplain.setAttribute("id", "test-explain");
    testExplain.textContent = `   Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed
    facilis repellendus ipsam, dolor laborum ut atque tenetur illum
    provident!`;

    testElaboration.append(spanLine, testExplain);
    testContainer.append(testHeading, rGLT, rGL, testElaboration);
    reportContainer.append(testContainer);
    // reportContainer.append(testContainer);

    // cId.textContent = test.CID;
    // cId.style.display = "none";

    // checkBtn.setAttribute("id", "check-btn");
    // checkBtn.classList.add("btn-complete");
    // checkBtn.textContent = "Check";

    // reportValue.classList.add("form_input");
    // // reportValue.setAttribute("id", "");

    // testLabel.textContent = test.LABEL;

    // testContainer.append(
    //   testLabel,
    //   reportValue,
    //   cId,
    //   checkBtn,
    //   testDescription
    // );
    // reportInput.append(testContainer);
    reportValue.addEventListener("change", (e) => {
      const checker = parseFloat(e.target.value);

      if (checker > test.RANGE.max) {
        threshhold.className = "";
        threshhold.classList.add("btn-high");
        threshhold.textContent = "HIGH";
      } else if (checker >= test.RANGE.min && checker <= test.RANGE.max) {
        threshhold.className = "";
        threshhold.classList.add("btn-normal");
        threshhold.textContent = "NORMAL";
      } else if (checker < test.RANGE.min && checker > 0) {
        threshhold.className = "";
        threshhold.classList.add("btn-low");
        threshhold.textContent = "LOW";
      } else {
        threshhold.className = "";
        threshhold.classList.add("btn-grey");
        threshhold.textContent = "Invalid";
      }
    });
  });
});
