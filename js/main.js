const video = document.querySelector('.video'),
playBtn = document.querySelector('.controls_play'),
stopBtn = document.querySelector('.controls_stop'),
playBtnImg = document.querySelector('.play_btn'),
progress = document.querySelector('.progress'),
time = document.querySelector('.controls_time')


// Play/Pause Video
function toggleVideoStatus() {
    if (video.paused) {
        video.play()
        playBtnImg.src = './img/pause.svg'
    } else {
        video.pause()
        playBtnImg.src = './img/play.svg'
    }
}
playBtn.addEventListener('click', toggleVideoStatus)
video.addEventListener('click', toggleVideoStatus)

// Stop Video
function stopVideo() {
    video.currentTime = 0
    video.pause()
    playBtnImg.src = './img/play.svg'
}

stopBtn.addEventListener('click', stopVideo)

// Timer

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100 

    // Minutes
    let minutes = Math.floor(video.currentTime / 60)
    if (minutes < 10) {
        minutes = '0' + String(minutes)
    }

    // Seconds
    let seconds = Math.floor(video.currentTime % 60)
    if (seconds < 10) {
        seconds = '0' + String(seconds)
    }


    time.innerHTML = `${minutes}:${seconds}`
}

video.addEventListener('timeupdate', updateProgress)

// Set Progress
function setProgress() {
    video.currentTime = (progress.value * video.duration) / 100 
}

progress.addEventListener('change', setProgress)