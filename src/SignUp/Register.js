import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext);

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
        })
        .catch(error => console.error(error))

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
                    name='name'
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
                    name='photoURL'
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
                    name='email'
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
                    name='password'
                    placeholder="Your email password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link
                      to={"/login"}
                      className="label-text-alt link link-hover"
                    >
                      Already have an account?
                    </Link>
                  </label>
                </div>
                <div className="form-control ">
                  <button className="btn btn-primary mt-3">Register</button>
                </div>
              </div>
            </div>
      </form>
    );
};

export default Register;