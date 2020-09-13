const URL = "https://sehat.hyderdevelops.ml";
console.log("start");
const testId = document.querySelector("#unique_id");
const reportSearch = document.querySelector("#report_search");
const reportInput = document.querySelector(".report_input");
const reportContainer = document.querySelector(".report_container");

const patientName = document.querySelector("#patient-name-report");
const patientPhone = document.querySelector("#patient-phone-report");
const patientEmail = document.querySelector("#patient-email-report");
const patientgender = document.querySelector("#patient-gender-report");
const patientResidence = document.querySelector("#patient-address-report");
const patientAge = document.querySelector("#patient-age-report");
const reportSubmitBtn = document.querySelector("#report-submit-btn");
let data = {};
let testHeadingArr = [];
const regTest = /^\d{6}$/;
reportSearch.addEventListener("click", async () => {
  if (!regTest.test(testId.value.trim())) {
    testId.style.border = "2px solid #ed6663";
    console.log("here");
    return false;
  } else {
    testId.style.border = "2px solid rgb(34, 79, 109)";
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

    console.log(response.status);
    let patient = await response.text();
    patient = JSON.parse(patient);
    console.log(patient);
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
      // 806875668
      unitsT.textContent = "Unit";
      minRangeT.textContent = `Min`;
      maxRangeT.textContent = `Max`;

      const rGL = document.createElement("ul");
      testHeading.textContent = test.LABEL;
      testHeadingArr.push(testHeading.textContent);

      rGL.classList.add("report-generation-list");
      const reportValue = document.createElement("input");
      reportValue.setAttribute("test-label", testHeading.textContent);
      reportValue.setAttribute("id", test.LABEL);
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
    return true;
  }
});

const reportPrint = document.querySelector(".button-report-print");
reportSubmitBtn.addEventListener("click", async () => {
  data.STATUS = "UPDATED";

  let c = document.querySelectorAll(".form_report");
  console.log(c);
  let temp_id = [];
  c.forEach((node) => {
    let id = node.getAttribute("id");
    temp_id.push(id);
  });
  console.log(temp_id);
  let temp_inp = [];
  temp_id.forEach((key) => {
    key = document.querySelector(`#${key}`);
  });

  console.log(temp_inp);

  let temp_data = {};
  c.forEach((node) => {
    let label = node.getAttribute("test-label");
    temp_data[label] = node.value;
  });

  console.log(temp_data);

  data.test.forEach((test) => {
    test.RESULT = temp_data[test.LABEL];
  });

  console.log(JSON.stringify(data));

  let final_data = {};

  for (key in data) {
    if (key !== "_id") {
      final_data[key] = data[key];
    }
  }

  console.log(final_data);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(final_data),
  };

  const response = await fetch(
    `https://sehat.hyderdevelops.ml/tests/update`,
    options
  );

  if (response.status === 200) {
    reportSubmitBtn.style.transform = "scale(0)";
    reportPrint.style.opacity = "1";
    reportPrint.style.visibility = "visible";
    reportPrint.style.transform = "translateY(-3rem)";
  }
});

reportPrint.addEventListener("click", () => {
  window.print();
});
