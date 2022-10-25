import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:5000/courses")
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])

    return (
        <div>
            {
                categories?.map(category => <p key={category.id}>
                    <Link>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideCategory;