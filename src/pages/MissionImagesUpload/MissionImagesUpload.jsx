import { useState } from "react";
import "./MissionImagesStyle.css";
import "../../App.css";
import photoForNav from "../../imgSrc/photoForNav.png";
import defaultImage from "./imgSrc/defaultImage.png";

const MissionImagesUpload = () => {
  const MAX_IMAGES = 4;
  const [uploadImgUrls, setUploadImgUrls] = useState([]);
  for (let i = 0; i < MAX_IMAGES; i += 1) {}
  const mission = "추억네컷";

  const onChangeImageUpload = (e) => {
    const { files } = e.target;
    const newImgUrls = [];

    for (let i = 0; i < files.length; i++) {
      const uploadFile = files[i];
      const reader = new FileReader();

      reader.onloadend = () => {
        newImgUrls.push(reader.result);

        if (i === files.length - 1) {
          setUploadImgUrls(newImgUrls);
        }
      };

      reader.readAsDataURL(uploadFile);
    }
  };

  const onRemoveImage = (index) => {
    const updatedImgUrls = uploadImgUrls.filter((_, i) => i !== index);
    setUploadImgUrls(updatedImgUrls);
  };

  const onClick = () => {
    console.log("업로드된 이미지 개수:", uploadImgUrls.length);
  };

  return (
    <div>
      <div className="nav">
        <h1 style={{ fontFamily: "Gowun Batang" }}>추억네컷</h1>
        <img src={photoForNav} />
      </div>
      <div className="image-grid">
        {uploadImgUrls.map((url, index) => (
          <div key={index} className="image-container">
            <img
              src={url}
              alt={`uploaded-${index}`}
              className="fixed-size-image"
            />
            <button
              className="remove-button"
              onClick={() => onRemoveImage(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={onChangeImageUpload}
      />
      <div>
        <button onClick={onClick}>업로드 완료</button>
      </div>
    </div>
  );
};

export default MissionImagesUpload;
