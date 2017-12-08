import React, { Component } from 'react';
import './SearchBar.css';


class SearchBar extends Component {
    constructor(props){
        super(props);

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search(event){
        event.preventDefault();
        this.props.onSearch(this.state.searchTerm);
    }

    handleTermChange(event){
        this.setState({searchTerm: event.target.value});
    }


    render() {
        return (
            <form onSubmit={this.search}>
                <div className="SearchBar">
                    <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
                    <button type="submit">SEARCH</button>
                </div>
            </form>
        );
    }
}

export default SearchBar;