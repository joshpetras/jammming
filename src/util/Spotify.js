const clientId = 'b1893b1ebc9e4491ba2ea34565e2d9f1';
const secret = '20726b166b4541f1b41e464a871e775e';
let accessToken;

const Spotify = {
  getAccessToken() {
    if(accessToken) {
      return new Promise(resolve => resolve(accessToken));
    }
    // Begin working on project step 79 here...
  },


export default Spotify;
