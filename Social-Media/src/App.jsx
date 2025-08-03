import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import CreatePost from "./components/CreatePost.jsx";
import PostList from "./components/PostList.jsx";
import { useState } from "react";
import PostListProvider from "./components/post-list-store.jsx";

function App() {
  const [SelectedTab , setSelectedTab] = useState("Home");
  return (
    <>
    <PostListProvider>
      <div className="App-container">
        <Sidebar SelectedTab={SelectedTab} setSelectedTab={setSelectedTab}></Sidebar>
        <div className="content">
          <Header />

          {SelectedTab === "Home" ? <PostList/> : <CreatePost/>}

          <Footer />
        </div>
      </div>
      </PostListProvider>
    </>
  );
}

export default App;
