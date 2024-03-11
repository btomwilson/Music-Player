document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const skipBtn = document.getElementById('skip-btn');
    const volumeControl = document.getElementById('volume-control');

    // Function to play or pause the audio
    function togglePlayPause() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = 'Play';
        }
    }

    // Function to skip to the next track
    function skipTrack() {
        // Implement skipping logic here
        // For simplicity, we'll just restart the current track
        audioPlayer.currentTime = 0;
        audioPlayer.play();
    }

    // Event listeners for play/pause and skip buttons
    playPauseBtn.addEventListener('click', togglePlayPause);
    skipBtn.addEventListener('click', skipTrack);

    // Event listener for volume control
    volumeControl.addEventListener('input', function () {
        audioPlayer.volume = volumeControl.value;
    });

    // Update play/pause button text when audio playback state changes
    audioPlayer.addEventListener('play', function () {
        playPauseBtn.textContent = 'Pause';
    });

    audioPlayer.addEventListener('pause', function () {
        playPauseBtn.textContent = 'Play';
    });
});
