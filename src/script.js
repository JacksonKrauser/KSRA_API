function validateForm() {
    let x = document.forms["myForm"]["email"].value;
    let y = document.forms["myForm"]["fname"].value;
    let z = document.forms["myForm"]["lname"].value;
    let n = document.forms["myForm"]["pnumber"].value;
    if (x !== "" && y !== "" && z !== "" && n !== "") {
      document.getElementById("message").innerHTML =
        `Thank you for your interest, ${y} ${z}. A KSOA member will contact you shortly.`;
      document.getElementById("message").style.display = "Flex";
      document.forms["myForm"]["email"].value = "";
      document.forms["myForm"]["fname"].value = "";
      document.forms["myForm"]["lname"].value = "";
      document.forms["myForm"]["pnumber"].value = numbers;
      setTimeout(() => {
        document.getElementById("message").style.display = "none";
      }, 5000);
    } else {
      document.getElementById("message").innerHTML =
        "Please complete each section of the form.";
      document.getElementById("message").style.display = "Flex";
  
      setTimeout(() => {
        document.getElementById("message").style.display = "none";
      }, 5000);
    }
  }

  
  /*Regular Expression to check for letters in */
  function allLetter(inputtxt)
  {
   var letters = /^[A-Za-z]+$/;
   if(inputtxt.value.match(letters))
     {
      return true;
     }
   else
     {
     alert('Please put in a valid name');
     return false;
     }
  }

  /*Regular Expression to check for numbers in phone number */
  function allnumeric(inputtxt)
   {
      var numbers = /^[0-9]+$/;
      if(inputtxt.value.match(numbers))
      {
      alert('Your phone number was accepted..');
      document.form1.text1.focus();
      return true;
      }
      else
      {
      alert('Please input numbers only');
      document.form1.text1.focus();
      return false;
      }
   } 

   /*Regular expression to check for proper email address */
   function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

     /* Save data to external file should there be set in front of fso and s */
      function WriteToFile(passForm) {
 
      fso = CreateObject("Scripting.FileSystemObject"); 
      s   = fso.CreateTextFile("uploads\Interest_data.txt", True);
   
      var email = document.getElementById('email');
      var fname  = document.getElementById('fname');
      var lname = document.getElementById('lname');
      var pnumber  = document.getElementById('pnumber');
   
      s.writeline("email :" + email);
      s.writeline("lname :" + lname);
      s.writeline("fname :" + fname);
      s.writeline("pnumber :" + pnumber);
   
      s.writeline("-----------------------------");
      s.Close();
   }
  

/* Display current date and time */

function show_now() { 
  var my_time = new Date();
  document.getElementById('display').innerHTML=my_time
  }

  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
  function menuToggle() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
 
  
 //Weather API

let weather = {
  apiKey: "281eb62ec4698f223fe8d6127a7a1ead",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" 
      + city 
      + "&appid=" 
      + this.apiKey)
    .then((response) => response.json());
  },

  displayWeather = function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const {speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector("icon").src =  
    "https://openweathermap.org/img/wn/"  + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°F";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + " %";
    document.querySelector(".wind").innerText = "Wind speed " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    search = function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
    };

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
}),

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weather.search();
)}}
;
  

//Array with soccer term of the day//
var terms = new Array();
terms[0] = "SPA";
terms[1] = "DOGSO";
terms[2] = "Offside";
terms[3] = "SFP";

for (i=0;i<terms.length;i++)
{
document.write(termss[i]);
}