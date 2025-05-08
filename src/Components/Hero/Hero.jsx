import React from 'react';

import heroimg from '../../assets/career.jpg'
import { Link } from 'react-router';

const Hero = () => {
    return (
       
            <div className="hero bg-white min-h-screen p-10" >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={heroimg}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Instant Job Finder</h1>
                        <p className="py-6">
                        At MyJobgator our job finder system updates the database every 5 minutes so you are rest assured you will be getting you Dream Job
                        </p>
                        <h1 className="text-3xl font-semibold">Get access to top jobs first</h1>
                        <p className="py-6">
                        At MyJobgator our job finder system updates the database every 5 minutes so you are rest assured you will be getting you Dream Job
                        </p>

                        <Link to="register" className="btn btn-active btn-secondary">Secondary</Link>
                       
                    </div>
                </div>
            </div>
       
    );
};

export default Hero;