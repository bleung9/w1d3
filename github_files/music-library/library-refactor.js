var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function() {
    let arr = [];
    for (var id in this.playlists) {
      var playlistName = this.playlists[id].name;
      var numberOfTracks = this.playlists[id].tracks.length;
      arr.push(id + ": " + playlistName + " - " + numberOfTracks + " tracks");
    }
    return arr;
  },
  printTracks: function () {
    let arr = [];
    for (var id in this.tracks) {
      var trackID = this.tracks[id].id;
      var trackName = this.tracks[id].name;
      var trackArtist = this.tracks[id].artist;
      var trackAlbum = this.tracks[id].album;
      arr.push(trackID + ": " + trackName + " by " + trackArtist + " (" + trackAlbum + ")");
    }
    return arr;
  },
  printPlaylist: function (playlistId) {
    var playlistName = this.playlists[playlistId].name;
    var numberOfTracks = this.playlists[playlistId].tracks.length;
    console.log(playlistId + ": " + playlistName + " - " + numberOfTracks + " tracks");
    var tracklist = this.playlists[playlistId].tracks;
    let arr = [];
    for (i = 0; i < tracklist.length; i++) {
      var trackID = this.tracks[tracklist[i]].id;
      var trackName = this.tracks[tracklist[i]].name;
      var trackArtist = this.tracks[tracklist[i]].artist;
      var trackAlbum = this.tracks[tracklist[i]].album;
      arr.push(trackID + ": " + trackName + " by " + trackArtist + " (" + trackAlbum + ")");
    }
    return arr;
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    var arrOfTracks = this.playlists[playlistId].tracks;
    for (i = 0; i < arrOfTracks.length; i++) {
      if (trackId === arrOfTracks[i]) {
        return ("this track already exists in this playlist");
      }
    }
    arrOfTracks.push(trackId);
    return arrOfTracks;
  },
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function (name, artist, album) {
    //in other words, adding a new track to library.tracks (assuming it doesn't already exist, i'm not checking for that)
    let newId = this.uid();
    this.tracks[newId] = {};
    this.tracks[newId].id = newId;
    this.tracks[newId].name = name;
    this.tracks[newId].artist = artist;
    this.tracks[newId].album = album;
    return this.tracks;
  },
  addPlaylist: function (name) {
    let newId = this.uid();
    this.playlists[newId] = {};
    this.playlists[newId].id = newId;
    this.playlists[newId].name = name;
    this.playlists[newId].tracks = [];
    return this.playlists;
  },
  printSearchResults: function(query) {
    let newList = [];
    for (var track in this.tracks){
      if (this.tracks[track].name.includes(query) ||
          this.tracks[track].artist.includes(query) ||
          this.tracks[track].album.includes(query)) {
        newList.push(track);
      }
    }
    return newList;
  }
}

console.log(library.addPlaylist("newplaylist"));
console.log(library.printSearchResults("ee"));


// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// var printPlaylists = function () {
//   for (var id in library.playlists) {
//     var playlistName = library.playlists[id].name;
//     var numberOfTracks = library.playlists[id].tracks.length;
//     return (id + ": " + playlistName + " - " + numberOfTracks + " tracks");
//   }
// }

// console.log(library.printPlaylists());

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

// var printTracks = function () {
//   for (var id in library.tracks) {
//     var trackID = library.tracks[id].id;
//     var trackName = library.tracks[id].name;
//     var trackArtist = library.tracks[id].artist;
//     var trackAlbum = library.tracks[id].album;
//     return (trackID + ": " + trackName + "by" + trackArtist + "(" + trackAlbum + ")");
//   }
// }

// console.log(library.printTracks());

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

// var printPlaylist = function (playlistId) {
//   var playlistName = library.playlists[playlistId].name;
//   var numberOfTracks = library.playlists[playlistId].tracks.length;
//   console.log(playlistId + ": " + playlistName + " - " + numberOfTracks + " tracks");
//   var tracklist = library.playlists[playlistId].tracks;
//   for (i = 0; i < tracklist.length; i++) {
//     var trackID = library.tracks[tracklist[i]].id;
//     var trackName = library.tracks[tracklist[i]].name;
//     var trackArtist = library.tracks[tracklist[i]].artist;
//     var trackAlbum = library.tracks[tracklist[i]].album;
//     return (trackID + ": " + trackName + " by " + trackArtist + " (" + trackAlbum + ")");
//   }
// }

// adds an existing track to an existing playlist

// var addTrackToPlaylist = function (trackId, playlistId) {
//   var arrOfTracks = library.playlists[playlistId].tracks;
//   for (i = 0; i < arrOfTracks.length; i++) {
//     if (trackId === arrOfTracks[i]) {
//       return ("this track already exists in this playlist");
//     }
//   }
//   arrOfTracks.push(trackId);
//   return arrOfTracks;
// }

// console.log(addTrackToPlaylist("t02", "p02"));

// generates a unique id
// (use this for addTrack and addPlaylist)


// adds a track to the library

// var addTrack = function (name, artist, album) {
//   //in other words, adding a new track to library.tracks (assuming it doesn't already exist, i'm not checking for that)
//   let newId = uid();
//   library.tracks[newId] = {};
//   library.tracks[newId].id = newId;
//   library.tracks[newId].name = name;
//   library.tracks[newId].artist = artist;
//   library.tracks[newId].album = album;
//   console.log(library.tracks);
// }
// // console.log(addTrack("Hello", "Adele", "Twenty-Five"));

// // adds a playlist to the library

// var addPlaylist = function (name) {
//   let newId = uid();
//   library.playlists[newId] = {};
//   library.playlists[newId].id = newId;
//   library.playlists[newId].name = name;
//   library.playlists[newId].tracks = [];
//   return library.playlists;
// }

// // console.log(addPlaylist("Bosco be trippin"));


// var library = {
//   tracks: { t01: { id: "t01",
//                    name: "Code Monkey",
//                    artist: "Jonathan Coulton",
//                    album: "Thing a Week Three" },
//             t02: { id: "t02",
//                    name: "Model View Controller",
//                    artist: "James Dempsey",
//                    album: "WWDC 2003"},
//             t03: { id: "t03",
//                    name: "Four Thirty-Three",
//                    artist: "John Cage",
//                    album: "Woodstock 1952"}
//           },
//   playlists: { p01: { id: "p01",
//                       name: "Coding Music",
//                       tracks: ["t01", "t02"]
//                     },
//                p02: { id: "p02",
//                       name: "Other Playlist",
//                       tracks: ["t03"]
//                     }
//              }
// }

// // STRETCH:
// // given a query string string, prints a list of tracks
// // where the name, artist or album contains the query string (case insensitive)
// // tip: use "string".search("tri")
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {
//   let newList = [];
//   for (var track in library.tracks){
//     if (library.tracks[track].name.includes(query) ||
//         library.tracks[track].artist.includes(query) ||
//         library.tracks[track].album.includes(query)) {
//       newList.push(track);
//     }
//   } return newList;
// }

// console.log(printSearchResults("zz"));




