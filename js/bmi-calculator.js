/**
 * @fileoverview Contains all the functions need to calculate de BMI.
 * @author Daniel Martinez Duque
 * @date 2024-08-04
 */

(() => {
	document.getElementById("metric-rad").addEventListener('click', changeMetricSystem, false);
	document.getElementById("imperial-rad").addEventListener('click', changeMetricSystem, false);
	document.addEventListener('keyup', validateParameters, false);
})()
const metric = [
	{ height: 150, minimunWeight: 45.0, maximumWeight: 56.3 },
	{ height: 151, minimunWeight: 45.6, maximumWeight: 57.0 },
	{ height: 152, minimunWeight: 46.2, maximumWeight: 57.8 },
	{ height: 153, minimunWeight: 47.4, maximumWeight: 58.8 },
	{ height: 154, minimunWeight: 48.1, maximumWeight: 59.3 },
	{ height: 155, minimunWeight: 48.7, maximumWeight: 60.1 },
	{ height: 156, minimunWeight: 49.3, maximumWeight: 60.8 },
	{ height: 157, minimunWeight: 50.6, maximumWeight: 61.6 },
	{ height: 158, minimunWeight: 51.2, maximumWeight: 62.4 },
	{ height: 159, minimunWeight: 50.6, maximumWeight: 63.2 },
	{ height: 160, minimunWeight: 51.2, maximumWeight: 64.0 },
	{ height: 161, minimunWeight: 51.8, maximumWeight: 64.8 },
	{ height: 162, minimunWeight: 52.5, maximumWeight: 65.6 },
	{ height: 163, minimunWeight: 53.1, maximumWeight: 66.4 },
	{ height: 164, minimunWeight: 53.8, maximumWeight: 67.2 },
	{ height: 165, minimunWeight: 55.1, maximumWeight: 68.1 },
	{ height: 166, minimunWeight: 55.8, maximumWeight: 68.9 },
	{ height: 167, minimunWeight: 56.4, maximumWeight: 69.7 },
	{ height: 168, minimunWeight: 57.1, maximumWeight: 70.6 },
	{ height: 169, minimunWeight: 57.8, maximumWeight: 71.4 },
	{ height: 170, minimunWeight: 58.5, maximumWeight: 72.3 },
	{ height: 171, minimunWeight: 59.2, maximumWeight: 73.1 },
	{ height: 172, minimunWeight: 59.9, maximumWeight: 74.0 },
	{ height: 173, minimunWeight: 60.6, maximumWeight: 74.8 },
	{ height: 174, minimunWeight: 61.3, maximumWeight: 75.7 },
	{ height: 175, minimunWeight: 62.0, maximumWeight: 76.6 },
	{ height: 176, minimunWeight: 62.7, maximumWeight: 77.4 },
	{ height: 177, minimunWeight: 63.4, maximumWeight: 78.3 },
	{ height: 178, minimunWeight: 64.1, maximumWeight: 79.2 },
	{ height: 179, minimunWeight: 64.8, maximumWeight: 80.1 },
	{ height: 180, minimunWeight: 65.5, maximumWeight: 81.0 },
	{ height: 181, minimunWeight: 66.2, maximumWeight: 81.9 },
	{ height: 182, minimunWeight: 67.0, maximumWeight: 82.8 },
	{ height: 183, minimunWeight: 67.7, maximumWeight: 83.7 },
	{ height: 184, minimunWeight: 68.5, maximumWeight: 84.6 },
	{ height: 185, minimunWeight: 69.2, maximumWeight: 85.6 },
	{ height: 186, minimunWeight: 69.9, maximumWeight: 86.5 },
	{ height: 187, minimunWeight: 70.7, maximumWeight: 87.4 },
	{ height: 189, minimunWeight: 71.4, maximumWeight: 89.3 },
	{ height: 190, minimunWeight: 72.2, maximumWeight: 90.3 },
	{ height: 191, minimunWeight: 73.0, maximumWeight: 91.2 },
	{ height: 192, minimunWeight: 73.7, maximumWeight: 92.2 },
	{ height: 193, minimunWeight: 74.5, maximumWeight: 93.1 },
	{ height: 194, minimunWeight: 75.3, maximumWeight: 94.1 },
	{ height: 195, minimunWeight: 76.1, maximumWeight: 95.1 },
	{ height: 196, minimunWeight: 76.8, maximumWeight: 96.0 },
	{ height: 197, minimunWeight: 77.6, maximumWeight: 97.0 },
	{ height: 198, minimunWeight: 78.6, maximumWeight: 98.0 },
	{ height: 199, minimunWeight: 79.2, maximumWeight: 99.0 },
	{ height: 200, minimunWeight: 80.0, maximumWeight: 100.0 }
];

const imperial = [
	{ height: 60, minimunWeight: 102.4, maximumWeight: 128.0 },
	{ height: 61, minimunWeight: 105.9, maximumWeight: 132.3 },
	{ height: 62, minimunWeight: 109.4, maximumWeight: 136.7 },
	{ height: 63, minimunWeight: 112.9, maximumWeight: 141.1 },
	{ height: 64, minimunWeight: 116.5, maximumWeight: 145.7 },
	{ height: 65, minimunWeight: 120.2, maximumWeight: 150.2 },
	{ height: 66, minimunWeight: 123.9, maximumWeight: 154.9 },
	{ height: 67, minimunWeight: 127.7, maximumWeight: 159.6 },
	{ height: 68, minimunWeight: 131.6, maximumWeight: 164.4 },
	{ height: 69, minimunWeight: 135.4, maximumWeight: 169.3 },
	{ height: 70, minimunWeight: 139.4, maximumWeight: 174.3 },
	{ height: 71, minimunWeight: 143.4, maximumWeight: 179.3 },
	{ height: 72, minimunWeight: 147.5, maximumWeight: 184.4 },
	{ height: 73, minimunWeight: 151.6, maximumWeight: 189.5 },
	{ height: 74, minimunWeight: 155.8, maximumWeight: 194.7 },
	{ height: 75, minimunWeight: 160.0, maximumWeight: 200.0 },
	{ height: 76, minimunWeight: 162.2, maximumWeight: 205.4 },
	{ height: 77, minimunWeight: 164.3, maximumWeight: 210.8 },
	{ height: 78, minimunWeight: 166.5, maximumWeight: 205.4 },
	{ height: 79, minimunWeight: 168.7, maximumWeight: 210.8 },
	{ height: 80, minimunWeight: 173.1, maximumWeight: 216.4 }
]

/**
*Change the measurement system used.
*@param {Event} event clicked radio button
*/
function changeMetricSystem(event) {
	resetValues();
	resetColor();
	document.getElementById("result-report").style.display = 'none';
	document.getElementById("result-welcome").style.display = 'flex';
	if (event.target.id == "metric-rad") {
		document.getElementById("cal-imperialSystem").style.display = 'none';
		document.getElementById("cal-metricSystem").style.display = 'flex';
	} else {
		document.getElementById("cal-imperialSystem").style.display = 'flex';
		document.getElementById("cal-metricSystem").style.display = 'none';
	}
}

/**
*Validates whether the parameters are 0, blank, or contain non-numeric values and initializes the BMI calculator.
*@param {Event} event pressed key
*/
function validateParameters(event) {
	let valid = true;
	let paramValue;
	if (event.key === 'Enter') {
		if (document.getElementById("imperial-rad").checked) {
			resetColor();
			if (document.getElementById("ft").value == "" || document.getElementById("ft").value < 5) {
				document.getElementById("ft").style.backgroundColor = "#FDDDDD";
				document.getElementById("ft-container").style.backgroundColor = "#FDDDDD";
				valid = false;
			}
			if (document.getElementById("in").value > 12) {
				document.getElementById("in").style.backgroundColor = "#FDDDDD";
				document.getElementById("in-container").style.backgroundColor = "#FDDDDD";
				valid = false;
			}
			if (document.getElementById("st").value == "" || document.getElementById("st").value == 0) {
				document.getElementById("st").style.backgroundColor = "#FDDDDD";
				document.getElementById("st-container").style.backgroundColor = "#FDDDDD";
				valid = false;
			}
			if (document.getElementById("lbs").value > 14) {
				document.getElementById("lbs").style.backgroundColor = "#FDDDDD";
				document.getElementById("lbs-container").style.backgroundColor = "#FDDDDD";
				valid = false;
			}
			if (valid) {
				getReport("imperial");
			}
		} else {
			resetColor();
			if (document.getElementById("cm").value == "" || document.getElementById("cm").value < 150) {
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
*Calculates the body mass index (BMI).
*@param {String} mSystem Measurement system selected by the user (metric or imperial).
*@return {Number} body mass index.
*/
function calculateBMI(mSystem) {
	let bmi;
	let totalHeight = 0;
	let totalWeight = 0;
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
*Shows the results on the website according to the BMI.
*@param {String} mSystem Measurement system selected by the user (metric or imperial).
*/
function getReport(mSystem) {
	let bmi = calculateBMI(mSystem);
	let userHeight = 0;
	let bmiResult = "Your BMI suggests ";
	let idealWeight = "Your ideal weight is between: <br>";

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
	if (document.getElementById("metric-rad").checked) {
		userHeight = document.getElementById("cm").value;
		idealWeight += getIdealWeight(mSystem, userHeight);
	} else {
		if (document.getElementById("in").value == "") {
			userHeight = parseInt(document.getElementById("ft").value * 12);
		} else {
			userHeight = (parseInt(document.getElementById("ft").value * 12)) + parseInt(document.getElementById("in").value);
		}

		idealWeight += getIdealWeight(mSystem, userHeight);
	}
	document.getElementById("result-welcome").style.display = "none";
	document.getElementById("result-report").style.display = "flex";
	document.getElementById("BMI-number").innerHTML = bmi;
	document.getElementById("report-final").innerHTML = bmiResult + idealWeight;

}

/**
*Search for the minimum and maximum recommended weight according to the user's height.
*@param {String} mSystem Measurement system selected by the user (metric or imperial).
*@param {Number} userHeight Height provided by the user.
*@return {String} Minimum, and maximum recommended weight
*/
function getIdealWeight(mSystem, userHeight) {
	let idealWeight = "";
	if (mSystem == "metric") {
		for (let i = 0; i < metric.length; i++) {
			if (metric[i].height == userHeight) {
				idealWeight = "<b>" + metric[i].minimunWeight + " Kgs. - " + metric[i].maximumWeight + " Kgs.</b>";
			}
		}
	} else {
		for (let z = 0; z < imperial.length; z++) {
			if (imperial[z].height == userHeight) {
				idealWeight = "<b>" + imperial[z].minimunWeight + " lbs. - " + imperial[z].maximumWeight + " lbs.</b>";
			}
		}
	}
	return idealWeight;
}

/**
*Resets the background color of text field parameters to white.
*/
function resetColor() {
	document.getElementById("ft-container").style.backgroundColor = "white";
	document.getElementById("ft").style.backgroundColor = "white";
	document.getElementById("in").style.backgroundColor = "white";
	document.getElementById("in-container").style.backgroundColor = "white";
	document.getElementById("lbs").style.backgroundColor = "white";
	document.getElementById("lbs-container").style.backgroundColor = "white";
	document.getElementById("st-container").style.backgroundColor = "white";
	document.getElementById("st").style.backgroundColor = "white";
	document.getElementById("cm").style.backgroundColor = "white";
	document.getElementById("cm-container").style.backgroundColor = "white";
	document.getElementById("kg").style.backgroundColor = "white";
	document.getElementById("kg-container").style.backgroundColor = "white";
}
/**
*Resets the values of text field parameters to 0.
*/
function resetValues() {
	document.getElementById("cm").value = "";
	document.getElementById("kg").value = "";
	document.getElementById("ft").value = "";
	document.getElementById("in").value = "";
	document.getElementById("st").value = "";
	document.getElementById("lbs").value = "";
}
