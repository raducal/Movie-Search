import Search from "./models/Search";
import Trending from "./models/trending";
import Likes from "./models/likes";

import MovieDetails from "./models/MovieDetails";
import * as searchView from "./views/searchView";
import * as likesView from "./views/likesView";
import all from "./all";
import { elements } from "./views/base";
import * as movieView from "./views/movieView";

// global state
// -search object

const state = {};

// get searched movie
const controlSearch = async () => {
  const query = searchView.getInput();

  if (query && elements.choices.value === "movie") {
    state.search = new Search(query);

    elements.searchInput.value = "";
    await state.search.getSearchResults();

    // render results
    if (state.search.results.length) {
      searchView.renderSearchedResults(state.search.results);
    } else {
      elements.searchInput.placeholder = "No Such Movie, Please Try Again";

      setTimeout(() => {
        elements.searchInput.placeholder =
          "Search For Your Favourite Movies & Shows";
      }, 1500);
    }
  } else {
    state.search = new Search(query);

    elements.searchInput.value = "";

    await state.search.getTVShows();

    if (state.search.resultsTV.length) {
      searchView.renderSearchedResults(state.search.resultsTV);
    } else {
      elements.searchInput.placeholder = "No Such Show, Please Try Again";

      setTimeout(() => {
        elements.searchInput.placeholder =
          "Search For Your Favourite Movies & Shows";
      }, 1500);
    }
  }
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});
// end of search movie

// trending movies
const controlTrendingMovies = async () => {
  state.trending = new Trending();

  await state.trending.getTrendingMovies();

  searchView.renderSearchedResults(state.trending.results);
};

elements.trendingMovies.addEventListener("click", e => {
  controlTrendingMovies();
});

// end of trending movies

// get movie details
elements.movieResults.addEventListener("click", e => {
  e.preventDefault();
  if (e.target.closest("a")) {
    let id = e.target.parentElement.href.split("#").pop();
    if (elements.choices.value === "movie") {
      controlMovieDetails(id);
    } else {
      controlTVShowDetails(id);
    }
  }
});

const controlMovieDetails = async id => {
  state.movieDetails = new MovieDetails(id);

  await state.movieDetails.getDetails();

  movieView.renderDetails(
    state.movieDetails.results,
    state.movieDetails.videoResults
  );
};

const controlTVShowDetails = async id => {
  state.movieDetails = new MovieDetails(id);

  await state.movieDetails.getTVShowDetails();

  movieView.renderShowDetails(
    state.movieDetails.resultShow,
    state.movieDetails.videoShow
  );
};
// end of movie details

// home button
document.querySelector(".home").addEventListener("click", e => {
  e.preventDefault();
  if (e.target.closest("a").classList.contains("home")) {
    searchView.renderHome();
  }
});

// favourites

elements.movieDetails.addEventListener("click", e => {
  if (e.target.parentElement.parentElement.classList.contains("iconLove")) {
    let id = state.movieDetails.id;

    e.target.parentElement.parentElement.classList.add("disableClick");

    controlLikes(id);
  }
});

const controlLikes = async id => {
  state.likes = new Likes();

  const newLike = state.likes.addLike(
    id,
    state.movieDetails.results.poster_path,
    state.movieDetails.results.title
  );

  likesView.renderLikes(newLike);
};

// show likes on click

elements.icon.addEventListener("click", e => {
  if (e.target.parentElement.parentElement.classList.contains("icon")) {
    likesView.showLikes();
  }
});

// delete likes

document.addEventListener("click", e => {
  if (e.target.closest("a").classList.contains("likes__link")) {
    e.preventDefault();
    document
      .querySelector(".likes__list")
      .removeChild(e.target.parentElement.parentElement);

    document.querySelector(".iconLove").classList.remove("disableClick");
  }
});
