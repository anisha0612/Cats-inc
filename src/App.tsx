import React, { Component } from "react";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme.js";
import "./App.css";

export interface ICats{
  name: string,
  id: number,
  email:string
}

interface IAppProps {
}

interface IAppState {
  monsters: Array<ICats>;
  searchField: string;
}

class App extends Component<IAppProps,IAppState> {
  constructor(props:IAppProps) {
    super(props);
    this.state = {
      monsters: [],
      searchField: '',
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
      .catch((err) => console.log(err));
  }

  searchEvent = (e:React.SyntheticEvent<HTMLInputElement>): void => {
    this.setState({ searchField: e.currentTarget.value });
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
