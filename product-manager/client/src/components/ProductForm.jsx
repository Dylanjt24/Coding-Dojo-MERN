import React, { useState } from 'react';
import axios from "axios";

const ProductForm = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/products/new`, {title, price, description})
            .then(res=>{
                props.reload();
                clearForm();
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr =[];
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key]["message"]);
                }
                setErrors(errorArr);
            })

    }

    const clearForm = () =>{
        setTitle("");
        setPrice();
        setDescription("");
    }

    return (
        <div className="container">
            <h1 className="text-center">Product Manager</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="number" name="price" value={price} onChange={e => setPrice(e.target.value)} className="form-control"  />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea name="description" cols="30" rows="5" value={description} onChange={e => setDescription(e.target.value)} className="form-control" ></textarea>
                </div>
                <button className="btn btn-success mt-3">Create</button>
            </form>
            {
                errors.map((err, i) => (
                    <p key={i} style={{ color: "red" }}>{err}</p>
                ))
            }
        </div>
    )
}

export default ProductForm