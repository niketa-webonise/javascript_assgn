 function sub()
	{ 
	if(!validateCode())
        return;
		var users_info = {};
		var timeStamp= Math.floor(Date.now() / 1000);

		var name = document.getElementById("name").value;
		

		var email = document.getElementById("email").value;
			
		users_info.name = name;
		
		users_info.email = email;

		users_info.timestamp = timeStamp;
		if(sessionStorage.users === undefined){
			var users = [];
			users.push(users_info);
			sessionStorage.users = JSON.stringify(users);
		}else{
			var users = JSON.parse(sessionStorage.users);
			users.push(users_info);
			sessionStorage.users = JSON.stringify(users);
		}

		

	}


	function validateCode()
	{ 
	
		var name_validation = document.getElementById("name").value;
		
		var reg1 = new RegExp("^[a-z0-9]+$");
		    if(reg1.test(name_validation))
			{
			return true;
				}
			else
				{
				alert("please enter a valid name");
				return false;
			}
			}



	function list_users()
	{
	var ul = document.getElementById('list_of_users');
	var users = JSON.parse(sessionStorage.users);
	while(ul.hasChildNodes()){
	ul.removeChild(ul.lastChild);
	}
	for(var i = 0;i<users.length;i++)
	{
		var userdata = users[i];
		var li = document.createElement("LI");
		li.innerHTML = userdata.name + " " + userdata.email + " " + userdata.timestamp;
		ul.appendChild(li);
	}
		}
