import React, { useState, useEffect } from "react";
import photoForNav from "../../imgSrc/photoForNav.png";
import "../../App.css";

const MissionImageUpload = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [previewName, setPreviewName] = useState("");

  useEffect(() => {
    // 메시지 이벤트 리스너 등록
    window.addEventListener("message", handleMessage);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const handleMessage = (event) => {
    if (event.data.type === "IMAGE_CONFIRM") {
      // 전달받은 이미지로 미리보기 설정
      setPreviewImage(event.data.data);
      setPreviewName(event.data.additionalData);
    }
  };

  const openPopup = () => {
    // 팝업 열기
    window.open("/ImageUploadPopup", "_blank", "width=800,height=800");
  };

  return (
    <div>
      <div className="nav">
        <h1 style={{ fontFamily: "Gowun Batang" }}>추억네컷</h1>
        <img src={photoForNav} />
      </div>

      <div className="center-container" style={{ marginTop: "20px" }}>
        <div className="mission-container">Mission: ....</div>
        <div style={{ marginTop: "10px" }}>
          <button style={{ fontFamily: "Gowun Batang" }} onClick={openPopup}>
            이미지 업로드
          </button>
        </div>
        {previewImage && (
          <div style={{ marginTop: "15px" }}>
            <img src={previewImage} alt="Preview" />
            <h3 style={{ textAlign: "center" }}>{previewName}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default MissionImageUpload;
