"use strict";

$(document).ready(function(){
	var clickCount = 0; /* even = O; odd = X */

	$('.myButton').click(function(){
			debugger;
			if (clickCount % 2 === 1) {	/* i.e., O */
				console.log('X');
				$(this).val('X');
				$(this).css('background-color', 'rgb(14, 151, 192)');
				$(this).css('transform', 'rotate(-3deg)');
			} else {
				console.log('O');		/* i.e., X */
				$(this).val('O');
				$(this).css('background-color', 'rgb(210,160,43)');
				$(this).css('transform', 'rotate(3deg)');
			}
			clickCount++;
		});
});
