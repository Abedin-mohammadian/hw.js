function startTimer() {
    let seconds = document.getElementById("secondsInput").value;
    let timerDisplay = document.getElementById("timer");

    let interval = setInterval(() => {
      timerDisplay.textContent = seconds;
      seconds--;

      if (seconds < 0) {
        clearInterval(interval);
        timerDisplay.textContent = "شمارنده با موفقیت به پایان رسید";
      }
    }, 1000);
  }