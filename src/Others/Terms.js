import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
      <div>
        <h1>No terms and conditions we just want to irritate you</h1>
        <Link to={"/register"}>
          <button className="btn btn-outline btn-accent underline">
            Go back to Register
          </button>
        </Link>
      </div>
    );
};

export default Terms;