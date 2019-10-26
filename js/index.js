//toggle menu
//open
function w_open() {
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none';

  // document.getElementsByClassName('.main-content-wrapper'.style.width = "unset")
}
//close
function w_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}

//userprfl
document.querySelector('.mini-photo-wrapper').addEventListener('click', function () {
  document.querySelector('.menu-container').classList.toggle('active');
});

//sidebar-nav
//dropdwn
document.querySelectorAll(".select").forEach((el) => {
  el.addEventListener("click", function (e) {
    if (e.target && e.target.matches(".option")) {
      this.querySelector(".shown").innerHTML = e.target.innerHTML;
    }
    this.classList.toggle("collapsed");
  });
});


//note board
function showInput() {
  console.log('showInput called...')
  var userInput = document.getElementById("userInput").value;
  var display = document.getElementById("display");
  display.innerHTML += userInput + '<br />';
}


//student page

document.getElementById('dash-student-link').addEventListener('click', function (e) {
  e.preventDefault()

  var stuPage = document.getElementById('dash-students') //student page
  var dashPage = document.getElementById('dash-board') //dashboard page
  var stuAdd = document.getElementById('student-add') // student - admit student page


  if (stuPage != null) {
    stuPage.style.display = "block";
    dashPage.style.display = "none";
    stuAdd.style.display = "none";
  } else {
    alert('try again!')
  }
})


//parent page

document.getElementById('dash-parent-link').addEventListener('click', function (e) {
  e.preventDefault()


  var stuPage = document.getElementById('dash-students') //student page
  var dashPage = document.getElementById('dash-board') //dashboard page
  var parPage = document.getElementById('dash-parents') //parents page
  var stuAdd = document.getElementById('student-add') // student - admit student page


  if (parPage != null) {
    stuPage.style.display = "none";
    dashPage.style.display = "none";
    stuAdd.style.display = "none"
    allStu.style.display = "none"
    parPage.style.display = "block"
  } else {
    alert('try again!')
  }
})

//all students(list)
document.getElementById('dash-students-link').addEventListener('click', function (e) {
  e.preventDefault()


  var stuPage = document.getElementById('dash-students') //student page
  var dashPage = document.getElementById('dash-board') //dashboard page
  var parPage = document.getElementById('dash-parents') //parents page
  var stuAdd = document.getElementById('student-add') // student - admit student page
  var allStu = document.getElementById('dash-student-page') // all students (list)

  if (parPage != null) {
    stuPage.style.display = "none";
    dashPage.style.display = "none";
    stuAdd.style.display = "none"
    parPage.style.display = "none"
    allStu.style.display = "block"
  } else {
    alert('try again!')
  }


})

//student add
document.getElementById('add-student-page').addEventListener('click', function (e) {
  e.preventDefault()


  var stuPage = document.getElementById('dash-students') //student page
  var dashPage = document.getElementById('dash-board') //dashboard page
  var parPage = document.getElementById('dash-parents') //parents page
  var stuAdd = document.getElementById('student-add') // student - admit student page
  var allStu = document.getElementById('dash-student-page') // all students (list)
  var allT = document.getElementById('all-teachers') // all teachers (list)
  var allB = document.getElementById('all-books') // all parents (list)

  var allP = document.getElementById('all-parents') // all parents (list)


  if (stuAdd != null) {
    stuPage.style.display = "none";
    dashPage.style.display = "none";
    parPage.style.display = "none"
    allStu.style.display = "none"
    allP.style.display = "none"
    allT.style.display = "none"
    allB.style.display = "none"
    stuAdd.style.display = "block"

  } else {
    alert('try again!')
  }
})

// all parents

document.getElementById('all-parents-link').addEventListener('click', function (e) {
  e.preventDefault()


  var stuPage = document.getElementById('dash-students') //student page
  var dashPage = document.getElementById('dash-board') //dashboard page
  var parPage = document.getElementById('dash-parents') //parents page
  var stuAdd = document.getElementById('student-add') // student - admit student page
  var allStu = document.getElementById('dash-student-page') // all students (list)
  var allT = document.getElementById('all-teachers') // all teachers (list)
  var allB = document.getElementById('all-books') // all books (list)
  var allP = document.getElementById('all-parents') // all parents (list)

  if (allP != null) {
    stuPage.style.display = "none";
    dashPage.style.display = "none";
    parPage.style.display = "none"
    allStu.style.display = "none"
    stuAdd.style.display = "none"
    allB.style.display = "none"
    allT.style.display = "none"
    allP.style.display = "block"
  } else {
    alert('try again!')
  }
})

// all teahcers 
document.getElementById('all-teachers-link').addEventListener('click', function (e) {
  e.preventDefault()


  var stuPage = document.getElementById('dash-students') //student page
  var dashPage = document.getElementById('dash-board') //dashboard page
  var parPage = document.getElementById('dash-parents') //parents page
  var stuAdd = document.getElementById('student-add') // student - admit student page
  var allStu = document.getElementById('dash-student-page') // all students (list)
  var allP = document.getElementById('all-parents') // all parents (list)
  var allB = document.getElementById('all-books') // all books (list)
  var allT = document.getElementById('all-teachers') // all teachers (list)

  if (allT != null) {
    stuPage.style.display = "none";
    dashPage.style.display = "none";
    parPage.style.display = "none"
    allStu.style.display = "none"
    stuAdd.style.display = "none"
    allP.style.display = "none"
    allB.style.display = "none"
    allT.style.display = "block"
  } else {
    alert('try again!')
    console.log(allT);

  }
})

// all books 

document.getElementById('all-books-link').addEventListener('click', function (e) {
  e.preventDefault()


  var stuPage = document.getElementById('dash-students') //student page
  var dashPage = document.getElementById('dash-board') //dashboard page
  var parPage = document.getElementById('dash-parents') //parents page
  var stuAdd = document.getElementById('student-add') // student - admit student page
  var allStu = document.getElementById('dash-student-page') // all students (list)
  var allP = document.getElementById('all-parents') // all parents (list)
  var allT = document.getElementById('all-teachers') // all teachers (list)
  var allB = document.getElementById('all-books') // all books (list)


  if (allB != null) {
    stuPage.style.display = "none";
    dashPage.style.display = "none";
    parPage.style.display = "none"
    allStu.style.display = "none"
    stuAdd.style.display = "none"
    allP.style.display = "none"
    allT.style.display = "none"
    allB.style.display = "block"
  } else {
    alert('try again!')
    console.log(allT);

  }
})


//dashboard logout
document.getElementById("logout").addEventListener('click', function(e) {
e.preventDefault()

window.location.href = "/loginregister/loginregister/index.html"
})





//local storage : students


var students = []

var Student = {
  FirstName : " ",
  LastName : "",
  Phone : "",
  Email : "",
  DOB : " ",
  Gender :" ",
  Grade : " ",
  Address : " "
};


12

// You want to hold all your students in an array like this:

var students = [];
students.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
students.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
students.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
students.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
students.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
students.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
students.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
students.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
students.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
students.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
students.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
students.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
students.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
students.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
students.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});



// And then store that in localStorage:

localStorage.setItem('Students', JSON.stringify(students));


// The best way to do that would be with a function like this:

// When you get more student information, you should:

var addNewStudent = function (FirstName, LastName, Phone, email, DOB, grade, age) {

    // retrieve it (Or create a blank array if there isn't any info saved yet),
    var students = JSON.parse(localStorage.getItem('Students')) || [];
    // add to it,
    students.push({name: FirstName, surname: LastName, Phone: Phone, email: email, DOB: DOB, Grade: grade, Age: age});
    // then put it back.
    localStorage.setItem('Students', JSON.stringify(students));
}

var parents = [];
parents.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
parents.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
parents.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
parents.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
parents.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
parents.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
parents.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
parents.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
parents.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
parents.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
parents.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
parents.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
parents.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
parents.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});
parents.push({FirstName:"a",LastName:"b",Phone:"10111",email:"student@gmail.com",DOB:"02/12/1998",grade:"9",age:13});

// And then store that in localStorage:

localStorage.setItem('Parents', JSON.stringify(parents));


// The best way to do that would be with a function like this:

// When you get more student information, you should:

var addNewParents = function (FirstName, LastName, Phone, email, DOB, Occupation, Address) {

    // retrieve it (Or create a blank array if there isn't any info saved yet),
    var parents = JSON.parse(localStorage.getItem('Parents')) || [];
    // add to it,
    parents.push({name: FirstName, surname: LastName, Phone: Phone, email: email, DOB: DOB, occupation: Occupation, address: Address});
    // then put it back.
    localStorage.setItem('Parents', JSON.stringify(parents));
}
