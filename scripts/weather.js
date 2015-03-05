

$( "form" ).submit(function() {
  ( result = $("input:first" ).val());
  $( "city" ).text( result ).show();

    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q='+result, function(data) {
    temp = Math.round(data["main"]["temp"] - 273.15);

    $('.temperature').text(temp);
  });
});




var apiData = ["London", "Paris"];
var temperature = 22;
var weatherIcon = 'snow';

$.each(apiData, function(index, city) {
  $('.cities').append(
    $('<option></option>').val(city).html(city + " ⌄")
  );
});

$('img').attr('src', 'images/' + weatherIcon + '.svg')