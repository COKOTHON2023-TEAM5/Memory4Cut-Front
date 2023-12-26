import React, { useState, useEffect } from "react";
import axios from "axios";
import AWS from "aws-sdk";

const ImageUploadPopup = () => {
  let groupId = 1;
  const URL = `https://www.cokothon-team5.p-e.kr/group/${groupId}/mission/upload`;

  const handleFileUpload = async () => {
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
      formData.append("mission_img", selectedImage);
      formData.append("nickname", userName);

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

  const [isFilled, setIsFilled] = useState(true);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [userName, setUserName] = useState("");
  const nameChanged = (e) => {
    setUserName(e.target.value);
    console.log(e.target.value);
  };

  const handleConfirm = () => {
    // 부모 창으로 이미지 데이터 전달
    if (selectedImage !== null && userName !== "") {
      handleFileUpload();
      // window.close(); // 팝업 닫기
    } else {
      setIsFilled(false);
    }
  };

  return (
    <div>
      <div
        className="center-container"
        style={{ fontFamily: "Gowun Batang", textAlign: "center" }}
      >
        <h1>
          이미지를 업로드 후<br />
          이름을 입력해 주세요
        </h1>
        <input type="file" onChange={handleFileChange} />
        {selectedImage && <img src={selectedImage} alt="Preview" />}
        <input
          style={{ marginTop: "15px" }}
          type="text"
          placeholder="이름"
          value={userName}
          onChange={nameChanged}
        />
        <button
          style={{ marginTop: "15px", fontFamily: "Gowun Batang" }}
          onClick={handleConfirm}
        >
          확인
        </button>
        {!isFilled && (
          <h6 style={{ color: "red" }}>
            이미지를 업로드 후 이름을 입력해주세요
          </h6>
        )}
      </div>
    </div>
  );
};

export default ImageUploadPopup;
