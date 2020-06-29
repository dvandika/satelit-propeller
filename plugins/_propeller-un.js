"use strict";
var _typeof =
  typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
    ? function (breakpoint) {
        return typeof breakpoint;
      }
    : function (obj) {
        return obj &&
          typeof Symbol === "function" &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
          ? "symbol"
          : typeof obj;
      };
var _0x70ab = [
  "propeller",
  "linear",
  "string",
  "querySelectorAll",
  "length",
  "createMany",
  "element",
  "active",
  "transiting",
  "update",
  "bind",
  "initCSSPrefix",
  "initOptions",
  "initHardwareAcceleration",
  "initTransition",
  "addListeners",
  "push",
  "prototype",
  "ontouchstart",
  "documentElement",
  "touchstart",
  "onRotationStart",
  "addEventListener",
  "touchmove",
  "onRotated",
  "touchend",
  "onRotationStop",
  "touchcancel",
  "dragstart",
  "returnFalse",
  "mousedown",
  "mousemove",
  "mouseup",
  "mouseleave",
  "ondragstart",
  "initCoordinates",
  "initDrag",
  "stopPropagation",
  "preventDefault",
  "touches",
  "lastMouseEvent",
  "pageX",
  "pageY",
  "updateAngleToMouse",
  "updateAngle",
  "applySpeed",
  "applyInertia",
  "updateCSSRotate",
  "requestAnimFrame",
  "lastAppliedAngle",
  "angle",
  "abs",
  "minimalAngleChange",
  "cssPrefix",
  "transform",
  "style",
  "rotate(",
  "deg) ",
  "accelerationPostfix",
  "PI",
  "blockTransition",
  "onRotate",
  "function",
  "step",
  "getAngleFromVirtual",
  "virtualAngle",
  "ceil",
  "differenceBetweenAngles",
  "sin",
  "cos",
  "atan2",
  "round",
  "inertia",
  "speed",
  "minimalInertia",
  "cx",
  "cy",
  "lastMouseAngle",
  "lastElementAngle",
  "stepTransitionTime",
  "mouseDiff",
  "getViewOffset",
  "x",
  "offsetWidth",
  "y",
  "offsetHeight",
  "onrotate",
  "stepTransitionEasing",
  "body",
  "undefined",
  "",
  "mozTransform",
  "-moz-",
  "webkitTransform",
  "-webkit-",
  "msTransform",
  "-ms-",
  "p",
  "createElement",
  "-webkit-transform",
  "-o-transform",
  "-ms-transform",
  "-moz-transform",
  "insertBefore",
  "translate3d(1px,1px,1px)",
  "getPropertyValue",
  "getComputedStyle",
  "removeChild",
  "none",
  "translateZ(0)",
  "all ",
  "ms ",
  "transition",
  "defaultView",
  "ownerDocument",
  "addOffset",
  "offsetParent",
  "offsetLeft",
  "scrollLeft",
  "offsetTop",
  "scrollTop",
  "nodeType",
  "position",
  "static",
  "borderLeftWidth",
  "borderTopWidth",
  "localName",
  "TABLE",
  "paddingLeft",
  "paddingTop",
  "BODY",
  "marginLeft",
  "marginTop",
  "parentNode",
  "toLowerCase",
  "frameElement",
  "$",
  "propellers",
  "fn",
  "plugin_",
  "data",
  "each",
  "Propeller",
  "requestAnimationFrame",
  "webkitRequestAnimationFrame",
  "mozRequestAnimationFrame",
  "setTimeout",
  "Function.prototype.bind - what is trying to be bound is not callable",
  "call",
  "slice",
  "concat",
  "apply",
];
(function (object) {
  var name = _0x70ab[0];
  var defaults = {
    angle: 0,
    speed: 0,
    inertia: 0,
    minimalInertia: 0.001,
    minimalAngleChange: 0.1,
    step: 0,
    stepTransitionTime: 0,
    stepTransitionEasing: _0x70ab[1],
  };
  var data = function a(b, t) {
    if ((typeof b === "undefined" ? "undefined" : _typeof(b)) === _0x70ab[2]) {
      b = document[_0x70ab[3]](b);
    }
    if (b[_0x70ab[4]] > 1) {
      return a[_0x70ab[5]](b, t);
    } else {
      if (b[_0x70ab[4]] === 1) {
        b = b[0];
      }
    }
    this[_0x70ab[6]] = b;
    this[_0x70ab[7]] = false;
    this[_0x70ab[8]] = false;
    this[_0x70ab[9]] = this[_0x70ab[9]][_0x70ab[10]](this);
    this[_0x70ab[11]]();
    this[_0x70ab[12]](t);
    this[_0x70ab[13]]();
    this[_0x70ab[14]]();
    this[_0x70ab[15]]();
    this[_0x70ab[9]]();
  };
  data[_0x70ab[5]] = function (PL$53, total) {
    var fut = [];
    var PL$54 = 0;
    for (; PL$54 < PL$53[_0x70ab[4]]; PL$54++) {
      fut[_0x70ab[16]](new data(PL$53[PL$54], total));
    }
    return fut;
  };
  var passid = data[_0x70ab[17]];
  passid[_0x70ab[15]] = function () {
    if (_0x70ab[18] in document[_0x70ab[19]]) {
      this[_0x70ab[6]][_0x70ab[22]](
        _0x70ab[20],
        this[_0x70ab[21]][_0x70ab[10]](this)
      );
      this[_0x70ab[6]][_0x70ab[22]](
        _0x70ab[23],
        this[_0x70ab[24]][_0x70ab[10]](this)
      );
      this[_0x70ab[6]][_0x70ab[22]](
        _0x70ab[25],
        this[_0x70ab[26]][_0x70ab[10]](this)
      );
      this[_0x70ab[6]][_0x70ab[22]](
        _0x70ab[27],
        this[_0x70ab[26]][_0x70ab[10]](this)
      );
      this[_0x70ab[6]][_0x70ab[22]](_0x70ab[28], this[_0x70ab[29]]);
    } else {
      this[_0x70ab[6]][_0x70ab[22]](
        _0x70ab[30],
        this[_0x70ab[21]][_0x70ab[10]](this)
      );
      this[_0x70ab[6]][_0x70ab[22]](
        _0x70ab[31],
        this[_0x70ab[24]][_0x70ab[10]](this)
      );
      this[_0x70ab[6]][_0x70ab[22]](
        _0x70ab[32],
        this[_0x70ab[26]][_0x70ab[10]](this)
      );
      this[_0x70ab[6]][_0x70ab[22]](
        _0x70ab[33],
        this[_0x70ab[26]][_0x70ab[10]](this)
      );
      this[_0x70ab[6]][_0x70ab[22]](_0x70ab[28], this[_0x70ab[29]]);
    }
    this[_0x70ab[6]][_0x70ab[34]] = this[_0x70ab[29]];
  };
  passid[_0x70ab[21]] = function (canCreateDiscussions) {
    this[_0x70ab[35]]();
    this[_0x70ab[36]]();
    this[_0x70ab[7]] = true;
  };
  passid[_0x70ab[26]] = function () {
    this[_0x70ab[7]] = false;
  };
  passid[_0x70ab[24]] = function (item) {
    if (this[_0x70ab[7]] === true) {
      item[_0x70ab[37]]();
      item[_0x70ab[38]]();
      if (
        item[_0x70ab[39]] !== undefined &&
        item[_0x70ab[39]][0] !== undefined
      ) {
        this[_0x70ab[40]] = {
          pageX: item[_0x70ab[39]][0][_0x70ab[41]],
          pageY: item[_0x70ab[39]][0][_0x70ab[42]],
        };
      } else {
        this[_0x70ab[40]] = {
          pageX: item[_0x70ab[41]],
          pageY: item[_0x70ab[42]],
        };
      }
    }
  };
  passid[_0x70ab[9]] = function () {
    if (this[_0x70ab[40]] !== undefined && this[_0x70ab[7]] === true) {
      this[_0x70ab[43]](this[_0x70ab[40]]);
    }
    this[_0x70ab[44]]();
    this[_0x70ab[45]]();
    this[_0x70ab[46]]();
    this[_0x70ab[47]]();
    window[_0x70ab[48]](this[_0x70ab[9]]);
  };
  passid[_0x70ab[47]] = function () {
    if (
      Math[_0x70ab[51]](this[_0x70ab[49]] - this[_0x70ab[50]]) >=
        this[_0x70ab[52]] &&
      this[_0x70ab[8]] === false
    ) {
      this[_0x70ab[6]][_0x70ab[55]][data[_0x70ab[53]] + _0x70ab[54]] =
        _0x70ab[56] + this[_0x70ab[50]] + _0x70ab[57] + this[_0x70ab[58]];
      var _0x98f7xc = (this[_0x70ab[50]] * Math[_0x70ab[59]]) / 180;
      this[_0x70ab[49]] = this[_0x70ab[50]];
      this[_0x70ab[60]]();
      if (
        this[_0x70ab[61]] !== undefined &&
        _typeof(this[_0x70ab[61]]) === _0x70ab[62]
      ) {
        this[_0x70ab[61]][_0x70ab[10]](this)();
      }
    }
  };
  passid[_0x70ab[44]] = function () {
    if (this[_0x70ab[63]] > 0) {
      this[_0x70ab[50]] = this[_0x70ab[64]]();
    } else {
      this[_0x70ab[50]] = this[_0x70ab[65]];
    }
  };
  passid[_0x70ab[64]] = function () {
    return (
      Math[_0x70ab[66]](this[_0x70ab[65]] / this[_0x70ab[63]]) *
      this[_0x70ab[63]]
    );
  };
  passid[_0x70ab[67]] = function (i, zr) {
    var cur_colour_index = i * (Math[_0x70ab[59]] / 180);
    var zr2 = zr * (Math[_0x70ab[59]] / 180);
    var range = Math[_0x70ab[70]](
      Math[_0x70ab[68]](cur_colour_index - zr2),
      Math[_0x70ab[69]](cur_colour_index - zr2)
    );
    var val = range * (180 / Math[_0x70ab[59]]);
    return Math[_0x70ab[71]](val * 100) / 100;
  };
  passid[_0x70ab[45]] = function () {
    if (
      this[_0x70ab[72]] > 0 &&
      this[_0x70ab[73]] !== 0 &&
      this[_0x70ab[7]] === false
    ) {
      this[_0x70ab[65]] += this[_0x70ab[73]];
    }
  };
  passid[_0x70ab[46]] = function () {
    if (this[_0x70ab[72]] > 0) {
      if (Math[_0x70ab[51]](this[_0x70ab[73]]) > this[_0x70ab[74]]) {
        this[_0x70ab[73]] = this[_0x70ab[73]] * this[_0x70ab[72]];
      } else {
        this[_0x70ab[73]] = 0;
      }
    }
  };
  passid[_0x70ab[43]] = function (canCreateDiscussions) {
    var value = canCreateDiscussions[_0x70ab[41]] - this[_0x70ab[75]];
    var n = canCreateDiscussions[_0x70ab[42]] - this[_0x70ab[76]];
    var javaObject = Math[_0x70ab[70]](value, n);
    var artistTrack = javaObject * ((180 / Math[_0x70ab[59]]) * -1) + 180;
    if (this[_0x70ab[77]] === undefined) {
      this[_0x70ab[78]] = this[_0x70ab[65]];
      this[_0x70ab[77]] = artistTrack;
    }
    if (this[_0x70ab[79]] !== defaults[_0x70ab[79]]) {
      this[_0x70ab[73]] = this[_0x70ab[80]] = this[_0x70ab[67]](
        artistTrack,
        this[_0x70ab[77]]
      );
      this[_0x70ab[65]] = this[_0x70ab[78]] + this[_0x70ab[80]];
      this[_0x70ab[78]] = this[_0x70ab[65]];
      this[_0x70ab[77]] = artistTrack;
    } else {
      var GET_AUTH_URL_TIMEOUT = this[_0x70ab[65]];
      this[_0x70ab[80]] = artistTrack - this[_0x70ab[77]];
      this[_0x70ab[65]] = this[_0x70ab[78]] + this[_0x70ab[80]];
      var numKeysDeleted = this[_0x70ab[65]];
      this[_0x70ab[73]] = this[_0x70ab[67]](
        numKeysDeleted,
        GET_AUTH_URL_TIMEOUT
      );
    }
  };
  passid[_0x70ab[35]] = function () {
    var _0x98f7x16 = this[_0x70ab[81]]();
    this[_0x70ab[75]] =
      _0x98f7x16[_0x70ab[82]] + this[_0x70ab[6]][_0x70ab[83]] / 2;
    this[_0x70ab[76]] =
      _0x98f7x16[_0x70ab[84]] + this[_0x70ab[6]][_0x70ab[85]] / 2;
  };
  passid[_0x70ab[36]] = function () {
    this[_0x70ab[73]] = 0;
    this[_0x70ab[77]] = undefined;
    this[_0x70ab[78]] = undefined;
    this[_0x70ab[40]] = undefined;
  };
  passid[_0x70ab[12]] = function (options) {
    options = options || defaults;
    this[_0x70ab[61]] = options[_0x70ab[61]] || options[_0x70ab[86]];
    this[_0x70ab[63]] = options[_0x70ab[63]] || defaults[_0x70ab[63]];
    this[_0x70ab[79]] = options[_0x70ab[79]] || defaults[_0x70ab[79]];
    this[_0x70ab[87]] = options[_0x70ab[87]] || defaults[_0x70ab[87]];
    this[_0x70ab[73]] = options[_0x70ab[73]] || defaults[_0x70ab[73]];
    this[_0x70ab[72]] = options[_0x70ab[72]] || defaults[_0x70ab[72]];
    this[_0x70ab[74]] = options[_0x70ab[74]] || defaults[_0x70ab[74]];
    this[_0x70ab[49]] = this[_0x70ab[65]] = this[_0x70ab[50]] =
      options[_0x70ab[50]] || defaults[_0x70ab[50]];
    this[_0x70ab[52]] =
      this[_0x70ab[63]] !== defaults[_0x70ab[63]]
        ? this[_0x70ab[63]]
        : defaults[_0x70ab[52]];
  };
  passid[_0x70ab[11]] = function () {
    if (data[_0x70ab[53]] === undefined) {
      if (
        _typeof(document[_0x70ab[88]][_0x70ab[55]][_0x70ab[54]]) != _0x70ab[89]
      ) {
        data[_0x70ab[53]] = _0x70ab[90];
      } else {
        if (
          _typeof(document[_0x70ab[88]][_0x70ab[55]][_0x70ab[91]]) !=
          _0x70ab[89]
        ) {
          data[_0x70ab[53]] = _0x70ab[92];
        } else {
          if (
            _typeof(document[_0x70ab[88]][_0x70ab[55]][_0x70ab[93]]) !=
            _0x70ab[89]
          ) {
            data[_0x70ab[53]] = _0x70ab[94];
          } else {
            if (
              _typeof(document[_0x70ab[88]][_0x70ab[55]][_0x70ab[95]]) !=
              _0x70ab[89]
            ) {
              data[_0x70ab[53]] = _0x70ab[96];
            }
          }
        }
      }
    }
  };
  passid[_0x70ab[13]] = function () {
    this[_0x70ab[58]] = _0x70ab[90];
    var data = document[_0x70ab[98]](_0x70ab[97]);
    var removeTheseCharacters;
    var transforms = {
      webkitTransform: _0x70ab[99],
      OTransform: _0x70ab[100],
      msTransform: _0x70ab[101],
      MozTransform: _0x70ab[102],
      transform: _0x70ab[54],
    };
    document[_0x70ab[88]][_0x70ab[103]](data, null);
    var name;
    for (name in transforms) {
      if (data[_0x70ab[55]][name] !== undefined) {
        data[_0x70ab[55]][name] = _0x70ab[104];
        removeTheseCharacters = window[_0x70ab[106]](data)[_0x70ab[105]](
          transforms[name]
        );
      }
    }
    document[_0x70ab[88]][_0x70ab[107]](data);
    var _0x98f7x1b =
      removeTheseCharacters !== undefined &&
      removeTheseCharacters[_0x70ab[4]] > 0 &&
      removeTheseCharacters !== _0x70ab[108];
    if (_0x98f7x1b === true) {
      this[_0x70ab[58]] = _0x70ab[109];
      this[_0x70ab[6]][_0x70ab[55]][data[_0x70ab[53]] + _0x70ab[54]] = this[
        _0x70ab[58]
      ];
    }
  };
  passid[_0x70ab[14]] = function () {
    if (this[_0x70ab[79]] !== defaults[_0x70ab[79]]) {
      var _0x98f7x1c =
        _0x70ab[110] + this[_0x70ab[79]] + _0x70ab[111] + this[_0x70ab[87]];
      this[_0x70ab[6]][_0x70ab[55]][
        data[_0x70ab[53]] + _0x70ab[112]
      ] = _0x98f7x1c;
    }
  };
  passid[_0x70ab[60]] = function () {
    if (this[_0x70ab[79]] !== defaults[_0x70ab[79]]) {
      var _0x98f7x1d = this;
      setTimeout(function () {
        _0x98f7x1d[_0x70ab[8]] = false;
      }, this[_0x70ab[79]]);
      this[_0x70ab[8]] = true;
    }
  };
  passid[_0x70ab[81]] = function (canCreateDiscussions) {
    var startP1 = {
      x: 0,
      y: 0,
    };
    if (this[_0x70ab[6]]) {
      this[_0x70ab[115]](
        this[_0x70ab[6]],
        startP1,
        this[_0x70ab[6]][_0x70ab[114]][_0x70ab[113]]
      );
    }
    return startP1;
  };
  passid[_0x70ab[115]] = function (data, result, component) {
    var name = data[_0x70ab[116]];
    result[_0x70ab[82]] += data[_0x70ab[117]] - (name ? name[_0x70ab[118]] : 0);
    result[_0x70ab[84]] += data[_0x70ab[119]] - (name ? name[_0x70ab[120]] : 0);
    if (name) {
      if (name[_0x70ab[121]] == 1) {
        var iisWorkerProcessMatch = component[_0x70ab[106]](name, _0x70ab[90]);
        if (iisWorkerProcessMatch[_0x70ab[122]] != _0x70ab[123]) {
          result[_0x70ab[82]] += parseInt(iisWorkerProcessMatch[_0x70ab[124]]);
          result[_0x70ab[84]] += parseInt(iisWorkerProcessMatch[_0x70ab[125]]);
          if (name[_0x70ab[126]] == _0x70ab[127]) {
            result[_0x70ab[82]] += parseInt(
              iisWorkerProcessMatch[_0x70ab[128]]
            );
            result[_0x70ab[84]] += parseInt(
              iisWorkerProcessMatch[_0x70ab[129]]
            );
          } else {
            if (name[_0x70ab[126]] == _0x70ab[130]) {
              var resumeJson = component[_0x70ab[106]](data, _0x70ab[90]);
              result[_0x70ab[82]] += parseInt(resumeJson[_0x70ab[131]]);
              result[_0x70ab[84]] += parseInt(resumeJson[_0x70ab[132]]);
            }
          }
        } else {
          if (name[_0x70ab[126]] == _0x70ab[130]) {
            result[_0x70ab[82]] += parseInt(
              iisWorkerProcessMatch[_0x70ab[124]]
            );
            result[_0x70ab[84]] += parseInt(
              iisWorkerProcessMatch[_0x70ab[125]]
            );
          }
        }
        var _ = data[_0x70ab[133]];
        for (; name != _; ) {
          result[_0x70ab[82]] -= _[_0x70ab[118]];
          result[_0x70ab[84]] -= _[_0x70ab[120]];
          _ = _[_0x70ab[133]];
        }
        this[_0x70ab[115]](name, result, component);
      }
    } else {
      if (data[_0x70ab[126]][_0x70ab[134]]() == _0x70ab[88]) {
        resumeJson = component[_0x70ab[106]](data, _0x70ab[90]);
        result[_0x70ab[82]] += parseInt(resumeJson[_0x70ab[124]]);
        result[_0x70ab[84]] += parseInt(resumeJson[_0x70ab[125]]);
        var sArrHiddenEventId = component[_0x70ab[106]](
          data[_0x70ab[133]],
          _0x70ab[90]
        );
        result[_0x70ab[82]] += parseInt(sArrHiddenEventId[_0x70ab[128]]);
        result[_0x70ab[84]] += parseInt(sArrHiddenEventId[_0x70ab[129]]);
        result[_0x70ab[82]] += parseInt(sArrHiddenEventId[_0x70ab[131]]);
        result[_0x70ab[84]] += parseInt(sArrHiddenEventId[_0x70ab[132]]);
      }
      if (data[_0x70ab[118]]) {
        result[_0x70ab[82]] += data[_0x70ab[118]];
      }
      if (data[_0x70ab[120]]) {
        result[_0x70ab[84]] += data[_0x70ab[120]];
      }
      var artistTrack = data[_0x70ab[114]][_0x70ab[113]];
      if (artistTrack && artistTrack[_0x70ab[135]]) {
        this[_0x70ab[115]](artistTrack[_0x70ab[135]], result, artistTrack);
      }
    }
  };
  passid[_0x70ab[29]] = function () {
    return false;
  };
  if (object[_0x70ab[136]] !== undefined) {
    $[_0x70ab[0]] = {};
    $[_0x70ab[0]][_0x70ab[137]] = [];
    $[_0x70ab[138]][name] = function (rest_pts_in) {
      return this[_0x70ab[141]](function () {
        if (!$[_0x70ab[140]](this, _0x70ab[139] + name)) {
          var new_region = new data(this, rest_pts_in);
          $[_0x70ab[140]](this, _0x70ab[139] + name, new_region);
          $[_0x70ab[0]][_0x70ab[137]][_0x70ab[16]](new_region);
        }
      });
    };
  }
  object[_0x70ab[142]] = data;
})(window);
window[_0x70ab[48]] = (function () {
  return (
    window[_0x70ab[143]] ||
    window[_0x70ab[144]] ||
    window[_0x70ab[145]] ||
    function (axsPath) {
      window[_0x70ab[146]](axsPath, 1000 / 60);
    }
  );
})();
if (!Function[_0x70ab[17]][_0x70ab[10]]) {
  Function[_0x70ab[17]][_0x70ab[10]] = function (value) {
    if (_typeof(this) !== _0x70ab[62]) {
      throw new TypeError(_0x70ab[147]);
    }
    var parent = Array[_0x70ab[17]][_0x70ab[149]][_0x70ab[148]](arguments, 1);
    var next = this;
    var CalEvent = function _0x98f7x2c() {};
    var sortCalEvents = function _0x98f7x2d() {
      return next[_0x70ab[151]](
        this instanceof CalEvent && value ? this : value,
        parent[_0x70ab[150]](
          Array[_0x70ab[17]][_0x70ab[149]][_0x70ab[148]](arguments)
        )
      );
    };
    CalEvent[_0x70ab[17]] = this[_0x70ab[17]];
    sortCalEvents[_0x70ab[17]] = new CalEvent();
    return sortCalEvents;
  };
}
