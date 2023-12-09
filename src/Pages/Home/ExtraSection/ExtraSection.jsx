import { BsInstagram, BsSend } from "react-icons/bs";
import img1 from '../../../assets/others/marqueen5.jpg'
import img2 from '../../../assets/others/marqueen2.jpg'
import img3 from '../../../assets/others/marqueen3.jpg'
import img4 from '../../../assets/others/marqueen6.jpg'
import user1 from '../../../assets/Blog-writer/insta1.jpg'
import user2 from '../../../assets/Blog-writer/insta2.jpg'
import user3 from '../../../assets/Blog-writer/insta3.jpg'
import user4 from '../../../assets/Blog-writer/insta4.jpg'
import subscribe from '../../../assets/others/subscribe.jpg'
import food from '../../../assets/others/food.jpg'
import travel from '../../../assets/others/travelers.jpg'
import sports from '../../../assets/others/sports.jpg'
import health from '../../../assets/others/health.jpg'
import lifestyle from '../../../assets/others/lifestyle.jpg'

import Marquee from "react-fast-marquee";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { motion } from "framer-motion"


const ExtraSection = () => {

    const handleSubscribe = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        console.log(email)
        Swal.fire({
            icon: 'success',
            title: 'Dear user',
            text: 'Thank you for subscribing to our newsletter',
        });
        event.target.reset();

    }

    return (
        <div className="mx-5 md:mx-10 my-20">

            {/* Extra section 1 start */}
            <div className="bg-[#FCE2CE] p-8 rounded-lg mb-20">
                <h1 className="text-5xl font-bold mb-10 ">Our trending topics</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* 1 */}

                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                                <img src={travel} alt="Shoes" className="rounded-xl" />
                            </motion.div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Travel</h2>
                        </div>
                    </div>



                    {/* 2 */}
                    <div className="">
                        <div className="card  bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                                    <img src={health} alt="Shoes" className="rounded-xl" />
                                </motion.div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Health</h2>
                            </div>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className="">
                        <div className="card  bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                                    <img src={lifestyle} alt="Shoes" className="rounded-xl" />
                                </motion.div>

                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Lifestyle</h2>
                            </div>
                        </div>
                    </div>

                    {/* 4 */}
                    <div className="">
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                                    <img src={food} alt="Shoes" className="rounded-xl" />
                                </motion.div>

                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Food</h2>
                            </div>
                        </div>
                    </div>

                    {/* 5 */}
                    <div className="">
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                                    <img src={sports} alt="Shoes" className="rounded-xl" />
                                </motion.div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Sports</h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>







            <div className="mb-10">
                {/* Extra section 1 */}

                <div className="text-center mb-10">
                    <div className="flex justify-center gap-2">

                        <BsInstagram className="text-3xl"></BsInstagram><span className="text-slate-500 text-lg font-semibold">Follow Us</span>
                    </div>
                    <h2 className="text-4xl font-bold">on Instagram</h2>
                </div>


                <Marquee >

                    {/* 1 */}
                    <div className="card w-96 bg-base-100 shadow-xl mr-14">
                        <figure className="px-10 pt-10">
                            <img src={img1} alt="Shoes" className="rounded-xl mb-6" />
                        </figure>
                        <div className="flex gap-3 mx-10 pb-5">
                            <img className="w-14 rounded-full" src={user1} alt="" />
                            <div>
                                <p>Michael David</p>
                                <p>2 day ago</p>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="card w-96 bg-base-100 shadow-xl mr-14">
                        <figure className="px-10 pt-10">
                            <img src={img2} alt="Shoes" className="rounded-xl mb-6" />
                        </figure>
                        <div className="flex gap-3 mx-10 pb-5">
                            <img className="w-14 rounded-full" src={user2} alt="" />
                            <div>
                                <p>Joseph Thomas</p>
                                <p>1 day ago</p>

                            </div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="card w-96 bg-base-100 shadow-xl mr-14">
                        <figure className="px-10 pt-10">
                            <img src={img3} alt="Shoes" className="rounded-xl mb-6" />
                        </figure>
                        <div className="flex gap-3 mx-10 pb-5">
                            <img className="w-14 rounded-full" src={user3} alt="" />
                            <div>
                                <p>Michael David</p>
                                <p>2 day age</p>
                            </div>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className="card w-96 bg-base-100 shadow-xl mr-14">
                        <figure className="px-10 pt-10">
                            <img src={img4} alt="Shoes" className="rounded-xl mb-6" />
                        </figure>
                        <div className="flex gap-3 mx-10 pb-5">
                            <img className="w-14 rounded-full" src={user4} alt="" />
                            <div>
                                <p>Michael David</p>
                                <p>2 day age</p>
                            </div>
                        </div>
                    </div>

                </Marquee>

                {/* Extra section 1 end */}
            </div>



            <div className="my-20">
                <div className="flex gap-2 ml-10">
                    <BsSend className="text-3xl"></BsSend><span className="text-slate-500 text-lg font-semibold">Subscribe</span>
                </div>
                <h1 className="text-4xl font-bold ml-10">on our Newsletter</h1>

                <form onSubmit={handleSubscribe}>
                    <div className="md:flex items-center justify-center gap-10 mx-auto ">

                        <div className="flex items-end w-3/5 ml-10">
                            <div className="form-control lg:w-1/2 md:w-full gap-0">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold"></span>
                                </label>
                                <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div>
                                <button className="btn bg-black text-white">Subscribe</button>
                            </div>
                        </div>


                        <div className="md:w-3/5 lg:w-2/5">
                            <img className="lg:w-2/3 mx-auto" src={subscribe} alt="" />
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default ExtraSection;