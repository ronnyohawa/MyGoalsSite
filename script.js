function updateTime() {
    const currentTime = new Date().toUTCString().slice(-12, -4);  // Extract only the time part
    document.getElementById('current-time').textContent = currentTime;
  
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[new Date().getUTCDay()];
    document.getElementById('current-day').textContent = currentDay;
  }
  
  updateTime();
  setInterval(updateTime, 1000);
  