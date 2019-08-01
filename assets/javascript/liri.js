require("dotenv").config();  
var Spotify = require('node-spotify-api');
var SpotifyWebApi = require('spotify-web-api-node');
//import keys for spotify from env
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);
//import keys for bands in town from env
var bandsIn = (keys.bandsIn); 
var axios = require('axios');
//store keys in secret file 
require("dotenv").config();
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080

var moment = require("moment");
//create variable to store node arguments
var nodeArgs = process.argv;
var bandName = ""; 
var movieName = ""
var songName = ""; 
var userInput = process.argv[2];

//Spotify Authentication

//loop for grabbing starting and stopping point of user input
  for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
      movieName = movieName + "+" + nodeArgs[i];
    }
    else {
      movieName += nodeArgs[i];
    }
}
//loop for grabbing spotify information
for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 3 && i < nodeArgs.length) {
    songName = songName + "+" + nodeArgs[i];
  }
  else {
    songName += nodeArgs[i];
  }
 
}
  // loop for grabbing bands information
for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 3 && i < nodeArgs.length) {
    bandName = bandName + "+" + nodeArgs[i];
  }
  else {
    bandName += nodeArgs[i];
  }
}
// get data from omdb and write to console
function movieThis()
{
  //null check 
  if (movieName == 0)
  {
    movieName = "Mr.Nobody"; 
    }
  
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&plot=short&apikey=trilogy";
  axios.get(queryUrl).then(
    function (response) {
      if (err) {
        console.log("err: " + err)
        return;
      }
      // Then we print out the imdbRating
      console.log("The movie's title is: " + response.data.Title);
      console.log("The movie's year is: " + response.data.Year);
      console.log("The movie's Imdb rating is: " + response.data.imdbRating);
      console.log("The movie's Rotten Tomatoes score is: " + response.data.Ratings[1].Value);
      console.log("The movie's was made in the " + response.data.Country);
      console.log("The movie's language is: " + response.data.Language);
      console.log("The movie's plot is: " + response.data.Plot);
      console.log("The movie's actors are: " + response.data.Actors);
    } //create if statement to check if movieName is there
);
} 

switch(userInput){
  case "movie-this":
    movieThis();
    break; 
  case "concert-this":
    concertThis();
    break; 
  case "spotify-this":
    spotifyThis();
    break; 
}

function spotifyThis() {
  if (songName == 0)
  {
    songName = "The Sign Ace of Base"
        }
      spotify.search({
        type: "track",
        query: songName,
        limit: 5
      }, function (err, data) {
        if (err) {
          console.log("err: " + err)
          return;
        }
        var songs = data.tracks.items;
        // console.log("songs: " + JSON.stringify(songs));
        for (var i = 0; i < songs.length; i++) {
          console.log("----------------");
          console.log("artist name: " + JSON.stringify(songs[i].artists[0].name));
          console.log("song name: " + songs[i].name);
          console.log("preview link: " + songs[i].preview_url);
          console.log("album: " + songs[i].album.name);
        
        }
      })
}

function concertThis() {
  var queryUrl = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=" + bandsIn;
  axios.get(queryUrl).then(
    function (response, err) {
      if (err) {
        console.log("err: " + err);
      }
      console.log("You're in luck, " + bandName + " is playing soon!")
      console.log(bandName + " will be playing at the " +response.data[0].venue .name);
        ;       // console.log(response.data[0].venue.latitude);
  
      console.log("That is located in " + response.data[0].venue.city + "," + response.data[0].venue.region + "" + response.data[0].venue.country);
      var eventDate = response.data[0].datetime;
    console.log("The date of the next show is: " + moment(eventDate).format("MM/DD/YYYY"));
    })
}



 

