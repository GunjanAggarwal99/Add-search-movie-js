// Import stylesheets
import './style.css';

// Write Javascript code!
const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
const movies = [];

const displayMovie = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
  } else {
    movieList.classList.add('visible');
  }

  movieList.innerHTML = '';

  const filterMovie = !filter
    ? movies
    : movies.filter((movie) => {
        return movie.info.title.includes(filter);
      });

  filterMovie.forEach((movie) => {
    const movieEl = document.createElement('li');
    const { info, ...otherProps } = movie; // object destructuring i.e store movie.info in info
    console.log(otherProps); // rest all properties of movie into otherProps
    // const { title: movieTitle } = info; // for assign new name to title
    let text = movie.getFormatedTitle() + ' - ';
    for (const key in info) {
      if (key !== 'title') {
        text = text + ` ${key}: ${info[key]}`; //for accessing dynamic key and value
      }
    }
    movieEl.textContent = text;

    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }
  const newMovieAdded = {
    info: {
      title, //if key n value is of same name
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    getFormatedTitle: function () {
      return this.info.title.toUpperCase();
    },
  };

  movies.push(newMovieAdded);
  displayMovie();
};
const searchMovieHandler = () => {
  const filterInput = document.getElementById('filter-title').value;
  displayMovie(filterInput);
};
addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
