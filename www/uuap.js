var exec = require('cordova/exec');

module.exports = {
    uuap: function() {
        exec(onSuccess, onError, "UUAP", "uuap", []);
    }
};
