import React from "react";  

const Navbar = () => {
  return (
    <>     <header className="mt-0 pt-0">
      <div className="bg-cover clearfix pt-3">
        <h2 id="head-logo" className="logo">
          NAME(LOGO)
        </h2>
        <nav className="nav nav-fill mx-auto">
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://facebook.com/fh5co"
              target="_blank"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://twitter.com/fh5co"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fab fa-google-plus-g"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-rss"></i>
            </a>
          </li>
        </nav>

        <input
          type="text"
          id="nav-search"
          className="nav-search mx-auto form-control"
          name=""
         
        />
        <div className="ml-0 mr-0 pb-1">
          <nav className="navbar navbar-expand-md">
            <button
              className="navbar-toggler ml-auto"
              data-target="#my-nav"
              data-toggle="collapse"
              aria-controls="my-nav"
              aria-expanded="false"
     
              aria-label="Toggle navigation"
            >
              <span className="bar1"></span> <span className="bar2"></span>{" "}
              <span className="bar3"></span>
            </button>
            <div id="my-nav" className="collapse navbar-collapse">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a
                    data-translate="news"
                    className="nav-link"
                    href="{% url 'home' %}"
                  >
                    NEWS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    data-translate="sports"
                    className="nav-link"
                    href="{% url 'sports' %}"
                  >
                    SPORTS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    data-translate="blogs"
                    className="nav-link"
                    href="{% url 'blogs' %}"
                  >
                    BLOGS
                  </a>
                </li>
                <li className="nav-item">
                  <a data-translate="tech" className="nav-link" href="#">
                    TECH
                  </a>
                </li>
                <li className="nav-item">
                  <a data-translate="life" className="nav-link" href="#">
                    LIFE
                  </a>
                </li>
                <li className="nav-item">
                  <a data-translate="opinion" className="nav-link" href="#">
                    OPINION
                  </a>
                </li>
                <li className="nav-item">
                  <button className="head-btn">
                    English
                  </button>
                  <button className="head-btn" >
                    नेपाली
                  </button>
                </li>

                <li className="nav-item">
                  <form action="" method="POST">
                    <div
                      className="input-group mt-0 mx-auto"
                      style={{width:'16px;'}}
                    >
                      <div className="">
                        <img
                          src=""
                          id="toggle-search"
                          className="ml-2 toggle-search"
                          alt="search icon"
                        />
                      </div>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <ul className="nav nav-fill mx-auto breadc pb-3">
          <li className="nav-item">
            <a className="nav-link active" href="index.html">
              Home
            </a>
          </li>
          <li>
            <img src="" className="mt-2" alt="" />
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Article
            </a>
          </li>
        </ul>
      </div>
      </header>
    </>
  ); 
};

export default Navbar;
