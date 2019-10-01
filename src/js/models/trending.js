import axios from "axios";
import { key } from "../views/base";

export default class Trending {
  constructor(id) {
    this.id = id;
  }

  async getTrendingMovies() {
    try {
      const reply = await axios(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`
      );
      this.results = reply.data.results;
    } catch {
      console.log("wrongg");
    }
  }

  // async getTrendingShows() {
  //   try {
  //     const reply = await axios(
  //       `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}`
  //     );
  //     this.data = reply.data.results;
  //     console.log(this.data);
  //   } catch {
  //     console.log("wrongg");
  //   }
  // }
}
