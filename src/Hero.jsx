import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CVS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            doloribus voluptatibus velit sequi cupiditate ut vitae optio ipsum
            neque itaque, a deleniti molestias inventore quo aliquam tempora,
            nobis nam aperiam!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
