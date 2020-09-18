import React, { Component } from "react";

export default class Share extends Component {
  state = {
    primary_email: this.props.user.EMAIL,
    secondary_email: "",
    duration: "",
    user: this.props.user,
  };

  handleInput = (key, value) => {
    this.setState({ [key]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);
    if (!(this.state.duration && this.state.secondary_email)) {
      return;
    } else {
      this.buttonRef.current.disabled = true;

      let data = JSON.stringify(this.state);

      let response = await fetch(
        "https://sehat.hyderdevelops.ml/share/newShare",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: data,
        }
      );

      if (response.ok) {
        this.overlayRef.current.classList.remove("hidden");
      }
    }
  };

  overlayRef = React.createRef();
  buttonRef = React.createRef();

  render() {
    return (
      <div className='share_wrapper'>
        <div className='share_card_wrapper'>
          <div className='share_card'>
            <div className='share_card_header'>Instant Share</div>

            <div className='share_card_info'>
              Share your medical history with doctors easily and without any
              hassle. You can customise your sharing options and even start a
              video call with the doctor while your documents are being
              reviewed.
            </div>

            <div className='share_form'>
              <form>
                <div className='share_form_input_group'>
                  <span className='share_form_label'>Email</span>{" "}
                  <input
                    value={this.state.secondary_email}
                    onChange={(e) => {
                      this.handleInput("secondary_email", e.target.value);
                    }}
                    type='text'
                    placeholder='Whom do you want to share with?'
                  />
                </div>
                <div className='share_form_input_group'>
                  <span className='share_form_label'>Expiry</span>{" "}
                  <input
                    type='time'
                    value={this.state.duration}
                    onChange={(e) => {
                      this.handleInput("duration", e.target.value);
                    }}
                  />
                </div>
              </form>
            </div>
            <button
              className='share_form_btn'
              ref={this.buttonRef}
              onClick={(e) => {
                this.handleSubmit(e);
              }}>
              {" "}
              Share
            </button>
          </div>

          <div ref={this.overlayRef} className='share_overlay hidden'>
            <div className='share_overlay_msg'>
              We have generated and mailed you and your contact person the link.
              Link will be accessible for the duration you have mentioned. After
              the duration is over access will be denied.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
