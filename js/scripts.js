//back-end
function Ticket(newMovie, oldMovie, matinee, evening, adult, otherAge) {
  this.newMovie = newMovie;
  this.oldMovie = oldMovie;
  this.matinee = matinee;
  this.evening = evening;
  this.adult = adult;
  this.otherAge = otherAge;
}



//front-end
$(document).ready(function(){
  $("form#ticket-price").submit(function(event) {
    event.preventDefault();

    var lotr12 = $("option.old-movie").val();
    var lotr3 = $("option#new-movie").val();

    var morning = $("option.matinee").val();
    var night = $("option.evening").val();

    var regular = $("input#adult").val();
    var other = $("input.other-age").val();

    var ticketInfo = new Ticket(lotr3, lotr12, morning, night, regular, other);
    $("span.ticket-results").val("");
    $("span.ticket-results").text(ticketInfo);


  });
});
