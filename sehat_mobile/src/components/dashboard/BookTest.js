import React from "react";

export default class BookTest extends React.Component {
  state = {
    labList: null,
    totalPrice: 0,
    selected_lab: "",
    selected_tests: [],
    selected_date: "",
    selected_address: "",
    availableTests: [
      { label: "Blood Sugar Fasting", price: 60 },
      { label: "Blood Sugar Random", price: 50 },
      { label: "Thyroid", price: 100 },
      { label: "Urine", price: 70 },
      { label: "KFT", price: 300 },
      { label: "LFT", price: 120 },
    ],

    AlrightDisabled: false,
    AlrightButtonMsg: "Alright",
  };
  renderLabList = () => {
    if (!this.state.labList) {
      return <option>Fetching Data</option>;
    } else {
      return this.state.labList.map((lab) => {
        return (
          <option value={lab.LAB_ID}>
            {" "}
            {lab.LAB_NAME} | {lab.LAB_LOCATION}
          </option>
        );
      });
    }
  };

  formRef = React.createRef();
  loadingOverlay = React.createRef();

  handleInput(key, value) {
    this.setState({ [key]: value });
  }

  renderAvailableTests = () => {
    let tests = this.state.availableTests;

    return tests.map((test) => {
      return (
        <option value={test.label}>
          {test.label} |Rs. {test.price}
        </option>
      );
    });
  };

  handlePriceCalc = (testData) => {
    if (!testData) {
      return 0;
    }

    let total = 0;

    testData.forEach((selection) => {
      let test = this.state.availableTests.find(
        (test) => test.label === selection
      );

      total += test.price;
    });

    return total;
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();

    this.loadingOverlay.current.classList.toggle("hidden");
    this.setState({ AlrightDisabled: true });

    let appointmentData = {
      NAME: this.props.user.FULL_NAME,
      PHONE: this.props.user.PHONE,
      SELECTED_LAB: this.state.selected_lab,
      SELECTED_DATE: this.state.selected_date,
      SELECTED_TESTS: this.state.selected_tests,
      SELECTED_ADDRESS: this.state.selected_address,
      EMAIL: this.props.user.EMAIL,
      TOTAL_PRICE: this.state.totalPrice,
    };

    try {
      let response = await fetch(
        "https://sehat.hyderdevelops.ml/appointments/book_new",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(appointmentData),
        }
      );

      if (response.ok) {
        this.loadingOverlay.current.classList.toggle("hidden");
        this.setState({ AlrightButtonMsg: "Booked ... " });
      }
    } catch (error) {
      this.loadingOverlay.current.classList.toggle("hidden");
      console.log(error);
      this.setState({ AlrightButtonMsg: "Error Occured" });
    }
  };

  async componentDidMount() {
    let response = await fetch("https://sehat.hyderdevelops.ml/labs/fetchAll", {
      method: "POST",
    });
    let data = await response.json();
    this.setState({ labList: data });
  }

  render() {
    return (
      <div className='book_test_wrapper'>
        <div className='book_test_heading'> Let's Book a Test</div>

        <form className='book_test_form' ref={this.formRef}>
          <div className='book_test_form_group'>
            <div className='book_test_form_group_label'>Choose Nearest Lab</div>

            <div>
              <select
                required
                value={this.state.selected_lab}
                onChange={(e) => {
                  this.handleInput("selected_lab", e.target.value);
                }}
                name='lab_selection'
                className='book_test_form_group_select'>
                {this.renderLabList()}
              </select>
            </div>
          </div>

          <div className='book_test_form_group'>
            <div className='book_test_form_group_label'>When are you Free?</div>

            <div>
              <input
                required
                onChange={(e) => {
                  this.handleInput("selected_date", e.target.value);
                }}
                name='date_selection'
                type='date'
                className='book_test_form_group_select'
                value={this.state.selected_date}
              />
            </div>
          </div>

          <div className='book_test_form_group'>
            <div className='book_test_form_group_label'>
              Choose your Test / Tests
            </div>

            <div>
              <select
                required
                name='tests_selection'
                multiple
                onInput={(e) => {
                  let formData = new FormData(this.formRef.current);
                  let testData = formData.getAll("tests_selection");
                  this.setState({
                    selected_tests: testData,
                    totalPrice: this.handlePriceCalc(testData),
                  });
                }}
                className='book_test_form_group_select'>
                {this.renderAvailableTests()}
              </select>
            </div>
          </div>

          <div className='book_test_form_group'>
            <div className='book_test_form_group_label'> Your Address?</div>

            <div>
              <textarea
                required
                value={this.state.selected_address}
                onChange={(e) => {
                  this.handleInput("selected_address", e.target.value);
                }}
                name='address_selection'
                className='book_test_form_group_textarea'
                placeholder='Navigate to the collection location.'></textarea>
            </div>
          </div>

          <div className='book_test_form_group'>
            <div className='book_test_form_group_price'>
              You will be paying{" "}
              <span className='booking_price'> Rs {this.state.totalPrice}</span>{" "}
            </div>
          </div>

          <div className='book_test_form_group'>
            <button
              className='book_test_alright_btn'
              disabled={this.state.AlrightDisabled}
              onClick={(e) => this.handleFormSubmit(e)}>
              {this.state.AlrightButtonMsg}
            </button>
          </div>
        </form>

        <div
          ref={this.loadingOverlay}
          className='booking_loading_screen hidden'></div>
      </div>
    );
  }
}
