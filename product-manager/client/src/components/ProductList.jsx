import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = (props) => {
    const { products } = props

    const handleDelete = (deleteId)=>{
        axios.delete(`http://localhost:8000/api/products/${deleteId}/delete`)
            .then(res=>{
                props.reload()
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container text-center">
            <h1>All Products:</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, i) => (
                            <tr>
                                <td key={i}><Link to={`/${product._id}`}>{product.title}</Link></td>
                                <td>
                                    <Link to={`/${product._id}/edit`}  className="btn btn-primary">Edit</Link>
                                    <button onClick={()=>handleDelete(product._id)} className="btn btn-danger ms-3">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductList