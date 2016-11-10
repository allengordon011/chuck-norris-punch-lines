$(document).ready(function(){

//state object


//state modification


//rendering functions




//event listeners
//1)image 'button' with AJAX 'get'
$('#js-fist').on('click', function(getQuote){
	$.ajax({
		url: 'https://api.icndb.com',
		data: {
			format: 'json'
		},
		error: function() {
			$('#js-quotes').html('<p>Our Kung Fu has encountered an error</p>');
		},
		success: function getURL(data) {
			return data.value.joke;
		},
		type: 'GET'
		});
	});
//2)name input

//3)new quote input


});