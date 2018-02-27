 function onsubmit()
	{ 
		var users_info = {};
		var timeStamp= Math.floor(Date.now() / 1000);

		var user_name = document.getElementById("name");
		users_info.name = user_name.value;

		var user_email = document.getElementById("email");
		users_info.email = user_email.value;

		users_info.timestamp = timeStamp;
		if(sessionStorage.users === undefined){
			var users = [];
			users.push(users_info);
			sessionStorage.users = json.stringfy(users);
		}else{
			var users = JSON.parse(sessionStorage.users);
			users.push(users_info);
			sessionStorage.users = JSON.stringfy(users);
		}
		

	}

	function alphanumeric(inputtxt)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(inputtxt.value.match(letters))
{
alert('Your registration number have accepted : you can try another');
document.form1.name.focus();
return true;
}
else
{
alert('Please input alphanumeric characters only');
return false;
}
}


	function list_users()
	{
	var ul = document.getElementById('list_of_users');
	
	}
