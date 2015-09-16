var exec = require('cordova/exec');

module.exports = {
    uuap: function(onSuccess, onError) {
        exec(onSuccess, onError, "UUAP", "uuap", []);
    }
};
