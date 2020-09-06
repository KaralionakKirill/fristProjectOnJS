'use strict';
let numberOfFilms = +prompt("How many films you wathed?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

function writeYourGenres(){
    for(let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}?`, "");
    }    
}

function askQuestions() {
    for (let i = 0; i < numberOfFilms; i++) {
        let firstQuestion = prompt("Один из последних просмотренных фильмов?", ""),
            secondQuestion = prompt("На сколько оцените его?", "");

        if (firstQuestion.length == 0 || firstQuestion.length > 50 || firstQuestion == null ||
            secondQuestion.length == 0 || secondQuestion == null) {
            console.log("You fucking bitch! Error!");
            i--;
        } else {
            personalMovieDB.movies[firstQuestion] = secondQuestion;
            console.log("You are nice man!");
        }
    }
}

function checkAnswers() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB <= 30) {
        console.log("Вы классический зритель");
    } else if ("Вы киноман") {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

askQuestions();
checkAnswers();
showMyDB(personalMovieDB.private);
writeYourGenres();

console.log(personalMovieDB);