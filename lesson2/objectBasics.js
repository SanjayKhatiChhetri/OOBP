let albumName = "Thriller";
let albumReleased = 1982;
let singer = "Michael Jackson";
let numberOfSongs = 9;

let albumName2 = "Bad";
let albumReleased2 = 1987;
let singer2 = "Michael Jackson";
let numberOfSongs2 = 10;

let albumName3 = "Dangerous";
let albumReleased3 = 1991;
let singer3 = "Michael Jackson";
let numberOfSongs3 = 14;

//object is collection of some key value pairs
//creating an object using object literal syntax
let album1 = {
  // object literal
  name: "Thriller", //key: value
  released: 1982,
  singer: "Michael Jackson",
  numberOfSongs: 9,
};

let album2 = {
  name: "Bad",
  released: 1987,
  singer: "Michael Jackson",
  numberOfSongs: 10,
};

let album3 = {
  name: "Dangerous",
  released: 1991,
  singer: "Michael Jackson",
  numberOfSongs: 14,
};

//reading values from object
console.log(albumName3 + " was realsed in " + albumReleased3); // normal method to read values from variables
console.log(album2.name + " was realsed in " + album2.released);
