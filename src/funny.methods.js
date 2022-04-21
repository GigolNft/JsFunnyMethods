var funnyMethods = {
	// Method to test the variable is empty
	isEmpty: function(variable, callback) {
		if (typeof variable === "undefined") {
			callback(true);
			return;
		}

		if (variable === null) {
			callback(true);
			return;
		}

		if (variable == "") {
			callback(true);
			return;
		}

		if (variable == 0) {
			callback(true);
			return;
		}

		if (variable === false) {
			callback(true);
			return;
		}

		callback(false);
	}
};
