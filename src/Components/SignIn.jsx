import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { getAuth } from 'firebase/auth';

const SignIn = () => {


    const { loginUser } = useContext(AuthContext);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        loginUser(email, password)
            .then((result) => {

                console.log(result);

            })
            .catch((error) => {
                console.error(error);
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <div className='flex gap-5'>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                    <label className="label">
                                        <p className='label-text-alt'>New here?</p>
                                    </label>
                                    <label className="label">
                                        <a href="/sign-up" className="label-text-alt link link-hover text-blue-600 font-bold">Sign Up</a>
                                    </label>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;