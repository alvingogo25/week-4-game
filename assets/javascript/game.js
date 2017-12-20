
var makeRand = function() {
  var a = Math.floor((Math.random() * 120) + 19);
  $('#randomNumber').text(a);
  rand = $('#randomNumber').html();

  for (var i = 0; i < 4; i++){
    x = Math.floor((Math.random() * 12) + 1)
    $("#crystal" + i ).data('number', x);
  }
  userTarget = 0;
  $('#userTotal').empty();
}

makeRand();

var rand;
var userTarget = 0;
var wins = 0;
var loses = 0;

$('.crystal').on('click', function() {
  var add = $(this).data('number')
  userTarget += add
  $('#userTotal').text(userTarget);
  setTimeout(winLose, 2000);
});

var winLose = function() {
  if (userTarget == rand) {
    wins++;
    $('#win').text(wins);
    $('#message').html("<div class='alert alert-success'>You Win!</div>");
    setTimeout(alertHide, 3000);
    setTimeout(makeRand, 3000);
  }
  if (userTarget > rand) {
    loses++;
    $('#lose').text(loses);
    $('#message').html("<div class='alert alert-danger'>you lose...</div>");
    setTimeout(alertHide, 3000);
    setTimeout(makeRand, 3000);
  }
}

var alertHide = function() {
  $('#message').empty();
}
