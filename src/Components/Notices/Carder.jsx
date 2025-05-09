import React from 'react';
import { Link } from 'react-router';

const carder = ({ item }) => {
    console.log(item)
    return (
        <div>


            <div className="border p-4 rounded shadow-sm flex justify-between items-center bg-white">
                <div>
                    <p className="text-3xl font-bold">{item.name}</p>
                    <p className="text-sm text-gray-500">
                        Published Date: {item.jobs[0]?.published || 'Date not available'}
                    </p>
                    {item.jobs[0]?.requirements?.length > 0 && (
                        <div className=" text-gray-800 text-xl mb-2  rounded">
                            {item.jobs[0].requirements.map((ites, index) => (
                                <span key={index} className="block">{ites}</span>
                            ))}
                        </div>
                    )}
                </div>
                <div>
                    <Link className='btn btn-primary' to={`/company/${item.id}`}>Details</Link>
                </div>
            </div>



        </div>
    );
};

export default carder;