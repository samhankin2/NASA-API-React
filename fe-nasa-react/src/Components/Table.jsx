import React, { Component } from "react";

class Table extends Component {
  state = {};

  sortBy = column => {
    let copyProps = JSON.parse(JSON.stringify(this.props.data));
    if (column === "mass") {
      copyProps.map(element => {
        if (element.mass) element.mass = +element.mass;
        return element;
      });
    }

    copyProps = copyProps.sort((a, b) => {
      if (a[column] < b[column]) return -1;
      if (a[column] > b[column]) return 1;
      return 0;
    });

    this.setState({ data: copyProps });

    // this.setState({ data: this.props });
  };

  render() {
    let { data } = this.props;
    if (this.state.data) {
      data = this.state.data;
    }

    console.log(data, "here");

    return (
      <table>
        <thead>
          <tr>
            <td
              onClick={() => {
                this.sortBy("name");
              }}
            >
              Name
            </td>
            <td
              onClick={() => {
                this.sortBy("recclass");
              }}
            >
              Class
            </td>
            <td
              onClick={() => {
                this.sortBy("mass");
              }}
            >
              Mass (g)
            </td>
            <td
              onClick={() => {
                this.sortBy("year");
              }}
            >
              Year
            </td>
          </tr>
        </thead>
        <tbody>
          {data.map(dataRow => {
            return (
              <tr className="row" key={dataRow.name}>
                <td>{dataRow.name}</td>
                <td>{dataRow.recclass}</td>
                <td>{dataRow.mass}</td>
                <td>{dataRow.year ? dataRow.year.slice(0, 4) : ""}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

// {data.map(dataRow => {
//     <tr>
//       <td>{dataRow.name}</td>
//     </tr>;
//   })}

export default Table;
