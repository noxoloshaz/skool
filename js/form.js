// register form
var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var email = document.getElementById('reg-email');
var pwd = document.getElementById('reg-password');
var cpwd = document.getElementById('cPassword');

//users
var adminUser = document.getElementById('admin-user');
var parentUser = document.getElementById('parent-user');
var teacherUser = document.getElementById('teacher-user');


function reg(){

    user = []

    users = {
       firstName = firstName.value,
       lastName = lastName.value,
       email = email.value,
       pwd = pwd.value,
       cpwd = cpwd.value,
       adminUser = adminUser.value,
       parentUser = adminUser.value,
       teacherUser = teacherUser.value

    }
    
}

