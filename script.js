'use strict';
let numberOfFilms = +prompt("How many films you wathed?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let firstQuestion = prompt("Один из последних просмотренных фильмов?", ""),
    secondQuestion = prompt("На сколько оцените его?", "");

personalMovieDB.movies[firstQuestion] = secondQuestion;

console.log(personalMovieDB);