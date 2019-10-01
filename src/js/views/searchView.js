import { elements } from "./base";

export const getInput = () => elements.searchInput.value;

export const renderSearchedResults = results => {
  let output = "";

  results.forEach(movie => {
    if (movie.poster_path) {
      output += `
   <div class="movie pd-1">
            <a href="#${movie.id}">
            <img
              class="movie-poster"
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              alt="" /></a>
          </div>`;
    }
  });

  elements.movieResults.innerHTML = output;
  elements.mainPage.innerHTML = "";
  elements.movieDetails.innerHTML = "";
};

// home
export const renderHome = () => {
  elements.mainPage.innerHTML = `
         <div class="main-content">
          <div class="container">
            <div class="content-div">
              <div class="image-div">
                <img src="./img/reel.png" alt="" />
              </div>
              <div class="text-div">
                <h1 class="text">Movies at your Finger Tips</h1>
                <p>
                  Any movie you can think of... Right here, right now
                </p>
              </div>
            </div>
          </div>
        </div>`;

  elements.movieDetails.innerHTML = "";
  elements.movieResults.innerHTML = "";
};
