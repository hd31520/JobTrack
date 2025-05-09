import React, { use } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
    const navigate = useNavigate();
    const { singInUser} = use(AuthContext);
    const location = useLocation();
    console.log(location)
    const from = location.state?.from || '/';

    const loginHandle = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        singInUser(email, password)
            .then(() => {
                // Swal.fire(` ${user.displayName} Login Successfully`);
                Swal.fire("Login Successfully!");
               
                navigate(from)
            })
            .catch(error => {
                console.log("Login failed:", error.code, error.message, error)
            })

        console.log(email, password)
    }
    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 to-blue-400">
            <div className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-white/10 backdrop-blur-sm">
                <div className="flex flex-col items-center mb-6">
                    <div className="bg-white/20 rounded-full p-4 mb-2">
                        <FaUserCircle />
                    </div>
                    <h2 className="text-white text-xl tracking-widest"> LOGIN</h2>
                </div>

                <form onSubmit={loginHandle} className="space-y-4">
                    <label className="input input-bordered w-full flex items-center gap-2 bg-white/20 text-white placeholder-white/70">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 12H8m8 0l-4-4m4 4l-4 4"
                            />
                        </svg>
                        <input
                            name='email'
                            type="email"
                            className="grow bg-transparent w-full text-white placeholder-white/80"
                            placeholder="Email ID"
                        />
                    </label>

                    <label className="input input-bordered w-full flex items-center gap-2 bg-white/20 text-white placeholder-white/70">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 11c0-1.657-1.343-3-3-3s-3 1.343-3 3v2h6v-2zM17 14v-2a5 5 0 00-10 0v2h10z"
                            />
                        </svg>
                        <input
                            name='password'
                            type="password"
                            className="grow bg-transparent w-full text-white placeholder-white/80"
                            placeholder="Password"
                        />
                    </label>

                    <div className="flex justify-between items-center text-sm text-white">

                        <Link to='/forget' className="link link-hover text-white/80">Forgot Password?</Link>
                    </div>

                    <button className="btn w-full mt-2 bg-white/30 text-white border-none hover:bg-white/50">
                        LOGIN
                    </button>
                </form>
                <div className='flex flex-col gap-4 py-8'>
                    <button className="btn bg-black text-white border-black">
                        <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                        Login with GitHub
                    </button>

                    {/* Google */}
                    <button className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Login;