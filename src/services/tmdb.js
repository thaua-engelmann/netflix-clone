const API_KEY = "353105bdb3dda37b5eaa6b29246dda32";
const BASE_URL = "https://api.themoviedb.org/3";

/*

# First of all: Getting data from api

- We need to set up the following:
-- Netflix Originals;
-- Trending;
-- Top Rated;
-- Action;
-- Comedy;
-- Horror;
-- Romance;
-- Documentaries

*/

const basicFetch = async (endpoint) => {
  const req = await fetch(`${BASE_URL}${endpoint}`);
  const json = await req.json();

  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Netflix Originals",
        items: await basicFetch(
          `/discover/tv?with_networks=213&api_key=${API_KEY}`
        ),
      },
      {
        slug: "trending",
        title: "Trending Now",
        items: await basicFetch(`/trending/all/week?&api_key=${API_KEY}`),
      },
      {
        slug: "toprated",
        title: "Top Rated",
        items: await basicFetch(`/movie/top_rated?&api_key=${API_KEY}`),
      },
      {
        slug: "action",
        title: "Action",
        items: await basicFetch(
          `/discover/movie?with_genres=28&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comedy",
        items: await basicFetch(
          `/discover/movie?with_genres=35&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(
          `/discover/movie?with_genres=27&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie?with_genres=10749&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentaries",
        items: await basicFetch(
          `/discover/movie?with_genres=99&api_key=${API_KEY}`
        ),
      },
    ];
  },
  getMovieInfo: async (movieId, movieType) => {
    let info = {};

    if (movieId) {
      switch (movieType) {
        case "movie": // If type === movies;
          info = await basicFetch(`/movies/${movieId}?api_key=${API_KEY}`);
          break;
        case "tv": // If type === series;
          info = await basicFetch(`/tv/${movieId}?api_key=${API_KEY}`);
          break;
      }
    }

    return info;
  },
};
