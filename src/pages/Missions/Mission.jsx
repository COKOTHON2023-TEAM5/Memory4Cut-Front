import { useState } from "react";
import "./Mission.css";
import photoForNav from "./imgSrc/photoForNav.png";
import { LuRefreshCcw } from "react-icons/lu";

function Mission() {
  const messages = ["Mission1", "Mission2", "Mission3", "Mission4"];
  const [message, setMessage] = useState("Mission");

  const numbers = [1, 2, 3, 4];
  const [number, setNumber] = useState(1);

  const periods = ["과거", "현재", "미래"];
  const [period, setPeriod] = useState("현재");

  const changeMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  };

  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
  };

  return (
    <div>
      <div className="nav">
        <h1 style={{ fontFamily: "Gowun Batang" }}>추억네컷</h1>
        <img src={photoForNav} />
      </div>
      <div className="center-container">
        <div style={{ width: "71%", marginTop: "100px" }}>
          <span className="question">어떤 미션을 수행하시겠습니까?</span>
          <button onClick={() => handlePeriodChange("과거")} className="Button">
            과거
          </button>
          /
          <button onClick={() => handlePeriodChange("현재")} className="Button">
            현재
          </button>
          /
          <button onClick={() => handlePeriodChange("미래")} className="Button">
            미래
          </button>
          <span style={{ fontSize: "x-large", fontWeight: "bold", float: "right" }}>#{period}</span>
        </div>
        <span className="mission-container">{message}</span>
        {number === 0 && (
          <div className="change-container">
            <button onClick={changeMessage} className="changeButton">
              <LuRefreshCcw />
            </button>
            새로운 미션
          </div>
        )}

        <h2 className="waiting-container">미공개 미션</h2>
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
