import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";


const Comments = () => {
    const allComments = useLoaderData([]);


    console.log(allComments)
    return (
        <div>
            <h1>This is comments ok:- {allComments.length}</h1>

            <div>
                {
                    allComments.map(addComment => <Comment
                        key={addComment._id}
                        addComment={addComment}
                    ></Comment>)
                }
            </div>
        </div>
    );
};

export default Comments;