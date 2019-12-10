'use strict';

console.log('js linked!');
var storeHours = ['6am','7am','8am','9am', '10am', '11am', '12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];


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


var seattle = {
  name : 'Seattle',
  minCustomers : 23,
  maximumCustomers: 65,
  averageCookies : 6.3,
  cookierPerHrArray:[],
customerPerHrArray:[],
  randomNumberOfCustomers: function(){ 
    for(var i=0;i<storeHours.length;i++){
      this.customerPerHrArray.push(Math.ceil(Math.random() * (this.maximumCustomers - this.minCustomers) + this.minCustomers))
        }
    return Math.ceil(Math.random() * (this.maximumCustomers - this.minCustomers) + this.minCustomers);
    
  //do same as above with random number of cookies per hour. lihne 29 to 31
  //create a p tag inside of the animal holder for reference. 

  },
  randonNumberofCookiePerHour:function() {
    return this.randomNumberOfCustomers() * this.averageCookies

  }


};

var tokyo = {
  name : 'Tokyo',
  minCutomers: 3,
  maximumCustomers:24,
  averageCookies: 1.2,

  
  randomNumberOfCustomers: function(){
    return Math.ceil(Math.random() * (this.maximumCustomers - this.minCustomers) + this.minCustomers);
  }
}

var dubai = {
  name: 'Dubai',
  minCustomers: 11,
  maximumCustomers: 38,
  averageCookies: 3.7,

  randomNumberOfCustomers: function(){
    return Math.ceil(Math.random() * (this.maximumCustomers - this.minCustomers) + this.minCustomers);

  
  }
}
var paris = {
  name: 'Paris',
  minCustomers: 20,
  maximumCustomers: 38,
  averageCookies:2.3,

  
  randomNumberOfCustomers: function(){
    return Math.ceil(Math.random() * (this.maximumCustomers - this.minCustomers) + this.minCustomers);


  
  }
}
var Lima = {
  name: 'Lima',
  minCustomers: 2,
  maximumCustomers: 16,
  averageCookies: 4.6,
  
  randomNumberOfCustomers: function(){
    return Math.ceil(Math.random() * (this.maximumCustomers - this.minCustomers) + this.minCustomers);




  }
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