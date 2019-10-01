import axios from "axios";
import { key } from "../views/base";

export default class MovieDetails {
  constructor(id) {
    this.id = id;
  }

  async getDetails() {
    try {
      const details = await axios(
        `https://api.themoviedb.org/3/movie/${this.id}?api_key=${key}&language=en-US`
      );

      const video = await axios(
        `https://api.themoviedb.org/3/movie/${this.id}/videos?api_key=${key}&language=en-US`
      );

      this.results = details.data;
      this.videoResults = video.data.results[0];
    } catch {
      console.log("error");
    }
  }

  async getTVShowDetails() {
    try {
      const details = await axios(
        `https://api.themoviedb.org/3/tv/${this.id}?api_key=${key}&language=en-US`
      );

      const video = await axios(
        `https://api.themoviedb.org/3/tv/${this.id}/videos?api_key=${key}&language=en-US`
      );

      this.resultShow = details.data;
      this.videoShow = video.data.results[0];
    } catch {
      console.log("error");
    }
  }
}
