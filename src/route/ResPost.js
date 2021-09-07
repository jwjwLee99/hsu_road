import React from "react";
import data from "../images/res.json";

const ResPost = ({ match }) => {
  console.log(data);
  console.log(match.url);
  console.log(data.images.url);
  const imageList = data.images.filter((image) => image.url === match.url);
  return (
    <div>
      {imageList.map((image) => (
        <div key={image.name} className="imgBox">
          <h3>{image.name}</h3>
          <img
            src={require(`../images/resImg/${image.name}.jpeg`).default}
            className="menuImage"
            alt={image.name}
          />
        </div>
      ))}
    </div>
  );
};

export default ResPost;
