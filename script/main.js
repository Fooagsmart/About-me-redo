/*function myFunction() {
    document.getElementById("proj1").innerHTML = "The weather application will provide users with real-time weather information, forecasts, and other weather-related data, which can help them make better decisions about their day-to-day activities.";
  }
  function myFunction2() {
    document.getElementById("proj2").innerHTML = "Notepad is a basic text editor that you can use to create simple documents."
  }*/

  const project = document.getElementsByClassName('proj');

for( i = 0; i < project.length; i++) {

    project[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })

};

 
