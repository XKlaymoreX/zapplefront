import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import style from '../styles/Home.module.css'

const Career = () => {
    return (
        <div className={style.container}>
            <Head>
            <title>Strapi E-Commerce | Career</title>
            <meta name="description" content="Check our jobs opportunities for you!" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout >
                <h1>Career</h1>
            </Layout>
        </div>
    )
}

export default Career
