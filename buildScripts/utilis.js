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

     /* Save data to external file*/
     function submit () {
      var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(submit));
      var downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href",     dataStr);
      downloadAnchorNode.setAttribute("download", "interest_form.json");
      document.body.appendChild(link); // required for firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
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
  