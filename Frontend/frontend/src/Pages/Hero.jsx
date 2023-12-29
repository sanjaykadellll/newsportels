import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Hero = () => {
  return (
    <>
      <div className="container-fluid video-player">
        <div className="container">
          <div className="screen embed-responsive embed-responsive-16by9">
            <iframe
              id="screen"
              src="https://www.youtube.com/embed/YE7VzlLtp-4"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="play-list">
            <OwlCarousel className="owl-carousel owl-carousel4 ">
             
                <div>
                  <div className="card">
                    {" "}
                    <img
                      className="card-img link-img"
                      data-link="https://www.youtube.com/embed/ujPNSC4JllE"
                      src="assets/images/play1.png"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div className="card">
                    {" "}
                    <img
                      className="card-img link-img"
                      data-link="https://www.youtube.com/embed/rMT8CffVFMk"
                      src="assets/images/play2.png"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div className="card">
                    {" "}
                    <img
                      className="card-img link-img"
                      data-link="https://www.youtube.com/embed/bGC9f1Po6Q8"
                      src="assets/images/play3.png"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div className="card">
                    {" "}
                    <img
                      className="card-img link-img"
                      data-link="https://www.youtube.com/embed/yHk_sypSiXU"
                      src="assets/images/play4.png"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div className="card">
                    {" "}
                    <img
                      className="card-img link-img"
                      data-link="https://www.youtube.com/embed/7yoqm-kgKEk"
                      src="assets/images/play5.png"
                      alt=""
                    />
                  </div>
         
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero