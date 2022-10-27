import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import { AuthContext } from './AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
    }

    return (
      <div className="hero md:mx-32">
        <div className="hero-content ">
          <div className="card  w-96  shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name='password'
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link to={'/register'} className="label-text-alt link link-hover">
                    Don't have an account ?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;