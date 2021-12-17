import React, { useEffect, useState } from "react";
import "./app.scss";

// Import tmdb ( the movie database api );
import tmdb from "./services/tmdb";

// Components;
import Header from "./components/header/Header";
import FeaturedMovie from "./components/featuredMovie/FeaturedMovie";
import MovieRow from "./components/movieRow/MovieRow";

// Pre-Loading gif;
import netflix_loading from "./assets/netflix_loading.gif";

function App() {
  const [featuredData, setFeaturedData] = useState(null);
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      // Getting list of all items;
      let list = await tmdb.getHomeList();
      setMoviesList(list);

      // Getting featured item;
      let originals = list.filter((item) => item.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * originals[0].items.results.length
      );
      const chosen = originals[0].items.results[randomChosen];
      const chosenInfo = await tmdb.getMovieInfo(chosen.id, "tv"); // As we are using just Originals Netflix, we don't need to worry about the type because all Originals Netflix are series ( tv type ).There's no movies.

      setFeaturedData(chosenInfo);
      console.log(chosenInfo);
    };

    loadAll();
  }, []);

  return (
    <div className="home">
      <div className="home-content">
        <div className="home-content-header">
          <Header />
        </div>
        {featuredData && (
          <section className="home-content-featuredMovie">
            <FeaturedMovie item={featuredData} />
          </section>
        )}
        <section className="home-content-lists">
          {moviesList.map((item, key) => (
            <MovieRow title={item.title} items={item.items} key={key} />
          ))}
        </section>
      </div>
      {moviesList.length <= 0 && (
        <div className="pre-loading">
          <img src={netflix_loading} alt="Loading..." />
        </div>
      )}
      <footer>
        <p>
          Made with <span aria-label="red heart">❤️</span> by Thauã Engelmann
        </p>
        <p>
          &copy; All rights reserved to Netflix and its contributors.
        </p>
      </footer>
    </div>
  );
}

export default App;
