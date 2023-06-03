const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img ">
                <div className="img-in">
                  <style jsx>{`
                    @media (min-width: 1200px) {
                    .about-img {
                      max-width: 100%;
                      height: 720px;
                    }`
                    }
                  </style>
                  <img className="img-fluid about-img" src="static/img/about_me.jpg" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  {`I'm`} an aspiring <b className="text-primary">Software Developer</b> and <b className="text-danger">Cybersecurity Professional</b>{" "}
                </h3>
                <p className="text-justify">
                  {`I'm`} Mark Anthony Zaraspe, a web and mobile developer based in Laguna, Philippines. I have a passion for technology, and I particularly enjoy creating web and mobile applications and working on Internet of Things (IoT)-related projects. In addition, I'm quite interested in cybersecurity, which enables me to make sure that digital systems are secure and protected. With a solid foundation in these fields, I work hard to develop cutting-edge solutions that satisfy clients' expectations and progress technology.
                </p>
                <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">59</span>
                      <div className="media-body">
                        Projects <br />
                        Completed.
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">46</span>
                      <div className="media-body">
                        Satisfied <br />
                        Clients.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#">
                    <span>Contact Me</span>
                  </a>
                  <a className="px-btn px-btn-theme" href="#">
                    <span>Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Education &amp; Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>AUGUST 2019 – PRESENT</span>
                <h6>Bachelor of Science in Information Technology</h6>
                <p>Mapua Malayan Colleges Laguna</p>
              </li>
              <li>
                <span>JUNE 2017 – MARCH 2019</span>
                <h6>Senior High School (ICT - MAWD)</h6>
                <p>Systems Technology Institute Southwoods</p>
              </li>
              <li>
                <span>JUNE 2010 – MARCH 2017</span>
                <h6>Grade School - Junior High School</h6>
                <p>Caritas Don Bosco School</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-8 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p className="text-justify">
                In terms of technology, I'm skilled in a variety of platforms, including Arduino, C++, Bootstrap, Tailwind CSS, Daisy UI, HTML5, CSS3, React JS, Svelte, C# ASP.NET, Java, PHP, Java, Kotlin, C#, and Xamarin. I can construct IoT projects, visually appealing web designs, dynamic web applications, and cross-platform mobile apps with these abilities. I am prepared to take on a variety of projects and offer top-notch solutions.
              </p>
              <div className="skill-lt">
                <h6>IoT (Arduino, C++)</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "95%" }}>
                    <span data-toggle="tooltip" title="95%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Web Design (Bootstrap, Tailwind CSS, Daisy UI, HTML5, CSS3)</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "70%" }}>
                    <span data-toggle="tooltip" title="70%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Web Development (React JS, Svelte, C# ASP.NET, Java, PHP)</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "85%" }}>
                    <span data-toggle="tooltip" title="85%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Mobile Application Development (Java, Kotlin, C#, Xamarin)</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "65%" }}>
                    <span data-toggle="tooltip" title="65%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a1.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Front-end Developer</h6>
                  <label>WeLab | Remote | Jan 2019 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a2.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Front-end Developer</h6>
                  <label>WeLab | Remote | Jan 2019 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a3.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Front-end Developer</h6>
                  <label>WeLab | Remote | Jan 2019 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
