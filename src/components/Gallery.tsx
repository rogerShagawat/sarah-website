import React from "react";
import { PaintingObject } from "../types";

interface GalleryProps {
  paintings: PaintingObject[];
}

const Gallery = ({ paintings }: GalleryProps) => {
  return (
    <div className="container">
      <h1>Gallery</h1>
      <p>Click on a painting to learn more!</p>
      {paintings.map(({ file_src, alt, title }, index) => (
        // TODO handle on click to bring to the painting page
        <div style={{ marginTop: "15px" }} key={index}>
          <a href={"/" + title}>
            <img
              src={file_src}
              className="img-fluid rounded"
              alt={alt}
              width="720px"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
