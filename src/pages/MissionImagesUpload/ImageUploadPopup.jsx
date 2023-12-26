import React, { useState, useEffect } from "react";

const ImageUploadPopup = () => {
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
      window.opener.postMessage(
        {
          type: "IMAGE_CONFIRM",
          data: selectedImage,
          additionalData: userName,
        },
        "*"
      );
      window.close(); // 팝업 닫기
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
