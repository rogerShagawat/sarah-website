import Portfolio from "../components/Portfolio";
import { PortfolioObject } from "../types";

export default function PortfolioPage() {
  const portfolioObj: PortfolioObject = {
    file_location: "/pdfs/portfolio.pdf",
    onlline_location:
      "https://drive.google.com/file/d/1EUk21Y2Pa9Gt6YAePe9_VCGLRyBHh5Fv/preview",
    height: "900",
    width: "100%",
  };

  return (
    // TODO add navbar, probably should pass the object in from App.tsx as a prop

    <Portfolio
      file_location={portfolioObj.file_location}
      online_location={portfolioObj.onlline_location}
      height={portfolioObj.height}
      width={portfolioObj.width}
    />
  );
}
