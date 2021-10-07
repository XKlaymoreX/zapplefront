import style from '../styles/Layout.module.css'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={
            style.footer
        }>
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem "></i>Zapple
                            </h6>
                            <p>
                                Discover the best selection of Zapple Products, combined with the newest chip and technologies.

                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <Link href="/">
                                    <a className="text-reset">zPhone</a>
                                </Link>
                            </p>
                            <p>
                                <Link href="/">
                                    <a className="text-reset">ZedBook Pro X1</a>
                                </Link>
                            </p>
                            <p>
                                <Link href="/">
                                    <a className="text-reset">Zed Tag</a>
                                </Link>
                            </p>
                            <p>
                                <Link href="/">
                                    <a className="text-reset">Zed Watch</a>
                                </Link>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <Link href="/">
                                    <a className="text-reset">Home</a>
                                </Link>

                            </p>
                            <p>
                                <Link href="/Career">
                                    <a className="text-reset">Career</a>
                                </Link>

                            </p>
                            <p>
                                <Link href="/About">
                                    <a className="text-reset">About</a>
                                </Link>

                            </p>
                            <p>
                                <Link href="/Auth">
                                    <a className="text-reset">Login</a>
                                </Link>

                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p>
                                <i className="fas fa-home me-3"></i>
                                New York, NY 10012, US</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p>
                                <i className="fas fa-phone me-3"></i>
                                + 01 234 567 88</p>
                            <p>
                                <i className="fas fa-print me-3"></i>
                                + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center p-4">
                © 2021 Copyright:&nbsp;
                <Link href="/">
                    <a className="text-reset fw-bold">ZappleCommerce.com</a>
                </Link>
            </div>
        </footer>
    )
}

export default Footer
