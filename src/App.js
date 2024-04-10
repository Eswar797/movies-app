import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import SingleMovieDetail from "./pages/SingleMovieDetail";
import SearchedMovies from "./pages/SearchedMovies";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Router>
      <div className="App">
        <Navbar handleSearch={handleSearch} />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/top-rated" component={TopRated} />
          <Route path="/upcoming" component={Upcoming} />
          <Route path="/movie/:id" component={SingleMovieDetail} />
          <Route path="/search" render={(props) => <SearchedMovies {...props} query={searchQuery} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
