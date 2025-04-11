import React from "react";
import { PaintingObject } from "../types";
import { Link } from "react-router-dom";

interface GalleryProps {
  paintings: PaintingObject[];
}

const Gallery = ({ paintings }: GalleryProps) => {
  return (
    <div className="container">
      <h1>Gallery</h1>
      <p>Click on a painting to read more about it & purchasing options!</p>
      {paintings.map(({ file_src, alt, title }, index) => (
        <div style={{ marginTop: "15px" }} key={index}>
          <Link to={"/" + title}>
            <img
              src={file_src}
              className="img-fluid rounded"
              alt={alt}
              width="720px"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
