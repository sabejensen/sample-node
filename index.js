const http = require('http');
const axios = require('axios');
const express = require('express');

let pkmon;
let pkmonSprite;

const getPkData = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/jolteon/')
    .then(function ({ data }) {
        pkmon = data.name;
        pkmonSprite = data.sprites.front_default;
        console.log(pkmonSprite);
        console.log(pkmon);
    })
    .catch(function (error) {
        console.log(error)
    })
};

getPkData();

const app = express();

app.use('/', (req, res, next) => {
    console.log("Hello world");
    res.send(pkmon);
});

app.listen(5000);