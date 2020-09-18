import React, { Component } from "react";
import "./splash_screen.css";
import icon from "./main_icon.svg";
import { Link } from "react-router-dom";

export default class SplashScreen extends Component {
  render() {
    return (
      <div className='splash_wrapper'>
        <div className='splash_sehat'>
          <h1>sehat</h1>
          <p>an opensource medical data management platform</p>

          <div className='splash_icon'>
            <img src={icon} className='splash_icon_img' alt='svg_img' />
          </div>
        </div>

        <Link to='/login'>
          <button className='splash_next'>next</button>
        </Link>
      </div>
    );
  }
}
