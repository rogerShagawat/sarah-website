import React from "react";
import { PaintingObject } from "../types";

interface GalleryProps {
  paintings: PaintingObject[];
}

const Gallery = ({ paintings }: GalleryProps) => {
  return (
    <div>
      <h1>Gallery</h1>
      {paintings.map(({ file_src, alt, title }, index) => (
        // TODO handle on click to bring to the painting page
        <div style={{ marginTop: "15px" }} key={index}>
          <a href={"/" + title}>
            <img src={file_src} className="img-fluid rounded" alt={alt} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
