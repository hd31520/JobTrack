import { useEffect, useState } from 'react';
import Carder from './Carder'

const Notices = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([]);
    

    useEffect(() => {
        fetch('/datas.json')
            .then((res) => res.json())
            .then((data) => {

                setData(data)
                setLoading(false)
            });
    }, []);
    // console.log(data)
    if (loading) return <span className="loading loading-bars loading-xl"></span>

    return (
        <div className="p-4 max-w-3xl mx-auto">
            <div className="flex mb-4 text-2xl">
             
                    General Notice
                

            </div>

            <div className="space-y-4">

               {
                data.map(item => <Carder item={item}></Carder>)
               }

            </div>
        </div>
    );
}
export default Notices;