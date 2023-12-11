// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {

  let result = movies.map(directors => directors.director);
  console.log("EXERCISE 1 ->", "Array de directores:", result);
  return result;
};
getAllDirectors();


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  let result = movies.filter(movie => movie.director === 'Quentin Tarantino');
  console.log( "EXERCISE 2 ->", "Array de peliculas de Quentin Tarantino:", result);
  }; 
  getMoviesFromDirector()


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  let filterDirector = movies.filter(movie => movie.director === 'Quentin Tarantino');
  let result = filterDirector.reduce((total, filter) => total + filter.score, 0);
  console.log("EXERCISE 3 ->", "Media de las notas de las 5 peliculas:", result.toFixed(2) / 5);// no entiendo porque no salen los dos decimales en el resultado <8.4>
};
moviesAverageOfDirector();
  

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  let filter20primeras = movies.filter((movie, index) => index < 20);
  let result = filter20primeras.sort((a,b) => a.title < b.title ? -1 : 1);
  console.log("EXERCISE 4 ->", "Array de 20 peliculas ordenadas por orden alfabetico:", result);
};
orderAlphabetically();


// Exercise 5: Order by year, ascending
function orderByYear() {

  let orderAlphabeticMovies = movies.sort((a,b) => a.title < b.title ? -1 : 1);
  let result = orderAlphabeticMovies.sort((a,b) => a.year < b.year ? -1 : 1);
  console.log("EXERCISE 5 ->", "Array de peliculas ordenadas por año:", result);
};
orderByYear() 


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



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
