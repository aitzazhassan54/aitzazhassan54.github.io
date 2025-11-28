var uname = document.querySelector('#fullname');
    var age = document.querySelector('#age');
    var comment = document.querySelector('#comments');
    var province = document.querySelector('#province');
     var city = document.querySelector('#city');
     var email = document.querySelector('#email');
     var skills = document.querySelectorAll('.skills input[type="checkbox"]');
  var skillsBox = document.querySelector('.skills');var genderRadios = document.querySelectorAll('input[name="gender"]');
  var genderBox = document.querySelector('fieldset:last-of-type');




 
 

  

    uname.addEventListener('change', check_name);
    age.addEventListener('change', check_age);
    comment.addEventListener('change', check_comment);
    province.addEventListener('change', check_province);
     city.addEventListener('change', check_city);
     email.addEventListener('change', check_email);
     
     skills.forEach(skill => {
    skill.addEventListener('change', check_skills);
  });

  genderRadios.forEach(radio => {
    radio.addEventListener('change', check_gender);
  });
     

    function check_name() {
      if (this.value.length < 5) {
        this.style = 'background-color: red';
      }
      else {
        this.style = 'background-color: white';
      }

    }

    function check_age() {
      let age = Number(this.value);

      if (age < 10 || age > 100) {
        this.style.backgroundColor = "red";
      } else {
        this.style.backgroundColor = "white";
      }
    }

    function check_comment() {
      if (this.value.length < 2000) {
        this.style = 'background-color: red';
      }
      else {
        this.style = 'background-color: white';
      }

    }

    function check_province() {
      let prov = this.value.trim().toLowerCase();

      let validProvinces = [
        "punjab",
        "sindh",
        "balochistan",
        "kpk",
        "gilgit baltistan",
        "ajk"
      ];

      if (!validProvinces.includes(prov)) {
        this.style.backgroundColor = "red";
      } else {
        this.style.backgroundColor = "white";
      }
    }

    function check_city() {
  let city = this.value.trim();

  
  let valid = /^[A-Za-z ]+$/.test(city);

  if (!valid || city.length < 3) {
    this.style.backgroundColor = "red";
  } else {
    this.style.backgroundColor = "white";
  }
}

function check_email() {
   
    let valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value);
    if (!valid) {
      this.style.backgroundColor = "red";
    } else {
      this.style.backgroundColor = "white";
    }
  }

  function check_skills() {
    let anyChecked = Array.from(skills).some(skill => skill.checked);

    if (!anyChecked) {
      skillsBox.style.border = "2px solid red";
    } else {
      skillsBox.style.border = "1.5px solid black";
    }
  }

  function check_gender() {
    let selected = Array.from(genderRadios).some(radio => radio.checked);

    if (!selected) {
      genderBox.style.border = "2px solid red";
    } else {
      genderBox.style.border = "1.5px solid black";
    }
  }


//i validate name, email,province city comments checkbox radio age 