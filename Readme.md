# **SEHAT** Medical Data Management System

## Introduction

SEHAT is a digital software solution that tries to digitize the existing system and aims at incorporating convinience towards the end users. The project is an
amalgamation of two different aspects. The first one being from the User's end.
This system has tried to enhance the user's experience by providing the following main features:

- Allowing a user to book appointment for collection.

- Providing the entire history of reports that have been processed over time.

- Visual representation of user's medical data for easier interpretations.

- Allowing user to share all his medical data with a trusted contact for a particular duration of time.

The second aspect of this project is focused towards laboratories. This eliminated the follwing problems

- Dependency on a general purpose software (MS ACCESS).

This provided the following features:

- Ease of patient management by eliminating redundant data ingestion.
- Modern and Optimized UI for better productivity.
- Providing privacy to the sensitive user information.
- Continous upgradation and integeration.

---

## Components

The entire system is consisting of 3 main components.

1. Laboratory Frontend
1. Backend
1. User Application

---

# **Lab Web-App**

This Component of the overall project is built using traditional **HTML** _-for Mark-up_, **Sass** _(A Css Preprocessor)-for styling_ and **Vanilla JavaScript**_- for web-page interactivity_. and corresponds to the Laboratory aspect.

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

![1](/images/1.gif "authentication")

- **Dashboard**: The Dashboard is developed to have the Lab Detiails along with the following sub components:

- Patient Details
- Reports
- Tests

### **Patient Details:**

This subcomponents consists the following section:

1. Patient Existence:

   This subcomponent takes care of the patients assocaited with the lab. Patients are searched on the bases of the **phone number** and

- if the patient exits- their Name and all the details and retrieved and displayed just on the click of a button.

![2](/images/2.gif "existing-patient")

- else the text-area shows **user not found!**. Then to add the user a form appears which adds the user to the database or can be thought of _linking that patient premanantly with the lab_.

![3](/images/3.gif "new-patient")

2. Tests for the Patient:

- After linking the patient we move on to the section where numerous tests that the patient desires to do are linked with them; just by searching the **category** which consists the list of tests.

Then according to the patients choice;
**Complete:-**

- if they want all the tests to be done under this category; **complete button** is used and all the tests under the category along with their prices are linked to the patients profie created in the above section.
  ![4](/images/4.gif "complete-btn")

  **Partial:-**

- else if they want only some of the tests to be done under the serached category; **partial button** can be used where only specific tests can be added or removed to/from the patients profile.
  ![5](/images/5.gif "partial-btn")

3. Printing and Unique-Id:

- After completion of the above process the Lab is redirected to the _receipt printing_ section, where a **unique-Id** is generated to represent the tests that the patient has opted for, implying that this id is uniquely indetifying the patient and all the test he's acquired for at that instance. This Id is genrated to eradicate the privacy concerns that rise while testing is done; the person doing the test is unknown of the patient's detail because this unique id is wrapped around the testing specimen.
  ![6](/images/6.gif "printing")

### **Report Generation:**

Through the Unique-id generated in the above section; Patients are searched on the basis of the unique-id and the patient details and all the linked tests are fetched from the database and displayed; here the Lab correspondant on test resut arrival can input the results into the interface and print the report for the patient.
![7](/images/7.gif "report-generation") ![8](/images/8.gif "inputing values")

### **Test Addition/ Upgradation:**

- The Lab can add the **tests- _with all the details_** on the basis of the exisitng equipment to start with or the newer equipments that they have upgraded for.
- The Lab can also retrive the Tests to keep track of the details.

  ![9](/images/9.gif "test-add/retrieve")

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

  **Same is done for the e-mail validation and date validation**

## Notifications:-

The patient through the user-application can send notifications to the lab for the collection of the tests. Notifications are accessible to the Lab in the notifications panel.

## Responsive:

The web-application is fully responsive to the breakpoint 768px(tablet) and mostly upto 360px(phone).
For Responsiveness the follwing sass library [include-media](https://github.com/eduardoboucas/include-media) is being used and media queries are implemented using **sass**.

## **Technologies Used**

![img-html](/images/html.png "html")
Hypertext Markup Language, is a markup language used to define the structure of the webpage. This structure is shaped up by the browser known as DOM (Document Objet Model) where the elements defined in HTML; refered to as objects are _styled in css and provided intereativity with JavaScript._

![img-css](/images/css.png "Css")
Cascading Style Sheets are used to style the elements defined in the HTML. The elements are addressed through class-name or id and diffrent properties are associated with them in _css file_ to provide a better UI.

![img-sass](/images/sass.png "sass")
Sass : A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax . There are many CSS preprocessors to choose from, however most CSS preprocessors will add some features that don't exist in pure CSS, such as mixin, nesting selector, inheritance selector, and so on. These features make the CSS structure more readable and easier to maintain.

![img-JavaScript](/images/javascript.png "JavaScript")
JavaScript ( JS ) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions . While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js . JavaScript is a prototype-based , multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

---

# Backend

The project backend is powered by **NodeJS** (a JavaScript Runtime Environment). It uses a **MongoDB** instance hosted over an Atlas Instance. Currently the project is hosted on a private server. The codebase for backend has been developed considering seperation of concerns. The entire codebase has been divided into seperate modules.

### Modules and APIs

There are 9 main modules which work in synchronization to provide different APIs. These APIs are consumed by both the Laboratory Frontend and the User's Mobile Web Application.

1. **Test Module** : this module is reponsible in dealing with all the user tests that are initiated by the laboratory. Each test is alloted a unique identification address which allows for its updation and tracking. It involves the following functions.

   - _add_: allows the laboratory to add a test.

   - _update_: allows laboratory to update the result values of a particular test, once values are available.

   - _getOne_: fetch a particular test from database based on the unique id.

   - _getAll_ : fetch all the tests that are linked to a particular user.

1. **User Module** : this module deals with user related functionality. This module is also used for user authentication through One Time Passwords. This module disposes following functions via APIs.

   - _register_ : allows a laboratory to register an user.

   - _login_ : authenticates users based on Phone Number and Password.

   - _generateOTP_ : generates an OTP and mails to the user registered email address.

   - _verifyOTP_ : verifies the OTP.

1. **Lab Module** : this module powers up the entire laboratory frontend. Using this Module all the lab related operations are performed.

   - _register_ : allows a new laboratory to register.

   - _login_ : provides a login for existing labs.

   - _fetchLab_ : grabs all the information related to a particular lab.

   - _fetchAll_ : fetchs all the laboratories related information.

1. **Information Store** : this module is responsible for adding and retreiving information related to the test templates.

   - _add_ : adds a new test template to the store.
   - _query_ : gets a test template based on Label.
   - _fetchAll_ : grabs all the test templates.

1. **Appointment Module**: this module incorporates all the appointments for the test collection booked online via the user's web application. It also notifies the corresponding lab about the booking. Following APIs bundle together this module.

   - _bookNew_ : allows to book a new test by the user.

   - _check_ : retreives list of all the bookings for the laboratory, based on the selected laboratory during the booking by the user.

1. **Share Module** : establishes the functionality of sharing the user reports with a trusted person. It results in generation of a link that is delivered to the contact person by the email, sent through the server. It also contains the logic which denies the access to the link, once the access duration has been over. The following APIs result in this module.

   - _newShare_ : generates and dispatches a new sharable link.

   - _joinShare_ : allows to access the medical records. If used within the specified time, will allow the access otherwise will result into a failed state.

1. **Chat Module** : this module contains the code for generating various visualizations that are consumed by user web application for mobile devices.

1. **Database Module** : contains the code for establishing and dealing with MongoDB instance. It doesnot have an exposed API but however provides some reusable promise based functions which are utilized in all the other modules. Some of the main functions which are exported from this module are

   - _queryDatabase_
   - _insertOneIntoDatabase_
   - _insertManyIntoDatabase_
   - _updateDatabase_

   all these functions have been wrapped into Promises.

   ```javascript
   async function queryDatabase(collection, filter) {
     return new Priomise((resolve, reject) => {
       db.collection.query(filter).then((data) => {
         resolve(data);
       });
     });
   }
   ```

1. **Email Module** : this is one of the main components of the backend system. It establishes connection with an SMTP server. It exposes a single reusable function called sendMail.

It is worth mentioning that last two modules are not exposed directly over an API for security reasons but the functions exported from them are used heavily in all other modules.

---

## Backend Stack

As already mentioned that the backed is based on NodeJS. However this part of the documentation will provide a detailed explination of the framework and libraries that are used in the above modules.

### 1.**NodeJS**

<img src="/images/node.png" width=200>
NodeJS is a Javascript run-time environment that allows for the execution of JavaScript Code in the server. It is an open-source platform that is known for scalable and real time applications. NodeJS used Google's VS Engine. It is a single threaded model.

### 2. **ExpressJS**

<img src="/images/express.png" width=200>

Express is a minial and flexible Node.js framework that provides robust features for web application development. It allows us to build APIs and use middlewares. Express is high performant with its small codebase, it delivers fast and friendly developer experience.

### 3. **NodeMailer**

<img src="/images/nodemailer.png" width=150>

NodeMailer is a module for NodeJS applications that allows to send emails easily. Nodemailer has zero dependencies. Highly Secure and supports alot of transport methods along with email attachments.

### 4. **EJS**

<img src="/images/ejs.png" width=200>

EJS stands for Embeded JavaScript. It is a templating engine that allows for generating HTML markup with JavaScript.

### 5. **Cryptr**

<img src="/images/cryptr.png" height=100>
Cryptr is a Node.js module for cryptography functions.

---

## **Databases**

There are two databases that are used. The first being the primary and second being an in-memory database. Primary database is a NoSQL database called MongoDB. MongoDB is a schema-less database.

### **MongoDB**

<img src="/images/mongo.png" width=300>

MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL
database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is
developed by MongoDB Inc.

### **nedb**

<img src="/images/nedb.jpg" width=300>

nedb is a non persistent or in memory database for JavaScript ecosystem. It has zero dependencies. The APIs provided by nedb resemble to that of MongoDB. This is mainly used in sehat for OTP Authentication system.

---

## Backend System Design

<img src="/images/server_design.png">

Node.js is using Express.js as framework. Various modules stated are attached to individual Routers. Finally all these individual Routers are integerated with standalone Express application. NodeJS is connected to MongoDB server along with SMTP server.
This application is made accessible over a public address.

The server also responds to various API requests from Laboratory Frontend as well as Mobile Web Application.

Once an API request is received by the Express application, it forwards it to the specified Router. Each Router is tied to a specific end point of the url.

### **Authentication Flow**

It is the responsibility of the server to verify and authenticate a request coming from either the
Web Application or Mobile Application. The server uses an OTP system to verify the identity of
the user. The server is sent a mobile phone number, the server retrieves the account related to
that mobile number from the database. The phone number / linked email address is sent to an OTP which is also stored in an in-memory database. The server is sent the OTP for verification,
in case the OTPs match the server will authenticate the request and the user is logged in. Upon
successful verification, the server returns a JWT token as a cookie which is stored at the front
end. This JWT token is sent with every Ajax request which is used to verify the identity of the
user making the request.

<img src="/images/otp_flow.png">

---

# User Web Application

For ensuring a private and easy access to the information that has been collected by the laboratory, a mobile based web application is provided over a public url. Using this component, a user can easily retreive all the information pertaining to that particular user only.

There are 4 main features that are provided through this application.

1. ### **Appointment Booking Feature**

   There are serveral reasons that made us to include this feature. These are the most prominent.

   - For Older people, physically coming to collection center is very hard and tedious.

   - For critical or seriously ill patients who cannot come to laboratories

   - For physically challenged people.

<center >
      <img src="/videos/appointment.gif" height=550 width=260>
</center>

2. ### **History Feature**

   Another important feature of User Web Application. It tries to enhance the user experience by providing following perks

   - Complete record of all the tests and their corresponding results.

   - RealTime data, allows users to access results as soon as they are uploaded by the laboratory.

   * No need to physically preserve the reports.

<center >
      <img src="/videos/booking.gif" align="center" height=550 width=260>
</center>

3. ### **Profiler**

   Profiler is one of the most exciting features provided by this web application. With all this data that has been accumilated over the time, it is not possible to dig into this data directly. Profiler uses visualizations powered by D3.js and ApexCharts.
   These visualizations help to interpret data quickly and easily.

      <center>
         <img src="/videos/profiler.gif" height=500 width=260>
   </center>

4. ### **Share**

   Many a times, we want to share our sensitive data securely. Share feature allows a user to share his profile with a trusted contact for a fixed duration of time. If the link is used within this time, it can be used for access, otherwise it will fail.

      <p align="center"> 
      <center>
         <img src="/videos/share.gif" height=550 width=260>
         <img src="/videos/share_verify.gif" height=550 width=260>
      </center>
      </p>

---

## Mobile Web Application Stack

1. ## **ReactJS**

<img src="/images/react.jpg" width=200>

React is a popular JavaScript Framework for building User Interfaces. It is based on Virtual DOM which allows the DOM Manipulation in most optimum manner. The most important feature of React is code reusability and component based architecture.

2. ## **Redux**

Redux is an extension to React. It is also a library used to maintain the state of an application.

3. ## **Axios**

Axios is another popular library that is used to construct API templates and then use these templates throughout the application. It allows for configuration of request headers before hand without the need of redundant repition.

4. ## **D3 and ApexCharts**

<img src="/images/d3.png" width=100>

D3 is one of the most popular libraries written for data visualizations in JavaScript. It is based on Scalable Vector Graphics to draw various figures dynamically. This application used D3 along with ApexCharts to include transitions and more easy approach towards plotting graphs.
