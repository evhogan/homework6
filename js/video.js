var video;
var volume;

function getVid() {
	volume = document.querySelector("#volume")
	video = document.querySelector("#myVideo");
}

function playVid() { 
	video.play();
	console.log("Play Video");
	volume.innerHTML = " " + String(video.volume * 100) + "%";
}

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
	video.playbackRate = video.playbackRate * .8;
  	console.log("Speed is " + String(video.playbackRate));
}

function increaseSpeed() {
	video.playbackRate = video.playbackRate * 1.25;
	console.log("Speed is " + String(video.playbackRate));
}

function skipAhead() {
	if ((video.duration - 60) < video.currentTime) {
		video.currentTime = 0;
		video.playbackRate = 1.0;
	}

	else {
		video.currentTime = video.currentTime + 60;
	}

	console.log("Current location is " + String(video.currentTime));
}
 

function mute() { 
  	if (video.muted == false) {
  		video.muted = true;
  		document.getElementById('mute').innerText = 'Unmute';
  		console.log("muted");
  	}

    else {
        video.muted = false;
        document.getElementById('mute').innerText = 'Mute';
        console.log("unmuted");
    }
}

function changeVolume() {
	video.volume = (document.getElementById("volumeSlider").value) / 100;
	volume = document.getElementById("volume")
	volume.innerHTML = " " + String(video.volume * 100) + "%";
	console.log("Volume is at " + String(document.getElementById("volumeSlider").value) + "%");
}
       

function gray() { 
	video.style.filter = "grayscale(100%)";
	console.log("In grayscale");
}

function color() {
	video.style.filter = "grayscale(0%)";
	console.log("In color");
}