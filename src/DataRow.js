import React from "react";
import "./DataRow.css";

class DataRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tableData = this.props.data;
    return (
      <tbody>
        <tr>
          <td>{tableData.name}</td>
          <td>{tableData.rotation_period}</td>
          <td>{tableData.orbital_period}</td>
          <td>{tableData.diameter}</td>
          <td>{tableData.climate}</td>
          <td>{tableData.gravity}</td>
          <td>{tableData.terrain}</td>
          <td>{tableData.surface_water}</td>
          <td>{tableData.population}</td>
        </tr>
      </tbody>
    );
  }
}

export default DataRow;
