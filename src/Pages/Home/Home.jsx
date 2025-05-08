import React, { useEffect, useState } from 'react';
import Hero from '../../Components/Hero/Hero';
import HowItWorks from '../../Components/HowItsWork/HowItsWork';
import JobCard from '../../Components/JobCard/JobCard';
import Company from './company/Company';

const Home = () => {
    const [datas, setDatas] = useState([])



    useEffect(() => {
        fetch('datas.json')
            .then(res => res.json())
            .then(data => {
                setDatas(data)
               
            })
    }, [])
    return (
        <div>
            <Hero></Hero>
            <HowItWorks></HowItWorks>
           <Company datas={datas}></Company>
            
        </div>
    );
};

export default Home;