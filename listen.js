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
	var list = $('<ul></ul>').attr('id','tt-list');
	var wrapper = $('<div>').attr('id','tt-wrapper').addClass('in');
	$("<button></button>").attr("id","tagtrackbtn").html("New tag at <span id='tagtime'>0:00</span>").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$("<li></li>").html(getYTPlayerTime()).appendTo(list);
	})
	.appendTo(wrapper);
	list.appendTo(wrapper);
	$('body').prepend(wrapper);
	appendForm();

	window.setInterval(function(){
		$('#tagtime').html(formatTime(getYTPlayerTime()));
	}, 500);
}

function appendForm(){
	var postTemplate = TT['tpl/form.hbs'];
	var html = postTemplate();
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