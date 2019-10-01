import axios from "axios";
import { key } from "../views/base";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getSearchResults() {
    try {
      const reply = await axios(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${this.query}&page=1`
      );
      this.results = reply.data.results;
    } catch {
      console.log("wrongg");
    }
  }

  async getTVShows() {
    try {
      const reply = await axios(
        `https://api.themoviedb.org/3/search/tv?api_key=${key}&language=en-US&query=${this.query}&page=1`
      );
      this.resultsTV = reply.data.results;
    } catch {
      console.log("wrongg");
    }
  }
}
