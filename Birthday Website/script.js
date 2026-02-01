
    // Change birth date here
    const birthDate = new Date("2006-09-07");

    function updateTimer() {
      const now = new Date();
      let diff = now - birthDate;

      const seconds = Math.floor(diff / 1000) % 60;
      const minutes = Math.floor(diff / (1000 * 60)) % 60;
      const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      const years = Math.floor(days / 365);
      const months = Math.floor((days % 365) / 30);
      const weeks = Math.floor(((days % 365) % 30) / 7);
      const remainingDays = ((days % 365) % 30) % 7;

      document.getElementById("years").innerText = years;
      document.getElementById("months").innerText = months;
      document.getElementById("weeks").innerText = weeks;
      document.getElementById("days").innerText = remainingDays;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;
    }

    setInterval(updateTimer, 1000);
    updateTimer();