//Calculate the difference between 2 dates in days,hours,minutes,seconds

var date1 = new Date("1/1/2019");
//var date2 = new Date("1/20/2019");
var date2 = Date.now();
//console.log('date2',date2);
var days = parseInt((date2 - date1) / (1000 * 60 * 60 * 24)); //Differnce in days
var hours = parseInt((date2 - date1) / (1000 * 60 * 60)); //Difference in Hours 
var minutes = parseInt((date2 - date1) / (1000 * 60)); //Difference in Minutes
var seconds = parseInt((date2 - date1) / (1000)); //Difference in Seconds

console.log('Days : ',days);
console.log('hours : ',hours);
console.log('minutes : ',minutes);
console.log('seconds : ',seconds);
