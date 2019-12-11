
console.log('js linked!');

var storeHours = ['6am','7am','8am','9am', '10am', '11am', '12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];



an object// to store info in here you use key data pairs
var seattle = {
  name : 'Seattle',
  minCustomers : 23,
  maximumCustomers: 65,
  averageCookies : 6.3,
  cookierPerHrArray:[],
  customerPerHrArray:[],

  randomNumberOfCustomers: function() {
    var random = Math.ceil(Math.random() * (this.maximumCustomers - this.minCustomers) + this.minCustomers);
  
    return random;
    console.log(random);
  },
  city(Seattle,23,65,6.3);
};
"
seattle.randomNumberOfCustomers();
//this is saying go to seattle and run this function
// //var Seattle = {
//  // name: 'Seattle',
//  // minCustomer: 23,
//   maxCustomer: 65,
//   avgSales: 6.3,
//   hourlyArray: [],
//   randomCustomer: function () {
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
//   },
//   estimeSales: function () {
//     for (var i = 0; i < hours.length; i++) {
//       console.log(hours[i]);
//       Seattle.hourlyArray[i] = Math.floor(this.randomCustomer() * Seattle.avgSales);
//     }
//   }
//};

// randomCookiesPerHr: function(){
// Constructor!
// Constructor names tend to be a singular noun
// Take in values that we want as parameters
//pet will be city and breed will be parameters
function City (name, minCustomers,maximumCustomers,averageCookies) {
  // Inside constructor, set up the properties we want for objects created with this constructor
  // set key/value pairs on the new object using contextual this
  this.name = name;
  this.minCustomers = minCustomers;
  this.maximumCustomers = maximumCustomers;
  this.averageCookies = averageCookies;
  this.cookierPerHrArray = [];
  this.totalcookies = 0;
}

// Pet.prototype.functionName = function(any, parameters, go, here)
// Now, any pet created with the Pet constructor will be able to call this method
// And by using contextual this, we can access the descriptionWords of that specific pet object
Pet.prototype.getDescription = function() {
  var randomIndex = Math.floor(Math.random() * this.descriptionWords.length);
  return this.descriptionWords[randomIndex];
};

// Add a prototype method to render a pet to the table
// Because it's a prototype method, all pet instances will be able to call this method
Pet.prototype.render = function() {
  var animalTable = document.getElementById('animal-table');

  // Create the tr and the td's to hold this pet's data
  var petRow = document.createElement('tr');

  // create breed td, add it to the row
  var breedCell = document.createElement('td');
  breedCell.textContent = this.breed;
  petRow.appendChild(breedCell);

  // create weight td, add it to the row
  var weightCell = document.createElement('td');
  weightCell.textContent = this.weight;
  petRow.appendChild(weightCell);

  // also add description
  var descriptionCell = document.createElement('td');
  descriptionCell.textContent = this.descriptionWords;
  petRow.appendChild(descriptionCell);

  // add to page by appending the new row of data to the table
  animalTable.appendChild(petRow);
};

var firstDog = new Pet('Weimaraner', 35, ['hungry', 'blue eyes', 'good boy', 'cute']);
var firstCat = new Pet('American shorthair', 5, ['inquisitive', 'needy', 'small', 'whiskery']);
var lizard = new Pet('iguana', 8, ['green', 'scaly']);

var pets = [firstDog, firstCat, lizard];

var animalHolder = document.getElementById('animal-holder');
animalHolder.textContent = 'the animals go here';

// error we initially got:
// cannot set textContent of null
// which tells us animalHolder is null

// create a p tag inside of the animalHolder for each pet
for (var i = 0; i < pets.length; i++) {
  pets[i].render();
// }





var tokyo = {
  name :'Tokyo',
  minCutomers: 3,
  maximumCustomers: 24,
  averageCookies: 1.2,
  cookierPerHrArray:[],
  customerPerHrArray:[],
  randomNumberOfCustomers: function(){
    for(var i = 0;i < storeHours.length;i++){
      this.customerPerHrArray.push(Math.ceil(Math.random() * (this.maximumCustomers - this.minCustomers) + this.minCustomers));
    }
    return Math.ceil(Math.random() * (this.maximumCustomers - this.minCustomers) + this.minCustomers);

    city(Tokyo, 3,24,1.2)
  },
};

var dubai = {
  name: 'Dubai',
  minCustomers: 11,
  maximumCustomers: 38,
  averageCookies: 3.7,

  randomNumberOfCustomers: function(){
    for(var i = 0;i < storeHours.length;i++){
      this.customerPerHrArray.push(Math.ceil(Math.random() * (this.maximumCustomers - this.minCustomers) + this.minCustomers));
    }
    return Math.ceil(Math.random() * (this.maximumCustomers - this.minCustomers) + this.minCustomers);
    city(dubai, 11,38,3.7)


  },
};
var paris = {
  name: 'Paris',
  minCustomers: 20,
  maximumCustomers: 38,
  averageCookies:2.3,
  cookierPerHrArray:[],
  customerPerHrArray:[],


  randomNumberOfCustomers: function(){
    for(var i = 0;i < storeHours.length;i++){
      this.customerPerHrArray.push(Math.ceil(Math.random() * (this.maximumCustomers - this.minCustomers) + this.minCustomers));
    }
    return Math.ceil(Math.random() * (this.maximumCustomers - this.minCustomers) + this.minCustomers);
    city(paris,20,38,2.3)



  },
};
var Lima = {
  name: 'Lima',
  minCustomers: 2,
  maximumCustomers: 16,
  averageCookies: 4.6,
  cookierPerHrArray:[],
  customerPerHrArray:[],

  randomNumberOfCustomers: function(){
    for(var i = 0;i < storeHours.length;i++){
      this.customerPerHrArray.push(Math.ceil(Math.random() * (this.maximumCustomers - this.minCustomers) + this.minCustomers));
    }
    return Math.ceil(Math.random() * (this.maximumCustomers - this.minCustomers) + this.minCustomers);

    city(Lima, 2,16,4.6)



  },
};


  }

  'use strict';

console.log('js linked!');
// from michelle.s class demo
// Constructor!
// Constructor names tend to be a singular noun
// Take in values that we want as parameters
function Pet(breedOfThisPet, weight, descriptionWords) {
  // Inside constructor, set up the properties we want for objects created with this constructor
  // set key/value pairs on the new object using contextual this
  this.breed = breedOfThisPet;
  // name of parameter and name of property can be the same or different
  this.weight = weight;
  this.descriptionWords = descriptionWords;
}

// Pet.prototype.functionName = function(any, parameters, go, here)
// Now, any pet created with the Pet constructor will be able to call this method
// And by using contextual this, we can access the descriptionWords of that specific pet object
Pet.prototype.getDescription = function() {
  var randomIndex = Math.floor(Math.random() * this.descriptionWords.length);
  return this.descriptionWords[randomIndex];
};

// Add a prototype method to render a pet to the table
// Because it's a prototype method, all pet instances will be able to call this method
Pet.prototype.render = function() {
  var animalTable = document.getElementById('animal-table');

  // Create the tr and the td's to hold this pet's data
  var petRow = document.createElement('tr');

  // create breed td, add it to the row
  var breedCell = document.createElement('td');
  breedCell.textContent = this.breed;
  petRow.appendChild(breedCell);

  // create weight td, add it to the row
  var weightCell = document.createElement('td');
  weightCell.textContent = this.weight;
  petRow.appendChild(weightCell);

  // also add description
  var descriptionCell = document.createElement('td');
  descriptionCell.textContent = this.descriptionWords;
  petRow.appendChild(descriptionCell);

  // add to page by appending the new row of data to the table
  animalTable.appendChild(petRow);
};

var firstDog = new Pet('Weimaraner', 35, ['hungry', 'blue eyes', 'good boy', 'cute']);
var firstCat = new Pet('American shorthair', 5, ['inquisitive', 'needy', 'small', 'whiskery']);
var lizard = new Pet('iguana', 8, ['green', 'scaly']);

var pets = [firstDog, firstCat, lizard];

var animalHolder = document.getElementById('animal-holder');
animalHolder.textContent = 'the animals go here';

// error we initially got:
// cannot set textContent of null
// which tells us animalHolder is null

// create a p tag inside of the animalHolder for each pet
for (var i = 0; i < pets.length; i++) {
  pets[i].render();
}
//from Michelles class 6



//var pets = [firstDog, firstCat];

//var animalHolder = document.getElementById('animal-holder');
//animalHolder.textContent = 'the animals go here';

// error we initially got:
// cannot set textContent of null
// // which tells us animalHolder is null

// // create a p tag inside of the animalHolder for each pet
// for (var i = 0; i < pets.length; i++) {
//   // first, ask the document to create an element for us
//   var newParagraph = document.createElement('p');
//   newParagraph.textContent = `An adoptable ${pets[i].breed} that is ${pets[i].getDescription()}`;
//   // then, append that element to the element on the page
//   animalHolder.appendChild(newParagraph);
// }
//{randomCookiesPerHr:function () {
//return this.randomNumberOfCustomers() * this.averageCookies,

//randomCookiesPerHr: function(){
// for(var i=0,i<averageCookies.length;1++){
// this.cookierPerHrArray.push(Math.ceil(Math.random()
//}
//do same as above with random number of cookies per hour. lihne 29 to 31
//create a p tag inside of the animal holder for reference.

//}, randomCookiesPerHr:function() {
// return this.randomNumberOfCustomers() * this.averageCookies

//seattle tokyo paris lima dubai//
//This is what I need....
//Stores the min/max hourly customers, and the average cookies per customer, in object properties
//Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
//Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
//Store the results for each location in a separate array… perhaps as a property of the object representing that location
//Display the values of each array as unordered lists in the browser
//Calculating the sum of these hourly totals; your output for each location should look like this//
//5 objects with something in front of them and thats the main thing we //MSMediaKeyNeededEvent.apply.apply.apply.
//function Loc1(23, 65) {
// return Math.random() * (max - min) + min;
//
//push values into your cookies per hour array using the random number of customres function.... per lillianb. Taking the stuff I "dsbuilt out" and putting it into 
//this is able to add"stores"
//work on constructors
//"build out a constructor that has afunction that lets me do the cookies per hour. 
