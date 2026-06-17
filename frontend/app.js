const video = document.getElementById("coding-video");
const currentPosition = document.getElementById("current-position");
const statusMessage = document.getElementById("status-message");

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return String(minutes).padStart(2, "0") + ":" +
        String(remainingSeconds).padStart(2, "0");
}

function updateCurrentPosition() {
    const seconds = video.currentTime;

    currentPosition.textContent =
        "Current Position: " + formatTime(seconds) + " (" + Math.floor(seconds) + "s)";
}

video.addEventListener("timeupdate", updateCurrentPosition);

video.addEventListener("play", function () {
    statusMessage.textContent = "Status: Video playing.";
});

video.addEventListener("pause", function () {
    statusMessage.textContent = "Status: Video paused.";
});