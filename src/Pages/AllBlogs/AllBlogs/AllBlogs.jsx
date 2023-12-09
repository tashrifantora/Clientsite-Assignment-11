import { useLoaderData } from "react-router-dom";
import Blogs from "../Blogs/Blogs";
import { useState } from "react";
import { BsSearchHeartFill } from "react-icons/bs";

const AllBlogs = () => {
    const allBlogs = useLoaderData([]);
    const [blog, setBlog] = useState(allBlogs);


    return (
        <div className="px-5 md:px-10">
            <div className="flex-col md:flex-row justify-between items-end mb-14">
                <h1 className="text-3xl font-bold mb-3">Our all <span className="text-5xl">Blogs</span></h1>

                {/* Search */}
                <div>
                    <div className="form-control mb-3">
                        <div className="input-group ">
                            <input type="search" placeholder="Search…"
                                className="input input-bordered lg:w-96" />
                            <button className="btn btn-square">
                                <BsSearchHeartFill className="text-2xl"></BsSearchHeartFill>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Filter */}
                <div className="mr-20">
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Find your blogs</option>
                        <option>Travel</option>
                        <option>Food</option>
                        <option>Health</option>
                        <option>Sports</option>
                        <option>Fashion</option>
                    </select>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    allBlogs.map(blogs => <Blogs
                        key={blogs._id}
                        blogs={blogs}
                        blog={blog}
                        setBlog={setBlog}
                    ></Blogs>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;