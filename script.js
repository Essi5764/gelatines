const searchTerm = document.querySelector('.search');
const searchTerm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const section = document.querySelector('.section');

fetch("https://calendarific.com/api/v2/holidays?&api_key=1f6488a51cbcda469c89ba19cab95f0265e7f167&country=US&year=2021")
    .then((res) => res.json())
    .then(function (json) {
        console.log(json)
        display(json)
    })
    .catch((err) => console.log(err))