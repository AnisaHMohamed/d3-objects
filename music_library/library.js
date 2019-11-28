const library = {
       tracks: {
              t01: {
                     id: "t01",
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three"
              },
              t02: {
                     id: "t02",
                     name: "Model View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"
              },
              t03: {
                     id: "t03",
                     name: "Four Thirty-Three",
                     artist: "John Cage",
                     album: "Woodstock 1952"
              }
       },
       playlists: {
              p01: {
                     id: "p01",
                     name: "Coding Music",
                     tracks: ["t01", "t02"]
              },
              p02: {
                     id: "p02",
                     name: "Other Playlist",
                     tracks: ["t03"]
              }
       },



       printPlaylists: function () {
              for (playlist of Object.keys(this.playlists)) {
                     //console.log(library.playlists[playlist])
                     let playlistName = this.playlists[playlist];
                     // console.log(playlistName.id)
                     // console.log(playlistName.name)
                     // console.log(playlistName.tracks.length)
                     //library[playlists][playslist] //same as above
                     console.log(`${playlistName.id}: ${playlistName.name} - ${playlistName.tracks.length} tracks`)
       
              }
       },
       printTracks : function () {
              for (trackList of Object.keys(this.tracks)) {
                     //console.log(library.tracks[trackList])
                     let tracks = this.tracks[trackList];
                     console.log(`${tracks.id}: ${tracks.name} by ${tracks.artist} (${tracks.album})`)
              }
       }

};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// const printPlaylists = function () {
//        for (playlist of Object.keys(library.playlists)) {
//               //console.log(library.playlists[playlist])
//               let playlistName = library.playlists[playlist];
//               // console.log(playlistName.id)
//               // console.log(playlistName.name)
//               // console.log(playlistName.tracks.length)
//               //library[playlists][playslist] //same as above
//               console.log(`${playlistName.id}: ${playlistName.name} - ${playlistName.tracks.length} tracks`)

//        }
//}
library.printPlaylists()

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

// const printTracks = function () {
//        for (trackList of Object.keys(library.tracks)) {
//               //console.log(library.tracks[trackList])
//               let tracks = library.tracks[trackList];
//               console.log(`${tracks.id}: ${tracks.name} by ${tracks.artist} (${tracks.album})`)
//        }
// }
library.printTracks()


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

const printPlaylist = function (playlistId) {
       // console.log(library.playlists.playlistId) --> doesnt work dot notation expect string literal
       //console.log(library.playlists[playlistId])
       let playlistObject = library.playlists[playlistId]
       let tracklist = playlistObject.tracks
       //console.log(tracklist)
       console.log(`${playlistObject.id}: ${playlistObject.name} - ${playlistObject.tracks.length} tracks`)
       for (track of tracklist) {
              trackListObject = library.tracks[track]
              console.log(`${trackListObject.id}: ${trackListObject.name} by ${trackListObject.artist} (${trackListObject.album})`)
       }




}
//printPlaylist('p01')


// adds an existing track to an existing playlist
const addTrackToPlaylist = function (trackId, playlistId) {
       let playlistObject = library.playlists[playlistId]
       //console.log(playlistObject)
       //console.log(playlistObject.id)
       playlistObject.tracks.push(trackId)
       //console.log(playlistObject)



}
// addTrackToPlaylist('t02','p02') 

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function () {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function (name, artist, album) {
let newTrackId = generateUid();
library.tracks[ newTrackId] = {
       id: newTrackId,
       name: name,
       artist: artist,
       album: album}
       console.log(library.tracks[newTrackId])
}
//addTrack('1','1','1')


// adds a playlist to the library
const addPlaylist = function (name) {
       let newTrackId = generateUid();

       library.playlists[newTrackId]={
              id: newTrackId,
              name: name,
              tracks:[]
       };

       console.log(library.playlists)
}
//addPlaylist("Anisa")


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function (query) {

}