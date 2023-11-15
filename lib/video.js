var video = document.getElementById("myVideo");

    // Add a click event listener to the video element
    video.addEventListener("click", function() {
        // Check if the video is muted
        if (video.muted) {
            // Unmute the video
            video.muted = false;
        } else {
            // If not muted, mute the video
            video.muted = true;
        }
    });