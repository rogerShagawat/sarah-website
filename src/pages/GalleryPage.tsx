import Gallery from "../components/Gallery";
import NavBar from "../components/NavBar";
import { NavBarObject, PaintingObject } from "../types";

interface Props {
  galleryArr: PaintingObject[];
}

export default function GalleryPage({ galleryArr }: Props) {
  return <Gallery paintings={galleryArr} />;
}
