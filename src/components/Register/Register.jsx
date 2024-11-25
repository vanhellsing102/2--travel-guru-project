import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../ContextProvider/ContextProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("");

    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const firstName = form.get("fName");
        const lastName = form.get("lName");
        const email = form.get("email");
        const password = form.get("password");
        const confirmPassword = form.get("confirm-password");
        console.log(firstName, lastName);
        

        if(password === confirmPassword){
            createUser(email, password)
                .then(result =>{
                    const registerUser = result.user;
                    console.log(registerUser); 
                    setErrorMessage("");
                    updateProfile(registerUser, {
                        displayName: firstName + lastName
                    })
                })
                .catch(error =>{
                    console.log(error); 
                })
        }
        else{
            setErrorMessage('Please enter same password');
        }

    }
    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleRegister} className="md:w-1/3 mx-auto w-full mt-20">
            <div className="form-control">
                    <input type="text" name='fName' placeholder="First Name" className="border-b border-black outline-none mb-4" required />
                </div>
                <div className="form-control">
                    <input type="text" name='lName' placeholder="Last Name" className="border-b border-black outline-none mb-4" required />
                </div>
                <div className="form-control">
                    <input type="email" name='email' placeholder="email" className="border-b border-black outline-none " required />
                </div>
                <div className="form-control">
                    <input type="password" name='password' placeholder="password" className="border-b border-black outline-none mt-4" required />
                </div>
                <div className="form-control">
                    <input type="password" name='confirm-password' placeholder="Confirm Password" className="border-b border-black outline-none mt-4" required />
                </div>
                {
                    errorMessage && <p className='mt-2 text-red-800'>{errorMessage}</p>
                }
                <div className="form-control mt-6">
                    <button className="btn bg-[#F9A51A]">Register</button>
                </div>
            </form>
            <p className='text-center mt-3'>Already have an accout ? <Link to={'/login'} className='text-[#F9A51A]'>Login</Link></p>
            <div className="divider my-6">OR</div>
            <button className='px-20 py-3 border-black border rounded-full flex items-center gap-10 mx-auto'><FaGoogle></FaGoogle><span>Continue With Google</span></button>
        </div>
    );
};

export default Register;