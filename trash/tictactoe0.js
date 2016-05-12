"use strict";

$(document).ready(function(){
	var clickCount = 0; /* even = X; odd = O */
	
	$('.myButton').click(function(){
			debugger;
			if (clickCount % 2 === 0) {	/* i.e., X */
				console.log('X');
				$(this).val('X');
				$(this).css('background-color', 'blue');
			} else {
				console.log('O');		/* i.e., O */
				$(this).val('O');
				$(this).css('background-color', 'green');
			}	
			clickCount++;
		});
});