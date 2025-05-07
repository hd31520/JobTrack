import React from 'react';
import './hero.css'
import heroimg from '../../assets/woman-searching-for-job-online-flat-color-detailed-character-vector.png'

const Hero = () => {
    return (
       
            <div className="hero bg-base-200 min-h-screen bg-hero text-white" >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={heroimg}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                       
                    </div>
                </div>
            </div>
       
    );
};

export default Hero;