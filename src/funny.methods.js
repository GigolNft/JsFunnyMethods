var funnyMethods = {
  // Method to test the variable is empty
  isEmpty: function(variable, callback) {
    if (typeof variable === "undefined") {
      if (typeof callback === "function") {
        callback(true);
      }
      return true;
    }

    if (variable === null) {
      if (typeof callback === "function") {
        callback(true);
      }
      return true;
    }

    if (variable == "") {
      if (typeof callback === "function") {
        callback(true);
      }
      return true;
    }

    if (variable == 0) {
      if (typeof callback === "function") {
        callback(true);
      }
      return true;
    }

    if (variable === false) {
      if (typeof callback === "function") {
        callback(true);
      }
      return true;
    }

    if (typeof callback === "function") {
      callback(false);
    }
    return false;
  },

  // Method to test the variable is not empty
  isNotEmpty: function(variable, callback) {
    this.isEmpty(variable, function(empty) {
      if (empty) {
        if (typeof callback === "function") {
          callback(false);
        }
        return false;
      } else {
        if (typeof callback === "function") {
          callback(true);
        }
        return true;
      }
    });
  }
};
