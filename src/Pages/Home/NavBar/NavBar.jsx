import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../assets/slack_3800024.png'
import { IoIosArrowForward } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";
// import userLogo from '../../../assets/others/user.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../../Authentication/Privider/AuthProvider';


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()



    const handleLogOut = () => {
        logOut();
        navigate('/login')

    }

    const navLinks = <>
        <li className=' text-base font-semibold'><NavLink to='/'>Home<IoIosArrowForward></IoIosArrowForward>  </NavLink></li>
        <li className='text-base font-semibold'><NavLink to='/addblog'>Add Blog<IoIosArrowForward></IoIosArrowForward> </NavLink></li>
        <li className='text-base font-semibold'><NavLink to='/allblogs'>All Blogs<IoIosArrowForward></IoIosArrowForward></NavLink></li>
        <li className='text-base font-semibold'><NavLink to='/update-blog'>Update Blog<IoIosArrowForward></IoIosArrowForward></NavLink></li>
        <li className='text-base font-semibold'><NavLink to='/featuredblog'>Featured Blogs<IoIosArrowForward></IoIosArrowForward></NavLink></li>
        <li className='text-base font-semibold'><NavLink to='/wishlist'>Wishlist<AiFillHeart className='text-xl text-rose-700'></AiFillHeart> </NavLink></li>
        {
            user?.email ?
                <li className='text-base font-semibold'><button onClick={handleLogOut}>Logout<IoIosArrowForward></IoIosArrowForward> </button></li>
                :
                <li className='text-base font-semibold'><NavLink to='/register'>Register<IoIosArrowForward></IoIosArrowForward> </NavLink></li>
        }

    </>




    return (
        <div className='px-5 lg:px-10'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        <img className="w-10" src={logo} alt="" />
                        <p className='text-xl'> Endless Exploration</p>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown  dropdown-left dropdown-hover">
                        <label tabIndex={0} className=" m-1">
                            {
                                user ?
                                    <img className="w-14 rounded-full" src={user.photoURL
                                    } alt="" />

                                    :
                                    <Link to='/login'>
                                        <button className="btn bg-black text-white">Login</button>
                                    </Link>
                            }
                        </label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>
                                {
                                    user ?
                                        <p className=" text-black text-lg">Email: {user.email}</p>

                                        :
                                        ''
                                }
                            </a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NavBar;