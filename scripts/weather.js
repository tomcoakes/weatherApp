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