/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module XmlPullParser
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('org.xmlpull.v1');

/**
 * constructor
 * http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html
 **/
var XmlPullParser = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName && arguments[0].apiName === 'org.xmlpull.v1.XmlPullParser') {
		result = arguments[0];
	}
	else {
		var instance = this,
			copy = Array.prototype.slice.call(arguments)[0],
			modified = {},
			subclass;

		function _wrapArg(arg) {
			if (arg.apiName && arg.isNativeProxy && arg.isInstanceProxy) { // Assume hyperloop proxy, wrap in JS wrapper
				var other = require(arg.apiName);
				return new other(arg);
			}
			return arg;
		}

		function _wrapArgs() {
			var newArgs = [];
			for (var i = 0; i < arguments.length; i++) {
				newArgs[i] = _wrapArg(arguments[i]);
			}
			return newArgs;
		};
		Object.keys(copy).forEach(function (each) {
			// Hang the original override method on the JS wrapper object
			instance[each] = function() {
				return copy[each].apply(instance, arguments);
			};

			// Hang a delegate on the "overrides" object we pass into Java.
			// This one wraps hyperloop proxies from Java in their JS wrapper before forwarding on
			modified[each] = function() {
				return instance[each].apply(instance, _wrapArgs.apply(this, arguments));
			}
		});
		// Create dynamic subclass of the interface
		// Then generate a new instance of the subclass with the modified overrides that auto wrap native objects in JS wrappers
		// and delegate to the original impls.
		subclass = Hyperloop.implement('org.xmlpull.v1.XmlPullParser');
		result = subclass.newInstance(modified);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};


XmlPullParser.toString = function() {
	return "[object " + this.className + "]";
};

XmlPullParser.prototype.toString = function() {
	if (this._hasPointer) {
		return "[object " + this.className + "]";
	}
	return null;
};

XmlPullParser.isInstanceOf = function (self, cls) {
	if (typeof cls !== "function" || typeof self !== "function") { return false; }
	while (self) {
		if (cls === self || self instanceof cls || self.className === cls.className) {
			return true;
		}
		self = self.__superclass__;
	}
	return false;
};

XmlPullParser.className = "org.xmlpull.v1.XmlPullParser";
XmlPullParser.prototype.className = "org.xmlpull.v1.XmlPullParser";

// class property
Object.defineProperty(XmlPullParser, 'class', {
	get: function() {
		return Hyperloop.getClass('org.xmlpull.v1.XmlPullParser');
	},
	enumerable: true,
	configurable: false
});

// Cast
XmlPullParser.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new XmlPullParser(Hyperloop.cast('org.xmlpull.v1.XmlPullParser', object.$native));
};

// Constants
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#FEATURE_VALIDATION
XmlPullParser.FEATURE_VALIDATION = "http://xmlpull.org/v1/doc/features.html#validation";
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#DOCDECL
XmlPullParser.DOCDECL = 10;
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#END_TAG
XmlPullParser.END_TAG = 3;
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#END_DOCUMENT
XmlPullParser.END_DOCUMENT = 1;
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#FEATURE_PROCESS_NAMESPACES
XmlPullParser.FEATURE_PROCESS_NAMESPACES = "http://xmlpull.org/v1/doc/features.html#process-namespaces";
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#TEXT
XmlPullParser.TEXT = 4;
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#COMMENT
XmlPullParser.COMMENT = 9;
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#FEATURE_REPORT_NAMESPACE_ATTRIBUTES
XmlPullParser.FEATURE_REPORT_NAMESPACE_ATTRIBUTES = "http://xmlpull.org/v1/doc/features.html#report-namespace-prefixes";
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#ENTITY_REF
XmlPullParser.ENTITY_REF = 6;
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#FEATURE_PROCESS_DOCDECL
XmlPullParser.FEATURE_PROCESS_DOCDECL = "http://xmlpull.org/v1/doc/features.html#process-docdecl";
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#NO_NAMESPACE
XmlPullParser.NO_NAMESPACE = "";
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#PROCESSING_INSTRUCTION
XmlPullParser.PROCESSING_INSTRUCTION = 8;
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#START_DOCUMENT
XmlPullParser.START_DOCUMENT = 0;
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#IGNORABLE_WHITESPACE
XmlPullParser.IGNORABLE_WHITESPACE = 7;
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#START_TAG
XmlPullParser.START_TAG = 2;
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#CDSECT
XmlPullParser.CDSECT = 5;

XmlPullParser.prototype.equals = function (other) {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'equals',
		instanceMethod: true,
		args: [other]
	});
	return result;
};

XmlPullParser.prototype.hashCode = function () {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hashCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	return result;
};

// export the interface
module.exports = XmlPullParser;
