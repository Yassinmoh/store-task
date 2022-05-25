import React, { useState, useEffect } from 'react';
import '../style/Categories/categories.css'
import axios from 'axios'
import { Link } from "react-router-dom"



const Categories = () => {

    const [categories, setCategories] = useState([])
    useEffect(() => {
        const getCategory = async () => {
            const res = await axios.get('https://api.publicapis.org/categories')
            setCategories(res.data.categories)
            console.log("res.data", res.data);
        }
        getCategory()
    }, [])
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>All Categories</h1>
            <div className="category__wrapper">
                {categories.map(category =>
                    <div key={Math.random()} className="category__item">
                        <h2>
                            <Link to={`/items/${category}`} >{category}</Link>
                        </h2>
                    </div>
                )}
            </div>
        </>
    )
}

export default Categories