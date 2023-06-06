import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Stack from "../src/components/Stack";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});
const IndexGlitch = () => {
  return (
    <Layout>
      {" "}
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="glitch-box">
          <div
            className="glitch"
            style={{ backgroundImage: "url(static/img/cover.jpg)" }}
          />
        </div>
        <div className="home-banner-01 glitch-home">
          <div className="container">
            <div className="row full-screen align-items-center justify-content-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <div className="img">
                    <img src="static/img/main.jpg" title="" alt="" />
                  </div>
                  <h1 className="font-alt">Mark Anthony Zaraspe</h1>
                  <p className="lead">
                    I Am An Aspiring <TypingAnimation />
                  </p>
                  <div className="nav justify-content-center social-icons">
                    <a href="https://www.facebook.com/ska08ter/">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://twitter.com/_MarkZaraspe">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="https://www.instagram.com/mrk.zrsp/">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/mark-anthony-zaraspe-3212b5267/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                  <br></br>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="#">
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <br></br>
      <br></br>
      <br></br>
      </section>
      {/* End Home */}
      {/* about us */}
      <About />
      {/* End about us */}
      {/* Tech Stack */}
      <Stack />
      {/* End Tech Stack */}
      {/* Portfolio */}
      {/* <Portfolio /> */}
      {/* End Portfolio */}
      {/* Blog */}
      <Blog />
      {/* End Blog */}
      {/* Contact us */}
      <Contact />
    </Layout>
  );
};
export default IndexGlitch;
