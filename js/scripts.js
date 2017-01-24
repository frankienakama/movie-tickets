//back-end

function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.totalPrice = function() {
  var basePrice = 10;
  if (this.movie === 1) {
    basePrice -= 1;
  };
  if (this.time === 1) {
    basePrice -= 2;
  };
  if (this.age === 1) {
    basePrice -= 2;
  };
  return basePrice;
};

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
