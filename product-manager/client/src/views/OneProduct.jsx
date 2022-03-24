import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams, Link } from "react-router-dom"

const OnePet = () => {
  const {id} = useParams() // destructure the id from params
  const [product, setProduct] = useState()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(res=>setProduct(res.data))
      .catch(err=> console.log(err))
  },[])

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
                </div> :
                <h1>Loading...</h1>
        }
      </>
  )
}

export default OnePet