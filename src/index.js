import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list.js';
const API_KEY = 'AIzaSyAR4sxYudyQX_CyL8DrZbfLTS0dzYgsCrk';



//Create a new component. This component should produce some HTML
class App extends Component {
    constructor(props){
        super(props);
        
        this.state = { videos: [] };
        
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
            // Same as -> this.setState({ videos: videos});
        });
    }
    
    render() {
            return (
        <div>
            <SearchBar />
            <VideoList videos={this.state.videos} />
        </div>
    );
    }
}

//Take this components generated HTML and put in on the page (in the dom)
ReactDom.render(<App />, document.querySelector('.container'));