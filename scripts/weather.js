$( "form" ).submit(function() {
  ( result = $("input:first" ).val());
  requestApi(); 
});

requestApi = function() {
  $.getJSON('http://api.openweathermap.org/data/2.5/weather?q='+result, function(data) {
    resetBackgroundColor();
    (data.cod != 200) ? ($('.city').text("City not recognised")) : retrieveApiData(data);
    weatherIcon = weatherConditions(conditionsCode);
    displayData();
  });
};

retrieveApiData = function(data) {
  temp = convertToCelsius(data.main.temp);
  city = data.name;
  conditions = data.weather[0].main;
  conditionsCode = data.weather[0].id;
  country = data.sys.country;
};

displayData = function() {
  $('.icon').addClass(weatherIcon);
  $('.temperature').text(temp);
  $('.city').text(city+", "+country);
  $('img').attr('src', 'images/' + weatherIcon + '.svg');  
};

convertToCelsius = function(kelvin) {
  return (Math.round(kelvin - 273.15));
};

resetBackgroundColor = function() {
  $('.icon').attr('class','icon');
};

weatherConditions = function(code) {
  if(code >= 802 && code < 805) {result = "cloudy"};
  if(code < 802 || code == 904) {result = "sunny"};
  if(code < 700) {result = "snow"};
  if(code < 600) {result = "rain"};
  return result;
};


