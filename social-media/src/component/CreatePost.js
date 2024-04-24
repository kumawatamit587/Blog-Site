import { useRef, useContext } from 'react'
import { PostList as PostListData } from '../store/poste-list-store';

const CreatePost = () => {
    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        const userId = userIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
        const reactions = reactionsElement.current.value;
        const tags = tagsElement.current.value.split(' ');
        addPost(userId, postTitle, postBody, reactions, tags);
        userIdElement.current.value = ""
        postTitleElement.current.value = ""
        postBodyElement.current.value = ""
        reactionsElement.current.value = ""
        tagsElement.current.value = ""
    }
    const { addPost } = useContext(PostListData);

    return (
        <form className="create-post" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="userid" className="form-label">User Id</label>
                <input type="text" ref={userIdElement} className="form-control" id="userid" placeholder="Your user id..." />
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="How are you feeling today..." />
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Post Contant</label>
                <textarea type="text" ref={postBodyElement} row="4" className="form-control" id="body" placeholder="Your post contant..." />
            </div>

            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">Number Of reactions</label>
                <input type="text" ref={reactionsElement} className="form-control" id="reactions" placeholder="how much reaction come..." />
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Enter Hashtags</label>
                <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Enter hashtag using space." />
            </div>
            <button type="submit" className="btn btn-primary">Post</button>
        </form>
    );
}
export default CreatePost;