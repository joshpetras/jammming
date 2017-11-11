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
        "uri": "spotify:track:6DU8kLZJHv1N3Bki2Uuzq7",
        "name": "Tiny Dancer",
        "artist": "Elton John",
        "album": "Madman Across The Water"
      }, {
        "id": "2",
        "uri": "spotify:track:7wWhGTwphcduqqkKJz7DTu",
        "name": "Tiny Dancer",
        "artist": "Tim McGraw",
        "album": "Love Story"
      }, {
        "id": "3",
        "uri": "spotify:track:45Ra1HSfULTXvGHx7OEO2b",
        "name": "Tiny Dancer",
        "artist": "The White Raven",
        "album": "Tiny Dancer"
      }],
      "playlistName": "New Playlist",
      "playlistTracks": [{
        "id": "4",
        "uri": "spotify:track:2WuctaHNqb2rfjYwpMoUvn",
        "name": "Freedom of 76",
        "artist": "Ween",
        "album": "Chocolate and Cheese"
      }, {
        "id": "5",
        "uri": "spotify:track:4vEsyIQv7XDy3inDmi5ho8",
        "name": "Today",
        "artist": "Smashing Pumpkins",
        "album": "Siamese Dream"
      }]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
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

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    let tracks = this.state.playlistTracks;
    let trackURIs = tracks.map(trackIndex => trackIndex.uri);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
