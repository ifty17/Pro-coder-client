import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideCategory = () => {
    const [categories, setCategories] = useState([]);
    // console.log(categories)

    useEffect(() =>{
        fetch("https://assignment10-server-ifty17.vercel.app/courses")
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])

    return (
      <div>
        {categories?.map((category) => (
          <button
            className="text-green-700 block hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
            key={category.id}
          >
            <Link to={`/courses/${category.id}`}>{category.name}</Link>
          </button>
        ))}
      </div>
    );
};

export default LeftSideCategory;