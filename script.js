const apiKey = "172a4f01880fa7b20a14153c0933ba4c";

const input = document.getElementById("movieInput");
const button = document.getElementById("searchBtn");
const moviesDiv = document.getElementById("movies");

button.addEventListener("click", searchMovie);

function searchMovie(){

const query = input.value.trim();

if(!query) return;

const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

fetch(url)
.then(response => response.json())
.then(data => {

moviesDiv.innerHTML = "";

data.results.forEach(movie => {

const poster = movie.poster_path
? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
: "";

const card = `
<div class="movie-card">
<img src="${poster}">
<h3>${movie.title}</h3>
<p>⭐ ${movie.vote_average}</p>
<p>${movie.release_date || ""}</p>
</div>
`;

moviesDiv.innerHTML += card;

});

});

}

window.addEventListener("load", loadTrending);

function loadTrending(){

const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

fetch(url)
.then(response => response.json())
.then(data => {

moviesDiv.innerHTML = "";

data.results.forEach(movie => {

const poster = movie.poster_path
? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
: "";

const card = `
<div class="movie-card">
<img src="${poster}">
<h3>${movie.title}</h3>
<p>⭐ ${movie.vote_average}</p>
</div>
`;

moviesDiv.innerHTML += card;

});

});
}