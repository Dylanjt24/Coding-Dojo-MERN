import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const DisplayList = (props) => {
    const { products } = props

    return (
        <div className="container text-center">
            <h1>All Products:</h1>
            {
                products.map((product, i) => (
                    <p key={i}><Link to={`/${product._id}`}>{product.title}</Link></p>
                ))
            }
        </div>
    )
}

export default DisplayList