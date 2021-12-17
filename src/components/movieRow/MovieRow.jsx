import React, { useState } from "react";
import "./movieRow.scss";

// React-Icons;
import { MdOutlineKeyboardArrowLeft as ArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight as ArrowRight } from "react-icons/md";

const MovieRow = ({ title, items }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);

    if (x > 0) {
      x = 0;
    }

    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = items.results.length * 200; 

    if ((window.innerWidth - listWidth) > x) {
      x = (window.innerWidth - listWidth) - 40;
    }

    setScrollX(x);
  };

  return (
    <div className="movie-row">
      <h2 className="movie-row-title">{title}</h2>
      <div className="movie-row-listarea">
        <div className="movie-row-listarea-arrowLeft" onClick={handleLeftArrow}>
          <ArrowLeft size="5rem" />
        </div>
        <div
          className="movie-row-listarea-arrowRight"
          onClick={handleRightArrow}
        >
          <ArrowRight size="5rem" />
        </div>
        <div
          className="movie-row-listarea-list"
          style={{ marginLeft: scrollX }}
        >
          {items.results.length > 0 &&
            items.results.map((item) => (
              <div className="movie-row-listarea-list-item" key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt=""
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
