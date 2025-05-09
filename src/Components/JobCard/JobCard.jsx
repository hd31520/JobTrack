import React from 'react';
import { Link } from 'react-router';

const JobCard = ({ data }) => {
    return (
        <Link to={`/company/${data.id}`} className="card bg-base-100 shadow-2xl w-64 md:w-72 h-64 flex justify-center items-center p-4 transform transition-transform duration-300 hover:scale-105">
            <div >
                <div className='flex justify-between'>

                    <div className='h-20 w-20 rounded-2xl border-2 flex justify-center items-center'>
                        <img className='h-16' src={data.logo} alt="" />
                    </div>
                    <div className='space-y-2 w-1/2'>
                        <p className='px-2 text-center py-0.5 rounded-2xl text-white bg-green-300'>{data.jobs[0].jobType}</p>
                        <p className='text-sm'>salary:{data.jobs[0].salary}</p>
                    </div>

                </div>
                <div className='py-4 flex justify-between items-center'>
                    <div>
                        <h3 className='text-sm font-medium'>{data.name}</h3>
                        <h3 className='text-base font-bold'>{data.jobs[0].title}</h3>
                    </div>

                </div>
            </div>


        </Link>
    );
};

export default JobCard;
