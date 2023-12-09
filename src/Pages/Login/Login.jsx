import { useContext } from 'react';
import login from '../../assets/others/login.jpg'
import lock from '../../assets/others/Safety_Access_and_Password_Protection_Icon_-removebg-preview.png'
import { AuthContext } from '../../Authentication/Privider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const Login = () => {
    const { SignIn, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    // Loading
    if (loading) {
        return <div className='flex justify-center items-center mt-36'>
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value;
        console.log(email, password);

        SignIn(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    icon: 'success',
                    title: 'Well done',
                    text: 'You registered successully',
                    footer: '<a href="">Thank you</a>'
                });
                navigate('/');
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message} !!`,
                })
            })
    }

    return (
        <div className='mx-5 md:mx-10'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row justify-between">

                    <div className="card flex-shrink-0 max-w-2xl  lg:w-3/5">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div>
                                <img className='w-2/6 mx-auto' src={lock} alt="" />
                                <h1 className='text-center text-5xl font-bold mb-5'>Welcome Back</h1>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Email:</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Password:</span>
                                </label>
                                <input type="password"
                                    name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-black text-white">Login</button>
                            </div>
                        </form>
                        <p className="text-center text-lg  font-medium">Do you already have an account ? <Link className="text-blue-800 font-bold" to="/register">Register</Link></p>
                    </div>

                    <img className='lg:w-1/2' src={login} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login; <h1>Log in</h1>