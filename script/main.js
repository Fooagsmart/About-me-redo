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

/*menu toggle script*/

const menu = document.querySelector('.tog')
const menus = document.querySelector('ul')
const close = document.querySelector('.close')
const hid = document.querySelector('ul')


menu.addEventListener('click', function(){
    menus.style.display = 'block'
})

close.addEventListener('click', function(){
    menus.style.display = 'none'
})

hid.addEventListener('click', function(){
    menus.style.display = 'none'
})


 
