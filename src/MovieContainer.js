import React, { Component } from "react";
import Search from "./Search";
import MovieCards from "./MovieCards";
import "./styles/styles.scss";
import logo from "./shoppies.png";
import Nominations from "./Nominations";
import { ToastProvider } from "react-toast-notifications";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

export default class MovieContainer extends Component {
  state = {
    movies: [],
    nominations: [],
  };

  fetchMovies = (query) => {
    fetch(
      `https://www.omdbapi.com/?s=${query}&type=movie&page=1&apikey=a5bbe8e0`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movies: data.Search,
        });
      });
  };

  addNom = (movie) => {
    this.setState({
      nominations: [...this.state.nominations, movie],
    });
  };

  deleteNom = (movie) => {
    this.setState({
      nominations: this.state.nominations.filter((nom) => nom !== movie),
    });
  };
  render() {
    return (
      <Router>
        <div className="container">
          <img className="logo" src={logo} alt="Shoppies Logo"></img>
          <p className="description">
            Search your favorite movies and nominate them for The 2021 Shoppies
            Awards
          </p>
          <Switch>
            <Route exact path="/">
              <Search
                nominations={this.state.nominations}
                fetchMovies={this.fetchMovies}
              />
              <ToastProvider>
                <MovieCards
                  addNom={this.addNom}
                  nominations={this.state.nominations}
                  movies={this.state.movies}
                />
              </ToastProvider>
            </Route>
            <Route exact path="/nominations">
              <Nominations
                deleteNom={this.deleteNom}
                nominations={this.state.nominations}
              ></Nominations>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
