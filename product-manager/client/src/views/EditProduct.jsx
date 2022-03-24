import React,{useEffect, useState} from 'react';
import axios from "axios";
import { useNavigate, useParams, Link } from 'react-router-dom';

const EditProduct = () => {
  const {id} = useParams();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(res=>{
        const product = res.data;
        setTitle(product.title);
        setPrice(product.price);
        setDescription(product.description);
      })
      .catch(err=> console.log(err));
  },[])


  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.put(`http://localhost:8000/api/products/${id}/edit`,{title, price, description})
      .then(res=>{
        navigate("/");
      })
      .catch(err=>{
        const errorResponse = err.response.data.errors
        const errorArr = []
        for( const key of Object.keys(errorResponse)){
          errorArr.push(errorResponse[key]["message"]) 
        }
        setErrors(errorArr)
      })
  }

  return (
    <div className="container">
        <nav style={{textAlign: "center"}}>
            <Link to="/">Home</Link>
        </nav>
        <h1 className="text-center">Edit Product</h1>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" name="title" value={title} onChange={e=>setTitle(e.target.value)} className="form-control"/>
        </div>
        <div className="form-group">
          <label>Price</label>
          <input type="number" name="price" value={price} onChange={e=>setPrice(e.target.value)} className="form-control"/>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="description" cols="30" rows="5" value={description} onChange={e=>setDescription(e.target.value)} className="form-control"></textarea>
        </div>
        <button className="btn btn-success mt-3"> Submit</button>
      </form>
      {
        errors.map((err, i)=>(
            <p key={i} style={{color:"red"}}>{err}</p>
        ))
      }
    </div>
  )
}

export default EditProduct