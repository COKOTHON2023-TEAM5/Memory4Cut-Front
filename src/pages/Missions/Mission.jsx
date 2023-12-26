import { useState } from "react";
import "./Mission.css";
import photoForNav from "./imgSrc/photoForNav.png";
import { LuRefreshCcw } from "react-icons/lu";
import axios from "axios";

function Mission() {
  const messages = ["Mission1", "Mission2", "Mission3", "Mission4"];
  const [message, setMessage] = useState("미공개 미션");

  const numbers = [1, 2, 3, 4];
  const [number, setNumber] = useState(0);

  const periods1 = ["과거", "현재", "미래"];
  const [period1, setPeriod1] = useState("");

  const periods2 = ["과거", "현재", "미래"];
  const [period2, setPeriod2] = useState("");
  const longData = {
    longValue: 1,
  }
  const groupID = 23523423;
  const changeMessage = () => {
    // const randomIndex = Math.floor(Math.random() * messages.length);
    // setMessage(messages[randomIndex]);
    // changePeriod();
    axios.patch(`https://www.cokothon-team5.p-e.kr/group/${groupID}/mission/change`)
    .then(function(response){
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const handlePeriodChange = (newPeriod) => {
    setPeriod1(newPeriod);
  };

  const changePeriod = () => {
    const randomIndex = Math.floor(Math.random() * periods2.length);
    setPeriod2(periods2[randomIndex]);
  };
  const[missionContent, setMissionContent] = useState();

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
          <span style={{ fontSize: "x-large", fontWeight: "bold", float: "right" }}>#{period1}</span>
        </div>
        <span className="mission-container">{missionContent}</span>
        <div style={{ display: "flex", alignItems: "center", float: "right", width: "71%", justifyContent: "end", marginBottom: "60px" }}>
          인증 현황{" "}
          <div className="percentbar_out">
            <div className="percentbar_in" style={{ width: `${25 * number}%` }}></div>
          </div>
          ({number}/4)
          {number === 0 && (
            <div className="change-container">
              <button onClick={changeMessage} className="changeButton">
                <LuRefreshCcw />
              </button>
              새로운 미션
            </div>
          )}
          {number !== 0 && <div className="change-container"></div>}
        </div>
        <div className="hashtag">#{period2}</div>
        <h2 className="waiting-container">{message}</h2>
      </div>
    </div>
  );
}

export default Mission;
