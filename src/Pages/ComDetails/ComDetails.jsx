import React, { useEffect, useState } from 'react';
import { BsBuildings } from 'react-icons/bs';
import { CiLocationOn, CiMoneyBill } from 'react-icons/ci';
import { GrUserManager } from 'react-icons/gr';
import { MdDateRange } from 'react-icons/md';
import { TfiBag } from 'react-icons/tfi';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';

const ComDetails = () => {
    const { id } = useParams();
    const [dataer, setData] = useState({})
    // const navigate = useNavigate();





    useEffect(() => {
        fetch('/datas.json')
            .then(res => res.json())
            .then(data => {

                const [result] = data.filter(item => item.id === id);
                setData(result);
              

            })
            
    }, [id]);



    const handleDetails = () => {
        Swal.fire({
            title: "Short Details of this Company",
            html: `
            <div style="border: 1px solid #ccc; width: 100%; padding: 16px; border-radius: 8px; box-shadow: 2px 2px 5px #aaa;">
                <h2 style="margin-top: 0;"><strong>Job Name:</strong>${dataer.jobs[0].title}</h2>
                <p> <strong>Company Name:</strong> : ${dataer.name}</p>
                <p><strong>Description:</strong>${dataer.jobs[0].description}</p>
               
            </div>
  `,

            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Apply "
        }).then((result) => {
            if (result.isConfirmed) {

                window.location.href = dataer.website;

            }
        });
    }



    if (Object.keys(dataer).length === 0) {
        return <span className="loading loading-bars loading-xl"></span>
    }


    return (
        <div className=' space-y-10'>
            <div style={{
                backgroundImage: `url(${dataer.jobs[0].bannerImage})`,
                backgroundSize: 'cover',
                height: '100vh',


                color: 'white'
            }}
                className='flex w-full items-end'>
                <div className='bg-[#111111a1] w-full flex justify-between  items-end  text-white  rounded shadow'>
                    <div className='flex gap-10 flex-col md:flex-row'>
                        <div className='h-56 w-56 border-2 bg-gray-200 border-gray-400 flex justify-center items-center rounded-md p-1'>
                            <img className='
                            rounded-2xl w-full h-full' src={dataer.logo} alt="" />
                        </div>
                        <div className=''>
                            <h3 className="text-3xl">{dataer.jobs[0].title}</h3>
                            <p className='
                    px-2 
                    text-center py-0.5 rounded-2xl text-white bg-green-300
                    '>{dataer.jobs[0].jobType}</p>
                            <h4 className='text-xl text-green-300'>{dataer.name}</h4>

                        </div>
                    </div>
                    <div>
                        <p className='font-light text-xl'>Posted on:{dataer.jobs[0].published}</p>
                    </div>
                </div>
            </div>

            {/* Middl Part */}
            <div className='border-2 border-gray-300 p-5 rounded-md grid grid-cols-2 md:grid-cols-3 justify-between gap-6'>
                <div className='flex gap-2'>
                    <div className='p-3 rounded-full bg-gray-400 h-14 w-14 flex justify-center items-center'>
                        <CiMoneyBill className='h-10 w-10' />
                    </div>
                    <div>
                        <p> Salary</p>
                        <p>{dataer.jobs[0].salary}</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='p-3 rounded-full bg-gray-400 h-14 w-14 flex justify-center items-center'>
                        <TfiBag className='h-10 w-10' />
                    </div>
                    <div>
                        <p> JobType</p>
                        <p>{dataer.jobs[0].jobType}</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='p-3 rounded-full bg-gray-400 h-14 w-14 flex justify-center items-center'>
                        <CiLocationOn className='h-10 w-10' />
                    </div>
                    <div>
                        <p> Location</p>
                        <p>{dataer.location}</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='p-3 rounded-full bg-gray-400 h-14 w-14 flex justify-center items-center'>
                        <GrUserManager className='h-10 w-10' />
                    </div>
                    <div>
                        <p> Vacancies</p>
                        <p>{dataer.jobs[0].haveSeat}</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='p-3 rounded-full bg-gray-400 h-14 w-14 flex justify-center items-center'>
                        <BsBuildings className='h-10 w-10' />
                    </div>
                    <div>
                        <p> workType</p>
                        <p>{dataer.jobs[0].workType}</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='p-3 rounded-full bg-gray-400 h-14 w-14 flex justify-center items-center'>
                        <MdDateRange className='h-10 w-10' />
                    </div>
                    <div>
                        <p> DeadLine</p>
                        <p>{dataer.jobs[0].deadLine}</p>
                    </div>
                </div>



            </div>
            <div className='flex justify-center items-center p-5'>
                <button className='btn btn-primary' onClick={handleDetails}>Details</button>
            </div>

            {/* Bottom */}
            <div className='border-2 border-gray-300 p-5 rounded-md flex flex-col justify-between gap-6'>
                <h3 className="text-2xl font-semibold">Position Summary</h3>
                <p className='p-2'>We are looking for some candidates for the position of {dataer.jobs[0].title}</p>
            </div>
            <div className='border-2 border-gray-300 p-5 rounded-md flex flex-col justify-between gap-6'>
                <h3 className="text-2xl font-semibold">Description</h3>
                <p className='p-2'>{dataer.jobs[0].description}</p>
            </div>
            <div className='border-2 border-gray-300 p-5 rounded-md flex flex-col justify-between gap-6'>
                <h3 className="text-2xl font-semibold">
                    requirements
                </h3>

                <div className='p-2'>
                    {
                        dataer.jobs[0].requirements.map((single, idx) => <li key={idx}>{single}</li>)

                    }
                </div>

            </div>
        </div>
    );
};

export default ComDetails;