const form = document.forms['myform'];

form.addEventListener('submit', e => {
	e.preventDefault();
	
	validateForm();
});

let errorMess = ""
let targetError = ""
let iconError = ""
let iconSuccess = ""
let inputname = ""

function showError(inputname, targetError, iconError, iconSuccess, errorMess){
	form[inputname].classList.add('input-error')
	document.querySelector("." + targetError).innerText = errorMess
	error = document.querySelector("." + targetError)
	errorIcon = document.querySelector("." + iconError)
	successIcon = document.querySelector("." + iconSuccess)
	successIcon.classList.remove('show-success')
	error.classList.add('show-error')
	errorIcon.classList.add('show-error')
}
function showSuccess(inputname, targetError, iconError, iconSuccess){
	form[inputname].classList.remove('input-error')
	error = document.querySelector("." + targetError)
	iconError = document.querySelector("." + iconError)
	successIcon = document.querySelector("." + iconSuccess)
	error.classList.remove('show-error')
	iconError.classList.remove('show-error')
	successIcon.classList.add('show-success')
}

function validateForm(){
	if(form['email'].value.trim() === ""){
		showError("email", "email-error", "email-x", "email-check", "Email is required")
	}else{
		showSuccess("email", "email-error", "email-x", "email-check")
	}
	if(form['fname'].value.trim() === ""){
		showError("fname", "fname-error", "fname-x", "fname-check",  "Firstname is required")
	}else{
		showSuccess("fname", "fname-error", "fname-x", "fname-check")
	}
	if(form['lname'].value.trim() === ""){
		showError("lname", "lname-error", "lname-x", "lname-check",  "Lastname is required")
	}else{
		showSuccess("lname", "lname-error", "lname-x", "lname-check")
	}
	if(form['contact'].value.trim() === ""){
		showError("contact", "contact-error", "contact-x", "contact-check",  "Contact is required")
	}else{
		showSuccess("contact", "contact-error", "contact-x", "contact-check")
	}
}


