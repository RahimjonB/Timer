let timerInterval;
        let hoursInput = document.getElementById('hours');
        let minutesInput = document.getElementById('minutes');
        let secondsInput = document.getElementById('seconds');
    
        function startTimer() {
          let hours = parseInt(hoursInput.value) || 0;
          let minutes = parseInt(minutesInput.value) || 0;
          let seconds = parseInt(secondsInput.value) || 0;
    
          let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    
          if (totalSeconds <= 0) {
            return;
          }
    
          timerInterval = setInterval(() => {
            if (totalSeconds <= 0) {
              clearInterval(timerInterval);
              alert('Timer completed!');
              return;
            }
    
            let formattedTime = formatTime(totalSeconds);
            document.getElementById('timer').textContent = formattedTime;
    
            totalSeconds--;
          }, 1000);
        }
    
        function resetTimer() {
          clearInterval(timerInterval);
          hoursInput.value = '0';
          minutesInput.value = '0';
          secondsInput.value = '0';
          document.getElementById('timer').textContent = '00:00:00';
        }
    
        function formatTime(time) {
          let hours = Math.floor(time / 3600);
          let minutes = Math.floor((time % 3600) / 60);
          let seconds = Math.floor(time % 60);
    
          return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
        }
    
        function padZero(num) {
          return num.toString().padStart(2, '0');
        }