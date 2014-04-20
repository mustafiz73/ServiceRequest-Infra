// Numeric validation
function onlyNumbers(evt) {
	alert("Ohoi!");
	var e = event || evt; // for trans-browser compatibility
	var charCode = e.which || e.keyCode;

	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;

	return true;

}
//date validation
function check_date(field) {
	var checkstr = "0123456789";
	var DateField = field;
	var Datevalue = "";
	var DateTemp = "";
	var seperator = "-";
	var day;
	var month;
	var year;
	var leap = 0;
	var err = 0;
	var i;
	err = 0;
	DateValue = DateField.value;

	for (i = 0; i < DateValue.length; i++) {
		if (checkstr.indexOf(DateValue.substr(i, 1)) >= 0) {
			DateTemp = DateTemp + DateValue.substr(i, 1);
		}
	}
	DateValue = DateTemp;

	if (DateValue.length == 6) {
		DateValue = DateValue.substr(0, 4) + '20' + DateValue.substr(4, 2);
	}
	if (DateValue.length != 8) {
		err = 19;
	}

	year = DateValue.substr(4, 4);
	if (year == 0) {
		err = 20;
	}

	month = DateValue.substr(2, 2);
	if ((month < 1) || (month > 12)) {
		err = 21;
	}

	day = DateValue.substr(0, 2);
	if (day < 1) {
		err = 22;
	}

	if ((year % 4 == 0) || (year % 100 == 0) || (year % 400 == 0)) {
		leap = 1;
	}
	if ((month == 2) && (leap == 1) && (day > 29)) {
		err = 23;
	}
	if ((month == 2) && (leap != 1) && (day > 28)) {
		err = 24;
	}

	if ((day > 31)
			&& ((month == "01") || (month == "03") || (month == "05")
					|| (month == "07") || (month == "08") || (month == "10") || (month == "12"))) {
		err = 25;
	}
	if ((day > 30)
			&& ((month == "04") || (month == "06") || (month == "09") || (month == "11"))) {
		err = 26;
	}

	if ((day == 0) && (month == 0) && (year == 00)) {
		err = 0;
		day = "";
		month = "";
		year = "";
		seperator = "";
	}
	/* if no error, write the completed date to Input-Field (e.g. 13.12.2001) */
	if (err == 0) {
		DateField.value = day + seperator + month + seperator + year;
	}
	/* Error-message if err != 0 */
	else {
		alert("Date is incorrect!");
		DateField.select();
		DateField.focus();
	}
}
