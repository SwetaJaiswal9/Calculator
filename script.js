var buttons = document.getElementsByClassName("button");

var display = document.getElementById("display");

var operand1 = 0;
var operand2 = null;
var operator = null;


for(let i of buttons){

i.addEventListener("click", function(){

	var value = this.getAttribute("data-value");

	if (value == 'AC'){

		display.innerText = '';
		operand1 = 0;
		operand2 = null;
		operator = null;
	}

	else if (value == 'C'){
		
		display.innerText = display.innerText.substring(0, display.innerText.length - 1);
	}

	else if(value == '='){

		var res = eval(display.innerText);
		display.innerText = res;
	}

	else{

		display.innerText += value;
	}
})}
