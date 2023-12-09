import PropTypes from 'prop-types';

const Comment = ({ addComment }) => {
    console.log(addComment)
    // const { comment } = addComment;

    return (
        <div className="px-5 md:px-10">

            <div className='flex  gap-3 border rounded-lg mb-8 p-6 w-2/3'>
                <img className='w-12 rounded-full' src={addComment?.user?.photoURL} alt="" />
                <div>
                    <h3 className='text-xl font-semibold'>{addComment?.user?.displayName
                    }</h3>
                    <p>{addComment?.comment}</p>
                </div>
            </div>
        </div>
    );
};

Comment.propTypes = {
    addComment: PropTypes.object
}

export default Comment;