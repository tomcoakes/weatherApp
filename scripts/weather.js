

$( "form" ).submit(function() {
  ( result = $("input:first" ).val());
  
  $.getJSON('http://api.openweathermap.org/data/2.5/weather?q='+result, function(data) {
    status = data.cod;
    
    if(status == 200) {
      temp = Math.round(data.main.temp - 273.15);
      city = data.name;
      country = data.sys.country;
      $('.temperature').text(temp);
      $('.city').text(city+", "+country);
    } else {
      $('.city').text("City not recognised");
    };

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