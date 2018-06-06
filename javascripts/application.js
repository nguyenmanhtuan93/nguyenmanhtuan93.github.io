$(document).ready(function() {
	setHeight();
	setHeightHome();
	excontentCenter();
	exSetHeight();
	skills_set_height();
	$("body").mCustomScrollbar({theme:"dark-thin",scrollButtons:{enable:true}, mouseWheel:{ scrollAmount: 400 }});
	$(".experience-box").mCustomScrollbar({theme:"light-thin",scrollButtons:{enable:true}, mouseWheel:{ scrollAmount: 400 }});
	$('.show-me-button .click-me span').click(function() {
		homeShow();
	});
	clickScroll();
	infomation();
});
function  setHeight () {
	var height = $( window ).height();
	$('.container, .about, .experience, .skills, .connect').height(height);
}
function setHeightHome () {
	var height = $( window ).height();
	$('.home').height(height-79);
}
function homeShow () {
	$('.show-me-button .click-me').hide();
	$('.show-me-button .avatar').show(1000);
	$('.details-me').delay(1000).show(500);
	$('.home .show-me-button').css('background-color','rgba(255,255,255,1.0)');
	$('.details-me .slat-text').delay(1500).show("slide",{direction:'up'}, 1500);
	$('.details-me .name').delay(3000).show("slide",{direction:'right'}, 1500);
	$('.details-me .job-1').delay(4500).show("slide",{direction:'right'}, 1500);
	$('.details-me .job-2').delay(6000).show("slide",{direction:'right'}, 1500);
}
function excontentCenter () {
	var width = $(window).width();
	$('.experience-content').css('left',width/2-500);
}
function exSetHeight () {
	var height_ex = $('.experience-content').height();
	$('.experience-box').height(height_ex);
}
function skills_set_height () {
	var height_sk = $('.skills').height();
	var width_sk = $('.skills').width();
	$('.skills-content').height(height_sk*0.8);
	$('.skills-content').css('margin-left', width_sk/2-500 );
	$('.skills-content').css('margin-top', height_sk*0.1 );
	$('.connect-content').height(height_sk*0.8);
	$('.connect-content').css('margin-left', width_sk/2-500 );
	$('.connect-content').css('margin-top', height_sk*0.1 );
}
function clickScroll () {
	$('.home-nav').click(function() {
		$('body').mCustomScrollbar("scrollTo",".container");
	});
	$('.about-nav').click(function() {
		$('body').mCustomScrollbar("scrollTo",".about");
	});
	$('.experience-nav').click(function() {
		$('body').mCustomScrollbar("scrollTo",".experience");
	});
	$('.skills-nav').click(function() {
		$('body').mCustomScrollbar("scrollTo",".skills");
	});
	$('.connect-nav').click(function() {
		$('body').mCustomScrollbar("scrollTo",".connect");
	});
	$('.back-to-top').click(function() {
		$('body').mCustomScrollbar("scrollTo",".container");
	});
}
function infomation () {
	$('.my-infomation .info-button').click(function() {
		$('.my-details-info-box').show(500);
	});
	$('.my-details-info-box .close-infor-box').click(function() {
		$('.my-details-info-box').hide(500);
	});
}