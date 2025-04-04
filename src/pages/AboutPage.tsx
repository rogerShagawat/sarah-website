import About from "../components/About";
import { AboutObject } from "../types";

interface Props {
  email: string;
}

export default function AboutPage({ email }: Props) {
  const aboutObject: AboutObject = {
    title: "Sarah Marchioni",
    images: [
      {
        file_src: "images/of_sarah/sarah_mirror.jpeg",
        alt: "A selfie of Sarah in the mirror.",
        caption: "Me!",
      },
      {
        file_src: "images/of_sarah/sarah_drill.jpeg",
        alt: "A picture of Sarah drilling.",
        caption: "Me building my chair design in my furniture studio course.",
      },
      {
        file_src: "images/of_sarah/sarah_final_crit.jpeg",
        alt: "A picture of Sarah presenting her final critique.",
        caption: "Me at my final architecture critique at Marywood University!",
      },
    ],
    email: email,
  };
  return <About aboutObject={aboutObject} />;
}
