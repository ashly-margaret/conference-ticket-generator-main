import React from "react";
import "./Main.scss";
import LOGOMARK from '../../assets/images/logo-mark.svg'
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
        <div className="text">Secure Your Spot at next year's biggest coding conference</div>
        <div className="formContainer">
        <form action="" className="form">
        <DragAndDropUpload/>
        <div className="warningText"><PiWarningCircleLight /><span>Upload your photo (JPG or PNG , max-size : 500KB) </span></div>
        </form>
        </div>
        
      </div>
    </div>
  );
}

export default Main;
