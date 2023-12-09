import { useContext } from 'react';
import register from '../../assets/others/register.jpg'
import { AuthContext } from '../../Authentication/Privider/AuthProvider';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import googleLogo from '../../assets/others/googleLogo.png'


const Register = () => {
    const { createUser, googleRegister, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    // Loading
    if (loading) {
        return <div className='flex justify-center items-center mt-36'>
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const photo = from.photo.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name, photo, email, password)

        // Password varification 
        if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'your password should have at least 6 character or longer !!'
            })
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'your password should have at least 1 capital letter',
            });
            return
        }
        else if (!/[-/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You also have provide a special character'
            })
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)

                // Update Profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        console.log('profile updated')
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                // Update Profile end
                Swal.fire({
                    icon: 'success',
                    title: 'Well done',
                    text: 'You registered successully',
                    footer: '<a href="">Thank you</a>'
                });
                navigate(location.state ? location.state : '/')

            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message} !!`,
                })
            })
    }

    // Google Register
    const handleGoogle = () => {
        googleRegister()
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    icon: 'success',
                    title: 'Well done',
                    text: 'Your google sign up successful',
                    footer: '<a href="">Thank you.</a>'
                })
                navigate(location.state ? location.state : '/')
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

                    <div className="card flex-shrink-0 max-w-2xl  md:w-4/5 lg:w-3/5">

                        <form onSubmit={handleRegister} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Name:</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Photo:</span>
                                </label>
                                <input type="photo" name='photo' placeholder="photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Email:</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Password:</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-black text-white">Register</button>
                            </div>

                            <div className="divider mt-5">OR</div>
                        </form>
                        <div className="form-control mt-3">

                            <button onClick={handleGoogle} className="btn bg-black text-white">
                                <img className='w-7 ' src={googleLogo} alt="" />
                                Google
                            </button>
                        </div>
                        <p className="text-center text-lg  font-medium mt-4">Do you already have an account ? <Link className="text-blue-800 font-bold" to="/login">Login</Link></p>
                    </div>

                    <img className='md:w-2/3 lg:w-1/2' src={register} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;