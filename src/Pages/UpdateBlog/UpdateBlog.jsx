import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


const UpdateBlog = () => {
    const updatedBlogs = useLoaderData()
    const { _id, title, category, shortDis, longDis, photo } = updatedBlogs;

    const handleUpdateBlog = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const category = form.category.value;
        const shortDis = form.shortDescription.value;
        const longDis = form.longDescription.value;
        const photo = form.photo.value;
        const UpdatedBlogs = { title, category, shortDis, longDis, photo }
        console.log(UpdatedBlogs)


        // Data posting to backend
        axios.put(`https://endless-exploration-server.vercel.app/blog-details/${_id}`, UpdatedBlogs)
            .then(res => {
                const data = res.data;
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Blog updated successfylly',
                        footer: '<a href="">Thank you</a>'
                    })
                    form.reset()
                }

            })

    }


    return (
        <div className="mx-5 md:mx-10">
            <h2 className="text-4xl font-bold text-center mb-8">Update Your Blog</h2>

            <form onSubmit={handleUpdateBlog}>
                {/* From row  name & category*/}
                <div className="md:flex gap-10 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Blog Title:</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={title} type="text" name="title" placeholder="Title" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Blog Category:</span>
                        </label>
                        <label className="input-group">
                            <select defaultValue={category} className="select select-bordered w-full " name="category">
                                <option value="DEFAULT" disabled selected>Blog type</option>
                                <option value="Food">Travel</option>
                                <option value="Food">Food</option>
                                <option value="Health">Health</option>
                                <option value="Sports">Sports</option>
                                <option value="Fashion">Fashion</option>

                            </select>
                        </label>
                    </div>

                </div>

                {/* From row price & rating */}


                {/* From row description */}
                <div className="md:flex gap-10 mb-8">

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Short description:</span>
                        </label>
                        <label className="input-group w-full rounded border">
                            <textarea defaultValue={shortDis} className=" text-lg pl-3" name="shortDescription" id="" cols="80" rows="6" placeholder="Short..."></textarea>
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Long description:</span>
                        </label>
                        <label className="input-group w-full rounded border">
                            <textarea defaultValue={longDis} className=" text-lg pl-3" name="longDescription" id="" cols="80" rows="6" placeholder="Long..."></textarea>
                        </label>
                    </div>
                </div>

                {/* From row category & details */}
                <div className="mb-8 ">

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">ImageURL:</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={photo} type="photo" name="photo" placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className=" flex justify-center">
                    <input type="submit" value="Update Blog" className="btn  w-2/3  bg-black text-white" />
                </div>



            </form>
        </div>
    );
};

export default UpdateBlog;