$(document).ready(function() {

  var suits = [" of diamonds", " of spades", "of hearts", "of clubs"];
  var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      var deck = value.concat(suit);
      // alert(deck);
      $("#list").append("<li>" + deck + "</li>");
    })
  })


//   var numbers = ["one","two","three","four","five"];
//   var doubledNumbers = numbers.map(function(number) {
//     return number.toUpperCase();
//   });
  
// alert(doubledNumbers);

// event.preventDefault();

});
