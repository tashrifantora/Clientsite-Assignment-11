import Slider1 from '../../../assets/Slider/pexels-chan-walrus-958545.jpg'
import Slider2 from '../../../assets/Slider/medium-shot-people-running-together.jpg'
import Slider3 from '../../../assets/Slider/rear-view-back-young-asian-hiking-man-standing-riseup-hands-with-happy-peak-rocky-mountain-copy-space.jpg'
import Slider4 from '../../../assets/Slider/pexels-jane-doan-1099680.jpg'
import bloger1 from '../../../assets/Blog-writer/bloger1.jpg'
import bloger2 from '../../../assets/Blog-writer/bloger2.jpg'
import bloger3 from '../../../assets/Blog-writer/bloger3.jpg'
import bloger4 from '../../../assets/Blog-writer/bloger4.jpg'


const Slider = () => {
    return (
        <div className="px-5 lg:px-10 mx-auto">
            <div className="carousel w-full h-auto md:h-[650px] bg-[#FFF5EF]" >
                <div id="slide1" className="carousel-item relative w-full">

                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src={Slider1} className="max-w-xl lg:max-w-2xl rounded-lg shadow-2xl" />
                            <div>
                                <h1 className='text-3xl md:text-5xl font-bold mb-5'>Best Blogs according <br /> to 2023!!</h1>
                                <p className='text-base  md:text-lg mb-5 overflow-hidden'>Discover a world of flavors with .This blog is a celebration of diverse cuisines, recipes, and culinary experiences. Explore international dishes, cooking techniques, and ingredient spotlights. From restaurant reviews to seasonal recipes and food travel adventures, we share the joy of cooking, dining, and exploring the cultural and historical aspects of food. Learn from our cooking tips, nutritional insights, and food and wine pairing suggestions.</p>
                                <div className='flex items-center gap-3'>
                                    <img className="w-14 rounded-full" src={bloger1} alt="" />
                                    <p className='text-lg font-semibold'>Mark Boob</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">


                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src={Slider2} className="max-w-2xl rounded-lg shadow-2xl" />
                            <div>
                                <h1 className='text-3xl md:text-5xl font-bold mb-5'>Best Blogs according <br /> to 2023!!</h1>
                                <p className='text-lg mb-5'>Discover a world of flavors with .This blog is a celebration of diverse cuisines, recipes, and culinary experiences. Explore international dishes, cooking techniques, and ingredient spotlights. From restaurant reviews to seasonal recipes and food travel adventures, we share the joy of cooking.</p>
                                <div className='flex items-center gap-3'>
                                    <img className="w-14 rounded-full" src={bloger2} alt="" />
                                    <p className='text-lg font-semibold'>Filar Ham</p>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">

                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src={Slider3} className="max-w-2xl rounded-lg shadow-2xl" />
                            <div>
                                <h1 className='text-3xl md:text-5xl  font-bold mb-5'>Best Blogs according <br /> to 2023!!</h1>
                                <p className='text-lg mb-5'>Discover a world of flavors with .This blog is a celebration of diverse cuisines, recipes, and culinary experiences. Explore international dishes, cooking techniques, and ingredient spotlights. From restaurant reviews to seasonal recipes and food travel adventures, we share the joy of cooking, dining, and exploring the cultural and historical aspects of food. Learn from our cooking tips, nutritional insights, and food and wine pairing suggestions.</p>
                                <div className='flex items-center gap-3'>
                                    <img className="w-14 rounded-full" src={bloger3} alt="" />
                                    <p className='text-lg font-semibold'>Wiliam Bent</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">

                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src={Slider4} className="max-w-2xl rounded-lg shadow-2xl" />
                            <div>
                                <h1 className='text-3xl md:text-5xl  font-bold mb-5'>Best Blogs according <br /> to 2023!!</h1>
                                <p className='text-lg mb-5'>Discover a world of flavors with .This blog is a celebration of diverse cuisines, recipes, and culinary experiences. Explore international dishes, cooking techniques, and ingredient spotlights. From restaurant reviews to seasonal recipes and food travel adventures, we share the joy of cooking, dining, and exploring the cultural and historical aspects of food. Learn from our cooking tips, nutritional insights, and food and wine pairing suggestions.</p>
                                <div className='flex items-center gap-3'>
                                    <img className="w-14 rounded-full" src={bloger4} alt="" />
                                    <p className='text-lg font-semibold'>Piaro Key</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;