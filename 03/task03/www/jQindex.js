$(document).ready(function(){
	console.log("page is ready");
	$("#submitButton").click(function (event) {
		event.preventDefault();
		var user = $("#username").val();
		var password = $("#password").val();

		$.ajax({ 
			url: '/login', 
			type: "POST",
			dataType: 'text',
			data: {user, password},
			success: function(result) { 
				if(result == '{"ok":"true"}') {
					window.location.replace("http://localhost:3000/account");
				} else {
					$('#error').text("User or Password not found."); 
				} 
			},
			error: function(abc, resp, text) {
				console.log(abc, resp, text); 
			}
		})
	});

	$.get("/getData", function(data){
		$('#message').html(data)
		//alert("Data loaded" + data);
	});
});
