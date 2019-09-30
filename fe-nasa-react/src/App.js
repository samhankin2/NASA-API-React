import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import Header from "./Components/Header";
import Table from "./Components/Table";

class App extends Component {
  state = {
    data: null
  };
  componentDidMount() {
    axios
      .get("https://data.nasa.gov/resource/gh4g-9sfh.json")
      .then(({ data }) => {
        this.setState({ data: data.slice(0, 25) });
      });
  }
  render() {
    return (
      <div className="App">
        <Header />
        {this.state.data && <Table data={this.state.data} />}
      </div>
    );
  }
}

export default App;
