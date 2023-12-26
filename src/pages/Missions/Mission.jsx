import { useState, useEffect } from "react";
import "./Mission.css";
import photoForNav from "./imgSrc/photoForNav.png";
import { LuRefreshCcw } from "react-icons/lu";

function Mission() {
  const [missionContent, setMissionContent] = useState("");
  const [missionStatus, setMissionStatus] = useState("");

  useEffect(() => {
    fetchTodayMission();
  }, []);

  const fetchTodayMission = async () => {
    try {
      const groupID = 2;
      const response = await fetch(
        `https://www.cokothon-team5.p-e.kr/group/${groupID}/mission`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const body = await response.json();
      console.log(body);
      alert(body.date);
      console.log(body);

      setMissionContent(response.data.mission);
      setMissionStatus(response.data.status);
    } catch (error) {
      console.error("오늘의 미션 조회 실패:", error);
      if (error.response) {
        console.log("server response: ", error.response.data);
      }
    }
  };

  const periods1 = ["과거", "현재", "미래"];
  const [period1, setPeriod1] = useState("");

  const periods2 = ["과거", "현재", "미래"];
  const [period2, setPeriod2] = useState("");

  const handlePeriodChange = (newPeriod) => {
    setPeriod1(newPeriod);
  };

  return (
    <div>
      <div className="nav">
        <h1 style={{ fontFamily: "Gowun Batang" }}>추억네컷</h1>
        <img src={photoForNav} alt="Navigation" />
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
          <span
            style={{ fontSize: "x-large", fontWeight: "bold", float: "right" }}
          >
            #{period1}
          </span>
        </div>
        <div className="mission-container">{missionContent}</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            float: "right",
            width: "71%",
            justifyContent: "end",
            marginBottom: "60px",
          }}
        >
          인증 현황{" "}
          <div className="percentbar_out">
            <div
              className="percentbar_in"
              style={{ width: `${25 * parseInt(missionStatus, 10)}%` }}
            ></div>
          </div>
          ({missionStatus}/4)
          {parseInt(missionStatus, 10) === 0 && (
            <div className="change-container">
              <button className="changeButton">
                <LuRefreshCcw />
              </button>
              새로운 미션
            </div>
          )}
          {parseInt(missionStatus, 10) !== 0 && (
            <div className="change-container"></div>
          )}
        </div>
        <div className="hashtag">#{period2}</div>
        <h2 className="waiting-container">{missionContent}</h2>
      </div>
    </div>
  );
}

export default Mission;
