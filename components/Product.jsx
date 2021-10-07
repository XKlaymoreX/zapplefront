import React from 'react'

const Product = ({
    productId = "",
    cardTitle = "Default Title",
    cardText = "Default Text",
    linkTo = "/Product/",
    productAlt = "Product Alt",
    productImage = "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d"
}) => {
    return (
    <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src={productImage} width="100%" height="250px" style={{objectFit:'cover'}} alt={productAlt} />
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">{cardText}</p>
                <a href={linkTo.concat(productId)} className="btn btn-primary">See Detail</a>
            </div>
        </div>
    )
}

export default Product
