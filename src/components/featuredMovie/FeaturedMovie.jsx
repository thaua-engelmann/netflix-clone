import "./featuredMovie.scss";

const FeaturedMovie = ({ item }) => {

  // Get year of released;
  let getMovieYear = new Date(item.first_air_date);
  let movieYear = getMovieYear.getFullYear();

  // Get genres of movie;
  let movieGenres = [];
  for (let g in item.genres) {
    movieGenres.push(item.genres[g].name);
  }

  // Cut off description overview if it is too big;
  let description = item.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + '...';
  }

  return (
    <div
      className="featured-movie"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
      }}
    >
      <div className="featured-movie-details vertical-effect">
        <div className="featured-movie-details-child horizontal-effect">
          <h1 className="featured-movie-details-child-name">
            {item.original_name}
          </h1>
          <div className="featured-movie-details-child-info">
            <div className="featured-movie-details-child-info-points">
              {item.vote_average} revelant
            </div>
            <div className="featured-movie-details-child-info-date">
              {movieYear}
            </div>
            <div className="featured-movie-details-child-info-seasons">
              {item.number_of_seasons} temporada
              {item.number_of_seasons > 1 ? "s" : ""}
            </div>
          </div>
          <div className="featured-movie-details-child-overview">
            {description}
          </div>
          <div className="featured-movie-details-child-buttons">
            <a href={`/watch/${item.id}`}>▶ Play</a>
            <a href={`/add/list/${item.id}`}>+ My List</a>
          </div>
          <div className="featured-movie-details-child-genres">
            <strong>Genres: </strong> {movieGenres.join(', ')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
