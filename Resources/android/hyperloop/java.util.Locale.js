/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.Locale
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.util');

/**
 * @class java.util.Locale
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/Locale.html}
 **/
var Locale = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.util.Locale')) {
		result = arguments[0];
	}
	else {
		result = Locale.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Locale.prototype = Object.create(SuperClass.prototype);
Locale.prototype.constructor = Locale;

Object.defineProperty(Locale.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Locale(this.$native.super);
	},
	enumerable: true
});

Locale.className = 'java.util.Locale';
Locale.prototype.className = 'java.util.Locale';

// class property
Object.defineProperty(Locale, 'class', {
	get: function() {
		return Hyperloop.getClass('java.util.Locale');
	},
	enumerable: true,
	configurable: false
});


// Cast
Locale.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Locale(Hyperloop.cast('java.util.Locale', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#PRIVATE_USE_EXTENSION}
 */
Locale.PRIVATE_USE_EXTENSION = 120;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#UNICODE_LOCALE_EXTENSION}
 */
Locale.UNICODE_LOCALE_EXTENSION = 117;

// Inner classes
Object.defineProperty(Locale, 'Builder', {
	get: function() {
		return require('java.util.Locale$Builder');
	},
	enumerable: true
});
Object.defineProperty(Locale, 'FilteringMode', {
	get: function() {
		return require('java.util.Locale$FilteringMode');
	},
	enumerable: true
});
Object.defineProperty(Locale, 'LanguageRange', {
	get: function() {
		return require('java.util.Locale$LanguageRange');
	},
	enumerable: true
});
Object.defineProperty(Locale, 'Category', {
	get: function() {
		return require('java.util.Locale$Category');
	},
	enumerable: true
});

// Static fields
// http://developer.android.com/reference/java/util/Locale.html#PRC
Object.defineProperty(Locale, 'PRC', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('PRC');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale') {
				return new Locale(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.html#CANADA
Object.defineProperty(Locale, 'CANADA', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CANADA');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale') {
				return new Locale(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.html#ENGLISH
Object.defineProperty(Locale, 'ENGLISH', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ENGLISH');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale') {
				return new Locale(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.html#ROOT
Object.defineProperty(Locale, 'ROOT', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ROOT');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale') {
				return new Locale(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.html#TAIWAN
Object.defineProperty(Locale, 'TAIWAN', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('TAIWAN');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale') {
				return new Locale(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.html#CHINA
Object.defineProperty(Locale, 'CHINA', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CHINA');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale') {
				return new Locale(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.html#ITALY
Object.defineProperty(Locale, 'ITALY', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ITALY');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale') {
				return new Locale(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.html#CHINESE
Object.defineProperty(Locale, 'CHINESE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CHINESE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale') {
				return new Locale(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.html#KOREA
Object.defineProperty(Locale, 'KOREA', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('KOREA');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale') {
				return new Locale(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.html#FRENCH
Object.defineProperty(Locale, 'FRENCH', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('FRENCH');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale') {
				return new Locale(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.html#FRANCE
Object.defineProperty(Locale, 'FRANCE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('FRANCE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale') {
				return new Locale(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.html#TRADITIONAL_CHINESE
Object.defineProperty(Locale, 'TRADITIONAL_CHINESE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('TRADITIONAL_CHINESE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale') {
				return new Locale(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.html#CANADA_FRENCH
Object.defineProperty(Locale, 'CANADA_FRENCH', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CANADA_FRENCH');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale') {
				return new Locale(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.html#GERMANY
Object.defineProperty(Locale, 'GERMANY', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('GERMANY');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale') {
				return new Locale(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.html#ITALIAN
Object.defineProperty(Locale, 'ITALIAN', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ITALIAN');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale') {
				return new Locale(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.html#UK
Object.defineProperty(Locale, 'UK', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('UK');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale') {
				return new Locale(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.html#JAPAN
Object.defineProperty(Locale, 'JAPAN', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('JAPAN');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale') {
				return new Locale(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.html#JAPANESE
Object.defineProperty(Locale, 'JAPANESE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('JAPANESE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale') {
				return new Locale(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.html#SIMPLIFIED_CHINESE
Object.defineProperty(Locale, 'SIMPLIFIED_CHINESE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('SIMPLIFIED_CHINESE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale') {
				return new Locale(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.html#GERMAN
Object.defineProperty(Locale, 'GERMAN', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('GERMAN');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale') {
				return new Locale(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.html#US
Object.defineProperty(Locale, 'US', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('US');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale') {
				return new Locale(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.html#KOREAN
Object.defineProperty(Locale, 'KOREAN', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('KOREAN');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale') {
				return new Locale(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function forLanguageTag
 * @static
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#forLanguageTag(java.lang.String)}
 **/
Locale.forLanguageTag = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'forLanguageTag',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function lookupTag
 * @static
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#lookupTag(java.util.List, java.util.Collection)}
 **/
Locale.lookupTag = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'lookupTag',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getISOCountries
 * @static
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#getISOCountries()}
 **/
Locale.getISOCountries = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getISOCountries',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function filterTags
 * @static
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#filterTags(java.util.List, java.util.Collection, java.util.Locale$FilteringMode)}
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#filterTags(java.util.List, java.util.Collection)}
 **/
Locale.filterTags = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'filterTags',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getISOLanguages
 * @static
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#getISOLanguages()}
 **/
Locale.getISOLanguages = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getISOLanguages',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAvailableLocales
 * @static
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#getAvailableLocales()}
 **/
Locale.getAvailableLocales = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getAvailableLocales',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function lookup
 * @static
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#lookup(java.util.List, java.util.Collection)}
 **/
Locale.lookup = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'lookup',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDefault
 * @static
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#getDefault()}
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#getDefault(java.util.Locale$Category)}
 **/
Locale.getDefault = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getDefault',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDefault
 * @static
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#setDefault(java.util.Locale)}
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#setDefault(java.util.Locale$Category, java.util.Locale)}
 **/
Locale.setDefault = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'setDefault',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function filter
 * @static
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#filter(java.util.List, java.util.Collection, java.util.Locale$FilteringMode)}
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#filter(java.util.List, java.util.Collection)}
 **/
Locale.filter = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'filter',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods
/**
 * TODO Fill out docs more...
 * @function stripExtensions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#stripExtensions()}
 **/
Locale.prototype.stripExtensions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'stripExtensions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCountry
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#getCountry()}
 **/
Locale.prototype.getCountry = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCountry',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getUnicodeLocaleAttributes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#getUnicodeLocaleAttributes()}
 **/
Locale.prototype.getUnicodeLocaleAttributes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUnicodeLocaleAttributes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getUnicodeLocaleKeys
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#getUnicodeLocaleKeys()}
 **/
Locale.prototype.getUnicodeLocaleKeys = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUnicodeLocaleKeys',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getISO3Country
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#getISO3Country()}
 **/
Locale.prototype.getISO3Country = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getISO3Country',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDisplayCountry
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#getDisplayCountry()}
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#getDisplayCountry(java.util.Locale)}
 **/
Locale.prototype.getDisplayCountry = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDisplayCountry',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getISO3Language
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#getISO3Language()}
 **/
Locale.prototype.getISO3Language = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getISO3Language',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#hashCode()}
 **/
Locale.prototype.hashCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hashCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExtensionKeys
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#getExtensionKeys()}
 **/
Locale.prototype.getExtensionKeys = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getExtensionKeys',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDisplayVariant
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#getDisplayVariant()}
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#getDisplayVariant(java.util.Locale)}
 **/
Locale.prototype.getDisplayVariant = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDisplayVariant',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toLanguageTag
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#toLanguageTag()}
 **/
Locale.prototype.toLanguageTag = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toLanguageTag',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDisplayScript
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#getDisplayScript()}
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#getDisplayScript(java.util.Locale)}
 **/
Locale.prototype.getDisplayScript = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDisplayScript',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLanguage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#getLanguage()}
 **/
Locale.prototype.getLanguage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLanguage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExtension
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#getExtension(char)}
 **/
Locale.prototype.getExtension = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getExtension',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getVariant
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#getVariant()}
 **/
Locale.prototype.getVariant = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getVariant',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasExtensions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#hasExtensions()}
 **/
Locale.prototype.hasExtensions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasExtensions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDisplayName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#getDisplayName()}
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#getDisplayName(java.util.Locale)}
 **/
Locale.prototype.getDisplayName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDisplayName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function equals
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#equals(java.lang.Object)}
 **/
Locale.prototype.equals = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'equals',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clone
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#clone()}
 **/
Locale.prototype.clone = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clone',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#toString()}
 **/
Locale.prototype.toString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDisplayLanguage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#getDisplayLanguage()}
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#getDisplayLanguage(java.util.Locale)}
 **/
Locale.prototype.getDisplayLanguage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDisplayLanguage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getScript
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#getScript()}
 **/
Locale.prototype.getScript = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getScript',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getUnicodeLocaleType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.html#getUnicodeLocaleType(java.lang.String)}
 **/
Locale.prototype.getUnicodeLocaleType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUnicodeLocaleType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale') {
			return new Locale(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Locale;
