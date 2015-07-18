(function(){
	var element = {
		fullName: document.getElementById('fullName').value,
		user: document.getElementById("user").value,
		password: document.getElementById("password").value,
		confirmPassword: document.getElementById("cPassword").value,
		email: document.getElementById("email").value,
		address: document.getElementById("address").value,
		zip: document.getElementById("zip").value,
		sex: document.getElementById("sex").value,
	}
	
	

})();

checkRegInputs(){

	var element = {
		fullName: document.getElementById('fullName').value,
		user: document.getElementById("user").value,
		password: document.getElementById("password").value,
		confirmPassword: document.getElementById("cPassword").value,
		email: document.getElementById("email").value,
		address: document.getElementById("address").value,
		zip: document.getElementById("zip").value,
		sex: document.getElementById("sex").value,
	}
	

	if(isNan(zip))
	{
		alert("ZIP must be numbers");
		return false;
	}




}