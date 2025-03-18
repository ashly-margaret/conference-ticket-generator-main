import React from "react";
import "./Main.scss";
import LOGOMARK from "../../assets/images/logo-mark.svg";
import DragAndDropUpload from "../../Components/DragAndDropUpload/DragAndDropUpload";
import { PiWarningCircleLight } from "react-icons/pi";

function Main() {
  return (
    <div className="main">
      <div className="container">
        <div className="title">
          <img src={LOGOMARK} alt="logoMark" className="logoMark" />
          <div className="titleDesc">Coding Conf</div>
        </div>
        <div className="mainTitle">
          <h1>Your Journey To Coding Conf</h1>
          <h1>2025 Starts Here!</h1>
        </div>
        <div className="text">
          Secure Your Spot at next year's biggest coding conference
        </div>
        <div className="formContainer">
          <form action="" className="form">
            <div className="form_inputbox">
              <div className="form_label">Upload Avatar</div>
              <DragAndDropUpload />
              <div className="warningText">
                <PiWarningCircleLight />
                <span>Upload your photo (JPG or PNG , max-size : 500KB) </span>
              </div>
            </div>
            <div className="form_inputbox">
              <div className="form_label">Full Name</div>
              <input
                className="input"
                type="text"
                id="fname"
                name="fullname"
                placeholder=""
              />
            </div>
            <div className="form_inputbox">
              <div className="form_label">Email Address</div>
              <input
                className="input"
                type="email"
                id="email"
                name="email"
                placeholder="example@.com"
              />
            </div>

            <div className="form_inputbox">
              <div className="form_label">Github Username</div>
              <input
                className="input"
                type="text"
                id="username"
                name="username"
                placeholder="@yourusername"
              />
            </div>
              <input type="submit" value="Submit" className="submit_btn" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Main;
