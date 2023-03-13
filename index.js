// Import stylesheets
import './style.css';

// Write Javascript code!
const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
const movies = [];

const displayMovie = () => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
  } else {
    movieList.classList.add('visible');
  }

  movieList.innerHTML = '';

  movies.forEach((movie) => {
    const movieEl = document.createElement('li');
    let text = movie.info.title + ' - ';
    for (const key in movie.info) {
      if (key !== 'title') {
        text = text + ` ${key}: ${movie.info[key]}`; //for accessing dynamic key and value
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
    id: Math.random(),
  };

  movies.push(newMovieAdded);
  displayMovie();
};
addMovieBtn.addEventListener('click', addMovieHandler);
