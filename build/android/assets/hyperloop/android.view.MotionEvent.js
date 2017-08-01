var Hyperloop=require("hyperloop"),parentPackage=require("android.view"),MotionEvent=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.view.MotionEvent")?arguments[0]:MotionEvent.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("android.view.InputEvent");MotionEvent.prototype=Object.create(SuperClass.prototype),MotionEvent.prototype.constructor=MotionEvent,Object.defineProperty(MotionEvent.prototype,"super",{get:function(){return this._hasPointer?new MotionEvent(this.$native.super):null},enumerable:!0}),MotionEvent.className="android.view.MotionEvent",MotionEvent.prototype.className="android.view.MotionEvent",Object.defineProperty(MotionEvent,"class",{get:function(){return Hyperloop.getClass("android.view.MotionEvent")},enumerable:!0,configurable:!1}),MotionEvent.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new MotionEvent(Hyperloop.cast("android.view.MotionEvent",e.$native)):e},MotionEvent.BUTTON_STYLUS_SECONDARY=64,MotionEvent.ACTION_HOVER_MOVE=7,MotionEvent.AXIS_BRAKE=23,MotionEvent.TOOL_TYPE_STYLUS=2,MotionEvent.AXIS_GENERIC_9=40,MotionEvent.AXIS_GENERIC_8=39,MotionEvent.AXIS_GENERIC_7=38,MotionEvent.AXIS_GENERIC_6=37,MotionEvent.EDGE_BOTTOM=2,MotionEvent.TOOL_TYPE_MOUSE=3,MotionEvent.AXIS_GENERIC_5=36,MotionEvent.ACTION_POINTER_ID_MASK=65280,MotionEvent.AXIS_GENERIC_4=35,MotionEvent.AXIS_GENERIC_3=34,MotionEvent.AXIS_WHEEL=21,MotionEvent.AXIS_GENERIC_2=33,MotionEvent.AXIS_LTRIGGER=17,MotionEvent.TOOL_TYPE_UNKNOWN=0,MotionEvent.AXIS_GENERIC_1=32,MotionEvent.ACTION_POINTER_UP=6,MotionEvent.ACTION_SCROLL=8,MotionEvent.BUTTON_FORWARD=16,MotionEvent.ACTION_POINTER_DOWN=5,MotionEvent.ACTION_MASK=255,MotionEvent.AXIS_SIZE=3,MotionEvent.ACTION_UP=1,MotionEvent.FLAG_WINDOW_IS_OBSCURED=1,MotionEvent.ACTION_POINTER_3_UP=518,MotionEvent.ACTION_POINTER_INDEX_MASK=65280,MotionEvent.AXIS_ORIENTATION=8,MotionEvent.ACTION_HOVER_EXIT=10,MotionEvent.ACTION_POINTER_3_DOWN=517,MotionEvent.AXIS_GAS=22,MotionEvent.AXIS_VSCROLL=9,MotionEvent.ACTION_MOVE=2,MotionEvent.ACTION_POINTER_2_DOWN=261,MotionEvent.EDGE_RIGHT=8,MotionEvent.TOOL_TYPE_ERASER=4,MotionEvent.BUTTON_TERTIARY=4,MotionEvent.EDGE_TOP=1,MotionEvent.ACTION_POINTER_INDEX_SHIFT=8,MotionEvent.AXIS_DISTANCE=24,MotionEvent.AXIS_HAT_X=15,MotionEvent.AXIS_RUDDER=20,MotionEvent.AXIS_HAT_Y=16,MotionEvent.BUTTON_SECONDARY=2,MotionEvent.ACTION_POINTER_2_UP=262,MotionEvent.AXIS_GENERIC_11=42,MotionEvent.AXIS_GENERIC_12=43,MotionEvent.AXIS_HSCROLL=10,MotionEvent.ACTION_CANCEL=3,MotionEvent.BUTTON_STYLUS_PRIMARY=32,MotionEvent.AXIS_GENERIC_10=41,MotionEvent.AXIS_GENERIC_15=46,MotionEvent.AXIS_GENERIC_16=47,MotionEvent.AXIS_Z=11,MotionEvent.AXIS_GENERIC_13=44,MotionEvent.AXIS_THROTTLE=19,MotionEvent.AXIS_GENERIC_14=45,MotionEvent.AXIS_TOOL_MINOR=7,MotionEvent.AXIS_TOOL_MAJOR=6,MotionEvent.AXIS_Y=1,MotionEvent.ACTION_POINTER_1_DOWN=5,MotionEvent.AXIS_X=0,MotionEvent.ACTION_HOVER_ENTER=9,MotionEvent.ACTION_BUTTON_RELEASE=12,MotionEvent.AXIS_TOUCH_MINOR=5,MotionEvent.AXIS_RTRIGGER=18,MotionEvent.AXIS_TILT=25,MotionEvent.INVALID_POINTER_ID=-1,MotionEvent.AXIS_TOUCH_MAJOR=4,MotionEvent.AXIS_RZ=14,MotionEvent.AXIS_RY=13,MotionEvent.TOOL_TYPE_FINGER=1,MotionEvent.AXIS_RX=12,MotionEvent.EDGE_LEFT=4,MotionEvent.ACTION_OUTSIDE=4,MotionEvent.ACTION_POINTER_ID_SHIFT=8,MotionEvent.ACTION_POINTER_1_UP=6,MotionEvent.BUTTON_PRIMARY=1,MotionEvent.AXIS_PRESSURE=2,MotionEvent.ACTION_BUTTON_PRESS=11,MotionEvent.BUTTON_BACK=8,MotionEvent.ACTION_DOWN=0,Object.defineProperty(MotionEvent,"PointerProperties",{get:function(){return require("android.view.MotionEvent$PointerProperties")},enumerable:!0}),Object.defineProperty(MotionEvent,"PointerCoords",{get:function(){return require("android.view.MotionEvent$PointerCoords")},enumerable:!0}),Object.defineProperty(MotionEvent,"CREATOR",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("CREATOR");if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),MotionEvent.obtain=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"obtain",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.axisFromString=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"axisFromString",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.obtainNoHistory=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"obtainNoHistory",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.actionToString=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"actionToString",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.axisToString=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"axisToString",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.findPointerIndex=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"findPointerIndex",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getActionIndex=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getActionIndex",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getButtonState=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getButtonState",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getOrientation=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getOrientation",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.recycle=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"recycle",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getHistoricalOrientation=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getHistoricalOrientation",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getYPrecision=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getYPrecision",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getPointerCoords=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getPointerCoords",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getEventTime=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getEventTime",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getActionButton=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getActionButton",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getTouchMinor=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getTouchMinor",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getRawX=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getRawX",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getRawY=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getRawY",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.isButtonPressed=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isButtonPressed",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.addBatch=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"addBatch",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getHistorySize=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getHistorySize",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getHistoricalPressure=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getHistoricalPressure",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getPointerId=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getPointerId",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getSource=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getSource",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.setEdgeFlags=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setEdgeFlags",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getTouchMajor=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getTouchMajor",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getFlags=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getFlags",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.writeToParcel=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"writeToParcel",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.setSource=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setSource",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.setAction=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setAction",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getXPrecision=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getXPrecision",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getHistoricalAxisValue=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getHistoricalAxisValue",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getToolType=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getToolType",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.transform=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"transform",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getHistoricalSize=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getHistoricalSize",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.setLocation=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setLocation",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getToolMajor=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getToolMajor",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getHistoricalEventTime=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getHistoricalEventTime",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getToolMinor=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getToolMinor",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getActionMasked=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getActionMasked",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getMetaState=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getMetaState",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getHistoricalToolMinor=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getHistoricalToolMinor",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getHistoricalPointerCoords=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getHistoricalPointerCoords",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getHistoricalToolMajor=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getHistoricalToolMajor",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.offsetLocation=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"offsetLocation",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getPointerProperties=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getPointerProperties",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getAxisValue=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getAxisValue",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getAction=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getAction",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getPointerCount=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getPointerCount",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getHistoricalX=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getHistoricalX",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getDownTime=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getDownTime",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getHistoricalY=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getHistoricalY",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getDeviceId=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getDeviceId",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getHistoricalTouchMajor=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getHistoricalTouchMajor",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getX=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getX",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getSize=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getSize",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getY=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getY",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getPressure=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getPressure",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getHistoricalTouchMinor=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getHistoricalTouchMinor",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.finalize=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"finalize",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.toString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},MotionEvent.prototype.getEdgeFlags=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getEdgeFlags",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.MotionEvent"===e.apiName)return new MotionEvent(e);var t=require(e.apiName);return new t(e)}return e},module.exports=MotionEvent;