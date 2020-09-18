import React, { Component } from "react";

import IconList from "./IconList";
import "./dashboard.css";

import BookTest from "./BookTest";
import History from "./History";

import Share from "./Share";

import Profiler from "./Profiler";

/* Import Icons */
import bookingsIcon from "./icons/bookings.svg";
import historyIcon from "./icons/history.svg";
import profilerIcon from "./icons/profiler.svg";
import shareIcon from "./icons/share.svg";

export default class index extends Component {
  state = {
    currentView: "book_test",
    user: JSON.parse(window.localStorage.getItem("user")),
  };

  handleSubViewChange = (view) => {
    this.setState({ currentView: view });
  };

  renderSubView() {
    switch (this.state.currentView) {
      case "book_test":
        return <BookTest user={this.state.user} />;
      case "history":
        return <History user={this.state.user} />;

      case "share":
        return <Share user={this.state.user} />;

      case "profiler":
        return <Profiler user={this.state.user} />;
      default:
        return <Share user={this.state.user} />;
    }
  }

  componentDidMount() {
    let user = window.localStorage.getItem("user");
    user = JSON.parse(user);
    if (!user) {
      window.location.assign("/");
    } else {
      this.setState({ user: user });
    }
  }

  render() {
    console.log(bookingsIcon);
    let icon_list = [
      {
        src: bookingsIcon,
        label: "Bookings",
        view: "book_test",
      },
      {
        src: historyIcon,
        label: "History",
        view: "history",
      },
      {
        src: profilerIcon,
        label: "Profiler",
        view: "profiler",
      },
      {
        src: shareIcon,
        label: "Share",
        view: "share",
      },
    ];

    return (
      <div className='dashboard_wrapper'>
        <div className='dashboard_fixed'>
          <nav className='dashboard_nav'>
            <div className='dashboard_logo'>sehat</div>
            <div>
              Hello, <b> {this.state.user.FULL_NAME}</b>{" "}
            </div>
          </nav>

          <IconList
            icon_list={icon_list}
            handleSubViewChange={this.handleSubViewChange}
          />
        </div>

        <div>{this.renderSubView()}</div>
      </div>
    );
  }
}
