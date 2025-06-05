import React from "react";
import { Image as RBImage } from "react-bootstrap";
function Image({ url, alt = "", className }) {
  return (
    <RBImage
      src={url}
      alt={alt}
      fluid
      className={`d-block mx-auto`}
    />
  );
}

export default Image;
