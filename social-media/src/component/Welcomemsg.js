const Welcomemsg = ({ onGetPostsClick }) => {
    return <center><h1 className="welcome-message">There are no postes.</h1>
        <button type="button" onClick={onGetPostsClick} className="btn btn-primary">Get Post From Server</button>
    </center>
}
export default Welcomemsg;