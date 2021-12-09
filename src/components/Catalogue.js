import {useState} from "react";
import dayjs from "dayjs";
import Request from "./Request";

const _ = require('lodash');

function Catalogue(props) {
    const [allBooks] = useState([...props.books]);
    const [books, setBooks] = useState([...allBooks].slice(0, 10));
    const [sortProp, setSortProp] = useState("");
    const [pages, setPages] = useState([...fillPages(1)]);
    const [currentPage, setCurrentPage] = useState("1");
    const [popup, setPopup] = useState({}); //object which represents a book to appear in request popup
    const [byAvailable, setByAvailable] = useState(false);
    const [search, setSearch] = useState("");

    function sort(prop) {
        if (sortProp === prop) {
            setSortProp(`${prop}-`);
            setBooks(_.sortBy(books, prop).reverse());
            return;
        }
        setSortProp(prop);
        setBooks(_.sortBy(books, prop));
    }

    function fillPages(start) {
        if (allBooks.length <= 10) return [];
        const res = [];
        if (start > 1) res.push("<...")
        for (let i = start; i <= Math.min(start + 3, Math.ceil(allBooks.length / 10)); i++) {
            res.push(`${i}`);
        }
        if (Math.ceil(allBooks.length / 10) > 5 && (pages ? !pages.includes(`${Math.ceil(allBooks.length / 10) - 4}`) : true)) {
            res.push('...>');
            //res.push(Math.ceil(allBooks.length / 10));
        }
        return res;
    }

    function handlePagination(page) {
        if (page === "...>") {
            const start = parseInt(pages[pages.indexOf(page) - 1], 10) + 1;
            setPages(fillPages(start));
            return;
        }
        if (page === "<...") {
            const start = parseInt(pages[1], 10) - 4;
            setPages(fillPages(start));
            return;
        }
        setCurrentPage(page);
        setBooks(allBooks.slice(10 * (page - 1), 10 * page));
    }

    function checkAvailable(e) {
        setByAvailable(e.target.checked);
    }

    function searchRespond(request) {
        const result = _.find(allBooks, (obj) => (obj.title === request));
        if (result) alert(`Found "${result.title}" by ${result.author}`);
        else alert("Not found!!!")
    }

    return (
        <div>
            <h2>Catalogue</h2>
            {popup.title ? <Request popup={popup} setPopup={setPopup}/> : ""}
            <form>
                <label>
                    Filter by:    &nbsp;
                    <input onClick={(e) => {
                        checkAvailable(e);
                    }} type={"checkbox"}/>Available
                </label>
                <div className={"search"}>
                    <input onChange={(e) => {
                        setSearch(e.target.value)
                    }} type={"text"} placeholder={"Enter title here"}/>
                    <button onClick={(e) => {
                        searchRespond(search)
                    }} className={"request-book-button"} id={"search-button"}>Search
                    </button>
                </div>
            </form>
            <table className={"book-table"} id={"book-table"}>
                <thead>
                <tr>
                    <th onClick={() => sort('title')} className={"book-header"}>Title</th>
                    <th onClick={() => sort('author')} className={"book-header"}>Author</th>
                    <th onClick={() => sort('genre')} className={"book-header"}>Genre</th>
                    <th onClick={() => sort('available')} className={"book-header"}>Available</th>
                </tr>
                </thead>
                <tbody>
                {
                    (byAvailable ? _.filter(allBooks, obj => obj.available === 0).slice(10 * (currentPage - 1), 10 * currentPage) :
                        books).map((el) => (
                        <tr key={`${el.title}`} className={"book-row"}>
                            <td className={"book-data"}>{el.title}</td>
                            <td className={"book-data"}>{el.author}</td>
                            <td className={"book-data"}>{el.genre}</td>
                            <td className={"book-data"}>{el.available === 0 ?
                                <button onClick={() => setPopup(el)}
                                        className={"request-book-button"}>Request</button> : `${dayjs().add(el.available, "day").format("DD.MM.YY")}: ${el.available} days left`
                            }</td>
                        </tr>
                    ))
                }
                </tbody>

            </table>
            <nav className={"page-nav"}>
                {pages.map((page) => (
                    <a key={`${page}`} className={"page-link"} onClick={() => handlePagination(page)}
                       style={page === currentPage ? {color: '#5c4bde', textDecoration: "underline"} : {}}
                       href={"#book-table"}>{page}</a>
                ))}
            </nav>
        </div>
    );
}

export default Catalogue;
