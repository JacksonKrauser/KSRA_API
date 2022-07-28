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
    document.forms["myForm"]["pnumber]"].value = "";

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
  let letters = /^[A-Za-z]+$/;
  if(inputtxt.value.match(letters))
  {
    return true;
  } else {
    alert('Please put in a valid name');
    return false;
  }
}

/*Regular Expression to check for numbers in phone number */
function allnumeric(inputtxt)
{
  let numbers = /^[0-9]+$/;
  if(inputtxt.value.match(pnumber))
  {
    alert('Your phone number was accepted..');
    document.form1.text1.focus();
    return true;
  } else {
    alert('Please input numbers only');
    document.form1.text1.focus();
    return false;
  }
} 

/*Regular expression to check for proper email address */
function ValidateEmail(email) 
{
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Form.email.value))
  {
    return (true)
  }
  alert("You have entered an invalid email address!")
  return (false)
}

/* Save data to external file should there be set in front of fso and s */
const scriptURL ='https://script.google.com/macros/s/AKfycbz_jalCz_2aGOUlh35I1DZvmM0jzmUmwRjmZaeS1Bkpe18RlKQDknxxE1gDVB5Gu43e/exec'
const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(myForm)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })
  

/* Display current date and time */
function show_now() {
  let my_time = new Date();
  document.getElementById('display').innerHTML=my_time
  setTimeout (() => {
    document.getElementById("display").style.display = "none";
  }, 5000);
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
  
//Weather API Causing Issue with JS running!
let weather =
{
  apiKey: "281eb62ec4698f223fe8d6127a7a1ead",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" 
      + city 
      + "&appid=" 
      + this.apiKey)
    .then((response) => 
    {
      if (!response.ok)
      {
        alert("No weather found.");
        throw new Error("No weather found.");
      }
      return response.json();
    })
    .then((data) => this.displayWeather(data));
  },

  displayWeather : function (data) {
    console.log("in display weather");
    console.log (data);
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    f_temp = ((temp - 273.15) * 9 / 5 + 32).toFixed(0);
    mph_speed = (speed / 1.609).toFixed(0)
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"  + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = f_temp + "°F";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + " %";
    document.querySelector(".wind").innerText = "Wind speed " + mph_speed + " mph";
    document.querySelector(".weather").classList.remove("loading");
  },

  search : function () {
    console.log(this.fetchWeather(document.querySelector(".search-bar").value));
  }
}

document.querySelector(".search button")
  .addEventListener("click",
    function () { weather.search(); }),

document.querySelector(".search-bar")
  .addEventListener("keyup",
    function (event)
    {
      if (event.key == "Enter")
      {
        console.log("flag0");
        weather.search();
        weather.displayWeather(data);
      }
    }
  );

weather.fetchWeather("Denver");
    
// var form = document.getElementById('sheetdb-form');
// form.addEventListener("submit", e => {
//   e.preventDefault();
//   fetch(form.action, {
//       method: "POST",
//       body: new FormData(document.getElementById("sheetdb-form")),
//   }).then(
//       response => response.json())
//   });

  
//Store form data locally//
// var inputfname= document.getElementById("fname");
// window.localStorage.setItem("fname", inputfname.value);

// var inputlname= document.getElementById("lname");
// window.localStorage.setItem("lname", inputEmail.value);

// var inputEmail= document.getElementById("email");
// window.localStorage.setItem("email", inputEmail.value); 
// var inputpnumber= document.getElementById("pnumber");
// window.localStorage.setItem("pnumber", inputpnumber.value);

// var storedValue = localStorage.getItem("fname");
// var storedValue = localStorage.getItem("lname");
// var storedValue = localStorage.getItem("email");
// var storedValue = localStorage.getItem("pnumber");

//var fname = $('#fname').val();
// var lname = $('#lname').val();
// var email = $('#email').val();
// var pnumber = $('#pnumber').val();
// localStorage.setItem("fname", fname);
// localStorage.setItem("lname", lname);
// localStorage.setItem("email", email);
// localStorage.setItem("pnumber", pnumber);

// function persistInput(input)
// {
//   var key = "input-" + fname.id;

//   var storedValue = localStorage.getItem(key);

//   if (storedValue)
//       input.value = storedValue;

//   input.addEventListener('input', function ()
//   {
//       localStorage.setItem(key, fname.value);
//   });
// }

// //Array with soccer term of the day//
// var terms = new Array();
// terms[0] = "SPA";
// terms[1] = "DOGSO";
// terms[2] = "Offside";
// terms[3] = "SFP";

// for (i=0;i<terms.length;i++) 
// {
// document.write(terms[i]);
// }//