import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            handleUpdateUserProfile(name, photoURL)
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })

    } 

    const handleUpdateUserProfile = (name, photoURL) =>{
        const profile = {
            displayName: name,
            photoURL : photoURL 
        }
        updateUserProfile(profile)
        .then(() =>{})
        .catch(error => console.error(error))
    }

    const handleAccepted = event =>{
        setAccepted(event.target.checked)
    }


    return (
      <form onSubmit={handleSubmit} className=" mx-8  md:mx-64">
        <div className="card flex-shrink-0  md:w-96 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Your Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your email password"
                className="input input-bordered"
              />
              <label className="label">
                <Link to={"/login"} className="label-text-alt link link-hover">
                  Already have an account?
                </Link>
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <input onClick={handleAccepted} type="checkbox" className="checkbox checkbox-accent" />
                <Link to={"/terms"}>
                  <span className="label-text mr-40 underline">
                    Terms & conditions
                  </span>
                </Link>
              </label>
            </div>
            <div className="form-control ">
              <button className="btn btn-primary mt-3" disabled={!accepted}>Register</button>
            </div>
            <span className="text-red-500 mt-3">{error}</span>
          </div>
        </div>
      </form>
    );
};

export default Register;