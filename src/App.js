import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchField } from "./components/search-box/search-box-component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(this.state);
    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
        <SearchField
          placeholder="Search Monsters"
          handleChange={(e) => this.handleChange(e)}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
}

export default App;
