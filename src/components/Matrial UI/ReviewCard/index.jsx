import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ReviewCard({
  title,
  popularity,
  release_date,
  vote_average,
  poster_path,
  id,
}) {
  return (
    <Link to={`movie/${id}`}>
      <Card sx={{ maxWidth: 345, height: 750 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <div className="d-flex justify-between align-end">
              <div className="left">
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="mt-20"
                >
                  {`Popularity: ${popularity}`}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="mt-5"
                >
                  {`Release Date: ${release_date}`}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="mt-5"
                >
                  {`Vote Average: ${vote_average}`}
                </Typography>
              </div>
              <div className="right">
                <Link to={`movie/${id}`} className="card_details_link">
                  details
                </Link>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
