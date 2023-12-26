import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";
import "./Home.css";
import photoForNav from "./imgSrc/photoForNav.png";
import fourCutForBody from "./imgSrc/fourCutForBody.png";
import axios from "axios";

const Home = () => {
  const goPage = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const isThere = () => {
    //db 비교
    return true;
  };

  const sendData = async () => {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const response = await fetch(
        "https://www.cokothon-team5.p-e.kr/group/join",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: { invite_code: "OIGQ-QQFMDr" },
        }
      );
      const body = await response.json();
      alert(body.date);
      console.log(body);
    } catch (error) {
      console.log(error);
      if (error.data) {
        console.log("11111", error.data);
      }
    }
  };

  sendData();

  return (
    <div className="Home">
      <div className="nav">
        <h1 style={{ fontFamily: "Gowun Batang" }}>추억네컷</h1>
        <img src={photoForNav} />
      </div>
      <div className="bodyClss" style={{ display: "flex" }}>
        <div
          className="bodyLeft"
          style={{ display: "flex", flexDirection: "column", margin: "200px" }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <h2 style={{ fontFamily: "Gowun Batang" }}>초대코드 입력 </h2>
            <input
              placeholder="입장할 그룹의 초대코드를 입력해주세요."
              style={{ margin: "20px" }}
            />
          </div>
          <button
            style={{ fontFamily: "Gowun Batang" }}
            id="JoinGroupButton"
            onClick={() => {
              if (!isThere) {
                setModalOpen(true);
              } else {
                //같은 초대코드 존재할 때
              }
            }}
          >
            그룹 참여하기
          </button>
          <p />
          <button
            style={{ fontFamily: "Gowun Batang" }}
            id="GroupGeneratorButton"
            onClick={() => {
              goPage("/GroupGenerator");
            }}
          >
            그룹 생성하기
          </button>
        </div>
        <div className="bodyRight" style={{ display: "flex" }}>
          <img src={fourCutForBody} />
        </div>
        {/* 아래는 팝업창 화면 */}
        <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
          <div className="ModalBody">
            <h1>존재하지 않는 초대 코드 입니다.</h1>
            <button
              onClick={() => {
                setModalOpen(false);
              }}
              style={{ marginTop: "70px" }}
            >
              확인
            </button>
          </div>
        </Modal>
      </div>
      {/* 아래는 팝업창 화면 */}
      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
        <div className="ModalBody">
          <h2>존재하지 않는 초대 코드 입니다.</h2>
          <button
            onClick={() => {
              setModalOpen(false);
            }}
            style={{ marginTop: "70px" }}
          >
            확인
          </button>
        </div>
      </Modal>
    </div>
  );
};
export default Home;
