let seed = 6;

const seededRandom = function (min, max) {
    max = max || 1;
    min = min || 0;
    seed = (seed * 9301 + 49297) % 233280;
    let rnd = seed / 233280;
    return min + rnd * (max - min);
}

let pages = [
    {
        title: "Home",
        address: "/",
    }, {
        title: "Books", address: "/books",
        submenu: [
            {
                title: "Catalogue",
                address: "/books/catalogue",
            },
            {
                title: "Fantasy",
                address: "/books/fantasy"
            }, {
                title: "Non-fiction",
                address: "/books/nonfiction"
            },
            {
                title: "Classics",
                address: "/books/classics"
            },
            {
                title: "Gallery",
                address: "/books/gallery"
            }]
    },
    {
        title: "Account",
        address: "/account",
        submenu: [
            {
                title: "Profile",
                address: "/account/profile"
            },
            {
                title: "History",
                address: "/account/history"
            }]
    },
    {
        title: "Contacts",
        address: "/contact",
    }];

function rand(length) {
    let result = '';
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(seededRandom() *
            charactersLength));
    }
    return result;
}


const genres = ["Classics", "Fantasy", "Non-fiction"];
const availArr = [0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]

function randomBooks(cnt) {
    let books = [];
    for (let i = 0; i < cnt; i++) {
        let book = {
            title: i + " " + rand(5),
            author: i + " " + rand(6),
            genre: genres[Math.floor(seededRandom() * genres.length)],
            available: availArr[Math.floor(seededRandom() * 15)],
        };
        books.push(book);
    }
    return books;
}

module.exports = {pages, randomBooks}
