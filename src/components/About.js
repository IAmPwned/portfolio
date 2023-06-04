const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-5 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img className="img-fluid" src="static/img/about_me.jpg" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 m-15px-tb">
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
          <div className="col-lg-5 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>AUGUST 2019 – PRESENT</span>
                <h6>Bachelor of Science in Information Technology</h6>
                <p>Mapúa Malayan Colleges Laguna</p>
                <p className="ml-3 text-muted">{'>'} President's Lister</p>
                <p className="ml-3 text-muted">{'>'} Dean's Lister</p>
                <p className="ml-3 text-muted">{'>'} Full Academic Scholar</p>
                <p className="ml-3 text-muted">{'>'} Former Mapúa MCL-ACM Member</p>
                <p className="ml-3 text-muted">{'>'} Former Mapúa MCL-JISSA Member</p>
              </li>
              <li>
                <span>JUNE 2017 – MARCH 2019</span>
                <h6>Senior High School (ICT - MAWD)</h6>
                <p>Systems Technology Institute Southwoods</p>
                <p className="ml-3 text-muted">{'>'} With Honors</p>
              </li>
              <li>
                <span>JUNE 2010 – MARCH 2017</span>
                <h6>Grade School - Junior High School</h6>
                <p>Caritas Don Bosco School</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p className="text-justify">
                I possess a diverse skill set in various areas of technology. In IoT, I am proficient in Arduino and C++, allowing me to develop and integrate sensors and actuators into IoT projects. For web design, I have expertise in Bootstrap, Tailwind CSS, Daisy UI, HTML5, and CSS3, enabling me to create visually appealing and responsive web designs. In web development, I am skilled in React JS, Svelte, C# ASP.NET, Java, and PHP, providing me with the ability to build dynamic and scalable web applications. Additionally, I have experience in mobile application development using Java, Kotlin, C#, and Xamarin, allowing me to create cross-platform mobile apps. With this broad range of skills, I am well-equipped to undertake various projects and deliver high-quality solutions.
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
                  <img src="static/img/cloudtech_icon.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Oracle Netsuite Technical Consultant Intern</h6>
                  <label>CloudTech | Remote | April 2023 - Present</label>
                  <div className="rb-time">Internship</div>
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
                  <img src="static/img/fasttrack_icon.jpg" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>CODEX Program Intern</h6>
                  <label>Fasttrack Solutions Inc. | Remote | April 2023 - Present</label>
                  <div className="rb-time">Internship</div>
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
                  <img src="static/img/mapua_ccis.jpg" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>IoT Developer and Implementor</h6>
                  <label>Mapúa MCL | Remote | Dec 2022 - June 2023</label>
                  <div className="rb-time">Capstone Project</div>
                  <p>
                    In the project "Hey-Whizzy: A Google Assistant-Based Smart Classroom," I developed and integrated IoT system modules using Arduino, ensuring a successful implementation. I also designed prototype hardware and improved the web application's front end with ReactJS, enhancing the user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/mapua_ccis.jpg" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Web Designer and Developer</h6>
                  <label>Mapúa MCL | Remote | Feb 2021 - March 2021</label>
                  <div className="rb-time">Course Project</div>
                  <p>
                    In the project "eMerch," I designed a responsive front-end interface using HTML, CSS, and Bootstrap, improving the user experience across devices. I developed a real-time back-end system using ASP.NET, managed the MSSQL database, and implemented robust security measures for web and database systems. Overall, my contributions to "eMerch" resulted in an enhanced user experience, a scalable database, and improved security.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/linearworks_icon.jpg" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>IT Staff Intern</h6>
                  <label>Linearworks Corporation | Onsite | Jan 2019 - March 2019</label>
                  <div className="rb-time">Internship</div>
                  <p>
                    During my internship at Linearworks Corporation in Carmona, Philippines, I worked in the IT Department. I successfully managed and resolved system issues, collaborated on system enhancements, and contributed to improving the network infrastructure. It was a valuable experience that allowed me to apply my skills and make meaningful contributions to the company's IT operations.
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
