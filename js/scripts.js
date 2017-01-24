//back-end
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}



//front-end
$(document).ready(function(){
  $("form#ticket-price").submit(function(event) {
    event.preventDefault();

    var movieType = $("#select-movie option:selected").val();

    var timeType = $("#select-time option:selected").val();;

    var ageType = $("input:radio[name=age]:checked").val();

    var ticketInfo = new Ticket(movieType, timeType, ageType);
    $("span.ticket-results").val("");
    $("span.ticket-results").text(ticketInfo);


  });
});
