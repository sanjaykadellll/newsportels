import React from 'react'

const Gallery = () => {
  return (
    <>
    <div className="row vr-gallery">
                <div className="col-md-8 mb-4">
                    <div className="row">
                        <div className="col-md-12 col-lg-7 pr-0 pd-md">
                            <img src="assets/images/gallery-img1.png" alt=""/>
                        </div>
                        <div className="col-md-12 col-lg-5 light-bg cus-pd cus-arrow-left">
                            <p><small>march 27, 2020</small></p>
                            <h3>Trendy Summer
                                Fashion</h3>
                            <p>
                                To take a trivial example, which of us ever undertakes laborious physical exercise,
                                except to obtain some advantage from it? But who has any right to find fault with a man
                                who chooses...
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 pl-4 mb-4">
                    <div className="card">
                        <img className="card-img h-100" src="assets/images/video-cover1.jpg" alt=""/>
                        <div className="card-img-overlay opacity text-center">
                            <a className="play-1" href="https://www.youtube.com/watch?v=vpO8sZDxOGI"><img
                                    src="assets/images/play-icon.png" alt=""/></a>
                            <h5 className="card-title">Weekend In Boston</h5>

                        </div>
                    </div>
                </div>

                <div className="col-md-8 mb-4 pr-0 pd-md">
                    <div className="card">
                        <img className="card-img h-100" src="assets/images/gallery-img2.jpg" alt=""/>
                        <div className="card-img-overlay">
                            <div className="contact-box">
                                <p><small>march 27, 2020</small></p>
                                <h3>Trendy Summer
                                    Fashion</h3>
                                <p>To take a trivial example, which of us ever undertakes laborious physical exercise,
                                    some advantage from it? fault with a man who chooses...</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 pl-4 mb-4">
                    <div className="card">
                        <img className="card-img-top" src="assets/images/gallery-img3.jpg" alt=""/>
                        <div className="card-body bg-gray cus-pd2 cus-arrow-up">
                            <p><small>march 27, 2020</small></p>
                            <h3>Trendy Summer
                                Fashion</h3>
                            <p>To take a trivial example, which of us ever undertakes laborious physical exercise, some
                                advantage from it? fault with a man who chooses...</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-8 mb-4">
                    <div className="row">
                        <div className="col-md-12 col-lg-7 pr-0 pd-md">
                            <img src="assets/images/gallery-img4.jpg" alt=""/>
                        </div>
                        <div className="col-md-12 col-lg-5 light-bg cus-pd cus-arrow-left">
                            <p><small>march 27, 2020</small></p>
                            <h3>Trendy Summer
                                Fashion</h3>
                            <p>
                                To take a trivial example, which of us ever undertakes laborious physical exercise,
                                except to obtain some advantage from it? But who has any right to find fault with a man
                                who chooses...
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 pl-4 mb-4">
                    <div className="card">
                        <img className="card-img h-100" src="assets/images/video-cover2.jpg" alt=""/>
                        <div className="card-img-overlay opacity text-center">
                            <a className="play-1" href="https://www.youtube.com/watch?v=vpO8sZDxOGI"><img
                                    src="assets/images/play-icon.png" alt=""/></a>
                            <h5 className="card-title">Weekend In Boston</h5>

                        </div>
                    </div>
                </div>

                <div className="col-md-12 text-center">
                    <a href="#" className="btn">LOAD MORE</a>

                </div>
            </div>

        
    
    </>
  )
}

export default Gallery