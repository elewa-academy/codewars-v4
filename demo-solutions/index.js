window.onload = function() {
	
	var binary_addition_button = document.getElementById("binarily-add");
	binary_addition_button.addEventListener("click", binary_addition_handler);

	var simple_elevator_button = document.getElementById("elevate");
	simple_elevator_button.addEventListener("click", simple_elevator_handler);

	var repeat_button = document.getElementById("repeat");
	repeat_button.addEventListener("click", string_repeat_handler);

	var string_reverser_button = document.getElementById("reverse");
	string_reverser_button.addEventListener("click", string_reverser_handler);

}