import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const Forget = () => {
    const {forgetUser} = use(AuthContext)
    const handleForget = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        forgetUser(email)
        .then(res => {
            Swal.fire("Forget Email Message  Successfully. Cheick your Emaiol!");
            console.log(res)
        })
        .catch(error => {
            Swal.fire("Forget Email Message Not Successfully. Try Again letter!");
            console.log(error)
        })

    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="card w-full max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
                    <p className="text-sm text-center text-gray-500 mb-4">
                        Enter your email and we'll send you a password reset link.
                    </p>

                    <form onSubmit={handleForget}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input
                            name='email'
                                type="email"
                                placeholder="you@example.com"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Send Reset Link
                            </button>
                        </div>
                    </form>

                    <div className="text-center mt-4">
                        <a href="/login" className="link link-primary text-sm">
                            Back to Login
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forget;