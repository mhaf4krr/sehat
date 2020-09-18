# **Lab Web-App**

This Component of the overall project is built using traditional **HTML** _-for Mark-up_, **Sass** _ (A Css Preprocessor)-for styling_ and **Vanilla JavaScript**_- for web-page interactivity_. and corresponds to the Laboratory aspect.

- This software is projected towards the low-budget Lab. <br>
- This interface is the source of information to the User-Application.<br>

---

The Interface is built considering the following aspects:

### **Efficient Patient Record Maintenance:**

Rather than maintaining a local database for the patient records- hectic and time-consuming this portion provides: -

1. Easy aquiuring of the Patients Information that's regular with the lab.
2. Addtion of new Patients to the Lab by entering the patient details and uploading it to the DataBase.

### **Crystal Test related Details:**

1. Instead of maintaining the test details manually and cutting and pasting them to form a report- The Lab can ingest the data about a particular test with respect to the equipent associated; and retreive it at the time of the Report Generation.
1. The Lab can also on expanding their worth on diffrent testing equipments simple can update the details about the new equipment.

---

**The overall work-flow of the Lab's Web-App revolves around the above briefly explained aspects**

## **Work-Flow**:

## **Lab Authentication**:

The work-flow starts by Authenticating the Lab by the Lab's username and password opening the gateway to their Dashboard.

GIF

- **Dashboard**: The Dashboard is developed to have the Lab Detiails along with the following sub components:

- Patient Details
- Reports
- Tests

### **Patient Details:**

This subcomponents consists the following section:

1. Patient Existance:

   This subcomponent takes care of the patients assocaited with the lab. Patients are searched on the bases of the **phone number** and

- if the patient exits- their Name and all the details and retrieved and displayed just on the click of a button.

GIF

- else the text-area shows **user not found!**. Then to add the user a form appears which adds the user to the database or can be thought of _linking that patient premanantly with the lab_.

GIF

2. Tests for the Patient:

- After linking the patient we move on to the section where numerous tests that the patient desires to do are linked with them; just by searching the **category** which consists the list of tests.

Then according to the patients choice;
**Complete:-**

- if they want all the tests to be done under this category; **complete button** is used and all the tests under the category along with their prices are linked to the patients profie created in the above section. GIF

  **Partial:-**

- else if they want only some of the tests to be done under the serached category; **partial button** can be used where only specific tests can be added or removed to/from the patients profile. GIF

3. Printing and Unique-Id:

- After completion of the above process the Lab is redirected to the _receipt printing_ section, where a **unique-Id** is generated to represent the tests that the patient has opted for, implying that this id is uniquely indetifying the patient and all the test he's acquired for at that instance . This Id is genrated to eradicate the privacy concerns that rise while testing is done; the person doing the test is unknown of the patient's detail because this unique id is wrapped around the testing specimen.
  GIF

### **Report Generation:**

Through the Unique-id generated in the above section; Patients are searched on the basis of the unique-id and the patient details and all the linked tests are fetched from the database and displayed; here the Lab correspondant on test resut arrival can input the results into the interface and print the report for the patient.
GIF

### **Test Addition/ Upgradation:**

- The Lab can add the **tests- _with all the details_** on the basis of the exisitng equipment to start with or the newer equipments that they have upgraded for.
  GIF
- The Lab can also retrive the Tests to keep track of the details.
  GIF

## Regular Expressions:

All the inputs existant in the Lab's webapp are validated on the front-end to ensure that no inaccurate data is injected into or queried for in the database. To accomplish that **Regular Expressions**; patterns used to match character combinations in strings are used.

- for-example to validate the **phone number** we use the follwing syntax:

```JavaScript
const regPhone = /^[6-9]\d{9}$/; //{PHONE NUMBER VALIDATION}
search.addEventListener("click", async () => {
  console.log(phoneIp.value);
  if (!regPhone.test(phoneIp.value)) {
    phoneIp.style.border = "2px solid red";
    return false;
  }
  else{
      return true;
  }
})
```

We define a regular expression here _regPhone_ and **test** the input against it.

- if false phone number's not searched and border is turned red for indication (UX).
- else phone number's searched.

## **Technologies Used**

![img-html](/src/assets/html.png "html")

![img-css](/src/assets/css.png "Css")

![img-sass](/src/assets/sass.png "sass")

![img-JavaScript](/src/assets/javascript.png "JavaScript")
