const express = require('express');
const cors = require('cors');
const app = express();
const PORT=8081
const {randomBooks} = require('./js/utils');

app.use(cors());

app.get('/',(req, res) => {
    res.send(randomBooks(23));
});

app.get('/books',(req, res) => {
    console.log("Requested books");
    res.send(randomBooks(23));
});

app.listen(PORT, ()=>{
    console.log(`On port ${PORT}`);
})
