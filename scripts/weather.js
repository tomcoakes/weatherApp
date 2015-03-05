

$( "form" ).submit(function() {
  ( result = $("input:first" ).val());
  
  $.getJSON('http://api.openweathermap.org/data/2.5/weather?q='+result, function(data) {
    status = data.cod;
    
    if(status == 200) {
      temp = Math.round(data.main.temp - 273.15);
      city = data.name;
      conditions = data.weather[0].main;
      conditionsCode = data.weather[0].id;
      country = data.sys.country;
      weatherIcon = weather(conditionsCode);
      $("div.weather").toggleClass(function() {
        return (weather(conditionsCode));
      });
      $('.temperature').text(temp);
      $('.city').text(city+", "+country);
      $('img').attr('src', 'images/' + weatherIcon + '.svg');

    } else {
      $('.city').text("City not recognised");
    };
  });
});

weather = function(code) {
  if(code < 600) { result = "rain"};
  if(code < 700) { result = "snow"};
  (code < 802 || code == 904) ? result = "sunny" : result = "cloudy";
  return result;
};


