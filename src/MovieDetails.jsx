import React from "react";
import Similar from "./components/Matrial UI/Similar/Similar";
import Gallerys from "./Gallery";
// import Vimeo from "@u-wave/react-vimeo";
import ReactPlayer from "react-player/youtube";
// import YouTube from "react-youtube";
import "./styles/cart.scss";
import { fetchMovieId } from "./redux/getMovieByID/action";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const Cart = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchMovieId(id));
  }, [dispatch, id]);

  const { items } = useSelector((state) => state.getMovieByID);
  // const { genres } = useSelector((state) => {
  //   return {
  //     genres : state.getMovieByID.items.genres
  //   }
  // });
  // const { items } = useSelector((state) => state.getMovieByID);
  const getMovieTrailers = useSelector((state) => state.getMovieByID.video);
  const getMovieGenres = useSelector((state) => state.getMovieByID.genres);
  const getMovieSimilar = useSelector((state) => state.getMovieByID.similar);

  const {
    poster_path,
    title,
    original_title,
    overview,
    original_language,
    popularity,
    release_date,
    runtime,
  } = items;

  //^ Classic yt-player settings
  // const opts = {
  //   height: "300",
  //   width: "585",
  // };  console.log(genres)
  //

  return (
    <div className="cart-wrapper">
      <div className="conatainer-cart">
        <div className="cart-top">
          <div class="cart-content">
            <div className="cart-left">
              <img
                className="cart-left__image "
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt="Poster"
              />
            </div>

            <div className="cart-right">
              <div className="cart-right__title">
                {title}
                <span> / {original_title}</span>
              </div>

              <div className="cart-right__description">{overview}</div>

              <div className="cart-right__lang">
                Original language: <span>{original_language}</span>
              </div>
              <div className="cart-right__pop">
                Popularitye: <span>{popularity}</span>
              </div>

              <div className="cart-right__date">
                Release date: <span>{release_date}</span>
              </div>
              <div className="cart-right__runtime">
                Runtime: <span>{runtime}</span> min.
              </div>
              <div className="cart-right__genres">
                Ganres:
                {getMovieGenres.map((obj) => (
                  <span className="ganre">{obj.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="cart-midlle">
          <div className="cart-right__title cart-right__title--small ">
            Trailers:
          </div>

          <div className="player">
            {/* <Vimeo video="5ddcd96e4284ea0017f9dcb4" autoplay /> */}

            {getMovieTrailers.slice(0, 3).map((item) => (
              // <YouTube videoId={item.key} opts={opts} />
              <ReactPlayer
                width="640"
                height="360"
                url={`https://www.youtube.com/watch?v=${item.key}`}
              />
            ))}
          </div>
        </div>
        <div className="cart-bot">
          <div className="cart-right__title cart-right__title--small cart-right__title--pb">
            Screenshots:
          </div>
          <Gallerys />
        </div>
        <div className="cart-right__title cart-right__title--small  cart-right__title--pb">
          Similar:
        </div>
        <div
          className="cart-similar"
          style={{
            "margin-bottom": 100,
          }}
        >
          <Swiper
            modules={[Autoplay ]}
            spaceBetween={20}
            slidesPerView={4}
       
          >
            {getMovieSimilar.map((obj, index) => (
              <SwiperSlide>
                <Similar {...obj} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Cart;
