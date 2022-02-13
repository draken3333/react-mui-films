import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import sliderStyle from "react-awesome-slider/dist/styles.css";
import { useSelector } from "react-redux";
import React from "react";
import awsomeBtn from "./AwsomeSlider.scss";
import AwsBtn from "./AwsomeSliderButton";
import Typography from "@mui/material/Typography";
import Rating from "../Matrial UI/Rating";

function AwsomeSlider() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const { items } = useSelector((state) => {
    return {
      items: state.sliderDate.items,
    };
  });


  return (
    <div>
      <AutoplaySlider
        cssM
        buttons={false}
        bullets={true}
        play={true}
        cancelOnInteraction={false}
        interval={4000}
        className="aws-btn"
        cssModule={[sliderStyle, awsomeBtn]}
      >
        {items.map((pos, index) => (
          <div className="slider-card" key={index}>
            <div className="slider-typography">
              <Typography color="white" variant="h2" component="h2">
                {`${pos.title}`}
              </Typography>
              
              <div className="ml-10 flex-column d-flex">
                <div className="mb-50 d-flex flex-column ">
                  <Typography
                    className="mb-10"
                    color="white"
                    variant="h5"
                    component="h5"
                  >
                    Rate: {pos.vote_average}
                  </Typography>

                  <Rating ratingStar={pos.vote_average} />
                </div>

                <div>
                  <AwsBtn />
                </div>
              </div>
            </div>
            <img
              className="slider-images"
              src={`https://image.tmdb.org/t/p/original${pos.backdrop_path}`}
              alt="headerPoster"
            />
          </div>
        ))}
      </AutoplaySlider>
    </div>
  );
}

export default AwsomeSlider;
