var Spotify = require('node-spotify-api');

var axios = require('axios');


//setup spotify
var spotify = new Spotify({
  id: "359cebc4827e47e385662e776290caf5",
  secret: "69ea8ef6dbdc4b188bd525bccc498b17"
});

//setup omdb

var userQuery = ""; 

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
  var axios = require("axios");

  // We then run the request with axios module on a URL with a JSON
  axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=229392bf").then(
    function(response) {
      // Then we print out the imdbRating
      console.log("The movie's rating is: " + response.data.imdbRating);
    }
  );
console.log(data); 
});
