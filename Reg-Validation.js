function formValidation()
{
	var fullName = document.getElementById("fullName").value;
	var user = document.registration.user;
	var password = document.registration.password;
	var cPassword = document.registration.cPassword;
	var address = document.registration.address;
	var zip = document.registration.zip;
	var sex = document.registration.sex;
	
	var error = "";
	if (fullName == ""){
		user.style.backround = 'Yellow';
		error "Please insert Full Name.\n";
		alert(error);
		return false;
	}
}