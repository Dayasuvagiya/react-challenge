import React, { Component } from "react";
import importedNames from "../names";

export class SearchBar1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: importedNames
    };
  }

  handleChange = (event) => {
        const inputText = event.target.value.toLowerCase()
        const filteredName = importedNames.filter(name => {
            return name.toLowerCase().includes(inputText)
        })
        this.setState({
            names: filteredName
        })
    }
  

  render() {
    return (
      <div>
        <h1>Name Search</h1>
        <p>matching names found: {this.state.names.length}</p>
        <input
          onChange={(event) => this.handleChange(event)}
          value={this.state.namesearch}
          type="text" 
          placeholder="search names..." 
        />
        <div style={{ margin: "auto" }}>
            {this.state.names.map(name => {
                return <p key={name}>{name}</p>
            })}
        </div>
      </div>
    );
  }
}


export default SearchBar1;
