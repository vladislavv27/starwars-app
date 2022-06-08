import "./App.css";
import React, { Component } from "react";
import DataTable from "./DataTable.js";

class App extends Component {
  componentDidMount() {
    this.fetchData();
  }

  constructor(props) {
    super(props);

    this.state = { tableRows: [], nameFilter: "" };

    this.fetchData = this.fetchData.bind(this);
  }

  async fetchData() {
    var reqUrl = "https://swapi.dev/api/planets/";

    while (true) {
      const res = await fetch(reqUrl);
      const resJson = await res.json();
      this.setState({
        tableRows: [...this.state.tableRows, ...resJson.results],
      });

      if (!resJson.next) break;
      reqUrl = resJson.next;
    }
  }

  render() {
    return (
      <div className="all-body">
        <div className="star-wars-header">
          <div className="header-name">
            <h1>Star wars Planets</h1>
          </div>
          <div className="header-search">
            <input
              type="text"
              placeholder="Planet name"
              name="search-planet"
              onChange={(e) => this.setState({ nameFilter: e.target.value })}
              // onChange={(e) => console.log("Input chnage: ", e.target.value)}
            />
          </div>
        </div>
        <DataTable
          tableRows={this.state.tableRows}
          nameFilter={this.state.nameFilter}
          onSort={this.state.sortField}
        />
      </div>
    );
  }
}

export default App;
