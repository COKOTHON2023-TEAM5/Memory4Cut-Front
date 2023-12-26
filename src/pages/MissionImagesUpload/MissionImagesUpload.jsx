import { useState } from "react";
import "./MissionImagesStyle.css";

const MissionImagesUpload = () => {
  const [uploadImgUrls, setUploadImgUrls] = useState([]);
  const mission = "미션에 대한 사진 4장을 업로드해 주세요";

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
      <div>
        <h1>{mission}</h1>
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
      <hr></hr>
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
