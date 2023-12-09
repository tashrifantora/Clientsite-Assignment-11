
import PropTypes from 'prop-types';

const FeaturedBlog = ({ featuredBlogs }) => {
    const { photoURL, displayName, title } = featuredBlogs
    console.log(featuredBlogs)


    return (
        <div className="px-5 md:px-10">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-xl'>
                            <th>Image</th>
                            <th>Blog Owner</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody >
                        {/* row 1 */}
                        <tr className='text-lg '>

                            <td className='w-1/3 mx-auto text-left'>
                                <img className='w-14 rounded-full' src={photoURL} alt="" />
                            </td>
                            <td className='w-1/3 mx-auto text-left'>{displayName}</td>
                            <td className='w-1/3 mx-auto text-left'>{title}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

FeaturedBlog.propTypes = {
    featuredBlogs: PropTypes.object
}

export default FeaturedBlog;