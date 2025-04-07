import { AboutObject, ImageObject } from "../types";

interface Props {
  aboutObject: AboutObject;
}

function CreateImageTag(images: ImageObject[], index: number) {
  const { file_src, alt, caption, width = 450 } = images[index];
  return (
    <figure
      key={index}
      className="figure text-center"
      style={{ margin: "15px" }}
    >
      <img
        src={file_src}
        className="img-fluid rounded"
        alt={alt}
        width={width}
      ></img>
      <figcaption className="figure-caption italic fs-6">
        <i>{caption}</i>
      </figcaption>
    </figure>
  );
}

function About({ aboutObject }: Props) {
  const { title, images, email } = aboutObject;
  return (
    <div className="container">
      <h1>{title}</h1>
      <address>
        {"Email: "}
        <a href={"mailto:" + email}>{email}</a>
      </address>

      <div className="row">
        <div className="col-lg-6 col-12">
          <p>Welcome to my website!</p>
          <p>
            My name is Sarah Marchioni, I am an interior architectural designer
            and artist. This is my collection of portfolios- both architectural
            & artistic.
          </p>
          <p>
            I am driven by the intersection of architectural design and the
            human experience. What is a space without its inhabitant? How does
            the human experience shape the spaces we occupy, not just
            individually but as a whole? With my bachelor of interior
            architecture as well as my ongoing experience within the field, I
            aim to explore these concepts through my architectural works. My
            professional experience in art galleries and architectural firms has
            bolstered my perspective of the dance between art and architecture.
          </p>
        </div>

        <div className="col-lg-6 col-12 text-center">
          {CreateImageTag(images, 0)}
        </div>

        <div className="col-lg-6 col-12 ">{CreateImageTag(images, 1)}</div>

        <div className="col-lg-6 col-12">
          <p>
            In my paintings, I am specifically drawn to themes of the feminine
            experience. Throughout history, women's words have been suppressed,
            forcing us to find other ways to prove our existence. One of the
            most powerful tools for that is art. I often struggle to find the
            words to articulate my experience as a woman today. However, I've
            found that the limitations of language can be exceeded through art.
            Painting is the most accurate way for me to portray who I am without
            words.
          </p>
        </div>

        <div className="col-lg-6 col-12">
          <p>
            My journey with my art has been an ever-changing experience. I've
            been practicing art since I was a child, and through high school and
            college I realized my passion for it. For me, art is more than a
            hobby- it's a way for me to exist. My art is a product of my energy
            and experiences.
          </p>

          <p>
            Check out my architecture <a href="Portfolio">portfolio</a> +
            <a href="Gallery">artwork</a>!
          </p>
        </div>

        <div className="col-lg-6 col-12 text-center">
          {CreateImageTag(images, 2)}
        </div>
      </div>
    </div>
  );
}

export default About;
