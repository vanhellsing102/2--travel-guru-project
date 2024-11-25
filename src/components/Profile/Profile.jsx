import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../ContextProvider/ContextProvider";

import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Profile = () => {
    const { logOut } = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
            .then(result =>{
                console.log(result.user);
            })
            .catch(error =>{
                console.error(error);
            })
    }
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center">
                <button onClick={handleLogOut} className="btn-secondary btn px-10 text-black">Logout</button>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-6">
                <div>

                </div>
                <div>
                    <div style={{ height: '500px', width: '100%' }}>
                        <GoogleMapReact bootstrapURLKeys={{ key: "" }} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
                            <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker"/>
                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;