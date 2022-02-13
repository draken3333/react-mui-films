import React from "react";
import { Routes, Route } from "react-router-dom";
import { MiniDrawer } from "./components/index";

import { Typography } from "@mui/material";
import Home from "./Home";
import MovieDetails from "./MovieDetails";
import Page404 from "./Page404";

function App() {
  return (
    <main className="main-wrapper">
      <header className="pb-5 header">
        <menu className="menu">
          <MiniDrawer />
        </menu>
      </header>

      <div className="contetn">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/movie-similar/:id" element={<MovieDetails />} />
          <Route path="*" element={<Page404 />} />
 
        </Routes>
      </div>

      <footer className="footer">
        <Typography
          color="white"
          align="center"
          variant="subtitle1"
          gutterBottom
          component="р6"
          className="footerText"
        >
          Provide by React.JS
        </Typography>
      </footer>
    </main>
  );
}

export default App;
