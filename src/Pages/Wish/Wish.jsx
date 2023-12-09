import axios from 'axios';
import PropTypes from 'prop-types';
import { AiFillDelete } from "react-icons/ai";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const Wish = ({ wish, wishList, setWishList }) => {
    const { _id, title, category, photo, shortDis } = wish;
    console.log(wish)

    const handleDelete = (deletedId) => {
        console.log(deletedId)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    console.log("Deleted")

                    axios.delete(`https://endless-exploration-server.vercel.app/blog-details/${_id}`)
                        .then(res => {
                            const data = res.data;
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your added product has been deleted.',
                                    'success'
                                )
                                const remaining = wishList.filter(existWish => existWish._id !== _id)
                                setWishList(remaining)
                            }
                        })
                }
            })
    }

    return (
        <div>
            <div className="hero bg-base-200 my-7 p-8 lg:w-2/3 mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={photo} className="md:max-w-sm rounded-lg shadow-2xl" />
                    <div className=''>
                        <h1 className="text-2xl font-bold mb-4">{title}</h1>
                        <p className='text-lg'>#{category}</p>
                        <p className="py-6 text-lg font-semibold">{shortDis}</p>

                        <div className='flex justify-between'>
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" checked />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                            </div>
                            <button onClick={() => handleDelete(_id)} className="btn bg-black text-white">Delete <AiFillDelete className='text-xl'></AiFillDelete></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

Wish.propTypes = {
    wish: PropTypes.object
}

export default Wish;