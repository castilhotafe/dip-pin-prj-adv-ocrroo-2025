const video = document.getElementById("coding-video");
const currentPosition = document.getElementById("current-position");
const statusMessage = document.getElementById("status-message");
const readCodeButton = document.getElementById("read-code-button");
const ocrResult = document.getElementById("ocr-result");

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
readCodeButton.addEventListener("click", async function () {
    const seconds = Math.floor(video.currentTime);

    statusMessage.textContent = "Status: Reading code from video...";
    ocrResult.textContent = "Reading code from video...";

    try {
        const response = await fetch(
            "/video/demo/frame/" + seconds + "/ocr"
        );

        if (!response.ok) {
            throw new Error("Could not read code from video.");
        }


        const data = await response.json();

        ocrResult.textContent = data.text || "No code was detected at this position.";
        statusMessage.textContent = "Status: Code extracted from video.";
    } catch (error) {
        ocrResult.textContent = "Unable to read code from this video position.";
        statusMessage.textContent = "Status: Error reading code from video.";
    }
});