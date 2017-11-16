import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "searchTerm": ""
    };
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    if (event.key === 'Enter' && event.target.value) {
      this.search();
    }
  }

  handleTermChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  search() {
    this.props.onSearch(this.state.searchTerm);
  }

  render() {
    return (<div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} onKeyPress={this.handleKeyPress}/>
      <a onClick={this.search}>SEARCH</a>
    </div>);
  }
}

export default SearchBar;
