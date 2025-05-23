import React, { use } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, NavLink } from 'react-router';
import logoimg from '../../assets/logo (2).png'
import './navbar.css'
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, loading, signOutUser } = use(AuthContext);


    const handleSignOut = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't SygnOut!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, SygnOut !"
        }).then((result) => {
            if (result.isConfirmed) {

                signOutUser()
                    .then(() => {
                        console.log("signOut SuccessFully")
                        Swal.fire({
                            title: "SyngOut Successfully!",
                            text: "Successfully",
                            icon: "success"
                        });
                    })
                    .catch(error => {
                        console.log(error)
                    })

            }
        });



    }

    const navlink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/templates">Templates</NavLink></li>

        {
            !user ?
                <>
                    <li><NavLink to="/login">Login </NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                </>
                :
                <>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-3 px-2 mx-5'>
                        <buton className="btn btn-warning" onClick={handleSignOut}>LogOut</buton>
                        <div className="w-10 rounded-full">
                            <Link>
                            <img
                                className='w-10 h-10 rounded-full'
                                alt="Tailwind CSS Navbar component"
                                src={user?.photoURL} />
                            </Link>
                            
                        </div>
                    </div>
                </>

        }







    </>

    console.log(user)


    if (loading) return <span className="loading loading-bars loading-xl"></span>

    return (
        <div className="navbar bg-base-200 shadow-sm">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl"><img className='h-10' src={logoimg} alt="" /></Link>
            </div>
            <div className="flex-none">

                <div className="dropdown dropdown-end flex gap-2">
                    <div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal space-x-2.5 px-1">
                                {
                                    navlink
                                }
                            </ul>
                        </div>

                    </div>


                    <div>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <GiHamburgerMenu />
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu space-x-1.5 menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                                {
                                    navlink
                                }
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;