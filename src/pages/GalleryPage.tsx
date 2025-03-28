import Gallery from "../components/Gallery";
import { PaintingObject } from "../types";

interface Props {
  galleryArr: PaintingObject[];
}

export default function GalleryPage({ galleryArr }: Props) {
  return <Gallery paintings={galleryArr} />;
}
