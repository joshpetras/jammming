const clientId = 'b1893b1ebc9e4491ba2ea34565e2d9f1';
const redirect_uri = 'http://localhost:3000/';
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return new Promise(resolve => resolve(accessToken));
    }

    const newAccessToken = window.location.href.match(/access_token=([^&]*)/);
    const newExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
    if (newAccessToken && newExpiresIn) {
      accessToken = newAccessToken[1];
      const expiresIn = Number(newExpiresIn[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_uri}`;
      window.location = accessUrl;
    }

  },

  search(searchTerm) {
    const accessToken = this.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    }, networkError => {
      console.log(networkError.message);
    }).then(jsonResponse => {
      if(!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    });
  }
}

export default Spotify;
