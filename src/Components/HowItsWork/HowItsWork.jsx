import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';



const HowItWorks = () => {
    const [steps, setSteps] = useState([])


    useEffect(() => {
        fetch('/steps.json')
            .then(res => res.json())
            .then(data => {
                setSteps(data)

            })
    }, [])
    return (
        <section className="py-16 bg-base-200" id="how-it-works">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-10">How It Works</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {
                        steps.map((step, index) => (
                            <div key={index} className=' flex gap-3 justify-center items-center'>
                                <div className="card bg-base-100 ">



                                    <div tabIndex={0} className="collapse collapse-open bg-base-100 border-base-300 border">
                                        <div className="collapse-title font-semibold">{step.title}</div>
                                        <div className="collapse-content text-sm">
                                            <p>{step.description}</p>
                                        </div>
                                    </div>
                                   
                                </div>
                               
                               <FaArrowAltCircleRight className='h-10 w-10' />
                              
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
