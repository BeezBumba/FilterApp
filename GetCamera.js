function getCameraPermission() {
  alert('Requesting camera permission...');
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
        alert('Camera access granted');
        var video = document.getElementById('video');
        video.srcObject = stream;
        video.play();
        // Request the browser to go full-screen on the video element
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) { /* Safari */
          video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { /* IE11 */
          video.msRequestFullscreen();
        }
      })
      .catch(function(error) {
        alert('Camera access denied: ' + error.message);
      });
  } else {
    alert('getUserMedia not supported in this browser');
  }
}

