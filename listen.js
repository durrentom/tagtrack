var currentVideo = document.getElementById("movie_player");
var initiated = false;

currentVideo.addEventListener("onStateChange", "onYouTubePlayerReady");
function onYouTubePlayerReady(playerId) {
    var currentVideo = document.getElementById("movie_player");
    currentVideo.addEventListener("onStateChange", "onytplayerStateChange");
	console.log("player ready");
	if(!initiated){
		init();
	}
}

currentVideo.pauseVideo();
currentVideo.playVideo();

function onytplayerStateChange(playerId) {
  console.log("state changed");
};

function getYTPlayerTime(){
	return currentVideo.getCurrentTime();
}

function getYTPlayerUrl(){
	 return YouTubeGetID(currentVideo.getVideoUrl());
}

function formatTime(time){
	var t = Math.floor(time) + '';
	return t.toHHMMSS();
}

function init(){
	initiated = true;

	var baseTpl = TT['tpl/base.hbs'];
	var html = baseTpl();
	$('body').prepend(html);

	$('#tagtrackbtn').on('click', tagHandler);


	window.setInterval(function(){
		$('#tagtime').html(formatTime(getYTPlayerTime()));
	}, 500);
}

function tagHandler(event){
  currentVideo.pauseVideo();
	event.preventDefault();
	// list = $('#tt-list');
	// $("<li></li>").html(getYTPlayerTime()).appendTo(list);

	appendForm({ 'video_time': getYTPlayerTime(), 'video_id': getYTPlayerUrl(), 'video_time_readable': formatTime(getYTPlayerTime()) });
  bindForm();
}

function bindForm(){
    $('#tt-form').on('submit', function(event) {
      event.preventDefault();
    });
}

function appendForm(data){
	console.log(window);
	var postTemplate = TT['tpl/form.hbs'];
	var html = postTemplate(data);
	$('#tt-wrapper').append(html);
}

function YouTubeGetID(url){
  var ID = '';
  url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if(url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
  }
  else {
    ID = url;
  }
    return ID;
}

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}

    if(hours == '0' || hours == '00'){
    	var time = minutes+':'+seconds;	
    }else{
    	var time = hours+':'+minutes+':'+seconds;
    }
    return time;
}