// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {

  let result = array.map(movie => movie.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

let result = array.filter(movie=> movie.director === director);
return result;
} 
  

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  const filterDirector = array.filter(movie => movie.director === director);
  if (filterDirector.length === 0) {
    return 0;
  }
    
  const totalScore = filterDirector.reduce((sum, movie) => sum + movie.score, 0);
  return parseFloat((totalScore / filterDirector.length).toFixed(2));
}
  

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  array.filter((index) => index < 20);
  return array.map(movie => movie.title).sort();
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  let orderAlphabeticMovies = array.sort((a,b) => a.title < b.title ? -1 : 1);
  let orederYear = orderAlphabeticMovies.sort((a,b) => a.year < b.year ? -1 : 1);
  return (orderAlphabeticMovies, orederYear);
};



// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array) {

  let filterGenre = array.filter(movie => movie.genre === genre);
  let result = filterGenre.reduce((total, filter) => total + filter.score, 0);
  return result;
};



// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let filterDuration = array.filter(movie => movie.duration);
  let result = filterDuration.reduce((hours, minutes) =>  hours * 60 + minutes);
  return result;
};

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array) {

  const filmsOfYear = array.filter(movie => movie.year);
  if (filmsOfYear.length === 0) {
    return ; 
  }
  const bestFilm = filmsOfYear.reduce((best, movie) => (movie.score > best.score ? movie : best), filmsOfYear[0]);
  return [bestFilm];
};





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
