import React from "react";
import "./post.css";

const Post = ({ title, variant, images, description, imageUrl, isDescriptionHtml }) => {
  let postTemplate = <></>;
  switch (variant) {
    case "simple-post":
      postTemplate = (
        <div className="post" style={{ margin: "10%", textAlign: "justify" }}>
          <div className="images">
            {images.map((itemImage, index) => (
              <img
                key={index}
                src={itemImage.url}
                alt="image"
                className="img"
              />
            ))}
          </div>
          <div className="post-container">
            {!isDescriptionHtml ? (
              <p>{description}</p>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: description }} />
            )}
          </div>
        </div>
      );
      break;

    case "detail":
      postTemplate = (
        <div className="post">
          <h2 style={{ textAlign: "center" }}>{title}</h2>
          <div className="post-container">
            {!isDescriptionHtml ? (
              <p>{description}</p>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: description }} />
            )}
          </div>
        </div>
      );
      break;
  }

  return postTemplate;
};

export default Post;
