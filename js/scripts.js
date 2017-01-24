//back-end
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

  Ticket.prototype.totalPrice = function() {
// old movies
// old movie, matinee, other age
    if (this.movie === 1 && this.time === 1 && this.age === 1) {
      return "$2";
// old movie, matinee, adult
    } else if (this.movie === 1 && this.time === 1 && this.age === 2) {
      return "$3";
// old movie, night, other age
    } else if (this.movie === 1 && this.time === 2 && this.age === 1) {
      return "$4";
// old movie, night, adult
    } else if (this.movie === 1 && this.time === 2 && this.age === 2) {
      return "$6";

// new movies
// new movie, matinee, other age
    } else if (this.movie === 2 && this.time === 1 && this.age === 1) {
        return "$4";
// new movie, matinee, adult
    } else if (this.movie === 2 && this.time === 1 && this.age === 2) {
      return "$5";
// new movie, night, other age
    } else if (this.movie === 2 && this.time === 2 && this.age === 1) {
      return "$8";
// new movie, night, adult
    } else if (this.movie === 2 && this.time === 2 && this.age === 2) {
      return "$10";
// any other combination
    } else {
      return "Missing input";
    }
  }

//front-end
$(document).ready(function(){
  $("form#ticket-price").submit(function(event) {
    event.preventDefault();

    var movieType = parseInt($("#select-movie option:selected").val());
    var timeType = parseInt($("#select-time option:selected").val());
    var ageType = parseInt($("input:radio[name=age]:checked").val());



    var ticketInfo = new Ticket(movieType, timeType, ageType);


    $("span.ticket-results").text(ticketInfo.totalPrice());


  });
});
