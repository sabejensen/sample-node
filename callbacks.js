/*
const fetchData = callback => {
    setTimeout(() => {
        callback('Done')
    }, 1500)
}

setTimeout(() => {
    console.log('Timer is done!')
    fetchData(text => {
        console.log(text)
    })
}, 2000)

console.log('Hello!')
console.log('Hi!')
*/

const axios = require('axios');

function getPkData() {
    axios.get('https://pokeapi.co/api/v2/pokemon/jolteon/')
    .then(function ({ data }) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error)
    })
}

getPkData()