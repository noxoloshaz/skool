var logBtn = document.getElementById('login');
var regBtn = document.getElementById('register')


logBtn.addEventListener('click', function(e){
	e.preventDefault()

	var regForm = document.getElementById('register-form')
	regForm.style.display = "none"
	var logForm = document.getElementById('login-form')
	logForm.style.display = "block"

})

regBtn.addEventListener('click', function(e){
	e.preventDefault()

	var logForm = document.getElementById('login-form')
	logForm.style.display = "none"
	var regForm = document.getElementById('register-form')
	regForm.style.display = "block"

})

