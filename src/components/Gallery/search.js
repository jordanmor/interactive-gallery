import React, { Component } from 'react';
import { Consumer } from '../Context';

class Search extends Component {
  state = { 
    value: ''
  };

  handleValueChange = e => {
    this.setState({ value: e.target.value });
  }

  render() { 

    return ( 
      <Consumer>
        { ({ actions }) => {
          const handleSubmit = e => {
            e.preventDefault();
            actions.performSearch(this.state.value);
            this.setState({value: ''});
          }

          return (
            <form onSubmit={handleSubmit}>
              <input
                className="search-input" 
                type="text"
                placeholder="Search..."
                onChange={this.handleValueChange}
                value={this.state.value}
              />
      
              <button 
                className="btn submit-btn"
                type="submit"
              >
              Submit
              </button>
            </form>
          );
        }}
      </Consumer>
     );
  }
}
 
export default Search;