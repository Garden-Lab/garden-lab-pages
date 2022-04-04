import './App.css';
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Abort from "./pages/About";
import NotFound from "./pages/Errors/NotFound";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/blog/*" element={<Blog/>}></Route>
                    <Route path="/abort" element={<Abort/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
