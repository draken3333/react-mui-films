import React from "react";
import "./styles/main.scss";
import { AwsomeSlider, ReviewCard, SortBy } from "./components/index";
// import { Cart } from "../components/";
import PaginationLink from "./components/Matrial UI/Pagination/PaginationLink";
import { fetchSliderData } from "./redux/HeaderSlider/action";
import { sortByFetchData } from "./redux/SortBy/action";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import { Typography } from "@mui/material";

function Home() {
  const dispatch = useDispatch();

  const [sortByValue, setSortByValue] = React.useState("Popular");
  const [ nowPage,  setNowPage] = React.useState()

  const onSelectSort = (sortValue) => {
    setSortByValue(sortValue);
  };

  const cardItems = useSelector((state) => state.sortBy.items);



  React.useEffect(() => {
    dispatch(fetchSliderData());
    dispatch(sortByFetchData(sortByValue, nowPage));

  }, [sortByValue, nowPage]);

  const onHandlePage = (num) => {
    setNowPage(num)

  } 


  return (
    <>
      <div className="intro ">
        <AwsomeSlider />
        <div className="container">
          <SortBy selectValue={onSelectSort} />
        </div>
      </div>
      <div className="section-main-cards">
        <div className="container">
          <Box sx={{ flexGrow: 1, marginTop: 10, marginBottom: 20 }}>
            <Grid container spacing={{ xs: 2, md: 4 }}>
              {cardItems.map((obj, index) => (
                <Grid item sm={4} key={index}>
                  <ReviewCard {...obj} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      </div>
      <div className="container">
        <div
          clasName="pagination-link =="
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <PaginationLink change={onHandlePage} />
        </div>
      </div>
    </>
  );
}

export default Home;
