import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        //Only inside the constructor do we use this syntax.
        this.state = { term: ''};
    }
    
    render() {
        return (
            <div>
                <input 
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
            </div>
            );
    }
}


export default SearchBar;