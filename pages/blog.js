import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../src/layout/Layout";
import { getPagination, pagination } from "../src/utilits";
const Blog = () => {
  let sort = 4;
  const [active, setActive] = useState(1);
  const [state, setState] = useState([]);
  useEffect(() => {
    pagination(".blog-list-item", sort, active);
    let list = document.querySelectorAll(".blog-list-item");
    setState(getPagination(list.length, sort));
  }, [active]);

  return (
    <Layout blog>
      <div className="blog-listing" id="blog">
        <div className="container">
          <div className="title text-center">
            <h3>My Blogs</h3>
          </div>
          <div className="row">
            <div className="col-md-6 m-15px-tb blog-list-item">
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
                    <Link href="#">
                      <a>
                        Fasttrack Solutions Inc. Internship
                      </a>
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 m-15px-tb blog-list-item">
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
            <div className="col-12 blog-pagination">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${active == 1 ? "disabled" : ""}`}>
                  <a
                    className="page-link"
                    href="#"
                    tabIndex={-1}
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(active === 1 ? 1 : active - 1);
                    }}
                  >
                    <i className="fas fa-chevron-left" />
                  </a>
                </li>
                {state.map((state, i) => (
                  <li
                    key={i}
                    className={`page-item ${active === state ? "active" : ""}`}
                  >
                    <a
                      className="page-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActive(state);
                      }}
                    >
                      {state} <span className="sr-only">(current)</span>
                    </a>
                  </li>
                ))}
                <li
                  className={`page-item ${
                    active == state.length ? "disabled" : ""
                  }`}
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(
                        active === state.length ? state.length : active + 1
                      );
                    }}
                  >
                    <i className="fas fa-chevron-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Blog;
