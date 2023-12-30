import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="container-fluid jumbotron-fluid stay mt-5 pt-5 pb-5">
        <h2 className="text-center">Stay Updated</h2>
        <p className="text-center mt-2">Sign up for our newsletter to receive the latest news and event postings.</p>
        <div className="input-group mt-4 mx-auto" style={{maxWidth: "640px"}}>
            <input type="email" className="form-control" placeholder="YOUR EMAIL ADDRESS"/>
            <div className="">
                <button className="btn btn-success ml-2" type="submit">SIGN UP</button>
            </div>
        </div>
    </div>
      <footer className="container-fluid pt-5">
        <div className="container">
          <h2 className="logo text-center">Shahala</h2>
          <nav className="nav nav-fill mx-auto mt-5">
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
                href="https://facebook.com/fh5co"
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
        </div>
        <div className="copyright mt-4">
          <p className="text-center">
            &copy; 2019{" "}
            <a href="#" className="text-white">
              Shahala
            </a>
            . All Rights Reserved. Design by{" "}
            <a
              href="https://freehtml5.co/shahala"
              target="_blank"
              className="text-white"
            >
              FreeHTML5.co
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
} 

export default Footer