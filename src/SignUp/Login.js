import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import {FaGoogle, FaGithub} from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');

    const { providerLogin, signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate('/');
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })

        
    } 


    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
        
    }


    return (
      <form onSubmit={handleSubmit} className=" mx-8 my-7 md:mx-64">
        <div className="card flex-shrink-0  md:w-96 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
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
                placeholder="Your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link
                  to={"/register"}
                  className="label-text-alt link link-hover"
                >
                  Don't have an account?
                </Link>
              </label>
            </div>
            <div className="form-control ">
              <button className="btn btn-primary mt-3">Login</button>
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-primary mt-3"
              >
                <FaGoogle /> Login with Google
              </button>
              <button className="btn btn-primary mt-3">
                <FaGithub /> Login with GitHub
              </button>
              <span className="text-red-500 mt-3">{error}</span>
            </div>
          </div>
        </div>
      </form>
    );
};

export default Login;