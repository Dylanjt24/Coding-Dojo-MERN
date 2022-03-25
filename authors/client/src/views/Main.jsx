import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = () => {
    const [authors, setAuthors] = useState();
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err));
    }, [refresh])

    const handleDelete = (deleteId)=>{
        axios.delete(`http://localhost:8000/api/authors/${deleteId}/delete`)
            .then(res=>{
                setAuthors(authors.filter(author => author._id != deleteId));
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="text-center">
            <Link to="/new">Add an author</Link>
            <p>We have quotes by:</p>
            <table className="table table-striped table-bordered" style={{width: "50rem", margin: "auto"}}>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors &&
                            authors.map((author, i) => (
                                <tr key={i}>
                                    <td>{author.name}</td>
                                    <td>
                                        <Link to={`/${author._id}/edit`}  className="btn btn-primary">Edit</Link>
                                        <button onClick={()=>handleDelete(author._id)} className="btn btn-danger ms-3">Delete</button>
                                    </td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main