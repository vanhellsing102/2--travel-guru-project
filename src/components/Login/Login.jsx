import { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextProvider/ContextProvider';


const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);

        signIn(email, password)
            .then(result =>{
                const loginUser = result.user;
                console.log(loginUser);
                navigate('/profile')
            })
            .catch(error =>{
                console.error(error)
            })
        
    }
    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleLogin} className="md:w-1/3 mx-auto w-full mt-20">
                <div className="form-control">
                    <input type="email" name='email' placeholder="email" className="border-b border-black outline-none " required />
                </div>
                <div className="form-control">
                    <input type="password" name='password' placeholder="password" className="border-b border-black outline-none mt-4" required />
                    <label className="label mt-4">
                        <div className='flex items-center gap-2 justify-center'>
                            <input type="checkbox" required/>
                            <p className='text-[16px]'>Remember me</p>
                        </div>
                        <a href="#" className="label-text-alt link link-hover text-[#F9A51A] text-[16px]">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#F9A51A]">Login</button>
                </div>
            </form>
            <p className='text-center mt-3'>Don't have an accout ? <Link to={'/register'} className='text-[#F9A51A]'>Create Account</Link></p>
            <div className="divider my-6">OR</div>
            <button className='px-20 py-3 border-black border rounded-full flex items-center gap-10 mx-auto'><FaGoogle></FaGoogle><span>Continue With Google</span></button>
        </div>
    );
};

export default Login;