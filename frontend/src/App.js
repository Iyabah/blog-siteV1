import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Posts";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import NotFound from "./components/NotFound";
//import logo from './logo.svg';
import './App.css';
//import Header from "./components/Header.js";
//import Footer from "./components/Footer.js";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="*" element={<NotFound/>} />
        <Route path="Contact"element={<Contact/>} />
        <Route path="About" element={<About/>} />
        <Route path="SignIn" element={<SignIn/>} />
      </Routes>
    </Router>
  );
}
export default App;