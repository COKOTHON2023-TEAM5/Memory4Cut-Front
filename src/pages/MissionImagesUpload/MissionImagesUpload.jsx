import React, { useState, useEffect } from "react";
import photoForNav from "../../imgSrc/photoForNav.png";
import AWS from "aws-sdk";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import "../../App.css";

const MissionImageUpload = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [previewName, setPreviewName] = useState("");
  const [completeBtn, setCompleteBtn] = useState(false);

  const [serachParams, setSearchParams] = useSearchParams();
  const missionNameString = serachParams.get("missionName");
  useEffect(() => {
    // 메시지 이벤트 리스너 등록
    window.addEventListener("message", handleMessage);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  let groupId = 1;
  const URL = `https://www.cokothon-team5.p-e.kr/group/${groupId}/mission/upload`;
  const sendData = async () => {
    try {
      // AWS 설정
      const config = {
        bucketName: "cokothon-team5-bucket",
        region: "ap-northeast-2",
        accessKeyId: "AKIAT6DXYBDLY5BKP55D",
        secretAccessKey: "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",
      };

      AWS.config.update({
        bucketName: config.bucketName,
        region: config.region,
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
      });

      // S3 객체 생성
      const s3 = new AWS.S3();

      // FormData 생성
      const formData = new FormData();
      formData.append("mission_img", previewImage);
      formData.append("nickname", previewName);

      await axios({
        method: "PATCH",
        url: URL,
        mode: "cors",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      if (error.response) {
        console.log("Server Response Data:", error.response.data);
      }
    }
  };

  const handleMessage = (event) => {
    if (event.data.type === "IMAGE_CONFIRM") {
      // 전달받은 이미지로 미리보기 설정
      setPreviewImage(event.data.data);
      setPreviewName(event.data.additionalData);
      setCompleteBtn(true);
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
        <div className="mission-container">미션: {missionNameString}</div>
        <div style={{ marginTop: "10px" }}>
          <button style={{ fontFamily: "Gowun Batang" }} onClick={openPopup}>
            이미지 업로드
          </button>
        </div>
        {previewImage && (
          <div style={{ marginTop: "15px" }}>
            <img
              src={previewImage}
              alt="Preview"
              style={{ width: "300px", height: "300px" }}
            />
            <h3 style={{ textAlign: "center" }}>{previewName}</h3>
          </div>
        )}
        {completeBtn && (
          <div style={{ marginTop: "10px" }}>
            <button style={{ fontFamily: "Gowun Batang" }} onClick={sendData}>
              추억네컷 제출
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MissionImageUpload;
