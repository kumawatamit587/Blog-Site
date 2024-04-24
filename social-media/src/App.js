import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './component/Header';
import Footer from './component/Footer';
import Sidebar from './component/SideBar';
import CreatePost from './component/CreatePost';
import PostList from './component/PostList';
import { useState } from 'react'
import PostListProvider from './store/poste-list-store';
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>

      <div className='app-container'>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
        <div className='content'>
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
