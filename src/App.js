import React, { Component } from "react";
import CardList from "./components/CardList/CardList.jsx";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <CardList monsters={this.state.monsters} />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
