$(document).ready(function(){
var url = "https://api.icndb.com/jokes/random"
//state object

//state modification


//rendering functions



//event listeners
//1)image 'button' with AJAX 'get'
$('#js-fist').on('click', function(){

	 function play(){
       var audio = document.getElementById("audio");
       audio.play();
                 }

	$.ajax({
		url: 'https://api.icndb.com/jokes/random',
		data: {
			format: 'json'
		},
		error: function() {
			$('#js-quotes').html('<p>Our Kung Fu has encountered an error</p>');
		},
		success: function(doj) {
			$("#js-quotes").html('<p>'+doj.value.joke+'</p>');
			
		},
		type: 'GET'
		});
	});
//2)name input

//3)new quote input


});