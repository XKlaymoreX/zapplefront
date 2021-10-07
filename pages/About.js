import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import style from '../styles/Home.module.css'
const About = () => {
    return (
        <div className={style.container}>
            <Head>
            <title>Strapi E-Commerce | About us</title>
            <meta name="description" content="Check new information About Us!
            Discover how a small business turned over the years into a multinational service provider
            and a well-known international E-Commerce provider." />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout >
                <h1>About</h1>
            </Layout>
        </div>
    )
}

export default About
