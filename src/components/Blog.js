import Link from "next/link";

const Blog = () => {
  return (
    <section
      id="blog"
      data-nav-tooltip="Blog"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Latest Blog.</h3>
        </div>
        <div className="row">
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="/internship">
                  <a>
                    <img src="static/img/fasttrack_codex.jpeg" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">05/JUNE/2023 - ACADEMIC PRACTICUM</div>
                <h6>
                  <Link href="/internship">
                    <a>
                      Fasttrack Solutions Inc. Internship
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="#">
                  <a>
                    <img src="static/img/capstone.jpg" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">01/JUNE/2023 - ACADEMIC CAPSTONE PROJECT</div>
                <h6>
                  <Link href="#">
                    <a>
                      "Hey-Whizzy: A Google Assistant-Based Smart Classroom"
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 read-more-blog text-center">
            <Link href="/blog">
              <a className="px-btn px-btn-theme">More Blogs</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
