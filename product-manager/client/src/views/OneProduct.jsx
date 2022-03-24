import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom"

const OneProduct = () => {
  const {id} = useParams() // destructure the id from params
  const [product, setProduct] = useState()
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(res=>setProduct(res.data))
      .catch(err=> console.log(err))
  },[])

  const handleDelete = (deleteId)=>{
    axios.delete(`http://localhost:8000/api/products/${deleteId}/delete`)
        .then(res=>{
            navigate("/");
        })
        .catch(err => console.log(err))
  }

  return (
      <>
        <nav style={{textAlign: "center"}}>
            <Link to="/">Home</Link>
        </nav>
        {
            product ?
                <div className="container text-center mt-5">
                    <h1>{product.title}</h1>
                    <p>Price: ${product.price}</p>
                    <p>Description: {product.description}</p>
                    <Link to={`/${product._id}/edit`}  className="btn btn-primary">Edit</Link>
                    <button onClick={()=>handleDelete(product._id)} className="btn btn-danger ms-3">Delete</button>
                </div> :
                <h1>Loading...</h1>
        }
      </>
  )
}

export default OneProduct