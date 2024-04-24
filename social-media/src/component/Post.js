import { AiFillDelete } from "react-icons/ai";
import { useContext } from 'react';
import PostList from "./PostList";
import { PostList as PostListData } from '../store/poste-list-store';

const Post = ({ post }) => {
    const { deletePost } = useContext(PostListData);
    return (
        <div className="card post-card">
            <div className="card-body">
                <h5 className="card-title">{post.title}
                    <span key={post.id} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
                        <AiFillDelete />
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </h5>
                <p className="card-text">{post.body}</p>
                {post.tags.map((tag) => (<span key={tag} className="badge text-bg-primary hashtag">{tag}</span>))}
                <div className="alert alert-success reaction" role="alert">
                    This post has been reached by {post.reactions} people.
                </div>

            </div>
        </div>
    );
}
export default Post;