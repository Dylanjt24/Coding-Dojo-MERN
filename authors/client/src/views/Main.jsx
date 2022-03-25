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

    const reload = ()=>{
        setRefresh(!refresh);
    }

    return (
        <div>
            <Link to="/new">Add an author</Link>
            <p>We have quotes by:</p>
            <table>
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
                                <tr>
                                    <td>{author.name}</td>
                                    <td>TBD</td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main