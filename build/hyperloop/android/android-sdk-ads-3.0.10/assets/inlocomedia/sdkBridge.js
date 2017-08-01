(function() {
    var sdkBridge = window.sdkBridge = {
        nativeCallQueue: [],
        nativeCallInFlight: false
    };

    sdkBridge.executeNativeCall = function(args) {
    var schema = args.shift();

        var command = args.shift();

        var call = schema + '://' + command;

        var key, value;
        var isFirstArgument = true;

        if (args.length > 0) {
            call += '?';
        }

        for (var i = 0; i < args.length; i += 2) {
            key = args[i];
            value = args[i + 1];

            if (value === null) continue;

            call += '&' + encodeURIComponent(key) + '=' + encodeURIComponent(value);
        }

        if (this.nativeCallInFlight) {
            this.nativeCallQueue.push(call);
        } else {
            this.nativeCallInFlight = true;
            window.location = call;
        }
    };

    sdkBridge.nativeCallComplete = function() {
        if (this.nativeCallQueue.length === 0) {
            this.nativeCallInFlight = false;
            return;
        }

        var nextCall = this.nativeCallQueue.shift();
        window.location = nextCall;
    }

}());