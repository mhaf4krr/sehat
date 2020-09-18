import React, { Component, createRef } from "react";
import "./login.css";

import api from "../apis/sehat";

export default class LoginScreeen extends Component {
  state = {
    phoneNumber: "",
    OTP: "",

    tryDisabled: true,
    OTPDisabled: false,
    canRedirect: false,
  };

  notificationRef = createRef();

  handleInputs = (key, value) => {
    this.setState({ [key]: value });
  };

  handleOTPBtn = async (e) => {
    e.preventDefault();

    if (this.state.phoneNumber.length < 10) {
      this.handleNotifications("Error with Phone Number", "danger");
      return;
    } else {
      this.setState({ OTPDisabled: true });

      let response = await api.post(
        "/users/generateOTP?phone=" + this.state.phoneNumber
      );

      if (response.status === 200) {
        this.handleNotifications("OTP has been Sent", "success");
      } else {
        this.handleNotifications("Error with OTP", "danger");
      }
    }
  };

  handleTryBtn = async (e) => {
    e.preventDefault();

    if (this.state.OTP.length !== 4) {
      this.handleNotifications("OTP length invalid", "danger");
    } else {
      try {
        this.setState({ tryDisabled: true });
        let response = await api.post(
          `/users/verifyOTP?phone=${this.state.phoneNumber}&otp=${this.state.OTP}`
        );
        console.log(response);
        if (response.status === 200) {
          this.handleNotifications("OTP VERIFIED", "success");

          /* Handle Redirection Here */
          let user = JSON.stringify(response.data);

          /** Store User in Local Storage */
          window.localStorage.setItem("user", user);

          /*Redirect to Dashboard */
          window.location.assign("/dashboard");

          this.setState({ canRedirect: true });
        } else if (response.status === 401) {
          this.handleNotifications("OTP VERIFICATION FAILED", "danger");
          /* enable all */
          this.setState({
            tryDisabled: false,
            OTPDisabled: false,
          });
        }
      } catch (error) {
        this.handleNotifications("OTP VERIFICATION FAILED", "danger");
        /* enable all */
        this.setState({
          tryDisabled: false,
          OTPDisabled: false,
        });
      }
    }
  };

  handleNotifications(msg, assigned_class) {
    this.notificationRef.current.textContent = msg;
    this.notificationRef.current.classList.add(assigned_class);
    setTimeout(() => {
      this.notificationRef.current.classList.remove(assigned_class);
    }, 1500);
  }

  render() {
    return (
      <div className='login_wrapper'>
        <div className='login_sehat'>
          <h1>sehat</h1>
        </div>
        <section className='login_form_wrapper'>
          <div className='login_form_text'>
            <h3>Please SignIn</h3>

            <form className='login_form'>
              <span className='login_msg' ref={this.notificationRef}>
                Invalid OTP
              </span>
              <div className='login_form_input_group otp_btn '>
                <input
                  type='number'
                  placeholder='Phone Number'
                  disabled={this.state.OTPDisabled}
                  onChange={(e) => {
                    this.handleInputs("phoneNumber", e.target.value);
                  }}
                  value={this.state.phoneNumber}
                />
                <button
                  className='input_otp_btn btn'
                  onClick={(e) => {
                    this.handleOTPBtn(e);
                  }}
                  disabled={this.state.OTPDisabled}>
                  OTP
                </button>
              </div>
              <div className='login_form_input_group'>
                <input
                  type='number'
                  placeholder='OTP'
                  onChange={(e) => {
                    this.handleInputs("OTP", e.target.value);
                    if (e.target.value.length === 4) {
                      this.setState({ tryDisabled: false });
                    }
                  }}
                />
              </div>
            </form>
            <button
              className='try_btn btn'
              disabled={this.state.tryDisabled}
              onClick={this.handleTryBtn}>
              try
            </button>
          </div>
        </section>
      </div>
    );
  }
}
