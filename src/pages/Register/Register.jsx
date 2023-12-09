/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../components/Providers/AuthProvider";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast, { Toaster } from "react-hot-toast";




const auth = getAuth(app)


const Register = () => {
    const [registerError, setRegisterError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [showPass, setShowPass] = useState(false)
    const { createUser, provider } = useContext(AuthContext)


    const handleToRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        if (password.length < 6) {
            setRegisterError('Password is less than 6 characters')
            // toast.error("This didn't work.")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case character.')
            return;
        }
        else if (!/[!@#$%^&*]/.test(password)) {
            setRegisterError('Your password should have at least one special character.')
            return;
        }

        // reset error
        setRegisterError('')
        setSuccessMessage('')

        // create User
        createUser(email, password)
            .then(result => {
                console.log(result.user);

                toast.success('Successfully Registration!')


            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
            })
    }

    // google loging
    const handleToGoogleLogin = () => {

        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }


    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleToRegister} className="md:w-3/4 lg:w-1/2 mx-auto bg-base-400 p-10 mt-12 shadow-2xl rounded-xl">

                <div className="form-control">
                    <h2 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Register Now</h2>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="text" required placeholder="name" className="input input-bordered" />
                </div>


                <div className="form-control">

                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" required placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>

                    <div className="relative">
                        <input
                            type={showPass ? 'text' : "password"}
                            name="password"
                            required
                            placeholder="password"
                            className="input input-bordered w-full"
                            required />
                        <span className="absolute mt-4 right-2" onClick={() => setShowPass(!showPass)}>
                            {
                                showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>


                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary bg-sky-600">Register</button>
                </div>

                {
                    registerError && <p className="text-red-600 text-xl text-center mt-10">{registerError}</p>
                }
                {
                    successMessage && <p className="text-green-600 text-xl text-center mt-10">{successMessage}</p>
                }

                <div className="text-center mt-4 mb-4 lg:mt-10" data-aos="zoom-in" data-aos-duration="2000">
                    <button onClick={handleToGoogleLogin} className=" flex ml-20 lg:ml-[260px] items-center  gap-2 bg-blue-500 p-3 text-xl text-white font-bold rounded-xl"><img className="h-6" src="https://i.ibb.co/5BGkz8r/google-icon-2048x2048-czn3g8x8.png" alt="" />Google Login</button>
                </div>
                <p className="text-center mt-4 text-2xl">Are you new to website? Please <Link to='/login'><span className="text-2xl font-bold text-pink-600">Login</span></Link></p>
            </form>



            <div>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </div>

        </div>
    );
};

export default Register;