import { useState } from "react";
import "./Mission.css";
import photoForNav from "./imgSrc/photoForNav.png";

function Mission() {
  const messages = ["Mission1", "Mission2", "Mission3", "Mission4"];

  const [message, setMessage] = useState("Mission");

  const changeMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  };

  return (
    <div>
      <div className="nav">
        <h1 style={{ fontFamily: "Gowun Batang" }}>추억네컷</h1>
        <img src={photoForNav} />
      </div>
      <div className="center-container">
        <div className="question">어떤 미션을 수행하시겠습니까?</div>
        <div className="mission-container">{message}</div>
        <div className="change-container">
          <button onClick={changeMessage} className="changeButton">
            .
          </button>
          새로운 미션
        </div>
        <div className="waiting-container">다른 미션</div>
      </div>
    </div>
  );
}

export default Mission;
