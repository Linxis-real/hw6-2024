var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.getElementById("player1");
	// Disable Autoplay and Loop;
	video.autoplay = false;
	console.log("Autoplay Disabled")
	video.loop = false;
	console.log("Looping Disabled")

	// Set the initial value of the slider and volume display
    const slider = document.querySelector("#slider");
    const volumeSpan = document.querySelector("#volume");

    // Set the initial volume;
    slider.value = video.volume * 100;
	// Display initial volume;
    volumeSpan.textContent = Math.round(video.volume * 100) + "%";
});



// Play the Video;
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

// Pause the Video;
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow the Video;
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate -= 0.1;
	console.log("New Speed:" + video.playbackRate);
});

// Speed up the Video;
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate += 0.1;
	console.log("New speed:" + video.playbackRate);
});

// Skip Ahead 10s;
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skipped 10s Ahead");
	video.currentTime += 10;
	// If the video length has been exceeded go back to the start of the video;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}

	console.log("Current Time:" + video.currentTime);
});

// Mute Video
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		console.log("Unmuted");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		console.log("Muted");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

// Volume Slider
document.querySelector("#slider").addEventListener("input", function() {
	const volumeValue = this.value / 100;
	video.volume = volumeValue;

	document.querySelector("#volume").textContent = Math.round(volumeValue * 100) + "%";
	console.log("Volume is:" + volumeValue);
});

// Styled
document.querySelector("#vintage").addEventListener("click", function() {
    console.log("Old School Activated");
    const videoElement = document.querySelector(".video");

    // Add the "oldSchool" class to the video element
    videoElement.classList.add("oldSchool");
});

// Original
document.querySelector("#orig").addEventListener("click", function() {
    console.log("Old School Removed");
    const videoElement = document.querySelector(".video");

    // Add the "oldSchool" class to the video element
    videoElement.classList.remove("oldSchool");
});