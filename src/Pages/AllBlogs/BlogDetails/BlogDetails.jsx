import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Authentication/Privider/AuthProvider";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { BiSolidSend } from "react-icons/bi";
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'





const BlogDetails = () => {
    // const [comment, setComment] = useState('')
    const { loading, user } = useContext(AuthContext)
    // console.log(user)
    const blog = useLoaderData([])
    const { _id, title, category, photo, longDis, shortDis } = blog

    // console.log(blog)

    // Loading
    if (loading) {
        return <div className='flex justify-center items-center mt-36'>
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    const handleComment = (event) => {
        event.preventDefault();
        const form = event.target;
        const comment = form.text.value;


        // Send Comment Backend
        axios.post('https://endless-exploration-server.vercel.app/comments', { comment, user })
            .then(res => {
                const data = res.data;
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Thank you for your comment',
                    })
                    form.reset()
                }

            })

    }



    return (
        <div className="px-5 md:px-10 lg:w-3/4 mx-auto">
            <div className="flex-col md:flex-row gap-8">
                <img className="md:w-1/3 mb-2 rounded-lg" src={photo} alt="" />

                <div className="border border-black rounded-lg p-5">
                    <h1 className="text-2xl font-bold mb-3">Blog Title: {title}</h1>
                    <h3 className="text-xl font-semibold mb-2">Category: {category}</h3>
                    <p className="mb-2"><span className="text-lg font-semibold">Short Discription:</span> {shortDis}</p>
                    <p>{longDis}</p>

                    <div className="flex justify-between items-center">
                        <Link to='/allblogs'>
                            <button className="btn bg-black text-white mt-3"><AiFillCaretLeft className="text-lg"></AiFillCaretLeft> Go Back</button>
                        </Link>

                        {/* Update Button */}
                        <Link to={`/update-blog/${_id}`}>
                            <button className="btn bg-black text-white mt-3">Update Blog<AiFillCaretRight className="text-lg"></AiFillCaretRight></button>
                        </Link>
                    </div>
                </div>
            </div>


            {/* Comment Section */}
            {<div className="mt-14 relative">
                <form onSubmit={handleComment}>
                    <textarea name="text" cols="100" placeholder="Comment Here...." rows="7" className="bg-base-200 border rounded border-black w- md:w-1/2 lg:w-3/4"></textarea>
                    <button className="btn absolute bottom-2 md:left-72 lg:left-[873px] bg-black text-white ">Comment <BiSolidSend className="text-lg"></BiSolidSend></button>
                </form>
            </div>}

        </div>
    );
};

export default BlogDetails;