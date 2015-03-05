
$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=london', function(data) {
  temp = data["main"]["temp"];
});


var apiData = ["London", "Paris"];
var temperature = 22;
var weatherIcon = 'snow';

$.each(apiData, function(index, city) {
  $('.cities').append(
    $('<option></option>').val(city).html(city + " ⌄")
  );
});

$('.temperature').text(temperature);

$('img').attr('src', 'images/' + weatherIcon + '.svg')