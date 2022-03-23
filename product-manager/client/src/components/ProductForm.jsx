import React, { useState } from 'react'
import axios from "axios"

const CreateForm = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState()
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/products/new`, {title, price, description})
            .then(res=>{
                clearForm()
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors
                const errorArr =[]
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key]["message"])
                }
                setErrors(errorArr)
            })

    }

    const clearForm = () =>{
        setTitle("")
        setPrice()
        setDescription("")
    }

    return (
        <>
            <h1>Product Manager</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" name="price" value={price} onChange={e => setPrice(e.target.value)} />
                </div>
                <div>
                    <label>Description</label>
                    <textarea name="description" cols="30" rows="5" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                </div>
                <button>Create</button>
            </form>
            {
                errors.map((err, i) => (
                    <p key={i} style={{ color: "red" }}>{err}</p>
                ))
            }
        </>
    )
}

export default CreateForm