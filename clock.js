function displayTime(){/*creating a function with the name displayTime */
  var dateTime = new Date();/*This is the date object */
  var hrs = dateTime.getHours();/*This will get the hours of a date object */
  var min = dateTime.getMinutes();/*This will get the minutes of a date object*/
  var sec = dateTime.getSeconds();/*This will get the seconds of a date object*/
  var session = document.getElementById('session');/*This will return the elements of the session */

  if(hrs >= 12){
      session.innerHTML = 'PM';/*If hours is greater than or equal to 12 then the session will pass by PM*/
  }else{
      session.innerHTML = 'AM';/*If not then the session will pass by AM*/
  }

  if(hrs > 12){/*This will return 24 hours format*/
      hrs = hrs - 12;
  }

  document.getElementById('hours').innerHTML = hrs;/*This will return the inner HTML of the element(hours)*/
  document.getElementById('minutes').innerHTML = min;/*This will return the inner HTML of the element(minutes)*/
  document.getElementById('seconds').innerHTML = sec;/*This will return the inner HTML of the element(seconds)*/
}
setInterval(displayTime, 10);/*Tjis continues to call the function at an interval of 10 milliseconds until the window is closed or interval is cleared*/