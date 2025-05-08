import React from 'react';
import JobCard from '../../../Components/JobCard/JobCard';

const Company = ({ datas }) => {
    return (

        <div className='bg-gray-100 flex flex-col justify-center items-center'>
            <h2 className="text-3xl font-bold m-10 ">Company</h2>
            <div className='p-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center'>

                {
                    datas.map((data, idx) => <JobCard key={idx} data={data}></JobCard>)
                }

            </div>
        </div>

    );
};

export default Company;