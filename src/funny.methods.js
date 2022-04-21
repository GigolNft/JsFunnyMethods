var funnyMethods = {
	// Method to test the variable is empty
	isEmpty: function(variable, callback) {
		if (variable == "") {
			callback(true);
			return;
		}

		callback(false);
	}
};
