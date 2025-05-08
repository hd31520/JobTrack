import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, NavLink } from 'react-router';
import logoimg from '../../assets/logo (2).png'

const Navbar = () => {

    const navlink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login </NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>




        <li><NavLink to="/">SignOut</NavLink></li>


    </>

    return (
        <div className="navbar bg-base-200 shadow-sm">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl"><img className='h-10' src={logoimg} alt="" /></Link>
            </div>
            <div className="flex-none">

                <div className="dropdown dropdown-end flex gap-2">
                    <div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {
                                    navlink
                                }
                            </ul>
                        </div>

                    </div>

                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <GiHamburgerMenu />
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

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