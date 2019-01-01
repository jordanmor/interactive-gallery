import React, { Component } from 'react';

class Search extends Component {
  state = { 
    value: ''
  };

  handleValueChange = e => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.performSearch(this.state.value);
    this.setState({value: ''});
  }

  render() { 

    const { borderColor, btnColor } = this.props.classes;

    return ( 
      <form onSubmit={this.handleSubmit}>
        <input
          className={`search-input ${borderColor}`}
          type="text"
          placeholder="Search..."
          onChange={this.handleValueChange}
          value={this.state.value}
        />

        <button 
          className={`btn submit-btn ${btnColor}`}
          type="submit"
        >
        Submit
        </button>
      </form>
    );
  }
}
 
export default Search;