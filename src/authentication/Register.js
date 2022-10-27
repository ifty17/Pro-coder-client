import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import { AuthContext } from './AuthProvider';

const Register = () => {

    const { createUser, updateUserProfile, verifyEmail } =
      useContext(AuthContext);

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        const name = form.name.value;
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
        console.log(email, password, photoURL, name);

        createUser(email, password)
        .then((result) =>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error => console.error(error))
    }

    const handleEmailVerification =() =>{
        verifyEmail()
        .then(() => {})
        .catch((error) => console.log(error));
    }

    const handleUpdateUserProfile = (name, photoURL) => {
      const profile = {
        displayName: name,
        photoURL: photoURL,
      };
      updateUserProfile(profile)
        .then(() => {})
        .catch((error) => console.error(error));
    };


    return (
      <div>
        <div className="hero md:mx-32">
          <div className="hero-content ">
            <div className="card  w-96  shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name='name'
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name='photoURL'
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                </div>
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
                    <Link to={'/login'} className="label-text-alt link link-hover">
                      Already have an account
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;