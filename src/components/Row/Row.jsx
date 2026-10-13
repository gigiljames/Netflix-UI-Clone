import { useState, useEffect } from "react";
// import axios from "axios";
import { API_KEY } from "../../constants";
import { MOVIE_GENRES } from "../../constants";
import Card from "../Card/Card";
import "./Row.css";
import axios from "../../axios";

function Row(props) {
  let [movieList, setMovieList] = useState([]);
  let url = `/movie/popular?api_key=${API_KEY}&language=${props.lang}`;
  let title = "Popular";
  if (props.trending && props.daily) {
    url = `/trending/movie/day?api_key=${API_KEY}&language=${props.lang}`;
    title = "Trending Daily";
  } else if (props.trending && props.weekly) {
    url = `/trending/movie/week?api_key=${API_KEY}&language=${props.lang}`;
    title = "Trending Weekly";
  } else if (props.action) {
    url = `/discover/movie?api_key=${API_KEY}&language=${props.lang}&with_genres=28`;
    title = "Action";
  } else if (props.horror) {
    url = `/discover/movie?api_key=${API_KEY}&language=${props.lang}&with_genres=27`;
    title = "Horror";
  } else if (props.romance) {
    url = `/discover/movie?api_key=${API_KEY}&language=${props.lang}&with_genres=10749`;
    title = "Romance";
  }

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // console.log(response.data.results);
        let temp = response.data.results.filter((value) => {
          if (value.backdrop_path) {
            return true;
          }
          return false;
        });
        setMovieList(temp.slice(0, 10));
      })
      .catch((e) => console.log("Error while fetching data." + e.message));
  }, [props.lang]);

  return (
    <>
      <div className="row" style={{ color: "white" }}>
        <h2 className="row-title">{title}</h2>
        <div className="movie-list">
          {movieList.map((movie, index) => {
            let temp = {
              id: movie.id,
              title: movie.title,
              backdrop_path: movie.backdrop_path,
              genres: movie.genre_ids,
            };
            return (
              <Card key={index} movie={temp} />
              // <div className="movie" key={index}>
              //   {movie.title}
              //   {movie.genre_ids.map((genre_id) => MOVIE_GENRES[genre_id])}
              // </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Row;
