var express = require('express');
var app = express();
let PORT = process.env.PORT;

let products = [
    {
        authorName : 'Igor',
        name : "Lp with fun",
        price : "39.90",
        thumbnail : "https://coverfiles.alphacoders.com/677/67774.jpg",
        description : "Описывая это шедевр не получится ",
        url : "https://yorsh.com/mari"
    },
    {
        authorName : 'nameLessPoc',
        name : "Lp",
        price : "Free",
        thumbnail : "https://coverfiles.alphacoders.com/677/67774.jpg",
        description : "Useless stuff ",
        url : "https://yorsh.com/mari"
    },
    {
        authorName : 'John Pon',
        name : "Lp",
        price : "500",
        thumbnail : "https://coverfiles.alphacoders.com/677/67774.jpg",
        description : "Buy it please",
        url : "https://yorsh.com/mari"
    },
    {
        authorName : 'Spam',
        name : "Somebody, help me",
        price : "Free",
        thumbnail : "https://coverfiles.alphacoders.com/677/67774.jpg",
        description : "Why we still here, just to suffer",
        url : "https://yorsh.com/mari"
    }
]


app.get('/api/products', function (req, res) {
    res.json(products);
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}!`);
});
