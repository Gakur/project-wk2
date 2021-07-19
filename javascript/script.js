var CC, YY, MM, DD, d, dayValue;
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

function validate() {
  var genders = document.getElementsByName("gender");
  if (document.getElementById('year').value == "" || document.getElementById('year').value.length != 4 || document.getElementById('year').value > 2100 || document.getElementById('year').value<= 1900) {
    alert("Please provide a valid year of birth! eg 2001");
    return false;
  }
  else if (document.getElementById('month').value == "" || isNaN(document.getElementById('month').value) ||
  document.getElementById('month').value.length != 2 || document.getElementById('month').value >12 || document.getElementById('month').value < 1) {
    alert("Please provide your month of birth! between 1 and 12");
    return false;
  }
  else if (document.getElementById('date').value == "" || isNaN(document.getElementById('date').value) ||
  document.getElementById('date').value.length != 2 || document.getElementById('date').value > 31 || document.getElementById('date').value < 0) {
    alert("Please provide a valid date of birth!");
    return false;
  }
  else if (genders[0].checked == false && genders[1].checked == false) {
    alert("You must provide your gender,male or female to proceed");
    return false;
  }
  else {
    return true;
  }

}

function calculateDayValue() {
  year = document.getElementById("year").value;
  CC = parseInt(year.substring(0, 2));
  YY = parseInt(year.substring(2, 4));
  MM = parseInt(document.getElementById("month").value);
  DD = parseInt(document.getElementById("date").value);
  d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
  console.log(d);
  dayValue=(Math.floor(d));
  return dayValue;
}

function getGender() {
  var genderM = document.getElementById("male");
  var genderF = document.getElementById("female");
  if (genderM.checked==true) {
    var gender = "male";
    switch (gender) {
      case "male":
        if (dayValue == 1) {
          alert("Hello you were born on " + dayNames[0] + " and Your akan name is " + maleNames[0] + "!");
        }
        else if (dayValue == 2) {
          alert("Hello you were born on " + dayNames[1] + " and Your akan name is " + maleNames[1] + "!");
        }
        else if (dayValue == 3) {
          alert("Hello you were born on " + dayNames[2] + " and Your akan name is " + maleNames[2] + "!");
        }
        else if (dayValue == 4) {
          alert("Hello you were born on " + dayNames[3] + " and Your akan name is " + maleNames[3] + "!");
        }
        else if (dayValue == 5) {
          alert("Hello you were born on " + dayNames[4] + " and Your akan name is " + maleNames[4] + "!");
        }
        else if (dayValue == 6) {
          alert("Hello you were born on " + dayNames[5] + " and Your akan name is " + maleNames[5] + "!");
        }
        else if (dayValue == -0) {
          alert("Hello you were born on " + dayNames[6] + " and Your akan name is " + maleNames[6] + "!");
        }
        break;
    }
  }
  else if (genderF.checked == true) {
    var gender = "female";
    switch (gender) {
      case "female":
        if (dayValue == 1) {
          alert("Hello queen you were born on " + dayNames[0] + " and Your akan name is " + femaleNames[0] + "!");
        }
        else if (dayValue == 2) {
          alert("Hello queen you were born on  " + dayNames[1] + " and Your akan name is " + femaleNames[1] + "!");
        }
        else if (dayValue == 3) {
          alert("Hello queen you were born on  " + dayNames[2] + " and Your akan name is " + femaleNames[2] + "!");
        }
        else if (dayValue == 4) {
          alert("Hello queen you were born on  " + dayNames[3] + " and Your akan name is " + femaleNames[3] + "!");
        }
        else if (dayValue == 5) {
          alert("Hello queen you were born on  " + dayNames[4] + " and Your akan name is " + femaleNames[4] + "!");
        }
        else if (dayValue == 6) {
          alert("Hello queen you were born on  " + dayNames[5] + " and Your akan name is " + femaleNames[5] + "!");
        }
        else if (dayValue == -0) {
          alert("Hello queen you were born on  " + dayNames[6] + " and Your akan name is " + femaleNames[6] + "!");
        }
        break;
        default:
    }
    
  }
}
function findName() {
  validate();
  calculateDayValue();
  getGender();
}