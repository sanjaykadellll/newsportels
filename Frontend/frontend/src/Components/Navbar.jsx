import React,{ useState } from "react";  
import { Outlet, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${year}-${month}-${date}`;
}
const Navbar = () => {
  const { t } = useTranslation();
  
   const [currentDate, setCurrentDate] = useState(getDate());
  return (
    <>
      <header className="mt-0 pt-0">
        <div className="bg-cover clearfix pt-3">
          <h2 className="logo">Shahala</h2>
          <nav className="nav nav-fill mx-auto">
            <li className="nav-item mx-auto ">
              <p className="nav-link">{currentDate}</p>
            </li>
            <div></div>
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
          </nav>
          <input
            type="text"
            id="nav-search  "
            className=" form-control nav-search mx-auto"
          />{" "}
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
                    <Link to="/News" className="nav-link">
                      {t("news")}
                    </Link>
                   
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
                    <button
                      className="  head-btn"
                      onClick={() => i18n.changeLanguage("en")}
                    >
                      Eng
                    </button>
                    <button
                      className="  head-btn"
                      onClick={() => i18n.changeLanguage("nep")}
                    >
                      नेपा
                    </button>
                  </li>
                  <li className="nav-item">
                    <Link to="/signin">
                      <button>Login</button>
                    </Link>{" "}
                  </li>

                  <li className="nav-item">
                    <form action="" method="POST">
                      <div
                        className="input-group mt-0 mx-auto"
                        style={{ width: "16px" }}
                      >
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

export default Navbar
