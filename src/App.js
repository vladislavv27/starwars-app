import './App.css';
import React, {Component} from 'react';


{/* <App qwe={ 123}></App> */}

class App extends Component{
  
  constructor(props)
  {
    super(props)

    this.state = { tableRows: [] };

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData()
  {
    var reqUrl = "https://swapi.dev/api/planets/"

    while (true)
    {
      const res = await fetch(reqUrl);
      const resJson = await res.json()

      this.setState({tableRows: [...this.state.tableRows, ...resJson.results]})

      if (!resJson.next) break;
      reqUrl = resJson.next;

      console.log(resJson)
    }
  }


  render() {
    return (
    <header className="index-header">
      <div className="star-wars-header">
        <div className="header-name">
          <h1>Star wars Planets</h1>
          <div>Counter: { this.state.test}</div>
        </div>
        {
            this.state.tableRows.map((dataRow, i) => <div key={i}>{dataRow.name}</div>)
        }
        <div className="header-search">
          <input type = "text" placeholder="Planet name" name="search-planet" onChange={(e) => console.log(e)}/>
        </div>     
      </div>
    </header>
      );
    }
}



 



export default App;
