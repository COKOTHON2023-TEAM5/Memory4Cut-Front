// import { LuRefreshCcw } from "react-icons/lu";
import { useState } from "react";

function Mission() {
  const messages = ["Mission1", "Mission2", "Mission3", "Mission4"];

  const [message, setMessage] = useState("Mission");

  const changeMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  };

  return (
    <div className="center-container">
      <div className="question">어떤 미션을 수행하시겠습니까?</div>
      <div className="mission-container">{message}</div>
      <div className="change-container">
        <button onClick={changeMessage} className="changeButton">
          {/* <LuRefreshCcw /> */}
        </button>
        새로운 미션
      </div>
      <div className="waiting-container">다른 미션</div>
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1 className="Header">추억네컷</h1>
      <div className="HeaderImage"></div>
    </header>
  );
}

export default Mission;
