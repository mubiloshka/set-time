
//     let hours = seychas.getHours();     
//     let minutes = seychas.getMinutes();   
//     let seconds = seychas.getSeconds();    
  

    function updateClock() {
        let seychas = new Date();
      
        let hours = seychas.getHours();
        let minutes = seychas.getMinutes();
        let seconds = seychas.getSeconds();
      
        let chasi;
        let min;
        let sec;
      
        
        if (hours < 10) {
          chasi = "0" + hours;
        } else {
          chasi = hours;
        }
      
        if (minutes < 10) {
          min = "0" + minutes;
        } else {
          min = minutes;
        }
      
        if (seconds < 10) {
          sec = "0" + seconds;
        } else {
          sec = seconds;
        }
      
        let timeString = chasi + ":" + min + ":" + sec;
      
        document.getElementById("clock").textContent = timeString;
      
        setTimeout(updateClock, 1000);
      }
      
      updateClock();
      
      
  
    