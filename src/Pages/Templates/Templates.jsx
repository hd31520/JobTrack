import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Templates = () => {
    const [datas, setData] = useState([]);
    useEffect(() => {
        fetch('/template.json')
            .then(res => res.json())
            .then(data => {
                setData(data)
                console.log(data)
            })
    }, [])
    return (
        <Link className='grid grid-cols-1 lg:grid-cols-3 gap-10 p-10 bg-base-300'>
            {
                datas.map(data =><div className="card lg:card-side bg-base-100 shadow-sm">
                    <figure className='lg:w-1/2'>
                      
                        <img className='w-full' src={data.profile.photo} alt="Album" />
                    </figure>
                    <div className="card-body lg:w-1/2 overflow-hidden">
                      <h2 className="card-title"><strong>Name:</strong> {data.profile.fullName}</h2>
                      <p><strong>Email:</strong>{data.profile.email}</p>
                      <p><strong>location:</strong>{data.profile.location}</p>
                      <p><strong>phone:</strong>{data.profile.phone}</p>
                      <p><strong>summary:</strong>{data.summary}</p>
                      <p><strong>templateName:</strong>{data.templateName}</p>
                      
                    </div>
                  </div> )
            }

        </Link>
    );
};

export default Templates;