import React, { useState } from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

const AuthorForm = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/authors/new`, {name})
            .then(res=>{
                navigate("/");
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

    return (
        <div className="container text-center">
            <Link to="/">Home</Link>
            <p>Add a new author:</p>
            {
                errors.map((err, i) => (
                    <p key={i} style={{ color: "red" }}>{err}</p>
                ))
            }
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} className="form-control" />
                </div>
                <button type="button" className="btn btn-primary mt-3 me-3" onClick={() => navigate("/")}>Cancel</button>
                <button className="btn btn-success mt-3">Create</button>
            </form>
        </div>
    )
}

export default AuthorForm