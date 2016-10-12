var callback = function () {
	$('.item-skills').each(function () {
		newWidth = $(this).parent().width() * $(this).data('percent');
		$(this).width(0);
		$(this).animate({
			width: newWidth,
		}, 1000);
	});
	$('.icons-red').each(function () {
		height = $(this).height();
		$(this).animate({
			height: 14,
		}, 2000);
	});
	$("#age").text(age(new Date(1991, 11, 25)) + "yo");
};
$(document).ready(callback);

var resize;
window.onresize = function () {
	clearTimeout(resize);
	resize = setTimeout(function () {
		callback();
	}, 100);
};

var age = function (birthday) { // birthday is a date
	var ageDifMs = Date.now() - birthday.getTime();
	var ageDate = new Date(ageDifMs); // miliseconds from epoch
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}