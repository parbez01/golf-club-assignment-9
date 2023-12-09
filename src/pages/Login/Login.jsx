import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../components/Providers/AuthProvider";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import toast, { Toaster } from "react-hot-toast";



const auth = getAuth(app)



const Login = () => {
    // const [info,setInfo] = useState(null)
    const [registerError, setRegisterError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const { signIn,provider } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    console.log("Log in page Location", location);


    const handleToLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // reset error
        setRegisterError('')
        setSuccessMessage('')

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                // setSuccessMessage('user login successfull')
                toast.success('Successfully Login!')
               
                navigate(location?.state ? location.state : '/')
               
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
                // toast.error("Password does not Match.")

            })
    }

    // google log in

    const handleToGoogleLogin = () => {
     
        signInWithPopup(auth,provider)
        .then(result =>{
          const loggedInUser = result.user;
          console.log(loggedInUser); 
        //   setInfo(loggedInUser)
        })
        .catch(error =>{
            console.error(error)
        })

       
    }


    return (
        <div>

            <Navbar></Navbar>

            <form onSubmit={handleToLogin} className="md:w-3/4 lg:w-1/2 mx-auto bg-base-400 p-10 mt-12 shadow-2xl">

                <div className="form-control">
                    <h2 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-300 via-red-500 to-pink-400 inline-block text-transparent bg-clip-text">Login Now</h2>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" required placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" required placeholder="password" className="input input-bordered" required />

                </div>
                <div className="form-control mt-6">
                    <button className="bg-pink-500 p-3 rounded-xl text-2xl text-white font-bold">Login</button>
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
                <p className="text-center mt-4 text-2xl">Already Have An Account? Please <Link to='/registation'><span className="text-2xl font-bold text-pink-600">Register</span></Link></p>

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

export default Login;