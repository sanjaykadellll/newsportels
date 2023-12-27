import React from 'react'

const Home = () => {
  return (
    <>
      <header className="mt-0 pt-0">
        <div className="bg-cover clearfix pt-3">
          <h2 className="logo">Shahala</h2>
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
                    <a className="nav-link" href="article.html">
                      NEWS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="article.html">
                      HISTORY
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      CULTURE
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      TECH
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      LIFE
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      OPINION
                    </a>
                  </li>
                  <li className="nav-item">
                    <form action="" method="POST">
                      <div className="input-group mt-0 mx-auto" style={{width:'16px'}}>
                        <div className="">
                          <img
                            src="assets/images/search-icon.png"
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
        </div>

      </header>
    </>
  );
}

export default Home