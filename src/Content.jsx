const Content = () => {
  const parStyle = {
    fontFamily: "tahoma",
    fontSize: "1.1rem",
    textAlign: "justify",
  };

  return (
    <main>
      <h2 style={{ color: "white", backgroundColor: "red" }}>REACT JS</h2>
      <p style={parStyle}>React is JS library</p>

      <img
        src="https://cdn.pixabay.com/photo/2023/10/29/01/32/flamingo-8348527_640.jpg"
        alt=""
      />
      <img
        src="https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_1280.jpg"
        alt=""
      />
      <p style={parStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
        perspiciatis!
      </p>

      <h4 style={parStyle}>Bu bir h4</h4>
    </main>
  );
};

export default Content;