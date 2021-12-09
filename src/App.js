import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import img1 from './assets/aeneid.jpg'
import img2 from './assets/lucretius.jpg';
import img3 from './assets/lucr2.jpg';
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Catalogue from "./components/Catalogue";
import {randomBooks} from './js/utils'
import Header from './components/Header';
import Gallery from "./components/Gallery";
import {useState} from "react";

function App() {
    let images = [img1, img2, img3];
    const [books, setBooks] = useState(randomBooks(212));

    // function data() {
    //     fetch('http://localhost:8081/books')
    //         .then(response => response.json())
    //         .then(data =>
    //             setBooks(data)
    //         ).catch(e=>{console.log("Error: "+e)});
    //     return [];
    //     return [];
    // }

    return (
        <div className="App">
            <Router>
                <Header images={images}/>
                <Routes>
                    <Route exact path="/" element={<Home title={"Home"}/>}/>
                    <Route path="/books" element={<Home title={"Books"}/>}/>
                    <Route path="/books/fantasy" element={<Home title={"Fantasy"}/>}/>
                    <Route path="/books/classics" element={<Home title={"Classics"}/>}/>
                    <Route path="/books/nonfiction" element={<Home title={"Non-fiction"}/>}/>
                    <Route path="/books/catalogue" element={<Catalogue books={books}/>}/>
                    <Route path="/books/gallery" element={<Gallery/>}/>
                    <Route path="/account" element={<Home title={"Account"}/>}/>
                    <Route path="/account/profile" element={<Home title={"Profile"}/>}/>
                    <Route path="/account/history" element={<Home title={"History"}/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </Router>
            <Footer class="footer" copyright={"©Heorhii Sanchenko 2021"}/>
        </div>
    );
}

export default App;
