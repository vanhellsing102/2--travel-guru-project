import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Booking = () => {
    const [travels, setTravels] = useState([]);
    useEffect( () =>{
        fetch('travel.json')
            .then(res => res.json())
            .then(data => setTravels(data))
    }, [])

    console.log(travels);
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                {
                    travels.map(area => <div className="border rounded-2xl border-stone-600 p-8" key={area.id}>
                        <h1 className="text-center font-semibold text-3xl mb-3">{area.areaName}</h1>
                        <img className="rounded-2xl" src={area.photo} alt="" />
                        <p className="my-2 ">{area.description}</p>
                        <Link to={`/destination/${area.id}`}><button className="btn btn-md bg-[#F9A51A] text-center">Book Now</button></Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Booking;