import "./Card.css";
import { API_KEY } from "../../constants";
import { imageUrl } from "../../constants";
import { useEffect, useState, useRef } from "react";
import axios from "../../axios";
import YouTube from "react-youtube";
import { MOVIE_GENRES } from "../../constants";

function Card(props) {
  let movie = props.movie;
  let movieId = movie.id;
  const [big, setBig] = useState(false);
  const [videoKey, setVideoKey] = useState("");
  const timerRef = useRef(null);

  function handleMouseEnter() {
    timerRef.current = setTimeout(() => {
      setBig(true);
    }, 500);
    // setBig(true);
  }

  function handleMouseLeave() {
    clearTimeout(timerRef.current);
    setBig(false);
  }

  useEffect(() => {
    if (big) {
      axios
        .get(`/movie/${movieId}/videos?api_key=${API_KEY}`)
        .then((response) => {
          setVideoKey(response.data.results[0].key);
          console.log(videoKey);
        });
    }
  });

  const opts = {
    height: "185",
    width: "300",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      mute: 1,
    },
  };

  return (
    <>
      <div
        className="card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-id={movie.id}
      >
        {!big ? (
          <img src={`${imageUrl}w200/${movie.backdrop_path}`} alt="" />
        ) : (
          <div className="big-card">
            <YouTube videoId={videoKey} opts={opts} />
            <div className="card-content">
              <div className="button-line">
                <div className="left-group">
                  <button id="play-button">
                    <span class="material-icons">play_arrow</span>
                  </button>
                  <button>
                    <span className="material-icons">add</span>
                  </button>
                  <button>
                    <span className="material-icons">thumb_up</span>
                  </button>
                </div>
                <div className="right-group">
                  <button>
                    <span class="material-icons">keyboard_arrow_down</span>
                  </button>
                </div>
              </div>
              <h3 className="movie-title">{movie.title}</h3>
              <div className="genre-line">
                {movie.genres.map((genre) => MOVIE_GENRES[genre]).join(" • ")}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Card;
