
	function add(){
	var num1 = parseInt(document.getElementById("number1").value);
        var num2 = parseInt(document.getElementById("number2").value);
        var add_ans = num1+num2;
	var outputDiv = document.getElementById('output');
	outputDiv.innerHTML = 'the sum is '+add_ans;
	if(num1<0 && num2<0)
	outputDiv.innerHTML = 'enter valid input';
	}
	function sub(){
	var num1 = parseInt(document.getElementById("number1").value);
        var num2 = parseInt(document.getElementById("number2").value);
	sub_ans = num1-num2;
	var outputDiv = document.getElementById('output');
	outputDiv.innerHTML = 'the difference is '+sub_ans;
	if(num1<0 && num2<0)
	outputDiv.innerHTML = 'enter a valid input';
	}

