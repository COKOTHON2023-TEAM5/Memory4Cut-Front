import { useState } from "react";
import "./Mission.css";
import photoForNav from "./imgSrc/photoForNav.png";
import { LuRefreshCcw } from "react-icons/lu";

function Mission() {
  const messages = ["Mission1", "Mission2", "Mission3", "Mission4"];
  const [message, setMessage] = useState("Mission");

  const numbers = [1, 2, 3, 4];
  const [number, setNumber] = useState(3);

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
            <LuRefreshCcw />
          </button>
          새로운 미션
        </div>
        <div className="waiting-container">미공개 미션</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          인증 현황{" "}
          <div className="percentbar_out">
            <div className="percentbar_in" style={{ width: `${25 * number}%` }}></div>
          </div>
          ({number}/4)
        </div>
      </div>
    </div>
  );
}

export default Mission;
