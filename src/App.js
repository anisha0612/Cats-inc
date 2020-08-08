import React, { Component } from "react";
import CardList from "./components/CardList/CardList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
      .catch((err) => console.log(err));
  }

  searchEvent = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <h1>Cats Inc.</h1>
          <SearchBox handleChange={this.searchEvent} />
          <CardList monsters={filteredMonsters} />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
