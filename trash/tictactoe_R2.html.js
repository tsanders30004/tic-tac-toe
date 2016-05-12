"use strict";

$(document).ready(function(){

	$('.myButton').click(function(){
			debugger;

				console.log('X');
				$(this).val('X');
				$(this).css('background-color', 'rgb(14, 151, 192)');
				$(this).css('transform', 'rotate(-3deg)');
});
