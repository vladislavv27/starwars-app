import React from "react";
import DataRow from "./DataRow.js";
import "./DataRow.css";
class DataTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = { sortFunc: undefined };

    this.sortDir = true;
    this.sortField = "";
  }

  render() {
    var displayRows = this.props.tableRows;
    if (this.props.nameFilter) {
      displayRows = displayRows.filter((dispRow) =>
        dispRow.name
          .toLocaleLowerCase()
          .includes(this.props.nameFilter.toLocaleLowerCase())
      );
    }

    if (this.state.sortFunc) {
      displayRows.sort(this.state.sortFunc);
    }
    return (
      <table className="table">
        <thead>
          <tr>
            <th
              onClick={() => {
                
                if (this.sortField === "name")
                  this.sortDir = !this.sortDir;
                else
                  this.sortDir = true;

                this.sortField = "name"

                this.setState({
                  sortField: "name",
                  sortFunc: (dispRow1, dispRow2) => 
                     dispRow1.name.localeCompare(dispRow2.name) * (this.sortDir ? 1 : -1)
                })
              }}
            >
              name
            </th>        
      
            <th>rotation period</th>
            <th>orbital period</th>
            <th
              onClick={() => {
                
                if (this.sortField === "diameter")
                  this.sortDir = !this.sortDir;
                else
                  this.sortDir = true;

                this.sortField = "diameter"

                this.setState({
                  sortFunc: (dispRow1, dispRow2) => 
                      (dispRow1.diameter - dispRow2.diameter) * (this.sortDir ? 1 : -1)
                })
              }}
            >
              diameter
            </th>
            <th>climate</th>
            <th
           onClick={() => {
                
            if (this.sortField === "gravity")
              this.sortDir = !this.sortDir;
            else
              this.sortDir = true;

            this.sortField = "gravity"

            this.setState({
              sortField: "gravity",
              sortFunc: (dispRow1, dispRow2) => 
                 dispRow1.gravity.localeCompare(dispRow2.gravity) * (this.sortDir ? 1 : -1)
            })
          }}
            >
              gravity
            </th>
            <th>terrain</th>
            <th>surface water</th>
            <th>population</th>
          </tr>
        </thead>
        {displayRows.map((row, i) => {
          return <DataRow data={row} key={i} />;
        })}
      </table>
    );
  }
}
export default DataTable;
