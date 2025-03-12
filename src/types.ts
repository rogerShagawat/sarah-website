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

export type AboutObject = {
  headshot_src: string;
  headshot_alt: string;
  className: string;
  height: number;
  width: number;
};

export type PaintingObject = {
  title: string;
  file_src: string;
  alt: string;
  dimensions?: { height: number; width: number };
};
