var video = document.querySelector("video");
var playButton = document.querySelector("#play-pause");

playButton.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    playButton.textContent = "Pause";
  } else {
    video.pause();
    playButton.textContent = "Play";
  }
});
