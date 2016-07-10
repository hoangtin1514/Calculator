var isCalculated = false;
var minNumber = -999999999999999;
var maxNumber = 999999999999999;

function clearAll(){
  txtExpression.value = "";
}

function backSpace(){
	var str = txtExpression.value;
  if (str.length >= 1)
	   txtExpression.value = str.substring(0, str.length - 1);
}

function getCharacter(button){
    if (checkErrorInput())
      txtExpression.value = "";

  	if (isCalculated === false)
      txtExpression.value += button.value;
    else {
			isCalculated = false;
			txtExpression.value = button.value;
  		}
}

function checkErrorInput(){
  if (txtExpression.value === "error" || txtExpression.value ==="stack overflow")
    return true;
  return false;
}

function getSpecialCharacter(button){
  if (checkErrorInput())
    txtExpression.value = "";

	if (isCalculated === false)
		txtExpression.value = txtExpression.value + button.value + "(";
	else{
		isCalculated = false;
		txtExpression.value = button.value + "(";
	}
}

function calculate(expression){
  txtExpression.value = cal(expression);
  isCalculated = true;
}

function cal(expression){
  try{
    var result =  math.eval(expression);
		if (result === Infinity || result === -Infinity || result.type === "Complex")
			return Infinity;
		else if (result <= maxNumber && result >= minNumber)
      return result;
		else
      return "stack overflow";
	}
  catch (err){
    return "error";
  }
};

function round(){
  var resultExp = cal(txtExpression.value);
  if (resultExp === "stack overflow" || resultExp ==="error"){
    txtExpression.value = "error";
  }
  else{
    txtExpression.value = math.round(resultExp);
  }
}
