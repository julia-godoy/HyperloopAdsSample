/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.ContentResolver
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content');

/**
 * @class android.content.ContentResolver
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html}
 **/
var ContentResolver = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.ContentResolver')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.content.ContentResolver. Create a subclass using android.content.ContentResolver.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
ContentResolver.prototype = Object.create(SuperClass.prototype);
ContentResolver.prototype.constructor = ContentResolver;

Object.defineProperty(ContentResolver.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ContentResolver(this.$native.super);
	},
	enumerable: true
});

ContentResolver.className = 'android.content.ContentResolver';
ContentResolver.prototype.className = 'android.content.ContentResolver';

// class property
Object.defineProperty(ContentResolver, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.ContentResolver');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
ContentResolver.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.ContentResolver');

	// Generate a JS wrapper for our dynamic subclass
	var SubClass = function() {
		var result = subclassProxy.newInstance(arguments),
			instance = this,
			copy = overrides,
			modified = {};

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
		result.setOverrides(modified);

		this.$native = result;
		this._hasPointer = result != null;
		this._private = {};
	};
	// it extends the JS wrapper for the parent type
	SubClass.prototype = Object.create(ContentResolver.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
ContentResolver.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ContentResolver(Hyperloop.cast('android.content.ContentResolver', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_EXTRAS_DO_NOT_RETRY}
 */
ContentResolver.SYNC_EXTRAS_DO_NOT_RETRY = "do_not_retry";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SCHEME_ANDROID_RESOURCE}
 */
ContentResolver.SCHEME_ANDROID_RESOURCE = "android.resource";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_EXTRAS_ACCOUNT}
 */
ContentResolver.SYNC_EXTRAS_ACCOUNT = "account";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_EXTRAS_IGNORE_BACKOFF}
 */
ContentResolver.SYNC_EXTRAS_IGNORE_BACKOFF = "ignore_backoff";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_EXTRAS_OVERRIDE_TOO_MANY_DELETIONS}
 */
ContentResolver.SYNC_EXTRAS_OVERRIDE_TOO_MANY_DELETIONS = "deletions_override";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_EXTRAS_EXPEDITED}
 */
ContentResolver.SYNC_EXTRAS_EXPEDITED = "expedited";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_EXTRAS_FORCE}
 */
ContentResolver.SYNC_EXTRAS_FORCE = "force";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#CURSOR_DIR_BASE_TYPE}
 */
ContentResolver.CURSOR_DIR_BASE_TYPE = "vnd.android.cursor.dir";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_EXTRAS_IGNORE_SETTINGS}
 */
ContentResolver.SYNC_EXTRAS_IGNORE_SETTINGS = "ignore_settings";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#ANY_CURSOR_ITEM_TYPE}
 */
ContentResolver.ANY_CURSOR_ITEM_TYPE = "vnd.android.cursor.item/*";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#EXTRA_SIZE}
 */
ContentResolver.EXTRA_SIZE = "android.content.extra.SIZE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#CURSOR_ITEM_BASE_TYPE}
 */
ContentResolver.CURSOR_ITEM_BASE_TYPE = "vnd.android.cursor.item";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_OBSERVER_TYPE_PENDING}
 */
ContentResolver.SYNC_OBSERVER_TYPE_PENDING = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_EXTRAS_INITIALIZE}
 */
ContentResolver.SYNC_EXTRAS_INITIALIZE = "initialize";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SCHEME_CONTENT}
 */
ContentResolver.SCHEME_CONTENT = "content";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_EXTRAS_MANUAL}
 */
ContentResolver.SYNC_EXTRAS_MANUAL = "force";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_EXTRAS_UPLOAD}
 */
ContentResolver.SYNC_EXTRAS_UPLOAD = "upload";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_EXTRAS_DISCARD_LOCAL_DELETIONS}
 */
ContentResolver.SYNC_EXTRAS_DISCARD_LOCAL_DELETIONS = "discard_deletions";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_OBSERVER_TYPE_SETTINGS}
 */
ContentResolver.SYNC_OBSERVER_TYPE_SETTINGS = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_OBSERVER_TYPE_ACTIVE}
 */
ContentResolver.SYNC_OBSERVER_TYPE_ACTIVE = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SCHEME_FILE}
 */
ContentResolver.SCHEME_FILE = "file";

// Inner classes

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function requestSync
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#requestSync(android.accounts.Account, java.lang.String, android.os.Bundle)}
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#requestSync(android.content.SyncRequest)}
 **/
ContentResolver.requestSync = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'requestSync',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addPeriodicSync
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#addPeriodicSync(android.accounts.Account, java.lang.String, android.os.Bundle, long)}
 **/
ContentResolver.addPeriodicSync = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'addPeriodicSync',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMasterSyncAutomatically
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#getMasterSyncAutomatically()}
 **/
ContentResolver.getMasterSyncAutomatically = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getMasterSyncAutomatically',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMasterSyncAutomatically
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#setMasterSyncAutomatically(boolean)}
 **/
ContentResolver.setMasterSyncAutomatically = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'setMasterSyncAutomatically',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCurrentSync
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#getCurrentSync()}
 **/
ContentResolver.getCurrentSync = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getCurrentSync',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSyncActive
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#isSyncActive(android.accounts.Account, java.lang.String)}
 **/
ContentResolver.isSyncActive = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'isSyncActive',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function validateSyncExtrasBundle
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#validateSyncExtrasBundle(android.os.Bundle)}
 **/
ContentResolver.validateSyncExtrasBundle = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'validateSyncExtrasBundle',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSyncAutomatically
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#getSyncAutomatically(android.accounts.Account, java.lang.String)}
 **/
ContentResolver.getSyncAutomatically = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getSyncAutomatically',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeStatusChangeListener
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#removeStatusChangeListener(java.lang.Object)}
 **/
ContentResolver.removeStatusChangeListener = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'removeStatusChangeListener',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSyncAdapterTypes
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#getSyncAdapterTypes()}
 **/
ContentResolver.getSyncAdapterTypes = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getSyncAdapterTypes',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSyncAutomatically
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#setSyncAutomatically(android.accounts.Account, java.lang.String, boolean)}
 **/
ContentResolver.setSyncAutomatically = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'setSyncAutomatically',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSyncPending
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#isSyncPending(android.accounts.Account, java.lang.String)}
 **/
ContentResolver.isSyncPending = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'isSyncPending',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function cancelSync
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#cancelSync(android.accounts.Account, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#cancelSync(android.content.SyncRequest)}
 **/
ContentResolver.cancelSync = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'cancelSync',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setIsSyncable
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#setIsSyncable(android.accounts.Account, java.lang.String, int)}
 **/
ContentResolver.setIsSyncable = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'setIsSyncable',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCurrentSyncs
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#getCurrentSyncs()}
 **/
ContentResolver.getCurrentSyncs = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getCurrentSyncs',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPeriodicSyncs
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#getPeriodicSyncs(android.accounts.Account, java.lang.String)}
 **/
ContentResolver.getPeriodicSyncs = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getPeriodicSyncs',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIsSyncable
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#getIsSyncable(android.accounts.Account, java.lang.String)}
 **/
ContentResolver.getIsSyncable = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getIsSyncable',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removePeriodicSync
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#removePeriodicSync(android.accounts.Account, java.lang.String, android.os.Bundle)}
 **/
ContentResolver.removePeriodicSync = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'removePeriodicSync',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addStatusChangeListener
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#addStatusChangeListener(int, android.content.SyncStatusObserver)}
 **/
ContentResolver.addStatusChangeListener = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'addStatusChangeListener',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
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
 * @function getOutgoingPersistedUriPermissions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#getOutgoingPersistedUriPermissions()}
 **/
ContentResolver.prototype.getOutgoingPersistedUriPermissions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOutgoingPersistedUriPermissions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function notifyChange
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#notifyChange(android.net.Uri, android.database.ContentObserver)}
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#notifyChange(android.net.Uri, android.database.ContentObserver, boolean)}
 **/
ContentResolver.prototype.notifyChange = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'notifyChange',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startSync
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#startSync(android.net.Uri, android.os.Bundle)}
 **/
ContentResolver.prototype.startSync = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startSync',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function insert
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#insert(android.net.Uri, android.content.ContentValues)}
 **/
ContentResolver.prototype.insert = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'insert',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function update
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#update(android.net.Uri, android.content.ContentValues, java.lang.String, java.lang.String[])}
 **/
ContentResolver.prototype.update = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'update',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function acquireContentProviderClient
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#acquireContentProviderClient(android.net.Uri)}
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#acquireContentProviderClient(java.lang.String)}
 **/
ContentResolver.prototype.acquireContentProviderClient = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'acquireContentProviderClient',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openTypedAssetFileDescriptor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#openTypedAssetFileDescriptor(android.net.Uri, java.lang.String, android.os.Bundle)}
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#openTypedAssetFileDescriptor(android.net.Uri, java.lang.String, android.os.Bundle, android.os.CancellationSignal)}
 **/
ContentResolver.prototype.openTypedAssetFileDescriptor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openTypedAssetFileDescriptor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function delete
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#delete(android.net.Uri, java.lang.String, java.lang.String[])}
 **/
ContentResolver.prototype.delete = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'delete',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openAssetFileDescriptor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#openAssetFileDescriptor(android.net.Uri, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#openAssetFileDescriptor(android.net.Uri, java.lang.String, android.os.CancellationSignal)}
 **/
ContentResolver.prototype.openAssetFileDescriptor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openAssetFileDescriptor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function uncanonicalize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#uncanonicalize(android.net.Uri)}
 **/
ContentResolver.prototype.uncanonicalize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'uncanonicalize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPersistedUriPermissions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#getPersistedUriPermissions()}
 **/
ContentResolver.prototype.getPersistedUriPermissions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPersistedUriPermissions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function bulkInsert
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#bulkInsert(android.net.Uri, android.content.ContentValues[])}
 **/
ContentResolver.prototype.bulkInsert = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'bulkInsert',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openFileDescriptor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#openFileDescriptor(android.net.Uri, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#openFileDescriptor(android.net.Uri, java.lang.String, android.os.CancellationSignal)}
 **/
ContentResolver.prototype.openFileDescriptor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openFileDescriptor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openOutputStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#openOutputStream(android.net.Uri)}
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#openOutputStream(android.net.Uri, java.lang.String)}
 **/
ContentResolver.prototype.openOutputStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openOutputStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStreamTypes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#getStreamTypes(android.net.Uri, java.lang.String)}
 **/
ContentResolver.prototype.getStreamTypes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStreamTypes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function canonicalize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#canonicalize(android.net.Uri)}
 **/
ContentResolver.prototype.canonicalize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'canonicalize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openInputStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#openInputStream(android.net.Uri)}
 **/
ContentResolver.prototype.openInputStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openInputStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function applyBatch
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#applyBatch(java.lang.String, java.util.ArrayList)}
 **/
ContentResolver.prototype.applyBatch = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'applyBatch',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unregisterContentObserver
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#unregisterContentObserver(android.database.ContentObserver)}
 **/
ContentResolver.prototype.unregisterContentObserver = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'unregisterContentObserver',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function takePersistableUriPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#takePersistableUriPermission(android.net.Uri, int)}
 **/
ContentResolver.prototype.takePersistableUriPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'takePersistableUriPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function cancelSync
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#cancelSync(android.net.Uri)}
 **/
ContentResolver.prototype.cancelSync = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'cancelSync',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function query
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#query(android.net.Uri, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#query(android.net.Uri, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String, android.os.CancellationSignal)}
 **/
ContentResolver.prototype.query = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'query',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function releasePersistableUriPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#releasePersistableUriPermission(android.net.Uri, int)}
 **/
ContentResolver.prototype.releasePersistableUriPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'releasePersistableUriPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function call
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#call(android.net.Uri, java.lang.String, java.lang.String, android.os.Bundle)}
 **/
ContentResolver.prototype.call = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'call',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#getType(android.net.Uri)}
 **/
ContentResolver.prototype.getType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function registerContentObserver
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#registerContentObserver(android.net.Uri, boolean, android.database.ContentObserver)}
 **/
ContentResolver.prototype.registerContentObserver = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'registerContentObserver',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function acquireUnstableContentProviderClient
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#acquireUnstableContentProviderClient(android.net.Uri)}
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#acquireUnstableContentProviderClient(java.lang.String)}
 **/
ContentResolver.prototype.acquireUnstableContentProviderClient = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'acquireUnstableContentProviderClient',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ContentResolver;
