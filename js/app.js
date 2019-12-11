
console.log('js linked!');

var storeHours = ['6am','7am','8am','9am', '10am', '11am', '12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];



// an object// to store info in here you use key data pairs
// var seattle = {
//   name : 'Seattle',
//   minCustomers : 23,
//   maximumCustomers: 65,
//   averageCookies : 6.3,
//   cookierPerHrArray:[],
//   customerPerHrArray:[],

//
//     return random;
//     console.log(random);
//   },
//   city(Seattle,23,65,6.3);

function City(name, minCustomers,maximumCustomers,averageCookies) {
  // Inside constructor, set up the properties we want for objects created with this constructor
  // set key/value pairs on the new object using contextual this
  this.name = name;
  this.minCustomers = minCustomers;
  this.maximumCustomers = maximumCustomers;
  this.averageCookies = averageCookies;
  this.customersPerHour = [];
  this.cookierPerHrArray = [];
  this.totalcookies = 0;
}


City.prototype.randomNumberOfCustomers = function() {
  for(var i = 0; i < storeHours.length; i++) {
    this.customersPerHour.push(random(this.minCustomers, this.maxCustomers));
  }
};

function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


City.prototype.cookiePerHour = function(){
  this.randomNumberOfCustomers.prototype();
  for (var i = 0; i < storeHours.length; i++) {
    var currentHour = Math.ceil(this.customersPerHour[i] * this.averageCookies);
    //this is for current hour cookie total based on cph and avg cookie ph
    this.cookierPerHrArray.push(currentHour);
    console.log(curre);
    //this keepstrack of total cookies
    this.totalcookies = this.totalcookies + currentHour;

  }
};





