import { TbListDetails } from "react-icons/tb";
import PropTypes from 'prop-types';
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import axios from "axios";


const Blogs = ({ blogs, blog, setBlog }) => {
    const { _id, title, category, photo, shortDis, longDis } = blogs;
    // const selectedBlog = { title, category, photo, shortDis, longDis }



    // Data send to Backend

    const handleWishlist = (blog) => {
        console.log(blog)

        axios.post('https://endless-exploration-server.vercel.app/wishlist', { title, category, photo, shortDis, longDis })
            .then(res => {
                const data = res.data;
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Blog added your wishlist successfylly',
                        footer: '<a href="">Thank you</a>'
                    })

                    const remaining = blog.filter(blg => blg._id !== _id)
                    setBlog(remaining)

                }

            })

    }


    return (
        <div>
            <div className="card  bg-[#FFF5EF] shadow-xl relative">
                <Link onClick={() => handleWishlist(_id)} to={`/wishlist/${_id}`}>
                    <AiFillHeart className="text-2xl text-rose-700 absolute right-14 top-14 cursor-pointer"></AiFillHeart>
                </Link>

                <figure className="px-10 pt-10"><img className="rounded-xl" src={photo} alt="blog image" /></figure>

                <div className="card-body ">
                    <div className=" ">
                        <h2 className="card-title mb-4">Title: {title}</h2>
                        <p className="text-lg font-semibold text-red-500">#{category}</p>
                    </div>
                    <p className="text-lg">{shortDis}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/blog-details/${_id}`}>
                            <button className="btn bg-black text-white">Details<TbListDetails className="text-xl"></TbListDetails></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Blogs.propTypes = {
    blogs: PropTypes.object
}

export default Blogs;

