import React from 'react'
import Navbar from './Navbar'
import style from '../styles/Layout.module.css'
import Footer from './Footer'


const Layout = (props) => {
    return (
        <>
            <main>
                <Navbar className={
                    style.myNavbar
                }/> {
                props.children
            } </main>
            <Footer />
        </>
    )
}

export default Layout
