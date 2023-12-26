import "../../App.css";
import defaultImage from "./imgSrc/defaultImage.png";
import photoForNav from "../../imgSrc/photoForNav.png";
import memory4cut from "./imgSrc/memory4cut.png";
import "./ResultForm.css";

import { useNavigate } from "react-router";
import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

const ResultForm = () => {
  const goPage = useNavigate();
  const [resultImages, setResultImages] = useState([
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
    defaultImage,
    defaultImage,
  ]);
  const imagesIndex = [1, 2, 5, 6];
  const [resultNames, setResultNames] = useState([
    "임태근",
    "박예준",
    "김민제",
    "주민건",
  ]);
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(currentDate);

  const [flash, setFlash] = useState(false);
  // 사진을 저장하는 함수
  const divRef = useRef(null);

  const handleSave = () => {
    // 특정 div를 캡처하여 이미지로 변환
    setFlash(true);
    setTimeout(() => {}, 400);
    divRef.current.style.transform = "rotate(0deg)";
    html2canvas(divRef.current).then((canvas) => {
      // Canvas를 Blob으로 변환
      canvas.toBlob((blob) => {
        divRef.current.style.transform = "rotate(15deg)";
        // Blob을 파일로 저장
        saveAs(blob, "screenshot.png");
        setTimeout(() => {
          setFlash(false);
        }, 500);
      });
    });
  };

  return (
    <div className="ResultForm">
      <div className="nav">
        <h1 style={{ fontFamily: "Gowun Batang" }}>추억네컷</h1>
        <img src={photoForNav} />
      </div>
      <div className="bodyClass">
        <div className="bodyLeft">
          <div
            className={flash ? "flash" : ""}
            ref={divRef}
            style={{
              marginTop: "150px",
              marginLeft: "100px",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px",
              transform: "rotate(15deg)",
              backgroundColor: "#F7F5FF",
              padding: "5px",
              fontFamily: "Gowun Batang",
              // border: "2px solid #000",
            }}
          >
            {/* 이미지 데이터, 이름을 매핑하여 각 이미지를 화면에 그림 */}
            <div key={0}>
              <p>{resultNames[0]}</p>
              <img
                className="fixed-size-image"
                src={resultImages[0]}
                alt={`Image ${1}`}
                style={{ width: "100%" }}
              ></img>
            </div>
            <div key={1}>
              <p>{resultNames[1]}</p>
              <img
                className="fixed-size-image"
                src={resultImages[1]}
                alt={`Image ${2}`}
                style={{ width: "100%" }}
              ></img>
            </div>
            <div key={2} style={{ textAlign: "center", marginTop: "20px" }}>
              <h1>
                추억
                <br />
                네컷
              </h1>
            </div>

            <div key={3} style={{ marginTop: "20px", textAlign: "center" }}>
              <img src={memory4cut} style={{ width: "200px" }}></img>
              <h3 style={{ fontFamily: "Gowun Batang" }}>{formattedDate}</h3>
            </div>
            <div key={4}>
              <img
                className="fixed-size-image"
                src={resultImages[2]}
                alt={`Image ${3}`}
                style={{ width: "100%" }}
              ></img>
              <p>{resultNames[2]}</p>
            </div>
            <div key={5}>
              <img
                className="fixed-size-image"
                src={resultImages[3]}
                alt={`Image ${4}`}
                style={{ width: "100%" }}
              ></img>
              <p>{resultNames[3]}</p>
            </div>
          </div>
          <button
            style={{
              border: "none",
              borderRadius: "10px",
              backgroundColor: "#E5EBFF",
              width: "200px",
              fontFamily: "Gowun Batang",
              marginLeft: "100px",
            }}
            onClick={handleSave}
          >
            저장하기
          </button>
        </div>
        <div
          className="bodyRight"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginLeft: "250px",
            fontFamily: "Gowun Batang",
          }}
        >
          <h1>추억이 더 아름다워지는 공간,</h1>
          <div>
            <h1
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <h1 style={{ color: "red", fontSize: "40px" }}>'추억네컷'</h1>으로
              특별한 순간을 공유하세요.
            </h1>
          </div>
          <button
            style={{
              backgroundColor: "#C7D3FF",
              border: "2px solid #C7D3FF",
              fontFamily: "Gowun Batang",
            }}
            onClick={() => {
              goPage("/");
            }}
          >
            메인화면으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
};
export default ResultForm;
