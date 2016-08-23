function Viewer(age) {
  this.age = age;
  if (age === "age1") {
    this.discount = .4;
  } else if (age === "age2") {
    this.discount = 0;
  } else if (age === "age3") {
    this.discount = .50;
  }
}

function Movie(price) {
  this.price = price;
}

function Time(discount) {
  this.discount = discount;
}

$(document).ready(function(){
  var suicideSquad = new Movie(10);
  var findingDory = new Movie(7);
  var pets = new Movie(9);
  var captainAmerica = new Movie(5);
  var morning = new Time(.20);
  var evening = new Time(0);
  var midnight = new Time(-.2);

  $('form#inputForm').submit(function(event){
    event.preventDefault();
    var viewer = new Viewer($("#age").val());
    var time = $("#time").val();
    var movie = $("#movie").val();

    if (movie === "suicideSquad") {
      viewer.movie = suicideSquad;
    } else if (movie === "findingDory") {
      viewer.movie = findingDory;
    } else if (movie === "pets") {
      viewer.movie = pets;
    } else {
      viewer.movie = captainAmerica;
    }

    if (time === "morning") {
      viewer.time = morning;
    } else if (time === "evening") {
      viewer.time = evening;
    } else {
      viewer.time = midnight;
    }

    var cost = (viewer.movie.price - (viewer.movie.price * viewer.discount) - (viewer.movie.price * viewer.time.discount)).toFixed(2);
    debugger;
    $('.cost').text(cost);


  });
});
