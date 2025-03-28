import { ImageObject } from "../types";

interface Props {
  title: string;
  images: ImageObject[];
}

function About({ title, images }: Props) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <div className="row align-items-start">
        <div className="col">
          <p>
            I'm Sarah I'm like really cool, and my awesome boyfriend made this
            website for me and like he's super cool too!
          </p>
          <p>
            You should like checkout my <a href="/Gallery">Gallery</a> and like
            also maybe my <a href="/Portfolio">Portfolio</a>? Idk. Just an idea.
          </p>
          <p>
            Anyways, I'm not into soylent, I love Ban Mi. I'm a silver girlie, I
            like thet smell and look of lavender.
          </p>
          <p>
            Right now I'm the solo design team at{" "}
            <a target="_blank" href="https://homebyalexander.com/">
              Home By Alexander.
            </a>
          </p>
          <p>
            Also you should check out my{" "}
            <a
              target="_blank"
              href="https://www.instagram.com/sarahinteriorarchitecture/"
            >
              art page on Instagram
            </a>
          </p>
        </div>
        <div className="col">
          {images.map(({ file_src, alt, caption, width = 500 }, index) => (
            <figure className="figure text-center" style={{ margin: "15px" }}>
              <img
                src={file_src}
                className="img-fluid"
                alt={alt}
                width={width}
              ></img>
              <figcaption className="figure-caption">{caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
