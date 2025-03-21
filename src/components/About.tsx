const About = () => {
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <div>
      <h1>Sarah Marchioni</h1>
      <img
        src="https://cdn.cosmos.so/5b385dc9-9a33-4f50-b081-3a358e920bc5?format=webp&w=1168"
        className="img-fluid"
        width={250} //TODO size headshot programmatically (adjustable by screen size)
        height={250}
        alt="A weathered painting of an old woman in furs with a pearl necklace"
      ></img>
      <p>
        I'm Sarah I'm like really cool, and my awesome boyfriend made this
        website for me and like he's super cool too!
      </p>

      <p>
        You should like checkout my <a href="/Gallery">Gallery</a> and like also
        maybe my <a href="/Portfolio">Portfolio</a>? Idk. Just an idea.
      </p>

      <p>
        Anyways, I poopy a lot I peepee a bit more often. I'm not into soylent,
        I love Ban Mi. I'm a silver girlie, I like thet smell and look of
        lavender.
      </p>

      <p>
        Right now I'm the solo design team at{" "}
        <a target="_blank" href="https://homebyalexander.com/">
          Home By Alexander
        </a>
        .
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
  );
};

export default About;
