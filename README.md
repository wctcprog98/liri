##Liri## 

##Liri.js
* liri stands for language interpretation and recognition interface. Liri is a command line app that uses the spotify, bands in town, and imdb API's to retrive information for the user. 

##Getting Started
Run npm install & npm init -y(if no json file exists). In the command line you are able to type in on of 3 commands
* node liri spotify-this "song name"
* node liri concert-this "band/artist name"
* node liri movie-this "movie name"
* node liri do-what-it-says "random.txt"

##What Each Command Should Do.
In the command node liri.js concert-this 

This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

Name of the venue

Venue location

Date of the Event (use moment to format this as "MM/DD/YYYY")

node liri.js spotify-this-song '<song name here>'

This will show the following information about the song in your terminal/bash window

Artist(s)

The song's name

A preview link of the song from Spotify

The album that the song is from