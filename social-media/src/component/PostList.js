import Post from "./Post";
import { useContext } from 'react';
import { PostList as PostListData } from '../store/poste-list-store';
import Welcomemsg from "./Welcomemsg";

const PostList = () => {
    const { postList, addInitialPosts } = useContext(PostListData);
    const handleGetPostsClick = () => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then((data) => {
                addInitialPosts(data.posts);
            });

    };
    return (
        <>
            {postList.length === 0 && (<Welcomemsg onGetPostsClick={handleGetPostsClick}></Welcomemsg>)}
            {postList.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    );
}
export default PostList;