var express = require('express');
var app = express();
let PORT = process.env.PORT;

let products = [
    {
        id : "345",
        title: "Lp with fun",
        price : "39.90",
        thumbnail_url : "https://coverfiles.alphacoders.com/677/67774.jpg",
        description : "Описывая это шедевр не получится ",
        url : "https://yorsh.com/mari",
        isDeleted : false
    },
    {
        id : "15",
        title: "Lp",
        price : "Free",
        thumbnail_url : "https://coverfiles.alphacoders.com/677/67774.jpg",
        description : "Useless stuff ",
        url : "https://yorsh.com/mari",
        isDeleted : false
    },
    {
        id : "17",
        title: "Lp",
        price : "500",
        thumbnail_url : "https://coverfiles.alphacoders.com/677/67774.jpg",
        description : "Buy it please",
        url : "https://yorsh.com/mari",
        isDeleted : false
    },
    {
        id : "2222",
        title: "Somebody, help me",
        price : "Free",
        thumbnail_url : "https://coverfiles.alphacoders.com/677/67774.jpg",
        description : "Why we still here, just to suffer",
        url : "https://yorsh.com/mari",
        isDeleted : false
    }
]


app.get('/api/products', function (req, res) {
    res.json(products);
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}!`);
});
