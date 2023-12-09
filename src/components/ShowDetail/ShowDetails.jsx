import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const ShowDetails = () => {
    const [data,setData] = useState({})
    const {id} =useParams()
    const orginalId = useLoaderData()
    useEffect(()=>{
        const isExits = orginalId?.find(single =>single.id == id);
        setData(isExits)
    },[id,orginalId])

    const {image,name,description} = data || {}
    
    return (
        <div>
            <Navbar></Navbar>
            <img className="h-[700px] w-full mt-10 shadow-2xl" src={image} alt="" />
            <p className="text-5xl font-bold mt-8 mb-8 text-center">{name}</p>
            <p className="text-lg font-medium mb-12 ">{description}</p>

            <Footer></Footer>
        </div>
    );
};

export default ShowDetails;