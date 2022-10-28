import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import {FaGoogle, FaGithub} from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { providerLogin, signIn, githubLogin } = useContext(AuthContext);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || '/';

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
            navigate(from , {replace: true});
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })
    } 


    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
          .then((result) => {
            const user = result.user;
            setError("");
            console.log(user);
          })
          .catch((error) => {
            console.error(error);
            setError(error.message);
          });
        
    }

    const gitHubProvider = new GithubAuthProvider();
    const handleGitHubSignIn = () =>{
      githubLogin(gitHubProvider)
        .then((result) => {
          const user = result.user;
          setUser(user);
          console.log(user);
        })
        .catch((error) => {
          console.error(error);
          setError(error.message);
        });

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
              <button className="text-green-700 block hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800  mt-3 ">
                Login
              </button>
              <button
                onClick={handleGoogleSignIn}
                className="text-green-700 block hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800  mt-3"
              >
                <div className="flex items-center justify-center gap-2">
                  <FaGoogle />
                  <span>Login with Google</span>
                </div>
              </button>
              <button
                onClick={handleGitHubSignIn}
                className=" text-green-700 block hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 mt-3"
              >
                <div className="flex items-center justify-center gap-2">
                  <FaGithub />
                  <span>Login with GitHub</span>
                </div>
              </button>
              <span className="text-red-500 mt-3">{error}</span>
            </div>
          </div>
        </div>
      </form>
    );
};

export default Login;