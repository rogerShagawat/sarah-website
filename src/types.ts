export type NavBarObject = {
  displayName: string;
  link?: string;
};

export type PortfolioObject = {
  file_location: string;
  onlline_location: string;
  height: string;
  width: string;
};

export type PaintingObject = {
  title: string;
  file_src: string;
  alt: string;
  medium?: string;
  real_dimensions?: string;
  year_created?: string;
  description?: string;
  shop_location?: string;
  dimensions?: { height: number; width: number };
};

export type ImageObject = {
  file_src: string;
  alt: string;
  caption: string;
  height?: number;
  width?: number;
};

export type AboutObject = {
  title: string;
  images: ImageObject[];
};
