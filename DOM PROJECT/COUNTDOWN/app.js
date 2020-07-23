const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const giveaway = document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline');
  const deadlineFormat = document.querySelectorAll('.deadline-format h4');

//Adding 10 days before the expiration.
//let tempDate = new Date();
//let tempYear = tempDate.getFullYear();
//let tempMonth = tempDate.getMonth();
//let tempDay = tempDate.getDate();

//const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 23,59,0);

  let futureDate = new Date(2020,7,30,23,59,0);
  
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const mins = futureDate.getMinutes();
  
  let month = futureDate.getMonth()
  month = months[month]
  //console.log(month);

  let day = futureDate.getDay()
  day = weekdays[day];
  //console.log(day);

  let date = futureDate.getDate();
  //console.log(date);

  giveaway.textContent = `giveaway ends on ${day}, ${month} ${date} ${year}  at ${hours}:${mins}pm`;

  //future time in miliseconds
  const futureTime = futureDate.getTime()
  //console.log(futureTime);

  function getRemainingTime(){
      const today = new Date().getTime();
      const remaining = futureTime - today;
      //console.log(remaining);
      //1s = 1000ms
      //1m = 60s
      //1hrs = 60min
      //1d = 24hrs

      //values in ms
      //milliseconds in a day
      const oneDay = 24*60*60*1000
      //milliseconds in 1 hour
      const oneHour = 60*60*1000;
      //milliseconds in min
      const oneMinute = 60*1000;

      //Calculate all values
      let days = Math.floor(remaining / oneDay); //parseInt also works
      //console.log(days);
      let hour = Math.floor((remaining % oneDay) / oneHour);
      //console.log(hour);
      let minutes = Math.floor((remaining % oneHour) / oneMinute);
      //console.log(minutes);
      let seconds = Math.floor((remaining % oneMinute) / 1000)
      //console.log(seconds);

      //Set values arrays
      const values = [days, hour, minutes, seconds];

      function format(item){
          if(item < 10){
              return item = `0${item}`;
          }
          return item;
      }

      deadlineFormat.forEach((item, index) =>{
        item.innerHTML = format(values[index]);
      });

      if(remaining < 0){
          clearInterval(countdown)
          deadline.innerHTML = `<h4>Sorry this giveaway has expired</h4>`
      }

  }
  //countdown
  let countdown = setInterval(getRemainingTime, 1000);
  getRemainingTime();
