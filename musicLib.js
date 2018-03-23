class Library {
  constructor(name, creator) {
    this.libName = name;
    this.libCreator = creator;
    this.playlists = [];
  }

  addPlaylist(playlist) {
    this.playlists.push(playlist);
  }
}


class Playlist {
  constructor(name) {
    this.playListName = name;
    this.trackList = [];
  }

  addTrack(trackName) {
    this.trackList.push(trackName);
  }

  get totalPlayTime() {
    let totalDuration = 0;
    for(let track in this.trackList) {
      totalDuration += this.trackList[track].trackLength;
    }
    return totalDuration;
  }

  get overallRating() {
    let listLength = this.trackList.length;
    let totalStarRating = 0;
    for(let track in this.trackList) {
      totalStarRating += this.trackList[track].rating;
    }
    return totalStarRating / listLength;
  }
}


class Track {
  constructor(title, length, rating) {
    this.trackTitle = title;
    this.trackLength = length;
    this.rating = rating;
  }
}

/* Creating 5 new tracks */
let track1 = new Track('Song 1', 180, 4);
let track2 = new Track('Song 2', 215, 3);
let track3 = new Track('Song 3', 190, 4);
let track4 = new Track('Song 4', 230, 5);
let track5 = new Track('Song 5', 250, 5);

/* CReating 2 new playlists */
let playlist1 = new Playlist('Great Playlist');
let playlist2 = new Playlist('Shorter Playlist');

/* Add all 5 tracks to playlist1 */
playlist1.addTrack(track1);
playlist1.addTrack(track2);
playlist1.addTrack(track3);
playlist1.addTrack(track4);
playlist1.addTrack(track5);

/* Add only 2 tracks to playlist2 */
playlist2.addTrack(track3);
playlist2.addTrack(track5);

/* Call totalPlayTime and overallRating functions on playlist1 */
console.log('Playlist1 total time:', playlist1.totalPlayTime, 'seconds.');
console.log('Playlist1 average song rating: ', playlist1.overallRating);

/* Call totalPlayTime and overallRating functions on playlist2 */
console.log('Playlist2 total time:', playlist2.totalPlayTime, 'seconds.');
console.log('Playlist2 average song rating: ', playlist2.overallRating);

/* Create Library */
let lib1 = new Library('Cool Songs', 'Greg');

/* Add both playlists to Library */
lib1.addPlaylist(playlist1);
lib1.addPlaylist(playlist2);

/* Show created Libary contents */
console.log('Here is the Library: ', lib1);