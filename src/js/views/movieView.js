import { elements } from "./base";

export const renderDetails = (results, videos) => {
  if (videos) {
    elements.movieDetails.innerHTML = `
   <div class="movie-div">
  <iframe
  src="https://www.youtube.com/embed/${videos.key}"
  frameborder="0"
  class="movie-video"
 ></iframe>
  <div class="movie-info" data-id="${results.id}">
   <div class="movie-title">${results.title}</div>
   <div class="movie-overview">${results.overview}
   </div>
   <div class="movie-smalldetails">
    <div class="movie-runtime">Runtime: ${results.runtime}</div>
    <div class="movie-release-date">Release Date: ${results.release_date}</div>
   <div class="iconLove"><i class="fas fa-heart addLove"></i></div>
   </div>
   <div class="movie-imbdLink">
    <a href="http://www.imdb.com/title/${results.imbd_id}/"></a>
   </div>
  </div>
  </div>`;
  } else {
    elements.movieDetails.innerHTML = `
   <div class="movie-div">
   <img class = "movie-poster-lg" src="https://image.tmdb.org/t/p/w500${results.poster_path}" alt="">
  <div class="movie-info" data-id="${results.id}">
   <div class="movie-title">${results.title}</div>
   <div class="movie-overview">${results.overview}
   </div>
   <div class="movie-smalldetails">
    <div class="movie-runtime">Runtime: ${results.runtime}</div>
    <div class="movie-release-date">Release Date: ${results.release_date}</div>
    <div class="iconLove"><i class="fas fa-heart addLove"></i></div>
   </div>
   <div class="movie-imbdLink">
    <a href="http://www.imdb.com/title/${results.imbd_id}/"></a>
   </div>
  </div>
  </div>`;
  }

  elements.mainPage.innerHTML = "";
  elements.movieResults.innerHTML = "";
};

export const renderShowDetails = (results, videos) => {
  elements.movieDetails.innerHTML = `
   <div class="movie-div">
  <iframe
  src="https://www.youtube.com/embed/${videos.key}"
  frameborder="0"
  class="movie-video"
 ></iframe>
  <div class="movie-info">
   <div class="movie-title">${results.name}</div>
   <div class="movie-overview">${results.overview}
   </div>
   <div class="movie-smalldetails">
   <div class="movie-runtime">Seasons: ${results.number_of_seasons}</div>
   <div class="movie-runtime">Episodes: ${results.number_of_episodes}</div>
    <div class="movie-release-date">Release Date: ${results.first_air_date}</div>
   </div>
  </div>
  </div>`;
  elements.mainPage.innerHTML = "";
  elements.movieResults.innerHTML = "";
};
