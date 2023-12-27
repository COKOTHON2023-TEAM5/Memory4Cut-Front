import { useEffect, useState } from "react";
import "./Mission.css";
import photoForNav from "./imgSrc/photoForNav.png";
import { LuRefreshCcw } from "react-icons/lu";
import axios from "axios";
import { useNavigate } from "react-router";

function Mission() {
  const [data, setData] = useState(null);
  const [missionContent, setMissionContent] = useState("");
  const [achieveStatus, setAchieveStatus] = useState(0);
  const [missionType, setmissionType] = useState("");

  const longData = {
    longValue: 1,
  };
  const groupID = 2;

  useEffect(() => {
    loadMission();
  }, []);
  const movePage = useNavigate();

  const loadMission = async() => {
    axios
      .patch(`https://www.cokothon-team5.p-e.kr/group/${groupID}/mission`)
      .then(function (response) {
        setData(response.data);
        setMissionContent(response.data.data.mission_content);
        // console.log(data);
        // setMissionContent();
        setAchieveStatus(response.data.data.achieve_status);
        setmissionType(response.data.data.mission_tense_type);
        console.log(response.data.data.mission_content + "fu");
      })
      .catch(function (error) {});
  };
  const changeMessage = async () => {
    // const randomIndex = Math.floor(Math.random() * messages.length);
    // setMessage(messages[randomIndex]);
    // changePeriod();
    axios
      .patch(`https://www.cokothon-team5.p-e.kr/group/${groupID}/mission/change`)
      .then(function (response) {
        setData(response.data);
        console.log("dataaaaaaa:", data.data.mission_content);
        setMissionContent(data.data.mission_content);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const[temp, setTemp] = useState(true);
  // if(temp){
  //   axios.patch(`https://www.cokothon-team5.p-e.kr/group/${groupID}/mission/change`)
  //   .then(function (response) {
  //     setTimeout(() => {}, 1000);
  //     setData(response.data);
  //     console.log("dataaaaaaa:", data.data.mission_content);
  //     setMissionContent("jell");
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  //   setTemp(false);
  // }
  // changeMessage();

  return (
    <div>
      <div className="nav">
        <h1 style={{ fontFamily: "Gowun Batang" }}>추억네컷</h1>
        <img src={photoForNav} />
      </div>
      <div className="center-container">
        <div style={{ width: "71%", marginTop: "100px" }}>
          <span className="question">어떤 미션을 수행하시겠습니까?</span>
          <button className="Button">과거</button>/<button className="Button">현재</button>/<button className="Button">미래</button>
          <span style={{ fontSize: "x-large", fontWeight: "bold", float: "right" }}>#{missionType}</span>
        </div>
        <span className="mission-container">{missionContent}</span>
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
            <div className="percentbar_in" style={{ width: `${25 * achieveStatus}%` }}></div>
          </div>
          ({achieveStatus}/4)
          {achieveStatus === 0 && (
            <div className="change-container">
              <button onClick={changeMessage} className="changeButton">
                <LuRefreshCcw />
              </button>
              새로운 미션
            </div>
          )}
          {achieveStatus !== 0 && <div className="change-container"></div>}
        </div>
        <button
          onClick={() => {
            movePage("/MissionImagesUpload?missionName=" + missionContent);
          }}
        >
          미션 시작
        </button>
      </div>
    </div>
  );
}

export default Mission;
