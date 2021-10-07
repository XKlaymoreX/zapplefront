import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import ProductsGrid from '../components/ProductsGrid'
import axios from 'axios'
import React from 'react'


export default function Home(products) {
    return (
        <div className={
            styles.container
        }>
            <Head>
                <title>Zapple E-Commerce | Home</title>
                <meta name="keywords" content="Cristian George Hoza Zapple, Zapple Products, Zapple Store, Zapple E-Commerce, Zapple Strapi" />
                <meta name="author" content="Cristian George Hoza"/>
                <meta key="desc" name="description" content="Welcome to our E-Commerce website.
                                                                     We are authorized Apple resellers.
                                                                    Website developed with Strapi.Js and Next.Js.
                                                                    Author:Cristian George Hoza, Actual position covered: Team Leader & CEO at StrapiCommerce in Switzerland."/>
                
                <meta key="desc" property="og:description" content="Welcome to our E-Commerce website.
                                                                     We are authorized Apple resellers.
                                                                    Website developed with Strapi.Js and Next.Js.
                                                                    Author:Cristian George Hoza, Actual position covered: Team Leader & CEO at StrapiCommerce in Switzerland."/>
                
                <meta property="og:title" content="Zapple E-Commerce Home" />
                
                <link rel="icon" href="/favicon.ico"/>
                <meta name="robots" content="all" />
            </Head>
            <Layout>
                <section className={
                    styles.imageSection
                }>
                    <img src={process.env.ENVIRONMENT === 'development' ? process.env.DEV_STRAPI.concat('uploads/pexels_cottonbro_4065906_548b19917c.jpg') : process.env.PROD_STRAPI.concat('uploads/pexels_cottonbro_4065906_548b19917c.jpg')} width="100%" alt="Devices, Home Background images, Cristian Hoza, ZedPhone, ZedBook Pro"></img>
                    <h2>Zapple. Best Tech Ever.</h2>
                    <h6>Check our products down below!</h6>
                </section>
                <section> 
                   <ProductsGrid products={products.data} /> 
                   <ProductsGrid products={products.data} /> 
                </section>
            </Layout>
        </div>
    )
}


export const getStaticProps = async () => {

    const data = (await axios.get(process.env.ENVIRONMENT === 'development' ? process.env.DEV_STRAPI.concat('products') : process.env.PROD_STRAPI.concat('products') )).data

    return {props: {
            data
        },
        revalidate:10
    }
}
