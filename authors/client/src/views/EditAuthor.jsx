import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, Link, useParams } from 'react-router-dom';

const AuthorForm = (props) => {
    const { id } = useParams();
    const [name, setName] = useState(undefined);

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
          .then(res=>{
            setName(res.data.name);
          })
          .catch(err=> console.log(err));
      },[])

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}/edit`, {name})
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
            <p>Edit this author:</p>
            {
                name !== undefined ?
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} className="form-control" />
                    </div>
                    <button type="button" className="btn btn-primary mt-3 me-3" onClick={() => navigate("/")}>Cancel</button>
                    <button className="btn btn-success mt-3">Create</button>
                </form> :
                <div>
                    <p>We're sorry, but we could not find the author you are looking for.</p>
                    <p>Would you like to <Link to="/new">add this author to our database?</Link></p>
                </div>
            }
            {
                errors.map((err, i) => (
                    <p key={i} style={{ color: "red" }}>{err}</p>
                ))
            }
        </div>
    )
}

export default AuthorForm