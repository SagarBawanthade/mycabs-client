import React from 'react';
import '../styles/Footer.css'; 

function Footer() {
    return (
        <div id="footer" >
            <footer className="text-center text-lg-start bg-dark text-light">

                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-light">

                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                    <a href="https://www.instagram.com/mycabservices" className="me-4 text-reset text-light">
                            <i className="fab fa-instagram"></i>
                        </a>
                       
                    </div>

                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 style={{ color: "orange" }} className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-car me-3"></i>Hello Cab
                                </h6>
                                <p>
                                    At Hello Cab, we’re more than just a cab rental service – we’re your ticket to hassle-free travel. With a commitment to reliability, safety, and affordability, we’re here to make every journey a memorable one.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Empty column for spacing */}
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Empty column for spacing */}
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> Aurdi, Pune - 411035</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    sagar@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> +91-9511733122</p>

                            </div>

                        </div>

                    </div>
                </section>

                <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2024 Copyright :
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> HelloCab.com</a>
                </div>

            </footer>
        </div>
    );
}

export default Footer;
