import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyAR4sxYudyQX_CyL8DrZbfLTS0dzYgsCrk';



//Create a new component. This component should produce some HTML
class App extends Component {
    constructor(props){
        super(props);
        
        this.state = { 
            videos: [],
            selectedVideo: null
        };
        
        this.videoSearch('surfboards');
    }
    
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        // Same as -> this.setState({ videos: videos});
        });
    }
    
    render() {
        
        //Creates a debounced function that delays invoking func until after it waits 300 milliseconds since the last time the debounced function was invoked.
        const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300)
        
            return (
        <div>
            <SearchBar onSearchTermChange={videoSearch} />
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
        </div>
    );
    }
}

//Take this components generated HTML and put in on the page (in the dom)
ReactDom.render(<App />, document.querySelector('.container'));