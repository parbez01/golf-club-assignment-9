import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(console.error(error))
    }


    const Navlinks = <>
        <li className="text-xl"><NavLink to='/'>Home</NavLink></li>
        <li className="text-xl"><NavLink to='/about'>About</NavLink></li>
        <li className="text-xl"><NavLink to='/contact'>Contact</NavLink></li>
        <li className="text-xl"><NavLink to='/login'>Login</NavLink></li>
        <li className="text-xl"><NavLink to='/registation'>Register</NavLink></li>


    </>

    return (
        <div>


            <div className="navbar bg-base-100 shadow-2xl p-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Navlinks}
                        </ul>
                    </div>
                    {/* <p className="lg:text-4xl font-bold">Entertainment Events</p> */}
                    <img className="h-20 w-24 lg:w-40" src="https://i.ibb.co/wWV6Z0t/golf-logo-with-silhouette-of-person-swinging-golf-stick-free-vector.jpg" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user && <div className="lg:flex items-center lg:mr-3">
                        <img className=" h-10 rounded-full mr-2" src={user?.photoURL} alt="" />
                        <h3>{user.displayName}</h3>

                    </div>}
                    {
                        user ? <button onClick={handleSignOut} className="btn btn-error">Log Out</button> : <button className="btn btn-error"><Link to='/login'>Login</Link></button>
                    }

                </div>
            </div>


        </div>
    );
};

export default Navbar;