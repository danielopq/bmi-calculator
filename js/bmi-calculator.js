/**
*BMI calculator
*
*@author Daniel Martinez Duque
*
*/


window.onload = start;

/**
*<p>Add event listener to the form elements and the keys</p>
*/
function start() {
	document.getElementById("metric-rad").addEventListener('click', changeMetricSystem, false);
	document.getElementById("imperial-rad").addEventListener('click', changeMetricSystem, false);
	document.addEventListener('keyup', validateParameters, false);
}
/**
*<p>Change the measuring system used</p>
*@param event clicked radio button
*/
function changeMetricSystem(event) {
	resetValues();
	resetColor();
	if (event.target.id == "metric-rad") {
		document.getElementById("cal-imperialSystem").style.display = 'none';
		document.getElementById("cal-metricSystem").style.display = 'flex';
	} else {
		document.getElementById("cal-imperialSystem").style.display = 'flex';
		document.getElementById("cal-metricSystem").style.display = 'none';
	}
}
/**
*<p>Validates if the parameters are 0, blank or contains no mumeric values and initializes the bmi calculator
</p>
*@param event pressed key
*/
function validateParameters(event) {
	var valid = true;
	var paramValue;
	if (event.key === 'Enter') {
		if (document.getElementById("imperial-rad").checked) {
			resetColor();
			if (document.getElementById("ft").value == "" || document.getElementById("ft").value == 0) {
				document.getElementById("ft").style.backgroundColor = "#FDDDDD";
				document.getElementById("ft-container").style.backgroundColor = "#FDDDDD";
				valid = false;
			}
			if (document.getElementById("st").value == "" || document.getElementById("st").value == 0) {
				document.getElementById("st").style.backgroundColor = "#FDDDDD";
				document.getElementById("st-container").style.backgroundColor = "#FDDDDD";
				valid = false;
			}
			if (valid) {
				getReport("imperial");
			}
		} else {
			resetColor();
			if (document.getElementById("cm").value == "" || document.getElementById("cm").value == 0) {
				document.getElementById("cm").style.backgroundColor = "#FDDDDD";
				document.getElementById("cm-container").style.backgroundColor = "#FDDDDD";
				valid = false;
			}
			if (document.getElementById("kg").value == "" || document.getElementById("kg").value == 0) {
				document.getElementById("kg").style.backgroundColor = "#FDDDDD";
				document.getElementById("kg-container").style.backgroundColor = "#FDDDDD";
				valid = false;
			}
			if (valid) {
				getReport("metric");
			}
		}
	} else {
		if (!((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) && (event.keyCode != 8)) {
			paramValue = document.getElementById(document.activeElement.id).value;
			document.getElementById(document.activeElement.id).value = paramValue.substr(0, paramValue.length - 1);
		}
	}
}

/**
*<p>Calculates the body mass index (BMI)</p>
*@param mSystem measuring system selected (metric or imperial)
*@return bmi body mass index
*/
function calculateBMI(mSystem) {
	var bmi;
	var totalHeight = 0;
	var totalWeight = 0;
	if (mSystem == "metric") {
		totalHeight = document.getElementById("cm").value / 100;
		totalWeight = document.getElementById("kg").value;
		bmi = Number(totalWeight / Math.pow(totalHeight, 2)).toFixed(1);
	} else {
		totalWeight = parseInt(document.getElementById("st").value * 14) + parseInt(document.getElementById("lbs").value * 1);
		totalHeight = parseInt(document.getElementById("ft").value * 12) + parseInt(document.getElementById("in").value * 1);
		bmi = Number((totalWeight / Math.pow(totalHeight, 2) * 703)).toFixed(1);
	}
	return bmi;
}
/**
*<p>Shows the results on the website accordig to the BMI</p>
*@param mSystem measuring system selected (metric or imperial)
*/
function getReport(mSystem) {
	var bmi = calculateBMI(mSystem);
	var bmiResult = "Your BMI suggests ";

	if (bmi < 18.5) {
		bmiResult += "you're in the underweight range. "
	}
	if (bmi >= 18.5 && bmi < 25) {
		bmiResult += "you're in the healthy weight range. "
	}
	if (bmi >= 25 && bmi < 30) {
		bmiResult += "you're in the overweight range. "
	}
	if (bmi >= 30 && bmi < 40) {
		bmiResult += "you're in the obese range. "
	}
	if (bmi >= 40) {
		bmiResult += "you're in the severely obese range. "
	}

	document.getElementById("result-welcome").style.display = "none";
	document.getElementById("result-report").style.display = "flex";
	document.getElementById("BMI-number").innerHTML = bmi;
	document.getElementById("report-final").innerHTML = bmiResult;

}
/**
*<p>Resets text field parameters background color to white</p>
*/
function resetColor() {
	document.getElementById("ft-container").style.backgroundColor = "white";
	document.getElementById("ft").style.backgroundColor = "white";
	document.getElementById("st-container").style.backgroundColor = "white";
	document.getElementById("st").style.backgroundColor = "white";
	document.getElementById("cm").style.backgroundColor = "white";
	document.getElementById("cm-container").style.backgroundColor = "white";
	document.getElementById("kg").style.backgroundColor = "white";
	document.getElementById("kg-container").style.backgroundColor = "white";
}
/**
*<p>Resets text field parameters values to 0</p>
*/
function resetValues() {
	document.getElementById("cm").value = "";
	document.getElementById("kg").value = "";
	document.getElementById("ft").value = "";
	document.getElementById("in").value = "";
	document.getElementById("st").value = "";
	document.getElementById("lbs").value = "";
}
