import React, { useEffect, useState } from "react";
import './MainPage.css'; // Import the CSS file

const Task1 = () => {
  const [Selectcolor, setcolor] = useState("grey-t-shirt.jpg");
  const [upperText, setUpperText] = useState("");
  const [lowerText, setLowerText] = useState("");
  const [textSize, setTextSize] = useState(14);
  const [textColor, setTextColor] = useState("black");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const color = [
    { id: 1, imgcolor: "blue", img_src: "cobalt-blue-t-shirt.jpg" },
    { id: 2, imgcolor: "grey", img_src: "grey-t-shirt.jpg" },
    { id: 3, imgcolor: "light green", img_src: "light-green-t-shirt.jpg" },
    { id: 4, imgcolor: "Purple", img_src: "bright-purple-t-shirt.jpg" },
  ];

  return (
    <div className="container">
      <div className="settings-container">
        <img className="tshirt-image" src={Selectcolor} alt="T-Shirt" />
        <div className="text-container">
          <div className="upper-text" style={{ "--text-color": textColor, "--text-size": textSize + "px" }}>
            {upperText}
          </div>
          <img className="selected-image" src={imageUrl} />
          <div className="lower-text" style={{ "--text-color": textColor, "--text-size": textSize + "px" }}>
            {lowerText}
          </div>
        </div>
      </div>

      <div className="controls">
        <div className="setting-heading">Settings</div>
        <div className="tshirt-color">
         <div className="setting-subheading">Change T-shirt Color</div>
          <div className="color-options">
            {color.map((item) => (
              <div key={item.id} className="color-option" style={{ margin: "1rem" }}>
                <img
                  className="color-image"
                  src={item.img_src}
                  alt={item.imgcolor}
                  onClick={() => setcolor(item.img_src)}
                />
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="image-box">
          <div className="setting-subheading">Choose Image</div>
          <input
            className="file-input"
            type="file"
            accept="image/*"
            onChange={(e) => setSelectedImage(e.target.files[0])}
          />
        </div>
        <hr />
        <div>
          <div className="setting-subheading" style={{textAlign:"center",marginTop:'1rem'}}>Write Text</div>
          <div className="text-box">
            <input
             className="text-feild"
              maxLength="10"
              type="text"
              placeholder="Upper Text"
              onChange={(e) => setUpperText(e.target.value)}
            />
          </div>
          <div className="text-box">
            <input
             className="text-feild"
              maxLength="10"
              type="text"
              placeholder="Lower Text"
              onChange={(e) => setLowerText(e.target.value)}
            />
          </div>
          <div className="text-size">
            <div className="setting-subheading">Text size</div>
            <input
              type="range"
              min="10"
              max="50"
              defaultValue="14"
              onChange={(e) => setTextSize(e.target.value)}
              style={{width:"100%"}}
            />
          </div>
          <div className="text-color">
            <div className="setting-subheading">Text color</div>
            <input
              type="color"
              defaultValue="black"
              onChange={(e) => setTextColor(e.target.value)}
              style={{width:"25%",height:"25px",margin:"1rem 0",borderRadius:"5px",border:"none",outline:"none",cursor:"pointer"}}
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Task1;
