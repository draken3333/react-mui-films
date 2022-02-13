import * as React from "react";
import Card from "@mui/material/Card";

import {} from "react-router-dom";

import { Link } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";

import { CardActionArea } from "@mui/material";



export default function Similar({ poster_path, id }) {
  return (
    <Link to={`/movie-similar/${id}` }  data-swiper-autoplay="2000">
      <Card sx={{ maxWidth: 345, height: 500  }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt="green iguana"
          />
        </CardActionArea>
      </Card>
    </Link>
  );
}
