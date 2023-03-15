const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');
// const backdrop = document.body.firstElementChild;
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
// const userInputs = addMovieModal.getElementsByTagName('input');
const entryTextSection = document.getElementById('entry-text');
const listRoot = document.getElementById('movie-list');
const deleteMovieModal = document.getElementById('delete-modal');

const movies = [];

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove('visible');
};

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  listRoot.children[movieIndex].remove();
  // listRoot.removeChild(listRoot.children[movieIndex]);
  closeMovieDeletionModal();
  updateUI();
};

const startDeleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();
  const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
  let confrimDeletionButton = deleteMovieModal.querySelector('.btn--danger');

  confrimDeletionButton.replaceWith(confrimDeletionButton.cloneNode(true));

  confrimDeletionButton = deleteMovieModal.querySelector('.btn--danger');

  // confrimDeletionButton.removeEventListener(
  //   'click',
  //   deleteMovieHandler.bind(null, movieId)
  // );

  cancelDeletionButton.removeEventListener('click', closeMovieDeletionModal);

  cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
  confrimDeletionButton.addEventListener(
    'click',
    deleteMovieHandler.bind(null, movieId)
  );
};

const renderNewMovieElement = ({ id, title, image, rating }) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
    <img src="${image}" alt="Image ${title}" />
  </div>
  <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/ 5 stars</p>
  </div>
`;
  newMovieElement.addEventListener(
    'click',
    startDeleteMovieHandler.bind(null, id)
  );
  listRoot.appendChild(newMovieElement);
};

const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
};

const showMovieModal = () => {
  addMovieModal.classList.add('visible');
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  clearMovieInput();
  toggleBackdrop();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    parseInt(ratingValue, 10) < 1 ||
    parseInt(ratingValue, 10) > 5
  ) {
    alert('Please enter valid values (rating beween 1 and 5).');
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
  renderNewMovieElement(newMovie);
  updateUI();
};

const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearMovieInput();
};

startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
