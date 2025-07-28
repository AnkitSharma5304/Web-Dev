import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.jsx";
import Footer from "./components/footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import CreatePost from "./components/CreatePost.jsx";

function App() {
  return (
    <>
      <div className="App-container">
        <Sidebar />
        <div className="content">
          <Header />
          <CreatePost/>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
