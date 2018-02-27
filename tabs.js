var tabs = [];
var timeout;
function open_win()
{
	var win;
	
	for(var i = 0;i<5;i++){


		win=window.open("https://www.microsoft.com/","_blank");
		tabs.push(win);
	}
	close_tab();
	


}
	function close_tab(){

		timeout = setTimeout(function(){
			
			var winCl=tabs.pop();
			winCl.close();
			close_tab();

		},3000);				
	}

function stop_script()
{
	clearTimeout(timeout);
	
	}
