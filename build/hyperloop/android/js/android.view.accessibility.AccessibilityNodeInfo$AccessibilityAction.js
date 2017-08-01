/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.view.accessibility.AccessibilityNodeInfo');

/**
 * @class android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html}
 **/
var AccessibilityAction = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction')) {
		result = arguments[0];
	}
	else {
		result = AccessibilityAction.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
AccessibilityAction.prototype = Object.create(SuperClass.prototype);
AccessibilityAction.prototype.constructor = AccessibilityAction;

Object.defineProperty(AccessibilityAction.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new AccessibilityAction(this.$native.super);
	},
	enumerable: true
});

AccessibilityAction.className = 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction';
AccessibilityAction.prototype.className = 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction';

// class property
Object.defineProperty(AccessibilityAction, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction');
	},
	enumerable: true,
	configurable: false
});


// Cast
AccessibilityAction.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new AccessibilityAction(Hyperloop.cast('android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_CLEAR_FOCUS
Object.defineProperty(AccessibilityAction, 'ACTION_CLEAR_FOCUS', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_CLEAR_FOCUS');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_LONG_CLICK
Object.defineProperty(AccessibilityAction, 'ACTION_LONG_CLICK', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_LONG_CLICK');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_CLEAR_SELECTION
Object.defineProperty(AccessibilityAction, 'ACTION_CLEAR_SELECTION', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_CLEAR_SELECTION');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_CUT
Object.defineProperty(AccessibilityAction, 'ACTION_CUT', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_CUT');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_SET_SELECTION
Object.defineProperty(AccessibilityAction, 'ACTION_SET_SELECTION', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_SET_SELECTION');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_SCROLL_RIGHT
Object.defineProperty(AccessibilityAction, 'ACTION_SCROLL_RIGHT', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_SCROLL_RIGHT');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_SCROLL_BACKWARD
Object.defineProperty(AccessibilityAction, 'ACTION_SCROLL_BACKWARD', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_SCROLL_BACKWARD');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_CONTEXT_CLICK
Object.defineProperty(AccessibilityAction, 'ACTION_CONTEXT_CLICK', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_CONTEXT_CLICK');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_SCROLL_LEFT
Object.defineProperty(AccessibilityAction, 'ACTION_SCROLL_LEFT', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_SCROLL_LEFT');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_SCROLL_TO_POSITION
Object.defineProperty(AccessibilityAction, 'ACTION_SCROLL_TO_POSITION', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_SCROLL_TO_POSITION');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_SCROLL_FORWARD
Object.defineProperty(AccessibilityAction, 'ACTION_SCROLL_FORWARD', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_SCROLL_FORWARD');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_SCROLL_UP
Object.defineProperty(AccessibilityAction, 'ACTION_SCROLL_UP', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_SCROLL_UP');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_SHOW_ON_SCREEN
Object.defineProperty(AccessibilityAction, 'ACTION_SHOW_ON_SCREEN', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_SHOW_ON_SCREEN');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_SELECT
Object.defineProperty(AccessibilityAction, 'ACTION_SELECT', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_SELECT');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_PREVIOUS_HTML_ELEMENT
Object.defineProperty(AccessibilityAction, 'ACTION_PREVIOUS_HTML_ELEMENT', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_PREVIOUS_HTML_ELEMENT');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_NEXT_HTML_ELEMENT
Object.defineProperty(AccessibilityAction, 'ACTION_NEXT_HTML_ELEMENT', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_NEXT_HTML_ELEMENT');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_CLEAR_ACCESSIBILITY_FOCUS
Object.defineProperty(AccessibilityAction, 'ACTION_CLEAR_ACCESSIBILITY_FOCUS', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_CLEAR_ACCESSIBILITY_FOCUS');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_EXPAND
Object.defineProperty(AccessibilityAction, 'ACTION_EXPAND', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_EXPAND');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_SCROLL_DOWN
Object.defineProperty(AccessibilityAction, 'ACTION_SCROLL_DOWN', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_SCROLL_DOWN');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_COPY
Object.defineProperty(AccessibilityAction, 'ACTION_COPY', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_COPY');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_COLLAPSE
Object.defineProperty(AccessibilityAction, 'ACTION_COLLAPSE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_COLLAPSE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_NEXT_AT_MOVEMENT_GRANULARITY
Object.defineProperty(AccessibilityAction, 'ACTION_NEXT_AT_MOVEMENT_GRANULARITY', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_NEXT_AT_MOVEMENT_GRANULARITY');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_CLICK
Object.defineProperty(AccessibilityAction, 'ACTION_CLICK', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_CLICK');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_SET_TEXT
Object.defineProperty(AccessibilityAction, 'ACTION_SET_TEXT', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_SET_TEXT');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_ACCESSIBILITY_FOCUS
Object.defineProperty(AccessibilityAction, 'ACTION_ACCESSIBILITY_FOCUS', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_ACCESSIBILITY_FOCUS');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_PASTE
Object.defineProperty(AccessibilityAction, 'ACTION_PASTE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_PASTE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_FOCUS
Object.defineProperty(AccessibilityAction, 'ACTION_FOCUS', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_FOCUS');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_PREVIOUS_AT_MOVEMENT_GRANULARITY
Object.defineProperty(AccessibilityAction, 'ACTION_PREVIOUS_AT_MOVEMENT_GRANULARITY', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_PREVIOUS_AT_MOVEMENT_GRANULARITY');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_DISMISS
Object.defineProperty(AccessibilityAction, 'ACTION_DISMISS', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ACTION_DISMISS');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new AccessibilityAction(result);
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

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getLabel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#getLabel()}
 **/
AccessibilityAction.prototype.getLabel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLabel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
			return new AccessibilityAction(result);
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
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#hashCode()}
 **/
AccessibilityAction.prototype.hashCode = function() {
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
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
			return new AccessibilityAction(result);
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
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#equals(java.lang.Object)}
 **/
AccessibilityAction.prototype.equals = function() {
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
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
			return new AccessibilityAction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#getId()}
 **/
AccessibilityAction.prototype.getId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
			return new AccessibilityAction(result);
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
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#toString()}
 **/
AccessibilityAction.prototype.toString = function() {
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
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
			return new AccessibilityAction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = AccessibilityAction;
