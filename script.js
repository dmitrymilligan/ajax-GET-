$(function () {

	$(document).on("submit", "form", function () {
		var name    = $("input[name='name']").val(),
		    phone   = $("input[name='phone']").val(),
		    car     = $("select[name='car']").val(),
		    pattern = /[0-9]{3}/;
		if(pattern.test(phone)) {
			submitForm(name, phone, car);
		}
		else {
			alert(false);
		};
	});
	function submitForm() {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				document.getElementsByClassName("one")[0].innerHTML = xhttp.responseText;
			}
		};
		xhttp.open("GET", "http://jsonplaceholder.typicode.com", true);
		xhttp.send();
	}

//	function submitForm(name, phone, car) {
//		var root = 'http://jsonplaceholder.typicode.com';
//		$.ajax({
	// 		method: "GET",
	// 		url: root + '/posts/1',
	// 		data: { Name: name, Phone: phone, Car: car }
	// 	}).fail(function () {
	// 		alert("FAIL")
	// 	}).done(function (data) {
	// 		for(var a in data)
	//  		$(".one").append(data[a] + ": " + data + "<br>" );
	//  		});
	// }
});
