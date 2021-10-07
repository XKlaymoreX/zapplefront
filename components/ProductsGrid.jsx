import React from 'react'
import classname from 'classname'
import style from '../styles/Home.module.css'
import Product from './Product'
import {v4 as uuid} from 'uuid'


const ProductsGrid = ({products}) => {
    return (
        <div className={
            style.productsGrid
        }>

            {
            products.map(product => {
                return (
                    <Product key={product.id} productAlt={product.alt} productId={product.uid} productImage={'http://localhost:1337'.concat(product.img.url)} cardTitle={product.Name} cardText={product.Price.toString().concat(' CHF')} />
                    );
            })
        }

        </div>
    )
}

export default ProductsGrid
