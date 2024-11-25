import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Destination = () => {
    const travel = useLoaderData();
    const {id} = useParams();
    const idToNumber = parseInt(id);
    const travelArea = travel.find(area => area.id === idToNumber);
    const {areaName, description } = travelArea;

    
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-14 mt-16 px-16">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-semibold">{areaName}</h1>
                    <p>{description}</p>
                </div>
                <div className="bg-slate-300 p-4 rounded-lg">
                <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Origin</span>
                        </div>
                        <select className="select select-bordered">
                            <option disabled selected>Select</option>
                            <option>Dhake</option>
                            <option>Rangpur</option>
                            <option>Bogra</option>
                            <option>Dinajpur</option>
                            <option>Panchagarh</option>
                        </select>
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Destination</span>
                        </div>
                        <select className="select select-bordered">
                            <option disabled selected>Select</option>
                            <option>Sundarbans Mangrove Forest</option>
                            <option>Cox's Bazar Beach</option>
                            <option>Srimangal</option>
                            <option>Bandarban Hill District</option>
                            <option>Paharpur Buddhist Vihara</option>
                        </select>
                    </label>
                    <div>
                        <Link><button className="btn bg-[#F9A51A] mt-4 w-full hover:bg-amber-200">Start Booking</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;