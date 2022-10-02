import { Component } from "react";
import "./App.css";
import ShowCountry from "./components/show-country";

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: null,
      data: ["Armenia", "Angola", "Belarus", "Bulgaria", "Franch"],
    };
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    return (
      <div className='App'>
        <input
          placeholder='Search...'
          onChange={(e) => this.handleSearch(e)}
          className='search'
        />
        {this.state.search && (
          <div className='show-country'>
            {Object.values(this.state.data)
              .filter((country) =>
                country.toLowerCase().includes(this.state.search.toLowerCase())
              )
              .map((country, index) => (
                <ShowCountry country={country} key={index} />
              ))}
          </div>
        )}
      </div>
    );
  }
}

export default App;
