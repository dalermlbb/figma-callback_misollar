
// Declaration Function
/*
function toqSonlarniChiqar(arr) {
  return arr.filter(son => son % 2 !== 0);
}
console.log(toqSonlarniChiqar(sonlar)); 
*/

// Function Expression
/*
const toqSonlarniOl = function(arr) {
  return arr.filter(son => son % 2 !== 0);
};
console.log(toqSonlarniOl(sonlar)); 
*/

// Arrow Function
/*
const toqSonlar = (arr) => arr.filter(son => son % 2 !== 0);
console.log(toqSonlar(sonlar)); 
*/

// Callback Function
/*
function filtrlovchiFunksiya(funksiya) {
  return funksiya(sonlar);
}
function toqFilter(arr) {
  return arr.filter(son => son % 2 !== 0);
}
console.log(filtrlovchiFunksiya(toqFilter)); 
*/

// Constructor Function
/*
function ToqFilter(arr) {
  this.toqSonlar = arr.filter(son => son % 2 !== 0);
}
const natija = new ToqFilter(sonlar);
console.log(natija.toqSonlar); 
*/

// IIFE (Immediately Invoked Function Expression)
/*

const natija2 = (function(arr) {
  return arr.filter(son => son % 2 !== 0);
})(sonlar);
console.log(natija2);
*/

