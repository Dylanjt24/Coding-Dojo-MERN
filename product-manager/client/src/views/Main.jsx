import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {
    const [products, setProducts] = useState();
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }, [refresh])

    const reload = ()=>{
        setRefresh(!refresh);
    }

    return (
        <div>
            <ProductForm reload={reload} />
            <hr/>
            {products && <ProductList products={products} />}
        </div>
    )
}

export default Main