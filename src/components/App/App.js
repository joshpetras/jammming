import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "searchResults": [{
        "id": "1",
        "name": "Tiny Dancer",
        "artist": "Elton John",
        "album": "Madman Across The Water"
      }, {
        "id": "2",
        "name": "Tiny Dancer",
        "artist": "Tim McGraw",
        "album": "Love Story"
      }, {
        "id": "3",
        "name": "Tiny Dancer",
        "artist": "The White Raven",
        "album": "Tiny Dancer"
      }],
      "playlistName": "Josh's List",
      "playlistTracks": [{
        "id": "4",
        "name": "Freedom of 76",
        "artist": "Ween",
        "album": "Chocolate and Cheese"
      }, {
        "id": "5",
        "name": "Today",
        "artist": "Smashing Pumpkins",
        "album": "Siamese Dream"
      }]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (!tracks.find(trackIndex => trackIndex.id === track.id)) {
      tracks.push(track);
      this.setState({playlistTracks: tracks});
    }
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    let newTracks = tracks.filter(trackIndex => trackIndex.id !== track.id);
    this.setState({playlistTracks: newTracks});

  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
