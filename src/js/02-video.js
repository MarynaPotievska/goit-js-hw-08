import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const videoTimeReached = 'videoplayer-current-time';

function restartPage () {
	const savedTime = JSON.parse(localStorage.getItem(videoTimeReached));	
	player.setCurrentTime(savedTime).then(function(seconds) {
		player.play()
	});
};

restartPage();

const onTimeUpdate = function(currentTime) {
	localStorage.setItem(videoTimeReached, JSON.stringify(currentTime.seconds));
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));
