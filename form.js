
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
			var users = json.parse(sessionStorage.users);
			users.push(users_info);
			sessionStorage.users = json.stringfy(users);
		}
		/*sessionStorage.setItem("current_timestamp",timeStamp);
		sessionStorage.setItem("name", input.value); 
		sessionStorage.setItem("email",email.value);*/

	}
	function list_users()
	{

	}
	  
