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
        caption: "Das me!",
      },
      {
        file_src: "images/of_sarah/sarah_drill.jpeg",
        alt: "A picture of Sarah drilling.",
        caption: "Here I am working on a project.",
      },
      {
        file_src: "images/of_sarah/sarah_final_crit.jpeg",
        alt: "A picture of Sarah presenting her final critique.",
        caption: "Here I am presenting my final critique!",
      },
    ],
    email: email,
  };
  return <About aboutObject={aboutObject} />;
}
