  var Spotify = require('node-spotify-api');
 
  var spotify = new Spotify({
    id: "359cebc4827e47e385662e776290caf5",
    secret: "69ea8ef6dbdc4b188bd525bccc498b17"
  });

var axios = require('axios');
require("dotenv").config();
// //import keys
// var keys = require("./keys.js");
//setup spotify
//setup spotify
// var spotify = new Spotify(keys.spotify);
//setup bandsintown
var bandsintown = require('bandsintown');
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080
var nodeArgs = process.argv;
var movieName = "";
var concertName = null; 
var bandName = ""; 

//Spotify Authentication

//loop for grabbing movie name
  for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
      movieName = movieName + "+" + nodeArgs[i];
    }
    else {
      movieName += nodeArgs[i];
    }
}
  //loop for grabbing bands information
  for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
      bandName = bandName + "+" + nodeArgs[i];
    }
    else {
      bandName += nodeArgs[i];
    }
  }
//get data from omdb and write to console
function movieThis()
{
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&plot=short&apikey=trilogy";
  axios.get(queryUrl).then(
    function (response) {
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
console.log(queryUrl);
  }

//grab user argument for movie-this 
var userInput = process.argv[2];
console.log(userInput); 

switch(userInput){
  case "movie-this":
    movieThis();
    break; 
  case "concert-this":
    concertThis();
    break; 
}

//request information from bands in town API
function concertThis()
{
  spotify.search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });

  // axios.get(queryURL).then(
  //     function(bandResponse){
  //         console.log("Venue: " + bandResponse.data[0].venue.name);
  //         console.log("City: " + bandResponse.data[0].venue.city);
  //         console.log(moment(bandResponse.data[0].datetime).format("MM/DD/YYYY"));
  //     }
  // );
}


