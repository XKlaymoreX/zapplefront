import React from 'react'
import classname from 'classname'
import Link from 'next/link'

const Navbar = ({className}) => {
    return (

        <nav className={
            classname('navbar navbar-dark bg-dark navbar-expand-lg navbar-light ', className)
        }>
            <Link href="/">
                <a className="navbar-brand ">Zapple</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link href="/Career">
                            <a className="nav-link btn-outline-primary rounded">Career</a>
                        </Link>
                    </li>
                    <li className="nav-item btn-outline-primary rounded">
                        <Link href="/About">
                            <a className="nav-link">About Us</a>
                        </Link>
                    </li>
                    <li className="nav-item btn-outline-primary rounded">
                        <Link href="/Auth">
                            <a className="nav-link">Login</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
