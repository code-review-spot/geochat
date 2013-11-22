/*!
 * jQuery JavaScript Library v1.7.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Wed Mar 21 12:46:34 2012 -0700
 */
(function(bd, L) {
  var av = bd.document,
    bu = bd.navigator,
    bm = bd.location;
  var b = (function() {
    var bF = function(b0, b1) {
      return new bF.fn.init(b0, b1, bD)
    }, bU = bd.jQuery,
      bH = bd.$,
      bD, bY = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
      bM = /\S/,
      bI = /^\s+/,
      bE = /\s+$/,
      bA = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
      bN = /^[\],:{}\s]*$/,
      bW = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
      bP = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
      bJ = /(?:^|:|,)(?:\s*\[)+/g,
      by = /(webkit)[ \/]([\w.]+)/,
      bR = /(opera)(?:.*version)?[ \/]([\w.]+)/,
      bQ = /(msie) ([\w.]+)/,
      bS = /(mozilla)(?:.*? rv:([\w.]+))?/,
      bB = /-([a-z]|[0-9])/ig,
      bZ = /^-ms-/,
      bT = function(b0, b1) {
        return (b1 + "")
          .toUpperCase()
      }, bX = bu.userAgent,
      bV, bC, e, bL = Object.prototype.toString,
      bG = Object.prototype.hasOwnProperty,
      bz = Array.prototype.push,
      bK = Array.prototype.slice,
      bO = String.prototype.trim,
      bv = Array.prototype.indexOf,
      bx = {};
    bF.fn = bF.prototype = {
      constructor: bF,
      init: function(b0, b4, b3) {
        var b2, b5, b1, b6;
        if (!b0) {
          return this
        }
        if (b0.nodeType) {
          this.context = this[0] = b0;
          this.length = 1;
          return this
        }
        if (b0 === "body" && !b4 && av.body) {
          this.context = av;
          this[0] = av.body;
          this.selector = b0;
          this.length = 1;
          return this
        }
        if (typeof b0 === "string") {
          if (b0.charAt(0) === "<" && b0.charAt(b0.length - 1) === ">" && b0.length >= 3) {
            b2 = [null, b0, null]
          } else {
            b2 = bY.exec(b0)
          } if (b2 && (b2[1] || !b4)) {
            if (b2[1]) {
              b4 = b4 instanceof bF ? b4[0] : b4;
              b6 = (b4 ? b4.ownerDocument || b4 : av);
              b1 = bA.exec(b0);
              if (b1) {
                if (bF.isPlainObject(b4)) {
                  b0 = [av.createElement(b1[1])];
                  bF.fn.attr.call(b0, b4, true)
                } else {
                  b0 = [b6.createElement(b1[1])]
                }
              } else {
                b1 = bF.buildFragment([b2[1]], [b6]);
                b0 = (b1.cacheable ? bF.clone(b1.fragment) : b1.fragment)
                  .childNodes
              }
              return bF.merge(this, b0)
            } else {
              b5 = av.getElementById(b2[2]);
              if (b5 && b5.parentNode) {
                if (b5.id !== b2[2]) {
                  return b3.find(b0)
                }
                this.length = 1;
                this[0] = b5
              }
              this.context = av;
              this.selector = b0;
              return this
            }
          } else {
            if (!b4 || b4.jquery) {
              return (b4 || b3)
                .find(b0)
            } else {
              return this.constructor(b4)
                .find(b0)
            }
          }
        } else {
          if (bF.isFunction(b0)) {
            return b3.ready(b0)
          }
        } if (b0.selector !== L) {
          this.selector = b0.selector;
          this.context = b0.context
        }
        return bF.makeArray(b0, this)
      },
      selector: "",
      jquery: "1.7.2",
      length: 0,
      size: function() {
        return this.length
      },
      toArray: function() {
        return bK.call(this, 0)
      },
      get: function(b0) {
        return b0 == null ? this.toArray() : (b0 < 0 ? this[this.length + b0] : this[b0])
      },
      pushStack: function(b1, b3, b0) {
        var b2 = this.constructor();
        if (bF.isArray(b1)) {
          bz.apply(b2, b1)
        } else {
          bF.merge(b2, b1)
        }
        b2.prevObject = this;
        b2.context = this.context;
        if (b3 === "find") {
          b2.selector = this.selector + (this.selector ? " " : "") + b0
        } else {
          if (b3) {
            b2.selector = this.selector + "." + b3 + "(" + b0 + ")"
          }
        }
        return b2
      },
      each: function(b1, b0) {
        return bF.each(this, b1, b0)
      },
      ready: function(b0) {
        bF.bindReady();
        bC.add(b0);
        return this
      },
      eq: function(b0) {
        b0 = +b0;
        return b0 === -1 ? this.slice(b0) : this.slice(b0, b0 + 1)
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      slice: function() {
        return this.pushStack(bK.apply(this, arguments), "slice", bK.call(arguments)
          .join(","))
      },
      map: function(b0) {
        return this.pushStack(bF.map(this, function(b2, b1) {
          return b0.call(b2, b1, b2)
        }))
      },
      end: function() {
        return this.prevObject || this.constructor(null)
      },
      push: bz,
      sort: [].sort,
      splice: [].splice
    };
    bF.fn.init.prototype = bF.fn;
    bF.extend = bF.fn.extend = function() {
      var b9, b2, b0, b1, b6, b7, b5 = arguments[0] || {}, b4 = 1,
        b3 = arguments.length,
        b8 = false;
      if (typeof b5 === "boolean") {
        b8 = b5;
        b5 = arguments[1] || {};
        b4 = 2
      }
      if (typeof b5 !== "object" && !bF.isFunction(b5)) {
        b5 = {}
      }
      if (b3 === b4) {
        b5 = this;
        --b4
      }
      for (; b4 < b3; b4++) {
        if ((b9 = arguments[b4]) != null) {
          for (b2 in b9) {
            b0 = b5[b2];
            b1 = b9[b2];
            if (b5 === b1) {
              continue
            }
            if (b8 && b1 && (bF.isPlainObject(b1) || (b6 = bF.isArray(b1)))) {
              if (b6) {
                b6 = false;
                b7 = b0 && bF.isArray(b0) ? b0 : []
              } else {
                b7 = b0 && bF.isPlainObject(b0) ? b0 : {}
              }
              b5[b2] = bF.extend(b8, b7, b1)
            } else {
              if (b1 !== L) {
                b5[b2] = b1
              }
            }
          }
        }
      }
      return b5
    };
    bF.extend({
      noConflict: function(b0) {
        if (bd.$ === bF) {
          bd.$ = bH
        }
        if (b0 && bd.jQuery === bF) {
          bd.jQuery = bU
        }
        return bF
      },
      isReady: false,
      readyWait: 1,
      holdReady: function(b0) {
        if (b0) {
          bF.readyWait++
        } else {
          bF.ready(true)
        }
      },
      ready: function(b0) {
        if ((b0 === true && !--bF.readyWait) || (b0 !== true && !bF.isReady)) {
          if (!av.body) {
            return setTimeout(bF.ready, 1)
          }
          bF.isReady = true;
          if (b0 !== true && --bF.readyWait > 0) {
            return
          }
          bC.fireWith(av, [bF]);
          if (bF.fn.trigger) {
            bF(av)
              .trigger("ready")
              .off("ready")
          }
        }
      },
      bindReady: function() {
        if (bC) {
          return
        }
        bC = bF.Callbacks("once memory");
        if (av.readyState === "complete") {
          return setTimeout(bF.ready, 1)
        }
        if (av.addEventListener) {
          av.addEventListener("DOMContentLoaded", e, false);
          bd.addEventListener("load", bF.ready, false)
        } else {
          if (av.attachEvent) {
            av.attachEvent("onreadystatechange", e);
            bd.attachEvent("onload", bF.ready);
            var b0 = false;
            try {
              b0 = bd.frameElement == null
            } catch (b1) {}
            if (av.documentElement.doScroll && b0) {
              bw()
            }
          }
        }
      },
      isFunction: function(b0) {
        return bF.type(b0) === "function"
      },
      isArray: Array.isArray || function(b0) {
        return bF.type(b0) === "array"
      },
      isWindow: function(b0) {
        return b0 != null && b0 == b0.window
      },
      isNumeric: function(b0) {
        return !isNaN(parseFloat(b0)) && isFinite(b0)
      },
      type: function(b0) {
        return b0 == null ? String(b0) : bx[bL.call(b0)] || "object"
      },
      isPlainObject: function(b2) {
        if (!b2 || bF.type(b2) !== "object" || b2.nodeType || bF.isWindow(b2)) {
          return false
        }
        try {
          if (b2.constructor && !bG.call(b2, "constructor") && !bG.call(b2.constructor.prototype, "isPrototypeOf")) {
            return false
          }
        } catch (b1) {
          return false
        }
        var b0;
        for (b0 in b2) {}
        return b0 === L || bG.call(b2, b0)
      },
      isEmptyObject: function(b1) {
        for (var b0 in b1) {
          return false
        }
        return true
      },
      error: function(b0) {
        throw new Error(b0)
      },
      parseJSON: function(b0) {
        if (typeof b0 !== "string" || !b0) {
          return null
        }
        b0 = bF.trim(b0);
        if (bd.JSON && bd.JSON.parse) {
          return bd.JSON.parse(b0)
        }
        if (bN.test(b0.replace(bW, "@")
          .replace(bP, "]")
          .replace(bJ, ""))) {
          return (new Function("return " + b0))()
        }
        bF.error("Invalid JSON: " + b0)
      },
      parseXML: function(b2) {
        if (typeof b2 !== "string" || !b2) {
          return null
        }
        var b0, b1;
        try {
          if (bd.DOMParser) {
            b1 = new DOMParser();
            b0 = b1.parseFromString(b2, "text/xml")
          } else {
            b0 = new ActiveXObject("Microsoft.XMLDOM");
            b0.async = "false";
            b0.loadXML(b2)
          }
        } catch (b3) {
          b0 = L
        }
        if (!b0 || !b0.documentElement || b0.getElementsByTagName("parsererror")
          .length) {
          bF.error("Invalid XML: " + b2)
        }
        return b0
      },
      noop: function() {},
      globalEval: function(b0) {
        if (b0 && bM.test(b0)) {
          (bd.execScript || function(b1) {
            bd["eval"].call(bd, b1)
          })(b0)
        }
      },
      camelCase: function(b0) {
        return b0.replace(bZ, "ms-")
          .replace(bB, bT)
      },
      nodeName: function(b1, b0) {
        return b1.nodeName && b1.nodeName.toUpperCase() === b0.toUpperCase()
      },
      each: function(b3, b6, b2) {
        var b1, b4 = 0,
          b5 = b3.length,
          b0 = b5 === L || bF.isFunction(b3);
        if (b2) {
          if (b0) {
            for (b1 in b3) {
              if (b6.apply(b3[b1], b2) === false) {
                break
              }
            }
          } else {
            for (; b4 < b5;) {
              if (b6.apply(b3[b4++], b2) === false) {
                break
              }
            }
          }
        } else {
          if (b0) {
            for (b1 in b3) {
              if (b6.call(b3[b1], b1, b3[b1]) === false) {
                break
              }
            }
          } else {
            for (; b4 < b5;) {
              if (b6.call(b3[b4], b4, b3[b4++]) === false) {
                break
              }
            }
          }
        }
        return b3
      },
      trim: bO ? function(b0) {
        return b0 == null ? "" : bO.call(b0)
      } : function(b0) {
        return b0 == null ? "" : b0.toString()
          .replace(bI, "")
          .replace(bE, "")
      },
      makeArray: function(b3, b1) {
        var b0 = b1 || [];
        if (b3 != null) {
          var b2 = bF.type(b3);
          if (b3.length == null || b2 === "string" || b2 === "function" || b2 === "regexp" || bF.isWindow(b3)) {
            bz.call(b0, b3)
          } else {
            bF.merge(b0, b3)
          }
        }
        return b0
      },
      inArray: function(b2, b3, b1) {
        var b0;
        if (b3) {
          if (bv) {
            return bv.call(b3, b2, b1)
          }
          b0 = b3.length;
          b1 = b1 ? b1 < 0 ? Math.max(0, b0 + b1) : b1 : 0;
          for (; b1 < b0; b1++) {
            if (b1 in b3 && b3[b1] === b2) {
              return b1
            }
          }
        }
        return -1
      },
      merge: function(b4, b2) {
        var b3 = b4.length,
          b1 = 0;
        if (typeof b2.length === "number") {
          for (var b0 = b2.length; b1 < b0; b1++) {
            b4[b3++] = b2[b1]
          }
        } else {
          while (b2[b1] !== L) {
            b4[b3++] = b2[b1++]
          }
        }
        b4.length = b3;
        return b4
      },
      grep: function(b1, b6, b0) {
        var b2 = [],
          b5;
        b0 = !! b0;
        for (var b3 = 0, b4 = b1.length; b3 < b4; b3++) {
          b5 = !! b6(b1[b3], b3);
          if (b0 !== b5) {
            b2.push(b1[b3])
          }
        }
        return b2
      },
      map: function(b0, b7, b8) {
        var b5, b6, b4 = [],
          b2 = 0,
          b1 = b0.length,
          b3 = b0 instanceof bF || b1 !== L && typeof b1 === "number" && ((b1 > 0 && b0[0] && b0[b1 - 1]) || b1 === 0 || bF.isArray(b0));
        if (b3) {
          for (; b2 < b1; b2++) {
            b5 = b7(b0[b2], b2, b8);
            if (b5 != null) {
              b4[b4.length] = b5
            }
          }
        } else {
          for (b6 in b0) {
            b5 = b7(b0[b6], b6, b8);
            if (b5 != null) {
              b4[b4.length] = b5
            }
          }
        }
        return b4.concat.apply([], b4)
      },
      guid: 1,
      proxy: function(b4, b3) {
        if (typeof b3 === "string") {
          var b2 = b4[b3];
          b3 = b4;
          b4 = b2
        }
        if (!bF.isFunction(b4)) {
          return L
        }
        var b0 = bK.call(arguments, 2),
          b1 = function() {
            return b4.apply(b3, b0.concat(bK.call(arguments)))
          };
        b1.guid = b4.guid = b4.guid || b1.guid || bF.guid++;
        return b1
      },
      access: function(b0, b6, b9, b7, b4, ca, b8) {
        var b2, b5 = b9 == null,
          b3 = 0,
          b1 = b0.length;
        if (b9 && typeof b9 === "object") {
          for (b3 in b9) {
            bF.access(b0, b6, b3, b9[b3], 1, ca, b7)
          }
          b4 = 1
        } else {
          if (b7 !== L) {
            b2 = b8 === L && bF.isFunction(b7);
            if (b5) {
              if (b2) {
                b2 = b6;
                b6 = function(cc, cb, cd) {
                  return b2.call(bF(cc), cd)
                }
              } else {
                b6.call(b0, b7);
                b6 = null
              }
            }
            if (b6) {
              for (; b3 < b1; b3++) {
                b6(b0[b3], b9, b2 ? b7.call(b0[b3], b3, b6(b0[b3], b9)) : b7, b8)
              }
            }
            b4 = 1
          }
        }
        return b4 ? b0 : b5 ? b6.call(b0) : b1 ? b6(b0[0], b9) : ca
      },
      now: function() {
        return (new Date())
          .getTime()
      },
      uaMatch: function(b1) {
        b1 = b1.toLowerCase();
        var b0 = by.exec(b1) || bR.exec(b1) || bQ.exec(b1) || b1.indexOf("compatible") < 0 && bS.exec(b1) || [];
        return {
          browser: b0[1] || "",
          version: b0[2] || "0"
        }
      },
      sub: function() {
        function b0(b3, b4) {
          return new b0.fn.init(b3, b4)
        }
        bF.extend(true, b0, this);
        b0.superclass = this;
        b0.fn = b0.prototype = this();
        b0.fn.constructor = b0;
        b0.sub = this.sub;
        b0.fn.init = function b2(b3, b4) {
          if (b4 && b4 instanceof bF && !(b4 instanceof b0)) {
            b4 = b0(b4)
          }
          return bF.fn.init.call(this, b3, b4, b1)
        };
        b0.fn.init.prototype = b0.fn;
        var b1 = b0(av);
        return b0
      },
      browser: {}
    });
    bF.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(b1, b0) {
      bx["[object " + b0 + "]"] = b0.toLowerCase()
    });
    bV = bF.uaMatch(bX);
    if (bV.browser) {
      bF.browser[bV.browser] = true;
      bF.browser.version = bV.version
    }
    if (bF.browser.webkit) {
      bF.browser.safari = true
    }
    if (bM.test("\xA0")) {
      bI = /^[\s\xA0]+/;
      bE = /[\s\xA0]+$/
    }
    bD = bF(av);
    if (av.addEventListener) {
      e = function() {
        av.removeEventListener("DOMContentLoaded", e, false);
        bF.ready()
      }
    } else {
      if (av.attachEvent) {
        e = function() {
          if (av.readyState === "complete") {
            av.detachEvent("onreadystatechange", e);
            bF.ready()
          }
        }
      }
    }

    function bw() {
      if (bF.isReady) {
        return
      }
      try {
        av.documentElement.doScroll("left")
      } catch (b0) {
        setTimeout(bw, 1);
        return
      }
      bF.ready()
    }
    return bF
  })();
  var a3 = {};

  function X(e) {
    var bv = a3[e] = {}, bw, bx;
    e = e.split(/\s+/);
    for (bw = 0, bx = e.length; bw < bx; bw++) {
      bv[e[bw]] = true
    }
    return bv
  }
  b.Callbacks = function(bx) {
    bx = bx ? (a3[bx] || X(bx)) : {};
    var bC = [],
      bD = [],
      by, e, bz, bw, bA, bB, bF = function(bG) {
        var bH, bK, bJ, bI, bL;
        for (bH = 0, bK = bG.length; bH < bK; bH++) {
          bJ = bG[bH];
          bI = b.type(bJ);
          if (bI === "array") {
            bF(bJ)
          } else {
            if (bI === "function") {
              if (!bx.unique || !bE.has(bJ)) {
                bC.push(bJ)
              }
            }
          }
        }
      }, bv = function(bH, bG) {
        bG = bG || [];
        by = !bx.memory || [bH, bG];
        e = true;
        bz = true;
        bB = bw || 0;
        bw = 0;
        bA = bC.length;
        for (; bC && bB < bA; bB++) {
          if (bC[bB].apply(bH, bG) === false && bx.stopOnFalse) {
            by = true;
            break
          }
        }
        bz = false;
        if (bC) {
          if (!bx.once) {
            if (bD && bD.length) {
              by = bD.shift();
              bE.fireWith(by[0], by[1])
            }
          } else {
            if (by === true) {
              bE.disable()
            } else {
              bC = []
            }
          }
        }
      }, bE = {
        add: function() {
          if (bC) {
            var bG = bC.length;
            bF(arguments);
            if (bz) {
              bA = bC.length
            } else {
              if (by && by !== true) {
                bw = bG;
                bv(by[0], by[1])
              }
            }
          }
          return this
        },
        remove: function() {
          if (bC) {
            var bG = arguments,
              bI = 0,
              bJ = bG.length;
            for (; bI < bJ; bI++) {
              for (var bH = 0; bH < bC.length; bH++) {
                if (bG[bI] === bC[bH]) {
                  if (bz) {
                    if (bH <= bA) {
                      bA--;
                      if (bH <= bB) {
                        bB--
                      }
                    }
                  }
                  bC.splice(bH--, 1);
                  if (bx.unique) {
                    break
                  }
                }
              }
            }
          }
          return this
        },
        has: function(bH) {
          if (bC) {
            var bG = 0,
              bI = bC.length;
            for (; bG < bI; bG++) {
              if (bH === bC[bG]) {
                return true
              }
            }
          }
          return false
        },
        empty: function() {
          bC = [];
          return this
        },
        disable: function() {
          bC = bD = by = L;
          return this
        },
        disabled: function() {
          return !bC
        },
        lock: function() {
          bD = L;
          if (!by || by === true) {
            bE.disable()
          }
          return this
        },
        locked: function() {
          return !bD
        },
        fireWith: function(bH, bG) {
          if (bD) {
            if (bz) {
              if (!bx.once) {
                bD.push([bH, bG])
              }
            } else {
              if (!(bx.once && by)) {
                bv(bH, bG)
              }
            }
          }
          return this
        },
        fire: function() {
          bE.fireWith(this, arguments);
          return this
        },
        fired: function() {
          return !!e
        }
      };
    return bE
  };
  var aK = [].slice;
  b.extend({
    Deferred: function(by) {
      var bx = b.Callbacks("once memory"),
        bw = b.Callbacks("once memory"),
        bv = b.Callbacks("memory"),
        e = "pending",
        bA = {
          resolve: bx,
          reject: bw,
          notify: bv
        }, bC = {
          done: bx.add,
          fail: bw.add,
          progress: bv.add,
          state: function() {
            return e
          },
          isResolved: bx.fired,
          isRejected: bw.fired,
          then: function(bE, bD, bF) {
            bB.done(bE)
              .fail(bD)
              .progress(bF);
            return this
          },
          always: function() {
            bB.done.apply(bB, arguments)
              .fail.apply(bB, arguments);
            return this
          },
          pipe: function(bF, bE, bD) {
            return b.Deferred(function(bG) {
              b.each({
                done: [bF, "resolve"],
                fail: [bE, "reject"],
                progress: [bD, "notify"]
              }, function(bI, bL) {
                var bH = bL[0],
                  bK = bL[1],
                  bJ;
                if (b.isFunction(bH)) {
                  bB[bI](function() {
                    bJ = bH.apply(this, arguments);
                    if (bJ && b.isFunction(bJ.promise)) {
                      bJ.promise()
                        .then(bG.resolve, bG.reject, bG.notify)
                    } else {
                      bG[bK + "With"](this === bB ? bG : this, [bJ])
                    }
                  })
                } else {
                  bB[bI](bG[bK])
                }
              })
            })
              .promise()
          },
          promise: function(bE) {
            if (bE == null) {
              bE = bC
            } else {
              for (var bD in bC) {
                bE[bD] = bC[bD]
              }
            }
            return bE
          }
        }, bB = bC.promise({}),
        bz;
      for (bz in bA) {
        bB[bz] = bA[bz].fire;
        bB[bz + "With"] = bA[bz].fireWith
      }
      bB.done(function() {
        e = "resolved"
      }, bw.disable, bv.lock)
        .fail(function() {
          e = "rejected"
        }, bx.disable, bv.lock);
      if (by) {
        by.call(bB, bB)
      }
      return bB
    },
    when: function(bA) {
      var bx = aK.call(arguments, 0),
        bv = 0,
        e = bx.length,
        bB = new Array(e),
        bw = e,
        by = e,
        bC = e <= 1 && bA && b.isFunction(bA.promise) ? bA : b.Deferred(),
        bE = bC.promise();

      function bD(bF) {
        return function(bG) {
          bx[bF] = arguments.length > 1 ? aK.call(arguments, 0) : bG;
          if (!(--bw)) {
            bC.resolveWith(bC, bx)
          }
        }
      }

      function bz(bF) {
        return function(bG) {
          bB[bF] = arguments.length > 1 ? aK.call(arguments, 0) : bG;
          bC.notifyWith(bE, bB)
        }
      }
      if (e > 1) {
        for (; bv < e; bv++) {
          if (bx[bv] && bx[bv].promise && b.isFunction(bx[bv].promise)) {
            bx[bv].promise()
              .then(bD(bv), bC.reject, bz(bv))
          } else {
            --bw
          }
        }
        if (!bw) {
          bC.resolveWith(bC, bx)
        }
      } else {
        if (bC !== bA) {
          bC.resolveWith(bC, e ? [bA] : [])
        }
      }
      return bE
    }
  });
  b.support = (function() {
    var bI, bH, bE, bF, bx, bD, bC, bz, bJ, bA, by, bw, bv = av.createElement("div"),
      bG = av.documentElement;
    bv.setAttribute("className", "t");
    bv.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
    bH = bv.getElementsByTagName("*");
    bE = bv.getElementsByTagName("a")[0];
    if (!bH || !bH.length || !bE) {
      return {}
    }
    bF = av.createElement("select");
    bx = bF.appendChild(av.createElement("option"));
    bD = bv.getElementsByTagName("input")[0];
    bI = {
      leadingWhitespace: (bv.firstChild.nodeType === 3),
      tbody: !bv.getElementsByTagName("tbody")
        .length,
      htmlSerialize: !! bv.getElementsByTagName("link")
        .length,
      style: /top/.test(bE.getAttribute("style")),
      hrefNormalized: (bE.getAttribute("href") === "/a"),
      opacity: /^0.55/.test(bE.style.opacity),
      cssFloat: !! bE.style.cssFloat,
      checkOn: (bD.value === "on"),
      optSelected: bx.selected,
      getSetAttribute: bv.className !== "t",
      enctype: !! av.createElement("form")
        .enctype,
      html5Clone: av.createElement("nav")
        .cloneNode(true)
        .outerHTML !== "<:nav></:nav>",
      submitBubbles: true,
      changeBubbles: true,
      focusinBubbles: false,
      deleteExpando: true,
      noCloneEvent: true,
      inlineBlockNeedsLayout: false,
      shrinkWrapBlocks: false,
      reliableMarginRight: true,
      pixelMargin: true
    };
    b.boxModel = bI.boxModel = (av.compatMode === "CSS1Compat");
    bD.checked = true;
    bI.noCloneChecked = bD.cloneNode(true)
      .checked;
    bF.disabled = true;
    bI.optDisabled = !bx.disabled;
    try {
      delete bv.test
    } catch (bB) {
      bI.deleteExpando = false
    }
    if (!bv.addEventListener && bv.attachEvent && bv.fireEvent) {
      bv.attachEvent("onclick", function() {
        bI.noCloneEvent = false
      });
      bv.cloneNode(true)
        .fireEvent("onclick")
    }
    bD = av.createElement("input");
    bD.value = "t";
    bD.setAttribute("type", "radio");
    bI.radioValue = bD.value === "t";
    bD.setAttribute("checked", "checked");
    bD.setAttribute("name", "t");
    bv.appendChild(bD);
    bC = av.createDocumentFragment();
    bC.appendChild(bv.lastChild);
    bI.checkClone = bC.cloneNode(true)
      .cloneNode(true)
      .lastChild.checked;
    bI.appendChecked = bD.checked;
    bC.removeChild(bD);
    bC.appendChild(bv);
    if (bv.attachEvent) {
      for (by in {
        submit: 1,
        change: 1,
        focusin: 1
      }) {
        bA = "on" + by;
        bw = (bA in bv);
        if (!bw) {
          bv.setAttribute(bA, "return;");
          bw = (typeof bv[bA] === "function")
        }
        bI[by + "Bubbles"] = bw
      }
    }
    bC.removeChild(bv);
    bC = bF = bx = bv = bD = null;
    b(function() {
      var bM, bV, bW, bU, bO, bP, bR, bL, bK, bQ, bN, e, bT, bS = av.getElementsByTagName("body")[0];
      if (!bS) {
        return
      }
      bL = 1;
      bT = "padding:0;margin:0;border:";
      bN = "position:absolute;top:0;left:0;width:1px;height:1px;";
      e = bT + "0;visibility:hidden;";
      bK = "style='" + bN + bT + "5px solid #000;";
      bQ = "<div " + bK + "display:block;'><div style='" + bT + "0;display:block;overflow:hidden;'></div></div><table " + bK + "' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
      bM = av.createElement("div");
      bM.style.cssText = e + "width:0;height:0;position:static;top:0;margin-top:" + bL + "px";
      bS.insertBefore(bM, bS.firstChild);
      bv = av.createElement("div");
      bM.appendChild(bv);
      bv.innerHTML = "<table><tr><td style='" + bT + "0;display:none'></td><td>t</td></tr></table>";
      bz = bv.getElementsByTagName("td");
      bw = (bz[0].offsetHeight === 0);
      bz[0].style.display = "";
      bz[1].style.display = "none";
      bI.reliableHiddenOffsets = bw && (bz[0].offsetHeight === 0);
      if (bd.getComputedStyle) {
        bv.innerHTML = "";
        bR = av.createElement("div");
        bR.style.width = "0";
        bR.style.marginRight = "0";
        bv.style.width = "2px";
        bv.appendChild(bR);
        bI.reliableMarginRight = (parseInt((bd.getComputedStyle(bR, null) || {
            marginRight: 0
          })
          .marginRight, 10) || 0) === 0
      }
      if (typeof bv.style.zoom !== "undefined") {
        bv.innerHTML = "";
        bv.style.width = bv.style.padding = "1px";
        bv.style.border = 0;
        bv.style.overflow = "hidden";
        bv.style.display = "inline";
        bv.style.zoom = 1;
        bI.inlineBlockNeedsLayout = (bv.offsetWidth === 3);
        bv.style.display = "block";
        bv.style.overflow = "visible";
        bv.innerHTML = "<div style='width:5px;'></div>";
        bI.shrinkWrapBlocks = (bv.offsetWidth !== 3)
      }
      bv.style.cssText = bN + e;
      bv.innerHTML = bQ;
      bV = bv.firstChild;
      bW = bV.firstChild;
      bO = bV.nextSibling.firstChild.firstChild;
      bP = {
        doesNotAddBorder: (bW.offsetTop !== 5),
        doesAddBorderForTableAndCells: (bO.offsetTop === 5)
      };
      bW.style.position = "fixed";
      bW.style.top = "20px";
      bP.fixedPosition = (bW.offsetTop === 20 || bW.offsetTop === 15);
      bW.style.position = bW.style.top = "";
      bV.style.overflow = "hidden";
      bV.style.position = "relative";
      bP.subtractsBorderForOverflowNotVisible = (bW.offsetTop === -5);
      bP.doesNotIncludeMarginInBodyOffset = (bS.offsetTop !== bL);
      if (bd.getComputedStyle) {
        bv.style.marginTop = "1%";
        bI.pixelMargin = (bd.getComputedStyle(bv, null) || {
          marginTop: 0
        })
          .marginTop !== "1%"
      }
      if (typeof bM.style.zoom !== "undefined") {
        bM.style.zoom = 1
      }
      bS.removeChild(bM);
      bR = bv = bM = null;
      b.extend(bI, bP)
    });
    return bI
  })();
  var aT = /^(?:\{.*\}|\[.*\])$/,
    aA = /([A-Z])/g;
  b.extend({
    cache: {},
    uuid: 0,
    expando: "jQuery" + (b.fn.jquery + Math.random())
      .replace(/\D/g, ""),
    noData: {
      embed: true,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: true
    },
    hasData: function(e) {
      e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando];
      return !!e && !S(e)
    },
    data: function(bx, bv, bz, by) {
      if (!b.acceptData(bx)) {
        return
      }
      var bG, bA, bD, bE = b.expando,
        bC = typeof bv === "string",
        bF = bx.nodeType,
        e = bF ? b.cache : bx,
        bw = bF ? bx[bE] : bx[bE] && bE,
        bB = bv === "events";
      if ((!bw || !e[bw] || (!bB && !by && !e[bw].data)) && bC && bz === L) {
        return
      }
      if (!bw) {
        if (bF) {
          bx[bE] = bw = ++b.uuid
        } else {
          bw = bE
        }
      }
      if (!e[bw]) {
        e[bw] = {};
        if (!bF) {
          e[bw].toJSON = b.noop
        }
      }
      if (typeof bv === "object" || typeof bv === "function") {
        if (by) {
          e[bw] = b.extend(e[bw], bv)
        } else {
          e[bw].data = b.extend(e[bw].data, bv)
        }
      }
      bG = bA = e[bw];
      if (!by) {
        if (!bA.data) {
          bA.data = {}
        }
        bA = bA.data
      }
      if (bz !== L) {
        bA[b.camelCase(bv)] = bz
      }
      if (bB && !bA[bv]) {
        return bG.events
      }
      if (bC) {
        bD = bA[bv];
        if (bD == null) {
          bD = bA[b.camelCase(bv)]
        }
      } else {
        bD = bA
      }
      return bD
    },
    removeData: function(bx, bv, by) {
      if (!b.acceptData(bx)) {
        return
      }
      var bB, bA, bz, bC = b.expando,
        bD = bx.nodeType,
        e = bD ? b.cache : bx,
        bw = bD ? bx[bC] : bC;
      if (!e[bw]) {
        return
      }
      if (bv) {
        bB = by ? e[bw] : e[bw].data;
        if (bB) {
          if (!b.isArray(bv)) {
            if (bv in bB) {
              bv = [bv]
            } else {
              bv = b.camelCase(bv);
              if (bv in bB) {
                bv = [bv]
              } else {
                bv = bv.split(" ")
              }
            }
          }
          for (bA = 0, bz = bv.length; bA < bz; bA++) {
            delete bB[bv[bA]]
          }
          if (!(by ? S : b.isEmptyObject)(bB)) {
            return
          }
        }
      }
      if (!by) {
        delete e[bw].data;
        if (!S(e[bw])) {
          return
        }
      }
      if (b.support.deleteExpando || !e.setInterval) {
        delete e[bw]
      } else {
        e[bw] = null
      } if (bD) {
        if (b.support.deleteExpando) {
          delete bx[bC]
        } else {
          if (bx.removeAttribute) {
            bx.removeAttribute(bC)
          } else {
            bx[bC] = null
          }
        }
      }
    },
    _data: function(bv, e, bw) {
      return b.data(bv, e, bw, true)
    },
    acceptData: function(bv) {
      if (bv.nodeName) {
        var e = b.noData[bv.nodeName.toLowerCase()];
        if (e) {
          return !(e === true || bv.getAttribute("classid") !== e)
        }
      }
      return true
    }
  });
  b.fn.extend({
    data: function(bD, bC) {
      var by, bv, bB, e, bx, bw = this[0],
        bA = 0,
        bz = null;
      if (bD === L) {
        if (this.length) {
          bz = b.data(bw);
          if (bw.nodeType === 1 && !b._data(bw, "parsedAttrs")) {
            bB = bw.attributes;
            for (bx = bB.length; bA < bx; bA++) {
              e = bB[bA].name;
              if (e.indexOf("data-") === 0) {
                e = b.camelCase(e.substring(5));
                a6(bw, e, bz[e])
              }
            }
            b._data(bw, "parsedAttrs", true)
          }
        }
        return bz
      }
      if (typeof bD === "object") {
        return this.each(function() {
          b.data(this, bD)
        })
      }
      by = bD.split(".", 2);
      by[1] = by[1] ? "." + by[1] : "";
      bv = by[1] + "!";
      return b.access(this, function(bE) {
        if (bE === L) {
          bz = this.triggerHandler("getData" + bv, [by[0]]);
          if (bz === L && bw) {
            bz = b.data(bw, bD);
            bz = a6(bw, bD, bz)
          }
          return bz === L && by[1] ? this.data(by[0]) : bz
        }
        by[1] = bE;
        this.each(function() {
          var bF = b(this);
          bF.triggerHandler("setData" + bv, by);
          b.data(this, bD, bE);
          bF.triggerHandler("changeData" + bv, by)
        })
      }, null, bC, arguments.length > 1, null, false)
    },
    removeData: function(e) {
      return this.each(function() {
        b.removeData(this, e)
      })
    }
  });

  function a6(bx, bw, by) {
    if (by === L && bx.nodeType === 1) {
      var bv = "data-" + bw.replace(aA, "-$1")
        .toLowerCase();
      by = bx.getAttribute(bv);
      if (typeof by === "string") {
        try {
          by = by === "true" ? true : by === "false" ? false : by === "null" ? null : b.isNumeric(by) ? +by : aT.test(by) ? b.parseJSON(by) : by
        } catch (bz) {}
        b.data(bx, bw, by)
      } else {
        by = L
      }
    }
    return by
  }

  function S(bv) {
    for (var e in bv) {
      if (e === "data" && b.isEmptyObject(bv[e])) {
        continue
      }
      if (e !== "toJSON") {
        return false
      }
    }
    return true
  }

  function bj(by, bx, bA) {
    var bw = bx + "defer",
      bv = bx + "queue",
      e = bx + "mark",
      bz = b._data(by, bw);
    if (bz && (bA === "queue" || !b._data(by, bv)) && (bA === "mark" || !b._data(by, e))) {
      setTimeout(function() {
        if (!b._data(by, bv) && !b._data(by, e)) {
          b.removeData(by, bw, true);
          bz.fire()
        }
      }, 0)
    }
  }
  b.extend({
    _mark: function(bv, e) {
      if (bv) {
        e = (e || "fx") + "mark";
        b._data(bv, e, (b._data(bv, e) || 0) + 1)
      }
    },
    _unmark: function(by, bx, bv) {
      if (by !== true) {
        bv = bx;
        bx = by;
        by = false
      }
      if (bx) {
        bv = bv || "fx";
        var e = bv + "mark",
          bw = by ? 0 : ((b._data(bx, e) || 1) - 1);
        if (bw) {
          b._data(bx, e, bw)
        } else {
          b.removeData(bx, e, true);
          bj(bx, bv, "mark")
        }
      }
    },
    queue: function(bv, e, bx) {
      var bw;
      if (bv) {
        e = (e || "fx") + "queue";
        bw = b._data(bv, e);
        if (bx) {
          if (!bw || b.isArray(bx)) {
            bw = b._data(bv, e, b.makeArray(bx))
          } else {
            bw.push(bx)
          }
        }
        return bw || []
      }
    },
    dequeue: function(by, bx) {
      bx = bx || "fx";
      var bv = b.queue(by, bx),
        bw = bv.shift(),
        e = {};
      if (bw === "inprogress") {
        bw = bv.shift()
      }
      if (bw) {
        if (bx === "fx") {
          bv.unshift("inprogress")
        }
        b._data(by, bx + ".run", e);
        bw.call(by, function() {
          b.dequeue(by, bx)
        }, e)
      }
      if (!bv.length) {
        b.removeData(by, bx + "queue " + bx + ".run", true);
        bj(by, bx, "queue")
      }
    }
  });
  b.fn.extend({
    queue: function(e, bv) {
      var bw = 2;
      if (typeof e !== "string") {
        bv = e;
        e = "fx";
        bw--
      }
      if (arguments.length < bw) {
        return b.queue(this[0], e)
      }
      return bv === L ? this : this.each(function() {
        var bx = b.queue(this, e, bv);
        if (e === "fx" && bx[0] !== "inprogress") {
          b.dequeue(this, e)
        }
      })
    },
    dequeue: function(e) {
      return this.each(function() {
        b.dequeue(this, e)
      })
    },
    delay: function(bv, e) {
      bv = b.fx ? b.fx.speeds[bv] || bv : bv;
      e = e || "fx";
      return this.queue(e, function(bx, bw) {
        var by = setTimeout(bx, bv);
        bw.stop = function() {
          clearTimeout(by)
        }
      })
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", [])
    },
    promise: function(bD, bw) {
      if (typeof bD !== "string") {
        bw = bD;
        bD = L
      }
      bD = bD || "fx";
      var e = b.Deferred(),
        bv = this,
        by = bv.length,
        bB = 1,
        bz = bD + "defer",
        bA = bD + "queue",
        bC = bD + "mark",
        bx;

      function bE() {
        if (!(--bB)) {
          e.resolveWith(bv, [bv])
        }
      }
      while (by--) {
        if ((bx = b.data(bv[by], bz, L, true) || (b.data(bv[by], bA, L, true) || b.data(bv[by], bC, L, true)) && b.data(bv[by], bz, b.Callbacks("once memory"), true))) {
          bB++;
          bx.add(bE)
        }
      }
      bE();
      return e.promise(bw)
    }
  });
  var aQ = /[\n\t\r]/g,
    ag = /\s+/,
    aV = /\r/g,
    g = /^(?:button|input)$/i,
    C = /^(?:button|input|object|select|textarea)$/i,
    l = /^a(?:rea)?$/i,
    ao = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    E = b.support.getSetAttribute,
    bf, aZ, aG;
  b.fn.extend({
    attr: function(e, bv) {
      return b.access(this, b.attr, e, bv, arguments.length > 1)
    },
    removeAttr: function(e) {
      return this.each(function() {
        b.removeAttr(this, e)
      })
    },
    prop: function(e, bv) {
      return b.access(this, b.prop, e, bv, arguments.length > 1)
    },
    removeProp: function(e) {
      e = b.propFix[e] || e;
      return this.each(function() {
        try {
          this[e] = L;
          delete this[e]
        } catch (bv) {}
      })
    },
    addClass: function(by) {
      var bA, bw, bv, bx, bz, bB, e;
      if (b.isFunction(by)) {
        return this.each(function(bC) {
          b(this)
            .addClass(by.call(this, bC, this.className))
        })
      }
      if (by && typeof by === "string") {
        bA = by.split(ag);
        for (bw = 0, bv = this.length; bw < bv; bw++) {
          bx = this[bw];
          if (bx.nodeType === 1) {
            if (!bx.className && bA.length === 1) {
              bx.className = by
            } else {
              bz = " " + bx.className + " ";
              for (bB = 0, e = bA.length; bB < e; bB++) {
                if (!~bz.indexOf(" " + bA[bB] + " ")) {
                  bz += bA[bB] + " "
                }
              }
              bx.className = b.trim(bz)
            }
          }
        }
      }
      return this
    },
    removeClass: function(bz) {
      var bA, bw, bv, by, bx, bB, e;
      if (b.isFunction(bz)) {
        return this.each(function(bC) {
          b(this)
            .removeClass(bz.call(this, bC, this.className))
        })
      }
      if ((bz && typeof bz === "string") || bz === L) {
        bA = (bz || "")
          .split(ag);
        for (bw = 0, bv = this.length; bw < bv; bw++) {
          by = this[bw];
          if (by.nodeType === 1 && by.className) {
            if (bz) {
              bx = (" " + by.className + " ")
                .replace(aQ, " ");
              for (bB = 0, e = bA.length; bB < e; bB++) {
                bx = bx.replace(" " + bA[bB] + " ", " ")
              }
              by.className = b.trim(bx)
            } else {
              by.className = ""
            }
          }
        }
      }
      return this
    },
    toggleClass: function(bx, bv) {
      var bw = typeof bx,
        e = typeof bv === "boolean";
      if (b.isFunction(bx)) {
        return this.each(function(by) {
          b(this)
            .toggleClass(bx.call(this, by, this.className, bv), bv)
        })
      }
      return this.each(function() {
        if (bw === "string") {
          var bA, bz = 0,
            by = b(this),
            bB = bv,
            bC = bx.split(ag);
          while ((bA = bC[bz++])) {
            bB = e ? bB : !by.hasClass(bA);
            by[bB ? "addClass" : "removeClass"](bA)
          }
        } else {
          if (bw === "undefined" || bw === "boolean") {
            if (this.className) {
              b._data(this, "__className__", this.className)
            }
            this.className = this.className || bx === false ? "" : b._data(this, "__className__") || ""
          }
        }
      })
    },
    hasClass: function(e) {
      var bx = " " + e + " ",
        bw = 0,
        bv = this.length;
      for (; bw < bv; bw++) {
        if (this[bw].nodeType === 1 && (" " + this[bw].className + " ")
          .replace(aQ, " ")
          .indexOf(bx) > -1) {
          return true
        }
      }
      return false
    },
    val: function(bx) {
      var e, bv, by, bw = this[0];
      if (!arguments.length) {
        if (bw) {
          e = b.valHooks[bw.type] || b.valHooks[bw.nodeName.toLowerCase()];
          if (e && "get" in e && (bv = e.get(bw, "value")) !== L) {
            return bv
          }
          bv = bw.value;
          return typeof bv === "string" ? bv.replace(aV, "") : bv == null ? "" : bv
        }
        return
      }
      by = b.isFunction(bx);
      return this.each(function(bA) {
        var bz = b(this),
          bB;
        if (this.nodeType !== 1) {
          return
        }
        if (by) {
          bB = bx.call(this, bA, bz.val())
        } else {
          bB = bx
        } if (bB == null) {
          bB = ""
        } else {
          if (typeof bB === "number") {
            bB += ""
          } else {
            if (b.isArray(bB)) {
              bB = b.map(bB, function(bC) {
                return bC == null ? "" : bC + ""
              })
            }
          }
        }
        e = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()];
        if (!e || !("set" in e) || e.set(this, bB, "value") === L) {
          this.value = bB
        }
      })
    }
  });
  b.extend({
    valHooks: {
      option: {
        get: function(e) {
          var bv = e.attributes.value;
          return !bv || bv.specified ? e.value : e.text
        }
      },
      select: {
        get: function(e) {
          var bA, bv, bz, bx, by = e.selectedIndex,
            bB = [],
            bC = e.options,
            bw = e.type === "select-one";
          if (by < 0) {
            return null
          }
          bv = bw ? by : 0;
          bz = bw ? by + 1 : bC.length;
          for (; bv < bz; bv++) {
            bx = bC[bv];
            if (bx.selected && (b.support.optDisabled ? !bx.disabled : bx.getAttribute("disabled") === null) && (!bx.parentNode.disabled || !b.nodeName(bx.parentNode, "optgroup"))) {
              bA = b(bx)
                .val();
              if (bw) {
                return bA
              }
              bB.push(bA)
            }
          }
          if (bw && !bB.length && bC.length) {
            return b(bC[by])
              .val()
          }
          return bB
        },
        set: function(bv, bw) {
          var e = b.makeArray(bw);
          b(bv)
            .find("option")
            .each(function() {
              this.selected = b.inArray(b(this)
                .val(), e) >= 0
            });
          if (!e.length) {
            bv.selectedIndex = -1
          }
          return e
        }
      }
    },
    attrFn: {
      val: true,
      css: true,
      html: true,
      text: true,
      data: true,
      width: true,
      height: true,
      offset: true
    },
    attr: function(bA, bx, bB, bz) {
      var bw, e, by, bv = bA.nodeType;
      if (!bA || bv === 3 || bv === 8 || bv === 2) {
        return
      }
      if (bz && bx in b.attrFn) {
        return b(bA)[bx](bB)
      }
      if (typeof bA.getAttribute === "undefined") {
        return b.prop(bA, bx, bB)
      }
      by = bv !== 1 || !b.isXMLDoc(bA);
      if (by) {
        bx = bx.toLowerCase();
        e = b.attrHooks[bx] || (ao.test(bx) ? aZ : bf)
      }
      if (bB !== L) {
        if (bB === null) {
          b.removeAttr(bA, bx);
          return
        } else {
          if (e && "set" in e && by && (bw = e.set(bA, bB, bx)) !== L) {
            return bw
          } else {
            bA.setAttribute(bx, "" + bB);
            return bB
          }
        }
      } else {
        if (e && "get" in e && by && (bw = e.get(bA, bx)) !== null) {
          return bw
        } else {
          bw = bA.getAttribute(bx);
          return bw === null ? L : bw
        }
      }
    },
    removeAttr: function(by, bA) {
      var bz, bB, bw, e, bv, bx = 0;
      if (bA && by.nodeType === 1) {
        bB = bA.toLowerCase()
          .split(ag);
        e = bB.length;
        for (; bx < e; bx++) {
          bw = bB[bx];
          if (bw) {
            bz = b.propFix[bw] || bw;
            bv = ao.test(bw);
            if (!bv) {
              b.attr(by, bw, "")
            }
            by.removeAttribute(E ? bw : bz);
            if (bv && bz in by) {
              by[bz] = false
            }
          }
        }
      }
    },
    attrHooks: {
      type: {
        set: function(e, bv) {
          if (g.test(e.nodeName) && e.parentNode) {
            b.error("type property can't be changed")
          } else {
            if (!b.support.radioValue && bv === "radio" && b.nodeName(e, "input")) {
              var bw = e.value;
              e.setAttribute("type", bv);
              if (bw) {
                e.value = bw
              }
              return bv
            }
          }
        }
      },
      value: {
        get: function(bv, e) {
          if (bf && b.nodeName(bv, "button")) {
            return bf.get(bv, e)
          }
          return e in bv ? bv.value : null
        },
        set: function(bv, bw, e) {
          if (bf && b.nodeName(bv, "button")) {
            return bf.set(bv, bw, e)
          }
          bv.value = bw
        }
      }
    },
    propFix: {
      tabindex: "tabIndex",
      readonly: "readOnly",
      "for": "htmlFor",
      "class": "className",
      maxlength: "maxLength",
      cellspacing: "cellSpacing",
      cellpadding: "cellPadding",
      rowspan: "rowSpan",
      colspan: "colSpan",
      usemap: "useMap",
      frameborder: "frameBorder",
      contenteditable: "contentEditable"
    },
    prop: function(bz, bx, bA) {
      var bw, e, by, bv = bz.nodeType;
      if (!bz || bv === 3 || bv === 8 || bv === 2) {
        return
      }
      by = bv !== 1 || !b.isXMLDoc(bz);
      if (by) {
        bx = b.propFix[bx] || bx;
        e = b.propHooks[bx]
      }
      if (bA !== L) {
        if (e && "set" in e && (bw = e.set(bz, bA, bx)) !== L) {
          return bw
        } else {
          return (bz[bx] = bA)
        }
      } else {
        if (e && "get" in e && (bw = e.get(bz, bx)) !== null) {
          return bw
        } else {
          return bz[bx]
        }
      }
    },
    propHooks: {
      tabIndex: {
        get: function(bv) {
          var e = bv.getAttributeNode("tabindex");
          return e && e.specified ? parseInt(e.value, 10) : C.test(bv.nodeName) || l.test(bv.nodeName) && bv.href ? 0 : L
        }
      }
    }
  });
  b.attrHooks.tabindex = b.propHooks.tabIndex;
  aZ = {
    get: function(bv, e) {
      var bx, bw = b.prop(bv, e);
      return bw === true || typeof bw !== "boolean" && (bx = bv.getAttributeNode(e)) && bx.nodeValue !== false ? e.toLowerCase() : L
    },
    set: function(bv, bx, e) {
      var bw;
      if (bx === false) {
        b.removeAttr(bv, e)
      } else {
        bw = b.propFix[e] || e;
        if (bw in bv) {
          bv[bw] = true
        }
        bv.setAttribute(e, e.toLowerCase())
      }
      return e
    }
  };
  if (!E) {
    aG = {
      name: true,
      id: true,
      coords: true
    };
    bf = b.valHooks.button = {
      get: function(bw, bv) {
        var e;
        e = bw.getAttributeNode(bv);
        return e && (aG[bv] ? e.nodeValue !== "" : e.specified) ? e.nodeValue : L
      },
      set: function(bw, bx, bv) {
        var e = bw.getAttributeNode(bv);
        if (!e) {
          e = av.createAttribute(bv);
          bw.setAttributeNode(e)
        }
        return (e.nodeValue = bx + "")
      }
    };
    b.attrHooks.tabindex.set = bf.set;
    b.each(["width", "height"], function(bv, e) {
      b.attrHooks[e] = b.extend(b.attrHooks[e], {
        set: function(bw, bx) {
          if (bx === "") {
            bw.setAttribute(e, "auto");
            return bx
          }
        }
      })
    });
    b.attrHooks.contenteditable = {
      get: bf.get,
      set: function(bv, bw, e) {
        if (bw === "") {
          bw = "false"
        }
        bf.set(bv, bw, e)
      }
    }
  }
  if (!b.support.hrefNormalized) {
    b.each(["href", "src", "width", "height"], function(bv, e) {
      b.attrHooks[e] = b.extend(b.attrHooks[e], {
        get: function(bx) {
          var bw = bx.getAttribute(e, 2);
          return bw === null ? L : bw
        }
      })
    })
  }
  if (!b.support.style) {
    b.attrHooks.style = {
      get: function(e) {
        return e.style.cssText.toLowerCase() || L
      },
      set: function(e, bv) {
        return (e.style.cssText = "" + bv)
      }
    }
  }
  if (!b.support.optSelected) {
    b.propHooks.selected = b.extend(b.propHooks.selected, {
      get: function(bv) {
        var e = bv.parentNode;
        if (e) {
          e.selectedIndex;
          if (e.parentNode) {
            e.parentNode.selectedIndex
          }
        }
        return null
      }
    })
  }
  if (!b.support.enctype) {
    b.propFix.enctype = "encoding"
  }
  if (!b.support.checkOn) {
    b.each(["radio", "checkbox"], function() {
      b.valHooks[this] = {
        get: function(e) {
          return e.getAttribute("value") === null ? "on" : e.value
        }
      }
    })
  }
  b.each(["radio", "checkbox"], function() {
    b.valHooks[this] = b.extend(b.valHooks[this], {
      set: function(e, bv) {
        if (b.isArray(bv)) {
          return (e.checked = b.inArray(b(e)
            .val(), bv) >= 0)
        }
      }
    })
  });
  var be = /^(?:textarea|input|select)$/i,
    n = /^([^\.]*)?(?:\.(.+))?$/,
    J = /(?:^|\s)hover(\.\S+)?\b/,
    aP = /^key/,
    bg = /^(?:mouse|contextmenu)|click/,
    T = /^(?:focusinfocus|focusoutblur)$/,
    U = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
    Y = function(e) {
      var bv = U.exec(e);
      if (bv) {
        bv[1] = (bv[1] || "")
          .toLowerCase();
        bv[3] = bv[3] && new RegExp("(?:^|\\s)" + bv[3] + "(?:\\s|$)")
      }
      return bv
    }, j = function(bw, e) {
      var bv = bw.attributes || {};
      return ((!e[1] || bw.nodeName.toLowerCase() === e[1]) && (!e[2] || (bv.id || {})
        .value === e[2]) && (!e[3] || e[3].test((bv["class"] || {})
        .value)))
    }, bt = function(e) {
      return b.event.special.hover ? e : e.replace(J, "mouseenter$1 mouseleave$1")
    };
  b.event = {
    add: function(bx, bC, bJ, bA, by) {
      var bD, bB, bK, bI, bH, bF, e, bG, bv, bz, bw, bE;
      if (bx.nodeType === 3 || bx.nodeType === 8 || !bC || !bJ || !(bD = b._data(bx))) {
        return
      }
      if (bJ.handler) {
        bv = bJ;
        bJ = bv.handler;
        by = bv.selector
      }
      if (!bJ.guid) {
        bJ.guid = b.guid++
      }
      bK = bD.events;
      if (!bK) {
        bD.events = bK = {}
      }
      bB = bD.handle;
      if (!bB) {
        bD.handle = bB = function(bL) {
          return typeof b !== "undefined" && (!bL || b.event.triggered !== bL.type) ? b.event.dispatch.apply(bB.elem, arguments) : L
        };
        bB.elem = bx
      }
      bC = b.trim(bt(bC))
        .split(" ");
      for (bI = 0; bI < bC.length; bI++) {
        bH = n.exec(bC[bI]) || [];
        bF = bH[1];
        e = (bH[2] || "")
          .split(".")
          .sort();
        bE = b.event.special[bF] || {};
        bF = (by ? bE.delegateType : bE.bindType) || bF;
        bE = b.event.special[bF] || {};
        bG = b.extend({
          type: bF,
          origType: bH[1],
          data: bA,
          handler: bJ,
          guid: bJ.guid,
          selector: by,
          quick: by && Y(by),
          namespace: e.join(".")
        }, bv);
        bw = bK[bF];
        if (!bw) {
          bw = bK[bF] = [];
          bw.delegateCount = 0;
          if (!bE.setup || bE.setup.call(bx, bA, e, bB) === false) {
            if (bx.addEventListener) {
              bx.addEventListener(bF, bB, false)
            } else {
              if (bx.attachEvent) {
                bx.attachEvent("on" + bF, bB)
              }
            }
          }
        }
        if (bE.add) {
          bE.add.call(bx, bG);
          if (!bG.handler.guid) {
            bG.handler.guid = bJ.guid
          }
        }
        if (by) {
          bw.splice(bw.delegateCount++, 0, bG)
        } else {
          bw.push(bG)
        }
        b.event.global[bF] = true
      }
      bx = null
    },
    global: {},
    remove: function(bJ, bE, bv, bH, bB) {
      var bI = b.hasData(bJ) && b._data(bJ),
        bF, bx, bz, bL, bC, bA, bG, bw, by, bK, bD, e;
      if (!bI || !(bw = bI.events)) {
        return
      }
      bE = b.trim(bt(bE || ""))
        .split(" ");
      for (bF = 0; bF < bE.length; bF++) {
        bx = n.exec(bE[bF]) || [];
        bz = bL = bx[1];
        bC = bx[2];
        if (!bz) {
          for (bz in bw) {
            b.event.remove(bJ, bz + bE[bF], bv, bH, true)
          }
          continue
        }
        by = b.event.special[bz] || {};
        bz = (bH ? by.delegateType : by.bindType) || bz;
        bD = bw[bz] || [];
        bA = bD.length;
        bC = bC ? new RegExp("(^|\\.)" + bC.split(".")
          .sort()
          .join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
        for (bG = 0; bG < bD.length; bG++) {
          e = bD[bG];
          if ((bB || bL === e.origType) && (!bv || bv.guid === e.guid) && (!bC || bC.test(e.namespace)) && (!bH || bH === e.selector || bH === "**" && e.selector)) {
            bD.splice(bG--, 1);
            if (e.selector) {
              bD.delegateCount--
            }
            if (by.remove) {
              by.remove.call(bJ, e)
            }
          }
        }
        if (bD.length === 0 && bA !== bD.length) {
          if (!by.teardown || by.teardown.call(bJ, bC) === false) {
            b.removeEvent(bJ, bz, bI.handle)
          }
          delete bw[bz]
        }
      }
      if (b.isEmptyObject(bw)) {
        bK = bI.handle;
        if (bK) {
          bK.elem = null
        }
        b.removeData(bJ, ["events", "handle"], true)
      }
    },
    customEvent: {
      getData: true,
      setData: true,
      changeData: true
    },
    trigger: function(bv, bD, bA, bJ) {
      if (bA && (bA.nodeType === 3 || bA.nodeType === 8)) {
        return
      }
      var bG = bv.type || bv,
        bx = [],
        e, bw, bC, bH, bz, by, bF, bE, bB, bI;
      if (T.test(bG + b.event.triggered)) {
        return
      }
      if (bG.indexOf("!") >= 0) {
        bG = bG.slice(0, -1);
        bw = true
      }
      if (bG.indexOf(".") >= 0) {
        bx = bG.split(".");
        bG = bx.shift();
        bx.sort()
      }
      if ((!bA || b.event.customEvent[bG]) && !b.event.global[bG]) {
        return
      }
      bv = typeof bv === "object" ? bv[b.expando] ? bv : new b.Event(bG, bv) : new b.Event(bG);
      bv.type = bG;
      bv.isTrigger = true;
      bv.exclusive = bw;
      bv.namespace = bx.join(".");
      bv.namespace_re = bv.namespace ? new RegExp("(^|\\.)" + bx.join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
      by = bG.indexOf(":") < 0 ? "on" + bG : "";
      if (!bA) {
        e = b.cache;
        for (bC in e) {
          if (e[bC].events && e[bC].events[bG]) {
            b.event.trigger(bv, bD, e[bC].handle.elem, true)
          }
        }
        return
      }
      bv.result = L;
      if (!bv.target) {
        bv.target = bA
      }
      bD = bD != null ? b.makeArray(bD) : [];
      bD.unshift(bv);
      bF = b.event.special[bG] || {};
      if (bF.trigger && bF.trigger.apply(bA, bD) === false) {
        return
      }
      bB = [[bA, bF.bindType || bG]];
      if (!bJ && !bF.noBubble && !b.isWindow(bA)) {
        bI = bF.delegateType || bG;
        bH = T.test(bI + bG) ? bA : bA.parentNode;
        bz = null;
        for (; bH; bH = bH.parentNode) {
          bB.push([bH, bI]);
          bz = bH
        }
        if (bz && bz === bA.ownerDocument) {
          bB.push([bz.defaultView || bz.parentWindow || bd, bI])
        }
      }
      for (bC = 0; bC < bB.length && !bv.isPropagationStopped(); bC++) {
        bH = bB[bC][0];
        bv.type = bB[bC][1];
        bE = (b._data(bH, "events") || {})[bv.type] && b._data(bH, "handle");
        if (bE) {
          bE.apply(bH, bD)
        }
        bE = by && bH[by];
        if (bE && b.acceptData(bH) && bE.apply(bH, bD) === false) {
          bv.preventDefault()
        }
      }
      bv.type = bG;
      if (!bJ && !bv.isDefaultPrevented()) {
        if ((!bF._default || bF._default.apply(bA.ownerDocument, bD) === false) && !(bG === "click" && b.nodeName(bA, "a")) && b.acceptData(bA)) {
          if (by && bA[bG] && ((bG !== "focus" && bG !== "blur") || bv.target.offsetWidth !== 0) && !b.isWindow(bA)) {
            bz = bA[by];
            if (bz) {
              bA[by] = null
            }
            b.event.triggered = bG;
            bA[bG]();
            b.event.triggered = L;
            if (bz) {
              bA[by] = bz
            }
          }
        }
      }
      return bv.result
    },
    dispatch: function(bH) {
      bH = b.event.fix(bH || bd.event);
      var bD = ((b._data(this, "events") || {})[bH.type] || []),
        bC = bD.delegateCount,
        bx = [].slice.call(arguments, 0),
        bE = !bH.exclusive && !bH.namespace,
        bz = b.event.special[bH.type] || {}, bv = [],
        bJ, bG, by, bA, bK, bI, bB, bw, e, bF, bL;
      bx[0] = bH;
      bH.delegateTarget = this;
      if (bz.preDispatch && bz.preDispatch.call(this, bH) === false) {
        return
      }
      if (bC && !(bH.button && bH.type === "click")) {
        bA = b(this);
        bA.context = this.ownerDocument || this;
        for (by = bH.target; by != this; by = by.parentNode || this) {
          if (by.disabled !== true) {
            bI = {};
            bw = [];
            bA[0] = by;
            for (bJ = 0; bJ < bC; bJ++) {
              e = bD[bJ];
              bF = e.selector;
              if (bI[bF] === L) {
                bI[bF] = (e.quick ? j(by, e.quick) : bA.is(bF))
              }
              if (bI[bF]) {
                bw.push(e)
              }
            }
            if (bw.length) {
              bv.push({
                elem: by,
                matches: bw
              })
            }
          }
        }
      }
      if (bD.length > bC) {
        bv.push({
          elem: this,
          matches: bD.slice(bC)
        })
      }
      for (bJ = 0; bJ < bv.length && !bH.isPropagationStopped(); bJ++) {
        bB = bv[bJ];
        bH.currentTarget = bB.elem;
        for (bG = 0; bG < bB.matches.length && !bH.isImmediatePropagationStopped(); bG++) {
          e = bB.matches[bG];
          if (bE || (!bH.namespace && !e.namespace) || bH.namespace_re && bH.namespace_re.test(e.namespace)) {
            bH.data = e.data;
            bH.handleObj = e;
            bK = ((b.event.special[e.origType] || {})
              .handle || e.handler)
              .apply(bB.elem, bx);
            if (bK !== L) {
              bH.result = bK;
              if (bK === false) {
                bH.preventDefault();
                bH.stopPropagation()
              }
            }
          }
        }
      }
      if (bz.postDispatch) {
        bz.postDispatch.call(this, bH)
      }
      return bH.result
    },
    props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(bv, e) {
        if (bv.which == null) {
          bv.which = e.charCode != null ? e.charCode : e.keyCode
        }
        return bv
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(bx, bw) {
        var by, bz, e, bv = bw.button,
          bA = bw.fromElement;
        if (bx.pageX == null && bw.clientX != null) {
          by = bx.target.ownerDocument || av;
          bz = by.documentElement;
          e = by.body;
          bx.pageX = bw.clientX + (bz && bz.scrollLeft || e && e.scrollLeft || 0) - (bz && bz.clientLeft || e && e.clientLeft || 0);
          bx.pageY = bw.clientY + (bz && bz.scrollTop || e && e.scrollTop || 0) - (bz && bz.clientTop || e && e.clientTop || 0)
        }
        if (!bx.relatedTarget && bA) {
          bx.relatedTarget = bA === bx.target ? bw.toElement : bA
        }
        if (!bx.which && bv !== L) {
          bx.which = (bv & 1 ? 1 : (bv & 2 ? 3 : (bv & 4 ? 2 : 0)))
        }
        return bx
      }
    },
    fix: function(bw) {
      if (bw[b.expando]) {
        return bw
      }
      var bv, bz, e = bw,
        bx = b.event.fixHooks[bw.type] || {}, by = bx.props ? this.props.concat(bx.props) : this.props;
      bw = b.Event(e);
      for (bv = by.length; bv;) {
        bz = by[--bv];
        bw[bz] = e[bz]
      }
      if (!bw.target) {
        bw.target = e.srcElement || av
      }
      if (bw.target.nodeType === 3) {
        bw.target = bw.target.parentNode
      }
      if (bw.metaKey === L) {
        bw.metaKey = bw.ctrlKey
      }
      return bx.filter ? bx.filter(bw, e) : bw
    },
    special: {
      ready: {
        setup: b.bindReady
      },
      load: {
        noBubble: true
      },
      focus: {
        delegateType: "focusin"
      },
      blur: {
        delegateType: "focusout"
      },
      beforeunload: {
        setup: function(bw, bv, e) {
          if (b.isWindow(this)) {
            this.onbeforeunload = e
          }
        },
        teardown: function(bv, e) {
          if (this.onbeforeunload === e) {
            this.onbeforeunload = null
          }
        }
      }
    },
    simulate: function(bw, by, bx, bv) {
      var bz = b.extend(new b.Event(), bx, {
        type: bw,
        isSimulated: true,
        originalEvent: {}
      });
      if (bv) {
        b.event.trigger(bz, null, by)
      } else {
        b.event.dispatch.call(by, bz)
      } if (bz.isDefaultPrevented()) {
        bx.preventDefault()
      }
    }
  };
  b.event.handle = b.event.dispatch;
  b.removeEvent = av.removeEventListener ? function(bv, e, bw) {
    if (bv.removeEventListener) {
      bv.removeEventListener(e, bw, false)
    }
  } : function(bv, e, bw) {
    if (bv.detachEvent) {
      bv.detachEvent("on" + e, bw)
    }
  };
  b.Event = function(bv, e) {
    if (!(this instanceof b.Event)) {
      return new b.Event(bv, e)
    }
    if (bv && bv.type) {
      this.originalEvent = bv;
      this.type = bv.type;
      this.isDefaultPrevented = (bv.defaultPrevented || bv.returnValue === false || bv.getPreventDefault && bv.getPreventDefault()) ? i : bl
    } else {
      this.type = bv
    } if (e) {
      b.extend(this, e)
    }
    this.timeStamp = bv && bv.timeStamp || b.now();
    this[b.expando] = true
  };

  function bl() {
    return false
  }

  function i() {
    return true
  }
  b.Event.prototype = {
    preventDefault: function() {
      this.isDefaultPrevented = i;
      var bv = this.originalEvent;
      if (!bv) {
        return
      }
      if (bv.preventDefault) {
        bv.preventDefault()
      } else {
        bv.returnValue = false
      }
    },
    stopPropagation: function() {
      this.isPropagationStopped = i;
      var bv = this.originalEvent;
      if (!bv) {
        return
      }
      if (bv.stopPropagation) {
        bv.stopPropagation()
      }
      bv.cancelBubble = true
    },
    stopImmediatePropagation: function() {
      this.isImmediatePropagationStopped = i;
      this.stopPropagation()
    },
    isDefaultPrevented: bl,
    isPropagationStopped: bl,
    isImmediatePropagationStopped: bl
  };
  b.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, function(bv, e) {
    b.event.special[bv] = {
      delegateType: e,
      bindType: e,
      handle: function(bz) {
        var bB = this,
          bA = bz.relatedTarget,
          by = bz.handleObj,
          bw = by.selector,
          bx;
        if (!bA || (bA !== bB && !b.contains(bB, bA))) {
          bz.type = by.origType;
          bx = by.handler.apply(this, arguments);
          bz.type = e
        }
        return bx
      }
    }
  });
  if (!b.support.submitBubbles) {
    b.event.special.submit = {
      setup: function() {
        if (b.nodeName(this, "form")) {
          return false
        }
        b.event.add(this, "click._submit keypress._submit", function(bx) {
          var bw = bx.target,
            bv = b.nodeName(bw, "input") || b.nodeName(bw, "button") ? bw.form : L;
          if (bv && !bv._submit_attached) {
            b.event.add(bv, "submit._submit", function(e) {
              e._submit_bubble = true
            });
            bv._submit_attached = true
          }
        })
      },
      postDispatch: function(e) {
        if (e._submit_bubble) {
          delete e._submit_bubble;
          if (this.parentNode && !e.isTrigger) {
            b.event.simulate("submit", this.parentNode, e, true)
          }
        }
      },
      teardown: function() {
        if (b.nodeName(this, "form")) {
          return false
        }
        b.event.remove(this, "._submit")
      }
    }
  }
  if (!b.support.changeBubbles) {
    b.event.special.change = {
      setup: function() {
        if (be.test(this.nodeName)) {
          if (this.type === "checkbox" || this.type === "radio") {
            b.event.add(this, "propertychange._change", function(e) {
              if (e.originalEvent.propertyName === "checked") {
                this._just_changed = true
              }
            });
            b.event.add(this, "click._change", function(e) {
              if (this._just_changed && !e.isTrigger) {
                this._just_changed = false;
                b.event.simulate("change", this, e, true)
              }
            })
          }
          return false
        }
        b.event.add(this, "beforeactivate._change", function(bw) {
          var bv = bw.target;
          if (be.test(bv.nodeName) && !bv._change_attached) {
            b.event.add(bv, "change._change", function(e) {
              if (this.parentNode && !e.isSimulated && !e.isTrigger) {
                b.event.simulate("change", this.parentNode, e, true)
              }
            });
            bv._change_attached = true
          }
        })
      },
      handle: function(bv) {
        var e = bv.target;
        if (this !== e || bv.isSimulated || bv.isTrigger || (e.type !== "radio" && e.type !== "checkbox")) {
          return bv.handleObj.handler.apply(this, arguments)
        }
      },
      teardown: function() {
        b.event.remove(this, "._change");
        return be.test(this.nodeName)
      }
    }
  }
  if (!b.support.focusinBubbles) {
    b.each({
      focus: "focusin",
      blur: "focusout"
    }, function(bx, e) {
      var bv = 0,
        bw = function(by) {
          b.event.simulate(e, by.target, b.event.fix(by), true)
        };
      b.event.special[e] = {
        setup: function() {
          if (bv++ === 0) {
            av.addEventListener(bx, bw, true)
          }
        },
        teardown: function() {
          if (--bv === 0) {
            av.removeEventListener(bx, bw, true)
          }
        }
      }
    })
  }
  b.fn.extend({
    on: function(bw, e, bz, by, bv) {
      var bA, bx;
      if (typeof bw === "object") {
        if (typeof e !== "string") {
          bz = bz || e;
          e = L
        }
        for (bx in bw) {
          this.on(bx, e, bz, bw[bx], bv)
        }
        return this
      }
      if (bz == null && by == null) {
        by = e;
        bz = e = L
      } else {
        if (by == null) {
          if (typeof e === "string") {
            by = bz;
            bz = L
          } else {
            by = bz;
            bz = e;
            e = L
          }
        }
      } if (by === false) {
        by = bl
      } else {
        if (!by) {
          return this
        }
      } if (bv === 1) {
        bA = by;
        by = function(bB) {
          b()
            .off(bB);
          return bA.apply(this, arguments)
        };
        by.guid = bA.guid || (bA.guid = b.guid++)
      }
      return this.each(function() {
        b.event.add(this, bw, by, bz, e)
      })
    },
    one: function(bv, e, bx, bw) {
      return this.on(bv, e, bx, bw, 1)
    },
    off: function(bw, e, by) {
      if (bw && bw.preventDefault && bw.handleObj) {
        var bv = bw.handleObj;
        b(bw.delegateTarget)
          .off(bv.namespace ? bv.origType + "." + bv.namespace : bv.origType, bv.selector, bv.handler);
        return this
      }
      if (typeof bw === "object") {
        for (var bx in bw) {
          this.off(bx, e, bw[bx])
        }
        return this
      }
      if (e === false || typeof e === "function") {
        by = e;
        e = L
      }
      if (by === false) {
        by = bl
      }
      return this.each(function() {
        b.event.remove(this, bw, by, e)
      })
    },
    bind: function(e, bw, bv) {
      return this.on(e, null, bw, bv)
    },
    unbind: function(e, bv) {
      return this.off(e, null, bv)
    },
    live: function(e, bw, bv) {
      b(this.context)
        .on(e, this.selector, bw, bv);
      return this
    },
    die: function(e, bv) {
      b(this.context)
        .off(e, this.selector || "**", bv);
      return this
    },
    delegate: function(e, bv, bx, bw) {
      return this.on(bv, e, bx, bw)
    },
    undelegate: function(e, bv, bw) {
      return arguments.length == 1 ? this.off(e, "**") : this.off(bv, e, bw)
    },
    trigger: function(e, bv) {
      return this.each(function() {
        b.event.trigger(e, bv, this)
      })
    },
    triggerHandler: function(e, bv) {
      if (this[0]) {
        return b.event.trigger(e, bv, this[0], true)
      }
    },
    toggle: function(bx) {
      var bv = arguments,
        e = bx.guid || b.guid++,
        bw = 0,
        by = function(bz) {
          var bA = (b._data(this, "lastToggle" + bx.guid) || 0) % bw;
          b._data(this, "lastToggle" + bx.guid, bA + 1);
          bz.preventDefault();
          return bv[bA].apply(this, arguments) || false
        };
      by.guid = e;
      while (bw < bv.length) {
        bv[bw++].guid = e
      }
      return this.click(by)
    },
    hover: function(e, bv) {
      return this.mouseenter(e)
        .mouseleave(bv || e)
    }
  });
  b.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu")
    .split(" "), function(bv, e) {
      b.fn[e] = function(bx, bw) {
        if (bw == null) {
          bw = bx;
          bx = null
        }
        return arguments.length > 0 ? this.on(e, null, bx, bw) : this.trigger(e)
      };
      if (b.attrFn) {
        b.attrFn[e] = true
      }
      if (aP.test(e)) {
        b.event.fixHooks[e] = b.event.keyHooks
      }
      if (bg.test(e)) {
        b.event.fixHooks[e] = b.event.mouseHooks
      }
    });
  /*!
   * Sizzle CSS Selector Engine
   *  Copyright 2011, The Dojo Foundation
   *  Released under the MIT, BSD, and GPL Licenses.
   *  More information: http://sizzlejs.com/
   */
  (function() {
    var bH = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
      bC = "sizcache" + (Math.random() + "")
        .replace(".", ""),
      bI = 0,
      bL = Object.prototype.toString,
      bB = false,
      bA = true,
      bK = /\\/g,
      bO = /\r\n/g,
      bQ = /\W/;
    [0, 0].sort(function() {
        bA = false;
        return 0
      });
    var by = function(bV, e, bY, bZ) {
      bY = bY || [];
      e = e || av;
      var b1 = e;
      if (e.nodeType !== 1 && e.nodeType !== 9) {
        return []
      }
      if (!bV || typeof bV !== "string") {
        return bY
      }
      var bS, b3, b6, bR, b2, b5, b4, bX, bU = true,
        bT = by.isXML(e),
        bW = [],
        b0 = bV;
      do {
        bH.exec("");
        bS = bH.exec(b0);
        if (bS) {
          b0 = bS[3];
          bW.push(bS[1]);
          if (bS[2]) {
            bR = bS[3];
            break
          }
        }
      } while (bS);
      if (bW.length > 1 && bD.exec(bV)) {
        if (bW.length === 2 && bE.relative[bW[0]]) {
          b3 = bM(bW[0] + bW[1], e, bZ)
        } else {
          b3 = bE.relative[bW[0]] ? [e] : by(bW.shift(), e);
          while (bW.length) {
            bV = bW.shift();
            if (bE.relative[bV]) {
              bV += bW.shift()
            }
            b3 = bM(bV, b3, bZ)
          }
        }
      } else {
        if (!bZ && bW.length > 1 && e.nodeType === 9 && !bT && bE.match.ID.test(bW[0]) && !bE.match.ID.test(bW[bW.length - 1])) {
          b2 = by.find(bW.shift(), e, bT);
          e = b2.expr ? by.filter(b2.expr, b2.set)[0] : b2.set[0]
        }
        if (e) {
          b2 = bZ ? {
            expr: bW.pop(),
            set: bF(bZ)
          } : by.find(bW.pop(), bW.length === 1 && (bW[0] === "~" || bW[0] === "+") && e.parentNode ? e.parentNode : e, bT);
          b3 = b2.expr ? by.filter(b2.expr, b2.set) : b2.set;
          if (bW.length > 0) {
            b6 = bF(b3)
          } else {
            bU = false
          }
          while (bW.length) {
            b5 = bW.pop();
            b4 = b5;
            if (!bE.relative[b5]) {
              b5 = ""
            } else {
              b4 = bW.pop()
            } if (b4 == null) {
              b4 = e
            }
            bE.relative[b5](b6, b4, bT)
          }
        } else {
          b6 = bW = []
        }
      } if (!b6) {
        b6 = b3
      }
      if (!b6) {
        by.error(b5 || bV)
      }
      if (bL.call(b6) === "[object Array]") {
        if (!bU) {
          bY.push.apply(bY, b6)
        } else {
          if (e && e.nodeType === 1) {
            for (bX = 0; b6[bX] != null; bX++) {
              if (b6[bX] && (b6[bX] === true || b6[bX].nodeType === 1 && by.contains(e, b6[bX]))) {
                bY.push(b3[bX])
              }
            }
          } else {
            for (bX = 0; b6[bX] != null; bX++) {
              if (b6[bX] && b6[bX].nodeType === 1) {
                bY.push(b3[bX])
              }
            }
          }
        }
      } else {
        bF(b6, bY)
      } if (bR) {
        by(bR, b1, bY, bZ);
        by.uniqueSort(bY)
      }
      return bY
    };
    by.uniqueSort = function(bR) {
      if (bJ) {
        bB = bA;
        bR.sort(bJ);
        if (bB) {
          for (var e = 1; e < bR.length; e++) {
            if (bR[e] === bR[e - 1]) {
              bR.splice(e--, 1)
            }
          }
        }
      }
      return bR
    };
    by.matches = function(e, bR) {
      return by(e, null, null, bR)
    };
    by.matchesSelector = function(e, bR) {
      return by(bR, null, null, [e])
        .length > 0
    };
    by.find = function(bX, e, bY) {
      var bW, bS, bU, bT, bV, bR;
      if (!bX) {
        return []
      }
      for (bS = 0, bU = bE.order.length; bS < bU; bS++) {
        bV = bE.order[bS];
        if ((bT = bE.leftMatch[bV].exec(bX))) {
          bR = bT[1];
          bT.splice(1, 1);
          if (bR.substr(bR.length - 1) !== "\\") {
            bT[1] = (bT[1] || "")
              .replace(bK, "");
            bW = bE.find[bV](bT, e, bY);
            if (bW != null) {
              bX = bX.replace(bE.match[bV], "");
              break
            }
          }
        }
      }
      if (!bW) {
        bW = typeof e.getElementsByTagName !== "undefined" ? e.getElementsByTagName("*") : []
      }
      return {
        set: bW,
        expr: bX
      }
    };
    by.filter = function(b1, b0, b4, bU) {
      var bW, e, bZ, b6, b3, bR, bT, bV, b2, bS = b1,
        b5 = [],
        bY = b0,
        bX = b0 && b0[0] && by.isXML(b0[0]);
      while (b1 && b0.length) {
        for (bZ in bE.filter) {
          if ((bW = bE.leftMatch[bZ].exec(b1)) != null && bW[2]) {
            bR = bE.filter[bZ];
            bT = bW[1];
            e = false;
            bW.splice(1, 1);
            if (bT.substr(bT.length - 1) === "\\") {
              continue
            }
            if (bY === b5) {
              b5 = []
            }
            if (bE.preFilter[bZ]) {
              bW = bE.preFilter[bZ](bW, bY, b4, b5, bU, bX);
              if (!bW) {
                e = b6 = true
              } else {
                if (bW === true) {
                  continue
                }
              }
            }
            if (bW) {
              for (bV = 0;
                (b3 = bY[bV]) != null; bV++) {
                if (b3) {
                  b6 = bR(b3, bW, bV, bY);
                  b2 = bU ^ b6;
                  if (b4 && b6 != null) {
                    if (b2) {
                      e = true
                    } else {
                      bY[bV] = false
                    }
                  } else {
                    if (b2) {
                      b5.push(b3);
                      e = true
                    }
                  }
                }
              }
            }
            if (b6 !== L) {
              if (!b4) {
                bY = b5
              }
              b1 = b1.replace(bE.match[bZ], "");
              if (!e) {
                return []
              }
              break
            }
          }
        }
        if (b1 === bS) {
          if (e == null) {
            by.error(b1)
          } else {
            break
          }
        }
        bS = b1
      }
      return bY
    };
    by.error = function(e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    };
    var bw = by.getText = function(bU) {
      var bS, bT, e = bU.nodeType,
        bR = "";
      if (e) {
        if (e === 1 || e === 9 || e === 11) {
          if (typeof bU.textContent === "string") {
            return bU.textContent
          } else {
            if (typeof bU.innerText === "string") {
              return bU.innerText.replace(bO, "")
            } else {
              for (bU = bU.firstChild; bU; bU = bU.nextSibling) {
                bR += bw(bU)
              }
            }
          }
        } else {
          if (e === 3 || e === 4) {
            return bU.nodeValue
          }
        }
      } else {
        for (bS = 0;
          (bT = bU[bS]); bS++) {
          if (bT.nodeType !== 8) {
            bR += bw(bT)
          }
        }
      }
      return bR
    };
    var bE = by.selectors = {
      order: ["ID", "NAME", "TAG"],
      match: {
        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
      },
      leftMatch: {},
      attrMap: {
        "class": "className",
        "for": "htmlFor"
      },
      attrHandle: {
        href: function(e) {
          return e.getAttribute("href")
        },
        type: function(e) {
          return e.getAttribute("type")
        }
      },
      relative: {
        "+": function(bW, bR) {
          var bT = typeof bR === "string",
            bV = bT && !bQ.test(bR),
            bX = bT && !bV;
          if (bV) {
            bR = bR.toLowerCase()
          }
          for (var bS = 0, e = bW.length, bU; bS < e; bS++) {
            if ((bU = bW[bS])) {
              while ((bU = bU.previousSibling) && bU.nodeType !== 1) {}
              bW[bS] = bX || bU && bU.nodeName.toLowerCase() === bR ? bU || false : bU === bR
            }
          }
          if (bX) {
            by.filter(bR, bW, true)
          }
        },
        ">": function(bW, bR) {
          var bV, bU = typeof bR === "string",
            bS = 0,
            e = bW.length;
          if (bU && !bQ.test(bR)) {
            bR = bR.toLowerCase();
            for (; bS < e; bS++) {
              bV = bW[bS];
              if (bV) {
                var bT = bV.parentNode;
                bW[bS] = bT.nodeName.toLowerCase() === bR ? bT : false
              }
            }
          } else {
            for (; bS < e; bS++) {
              bV = bW[bS];
              if (bV) {
                bW[bS] = bU ? bV.parentNode : bV.parentNode === bR
              }
            }
            if (bU) {
              by.filter(bR, bW, true)
            }
          }
        },
        "": function(bT, bR, bV) {
          var bU, bS = bI++,
            e = bN;
          if (typeof bR === "string" && !bQ.test(bR)) {
            bR = bR.toLowerCase();
            bU = bR;
            e = bv
          }
          e("parentNode", bR, bS, bT, bU, bV)
        },
        "~": function(bT, bR, bV) {
          var bU, bS = bI++,
            e = bN;
          if (typeof bR === "string" && !bQ.test(bR)) {
            bR = bR.toLowerCase();
            bU = bR;
            e = bv
          }
          e("previousSibling", bR, bS, bT, bU, bV)
        }
      },
      find: {
        ID: function(bR, bS, bT) {
          if (typeof bS.getElementById !== "undefined" && !bT) {
            var e = bS.getElementById(bR[1]);
            return e && e.parentNode ? [e] : []
          }
        },
        NAME: function(bS, bV) {
          if (typeof bV.getElementsByName !== "undefined") {
            var bR = [],
              bU = bV.getElementsByName(bS[1]);
            for (var bT = 0, e = bU.length; bT < e; bT++) {
              if (bU[bT].getAttribute("name") === bS[1]) {
                bR.push(bU[bT])
              }
            }
            return bR.length === 0 ? null : bR
          }
        },
        TAG: function(e, bR) {
          if (typeof bR.getElementsByTagName !== "undefined") {
            return bR.getElementsByTagName(e[1])
          }
        }
      },
      preFilter: {
        CLASS: function(bT, bR, bS, e, bW, bX) {
          bT = " " + bT[1].replace(bK, "") + " ";
          if (bX) {
            return bT
          }
          for (var bU = 0, bV;
            (bV = bR[bU]) != null; bU++) {
            if (bV) {
              if (bW ^ (bV.className && (" " + bV.className + " ")
                .replace(/[\t\n\r]/g, " ")
                .indexOf(bT) >= 0)) {
                if (!bS) {
                  e.push(bV)
                }
              } else {
                if (bS) {
                  bR[bU] = false
                }
              }
            }
          }
          return false
        },
        ID: function(e) {
          return e[1].replace(bK, "")
        },
        TAG: function(bR, e) {
          return bR[1].replace(bK, "")
            .toLowerCase()
        },
        CHILD: function(e) {
          if (e[1] === "nth") {
            if (!e[2]) {
              by.error(e[0])
            }
            e[2] = e[2].replace(/^\+|\s*/g, "");
            var bR = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
            e[2] = (bR[1] + (bR[2] || 1)) - 0;
            e[3] = bR[3] - 0
          } else {
            if (e[2]) {
              by.error(e[0])
            }
          }
          e[0] = bI++;
          return e
        },
        ATTR: function(bU, bR, bS, e, bV, bW) {
          var bT = bU[1] = bU[1].replace(bK, "");
          if (!bW && bE.attrMap[bT]) {
            bU[1] = bE.attrMap[bT]
          }
          bU[4] = (bU[4] || bU[5] || "")
            .replace(bK, "");
          if (bU[2] === "~=") {
            bU[4] = " " + bU[4] + " "
          }
          return bU
        },
        PSEUDO: function(bU, bR, bS, e, bV) {
          if (bU[1] === "not") {
            if ((bH.exec(bU[3]) || "")
              .length > 1 || /^\w/.test(bU[3])) {
              bU[3] = by(bU[3], null, null, bR)
            } else {
              var bT = by.filter(bU[3], bR, bS, true ^ bV);
              if (!bS) {
                e.push.apply(e, bT)
              }
              return false
            }
          } else {
            if (bE.match.POS.test(bU[0]) || bE.match.CHILD.test(bU[0])) {
              return true
            }
          }
          return bU
        },
        POS: function(e) {
          e.unshift(true);
          return e
        }
      },
      filters: {
        enabled: function(e) {
          return e.disabled === false && e.type !== "hidden"
        },
        disabled: function(e) {
          return e.disabled === true
        },
        checked: function(e) {
          return e.checked === true
        },
        selected: function(e) {
          if (e.parentNode) {
            e.parentNode.selectedIndex
          }
          return e.selected === true
        },
        parent: function(e) {
          return !!e.firstChild
        },
        empty: function(e) {
          return !e.firstChild
        },
        has: function(bS, bR, e) {
          return !!by(e[3], bS)
            .length
        },
        header: function(e) {
          return (/h\d/i)
            .test(e.nodeName)
        },
        text: function(bS) {
          var e = bS.getAttribute("type"),
            bR = bS.type;
          return bS.nodeName.toLowerCase() === "input" && "text" === bR && (e === bR || e === null)
        },
        radio: function(e) {
          return e.nodeName.toLowerCase() === "input" && "radio" === e.type
        },
        checkbox: function(e) {
          return e.nodeName.toLowerCase() === "input" && "checkbox" === e.type
        },
        file: function(e) {
          return e.nodeName.toLowerCase() === "input" && "file" === e.type
        },
        password: function(e) {
          return e.nodeName.toLowerCase() === "input" && "password" === e.type
        },
        submit: function(bR) {
          var e = bR.nodeName.toLowerCase();
          return (e === "input" || e === "button") && "submit" === bR.type
        },
        image: function(e) {
          return e.nodeName.toLowerCase() === "input" && "image" === e.type
        },
        reset: function(bR) {
          var e = bR.nodeName.toLowerCase();
          return (e === "input" || e === "button") && "reset" === bR.type
        },
        button: function(bR) {
          var e = bR.nodeName.toLowerCase();
          return e === "input" && "button" === bR.type || e === "button"
        },
        input: function(e) {
          return (/input|select|textarea|button/i)
            .test(e.nodeName)
        },
        focus: function(e) {
          return e === e.ownerDocument.activeElement
        }
      },
      setFilters: {
        first: function(bR, e) {
          return e === 0
        },
        last: function(bS, bR, e, bT) {
          return bR === bT.length - 1
        },
        even: function(bR, e) {
          return e % 2 === 0
        },
        odd: function(bR, e) {
          return e % 2 === 1
        },
        lt: function(bS, bR, e) {
          return bR < e[3] - 0
        },
        gt: function(bS, bR, e) {
          return bR > e[3] - 0
        },
        nth: function(bS, bR, e) {
          return e[3] - 0 === bR
        },
        eq: function(bS, bR, e) {
          return e[3] - 0 === bR
        }
      },
      filter: {
        PSEUDO: function(bS, bX, bW, bY) {
          var e = bX[1],
            bR = bE.filters[e];
          if (bR) {
            return bR(bS, bW, bX, bY)
          } else {
            if (e === "contains") {
              return (bS.textContent || bS.innerText || bw([bS]) || "")
                .indexOf(bX[3]) >= 0
            } else {
              if (e === "not") {
                var bT = bX[3];
                for (var bV = 0, bU = bT.length; bV < bU; bV++) {
                  if (bT[bV] === bS) {
                    return false
                  }
                }
                return true
              } else {
                by.error(e)
              }
            }
          }
        },
        CHILD: function(bS, bU) {
          var bT, b0, bW, bZ, e, bV, bY, bX = bU[1],
            bR = bS;
          switch (bX) {
            case "only":
            case "first":
              while ((bR = bR.previousSibling)) {
                if (bR.nodeType === 1) {
                  return false
                }
              }
              if (bX === "first") {
                return true
              }
              bR = bS;
            case "last":
              while ((bR = bR.nextSibling)) {
                if (bR.nodeType === 1) {
                  return false
                }
              }
              return true;
            case "nth":
              bT = bU[2];
              b0 = bU[3];
              if (bT === 1 && b0 === 0) {
                return true
              }
              bW = bU[0];
              bZ = bS.parentNode;
              if (bZ && (bZ[bC] !== bW || !bS.nodeIndex)) {
                bV = 0;
                for (bR = bZ.firstChild; bR; bR = bR.nextSibling) {
                  if (bR.nodeType === 1) {
                    bR.nodeIndex = ++bV
                  }
                }
                bZ[bC] = bW
              }
              bY = bS.nodeIndex - b0;
              if (bT === 0) {
                return bY === 0
              } else {
                return (bY % bT === 0 && bY / bT >= 0)
              }
          }
        },
        ID: function(bR, e) {
          return bR.nodeType === 1 && bR.getAttribute("id") === e
        },
        TAG: function(bR, e) {
          return (e === "*" && bR.nodeType === 1) || !! bR.nodeName && bR.nodeName.toLowerCase() === e
        },
        CLASS: function(bR, e) {
          return (" " + (bR.className || bR.getAttribute("class")) + " ")
            .indexOf(e) > -1
        },
        ATTR: function(bV, bT) {
          var bS = bT[1],
            e = by.attr ? by.attr(bV, bS) : bE.attrHandle[bS] ? bE.attrHandle[bS](bV) : bV[bS] != null ? bV[bS] : bV.getAttribute(bS),
            bW = e + "",
            bU = bT[2],
            bR = bT[4];
          return e == null ? bU === "!=" : !bU && by.attr ? e != null : bU === "=" ? bW === bR : bU === "*=" ? bW.indexOf(bR) >= 0 : bU === "~=" ? (" " + bW + " ")
            .indexOf(bR) >= 0 : !bR ? bW && e !== false : bU === "!=" ? bW !== bR : bU === "^=" ? bW.indexOf(bR) === 0 : bU === "$=" ? bW.substr(bW.length - bR.length) === bR : bU === "|=" ? bW === bR || bW.substr(0, bR.length + 1) === bR + "-" : false
        },
        POS: function(bU, bR, bS, bV) {
          var e = bR[2],
            bT = bE.setFilters[e];
          if (bT) {
            return bT(bU, bS, bR, bV)
          }
        }
      }
    };
    var bD = bE.match.POS,
      bx = function(bR, e) {
        return "\\" + (e - 0 + 1)
      };
    for (var bz in bE.match) {
      bE.match[bz] = new RegExp(bE.match[bz].source + (/(?![^\[]*\])(?![^\(]*\))/.source));
      bE.leftMatch[bz] = new RegExp(/(^(?:.|\r|\n)*?)/.source + bE.match[bz].source.replace(/\\(\d+)/g, bx))
    }
    bE.match.globalPOS = bD;
    var bF = function(bR, e) {
      bR = Array.prototype.slice.call(bR, 0);
      if (e) {
        e.push.apply(e, bR);
        return e
      }
      return bR
    };
    try {
      Array.prototype.slice.call(av.documentElement.childNodes, 0)[0].nodeType
    } catch (bP) {
      bF = function(bU, bT) {
        var bS = 0,
          bR = bT || [];
        if (bL.call(bU) === "[object Array]") {
          Array.prototype.push.apply(bR, bU)
        } else {
          if (typeof bU.length === "number") {
            for (var e = bU.length; bS < e; bS++) {
              bR.push(bU[bS])
            }
          } else {
            for (; bU[bS]; bS++) {
              bR.push(bU[bS])
            }
          }
        }
        return bR
      }
    }
    var bJ, bG;
    if (av.documentElement.compareDocumentPosition) {
      bJ = function(bR, e) {
        if (bR === e) {
          bB = true;
          return 0
        }
        if (!bR.compareDocumentPosition || !e.compareDocumentPosition) {
          return bR.compareDocumentPosition ? -1 : 1
        }
        return bR.compareDocumentPosition(e) & 4 ? -1 : 1
      }
    } else {
      bJ = function(bY, bX) {
        if (bY === bX) {
          bB = true;
          return 0
        } else {
          if (bY.sourceIndex && bX.sourceIndex) {
            return bY.sourceIndex - bX.sourceIndex
          }
        }
        var bV, bR, bS = [],
          e = [],
          bU = bY.parentNode,
          bW = bX.parentNode,
          bZ = bU;
        if (bU === bW) {
          return bG(bY, bX)
        } else {
          if (!bU) {
            return -1
          } else {
            if (!bW) {
              return 1
            }
          }
        }
        while (bZ) {
          bS.unshift(bZ);
          bZ = bZ.parentNode
        }
        bZ = bW;
        while (bZ) {
          e.unshift(bZ);
          bZ = bZ.parentNode
        }
        bV = bS.length;
        bR = e.length;
        for (var bT = 0; bT < bV && bT < bR; bT++) {
          if (bS[bT] !== e[bT]) {
            return bG(bS[bT], e[bT])
          }
        }
        return bT === bV ? bG(bY, e[bT], -1) : bG(bS[bT], bX, 1)
      };
      bG = function(bR, e, bS) {
        if (bR === e) {
          return bS
        }
        var bT = bR.nextSibling;
        while (bT) {
          if (bT === e) {
            return -1
          }
          bT = bT.nextSibling
        }
        return 1
      }
    }(function() {
      var bR = av.createElement("div"),
        bS = "script" + (new Date())
          .getTime(),
        e = av.documentElement;
      bR.innerHTML = "<a name='" + bS + "'/>";
      e.insertBefore(bR, e.firstChild);
      if (av.getElementById(bS)) {
        bE.find.ID = function(bU, bV, bW) {
          if (typeof bV.getElementById !== "undefined" && !bW) {
            var bT = bV.getElementById(bU[1]);
            return bT ? bT.id === bU[1] || typeof bT.getAttributeNode !== "undefined" && bT.getAttributeNode("id")
              .nodeValue === bU[1] ? [bT] : L : []
          }
        };
        bE.filter.ID = function(bV, bT) {
          var bU = typeof bV.getAttributeNode !== "undefined" && bV.getAttributeNode("id");
          return bV.nodeType === 1 && bU && bU.nodeValue === bT
        }
      }
      e.removeChild(bR);
      e = bR = null
    })();
    (function() {
      var e = av.createElement("div");
      e.appendChild(av.createComment(""));
      if (e.getElementsByTagName("*")
        .length > 0) {
        bE.find.TAG = function(bR, bV) {
          var bU = bV.getElementsByTagName(bR[1]);
          if (bR[1] === "*") {
            var bT = [];
            for (var bS = 0; bU[bS]; bS++) {
              if (bU[bS].nodeType === 1) {
                bT.push(bU[bS])
              }
            }
            bU = bT
          }
          return bU
        }
      }
      e.innerHTML = "<a href='#'></a>";
      if (e.firstChild && typeof e.firstChild.getAttribute !== "undefined" && e.firstChild.getAttribute("href") !== "#") {
        bE.attrHandle.href = function(bR) {
          return bR.getAttribute("href", 2)
        }
      }
      e = null
    })(); if (av.querySelectorAll) {
      (function() {
        var e = by,
          bT = av.createElement("div"),
          bS = "__sizzle__";
        bT.innerHTML = "<p class='TEST'></p>";
        if (bT.querySelectorAll && bT.querySelectorAll(".TEST")
          .length === 0) {
          return
        }
        by = function(b4, bV, bZ, b3) {
          bV = bV || av;
          if (!b3 && !by.isXML(bV)) {
            var b2 = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b4);
            if (b2 && (bV.nodeType === 1 || bV.nodeType === 9)) {
              if (b2[1]) {
                return bF(bV.getElementsByTagName(b4), bZ)
              } else {
                if (b2[2] && bE.find.CLASS && bV.getElementsByClassName) {
                  return bF(bV.getElementsByClassName(b2[2]), bZ)
                }
              }
            }
            if (bV.nodeType === 9) {
              if (b4 === "body" && bV.body) {
                return bF([bV.body], bZ)
              } else {
                if (b2 && b2[3]) {
                  var bY = bV.getElementById(b2[3]);
                  if (bY && bY.parentNode) {
                    if (bY.id === b2[3]) {
                      return bF([bY], bZ)
                    }
                  } else {
                    return bF([], bZ)
                  }
                }
              }
              try {
                return bF(bV.querySelectorAll(b4), bZ)
              } catch (b0) {}
            } else {
              if (bV.nodeType === 1 && bV.nodeName.toLowerCase() !== "object") {
                var bW = bV,
                  bX = bV.getAttribute("id"),
                  bU = bX || bS,
                  b6 = bV.parentNode,
                  b5 = /^\s*[+~]/.test(b4);
                if (!bX) {
                  bV.setAttribute("id", bU)
                } else {
                  bU = bU.replace(/'/g, "\\$&")
                } if (b5 && b6) {
                  bV = bV.parentNode
                }
                try {
                  if (!b5 || b6) {
                    return bF(bV.querySelectorAll("[id='" + bU + "'] " + b4), bZ)
                  }
                } catch (b1) {} finally {
                  if (!bX) {
                    bW.removeAttribute("id")
                  }
                }
              }
            }
          }
          return e(b4, bV, bZ, b3)
        };
        for (var bR in e) {
          by[bR] = e[bR]
        }
        bT = null
      })()
    }(function() {
      var e = av.documentElement,
        bS = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
      if (bS) {
        var bU = !bS.call(av.createElement("div"), "div"),
          bR = false;
        try {
          bS.call(av.documentElement, "[test!='']:sizzle")
        } catch (bT) {
          bR = true
        }
        by.matchesSelector = function(bW, bY) {
          bY = bY.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
          if (!by.isXML(bW)) {
            try {
              if (bR || !bE.match.PSEUDO.test(bY) && !/!=/.test(bY)) {
                var bV = bS.call(bW, bY);
                if (bV || !bU || bW.document && bW.document.nodeType !== 11) {
                  return bV
                }
              }
            } catch (bX) {}
          }
          return by(bY, null, null, [bW])
            .length > 0
        }
      }
    })();
    (function() {
      var e = av.createElement("div");
      e.innerHTML = "<div class='test e'></div><div class='test'></div>";
      if (!e.getElementsByClassName || e.getElementsByClassName("e")
        .length === 0) {
        return
      }
      e.lastChild.className = "e";
      if (e.getElementsByClassName("e")
        .length === 1) {
        return
      }
      bE.order.splice(1, 0, "CLASS");
      bE.find.CLASS = function(bR, bS, bT) {
        if (typeof bS.getElementsByClassName !== "undefined" && !bT) {
          return bS.getElementsByClassName(bR[1])
        }
      };
      e = null
    })();

    function bv(bR, bW, bV, bZ, bX, bY) {
      for (var bT = 0, bS = bZ.length; bT < bS; bT++) {
        var e = bZ[bT];
        if (e) {
          var bU = false;
          e = e[bR];
          while (e) {
            if (e[bC] === bV) {
              bU = bZ[e.sizset];
              break
            }
            if (e.nodeType === 1 && !bY) {
              e[bC] = bV;
              e.sizset = bT
            }
            if (e.nodeName.toLowerCase() === bW) {
              bU = e;
              break
            }
            e = e[bR]
          }
          bZ[bT] = bU
        }
      }
    }

    function bN(bR, bW, bV, bZ, bX, bY) {
      for (var bT = 0, bS = bZ.length; bT < bS; bT++) {
        var e = bZ[bT];
        if (e) {
          var bU = false;
          e = e[bR];
          while (e) {
            if (e[bC] === bV) {
              bU = bZ[e.sizset];
              break
            }
            if (e.nodeType === 1) {
              if (!bY) {
                e[bC] = bV;
                e.sizset = bT
              }
              if (typeof bW !== "string") {
                if (e === bW) {
                  bU = true;
                  break
                }
              } else {
                if (by.filter(bW, [e])
                  .length > 0) {
                  bU = e;
                  break
                }
              }
            }
            e = e[bR]
          }
          bZ[bT] = bU
        }
      }
    }
    if (av.documentElement.contains) {
      by.contains = function(bR, e) {
        return bR !== e && (bR.contains ? bR.contains(e) : true)
      }
    } else {
      if (av.documentElement.compareDocumentPosition) {
        by.contains = function(bR, e) {
          return !!(bR.compareDocumentPosition(e) & 16)
        }
      } else {
        by.contains = function() {
          return false
        }
      }
    }
    by.isXML = function(e) {
      var bR = (e ? e.ownerDocument || e : 0)
        .documentElement;
      return bR ? bR.nodeName !== "HTML" : false
    };
    var bM = function(bS, e, bW) {
      var bV, bX = [],
        bU = "",
        bY = e.nodeType ? [e] : e;
      while ((bV = bE.match.PSEUDO.exec(bS))) {
        bU += bV[0];
        bS = bS.replace(bE.match.PSEUDO, "")
      }
      bS = bE.relative[bS] ? bS + "*" : bS;
      for (var bT = 0, bR = bY.length; bT < bR; bT++) {
        by(bS, bY[bT], bX, bW)
      }
      return by.filter(bU, bX)
    };
    by.attr = b.attr;
    by.selectors.attrMap = {};
    b.find = by;
    b.expr = by.selectors;
    b.expr[":"] = b.expr.filters;
    b.unique = by.uniqueSort;
    b.text = by.getText;
    b.isXMLDoc = by.isXML;
    b.contains = by.contains
  })();
  var ab = /Until$/,
    aq = /^(?:parents|prevUntil|prevAll)/,
    bb = /,/,
    bp = /^.[^:#\[\.,]*$/,
    P = Array.prototype.slice,
    H = b.expr.match.globalPOS,
    ay = {
      children: true,
      contents: true,
      next: true,
      prev: true
    };
  b.fn.extend({
    find: function(e) {
      var bw = this,
        by, bv;
      if (typeof e !== "string") {
        return b(e)
          .filter(function() {
            for (by = 0, bv = bw.length; by < bv; by++) {
              if (b.contains(bw[by], this)) {
                return true
              }
            }
          })
      }
      var bx = this.pushStack("", "find", e),
        bA, bB, bz;
      for (by = 0, bv = this.length; by < bv; by++) {
        bA = bx.length;
        b.find(e, this[by], bx);
        if (by > 0) {
          for (bB = bA; bB < bx.length; bB++) {
            for (bz = 0; bz < bA; bz++) {
              if (bx[bz] === bx[bB]) {
                bx.splice(bB--, 1);
                break
              }
            }
          }
        }
      }
      return bx
    },
    has: function(bv) {
      var e = b(bv);
      return this.filter(function() {
        for (var bx = 0, bw = e.length; bx < bw; bx++) {
          if (b.contains(this, e[bx])) {
            return true
          }
        }
      })
    },
    not: function(e) {
      return this.pushStack(aH(this, e, false), "not", e)
    },
    filter: function(e) {
      return this.pushStack(aH(this, e, true), "filter", e)
    },
    is: function(e) {
      return !!e && (typeof e === "string" ? H.test(e) ? b(e, this.context)
        .index(this[0]) >= 0 : b.filter(e, this)
        .length > 0 : this.filter(e)
        .length > 0)
    },
    closest: function(by, bx) {
      var bv = [],
        bw, e, bz = this[0];
      if (b.isArray(by)) {
        var bB = 1;
        while (bz && bz.ownerDocument && bz !== bx) {
          for (bw = 0; bw < by.length; bw++) {
            if (b(bz)
              .is(by[bw])) {
              bv.push({
                selector: by[bw],
                elem: bz,
                level: bB
              })
            }
          }
          bz = bz.parentNode;
          bB++
        }
        return bv
      }
      var bA = H.test(by) || typeof by !== "string" ? b(by, bx || this.context) : 0;
      for (bw = 0, e = this.length; bw < e; bw++) {
        bz = this[bw];
        while (bz) {
          if (bA ? bA.index(bz) > -1 : b.find.matchesSelector(bz, by)) {
            bv.push(bz);
            break
          } else {
            bz = bz.parentNode;
            if (!bz || !bz.ownerDocument || bz === bx || bz.nodeType === 11) {
              break
            }
          }
        }
      }
      bv = bv.length > 1 ? b.unique(bv) : bv;
      return this.pushStack(bv, "closest", by)
    },
    index: function(e) {
      if (!e) {
        return (this[0] && this[0].parentNode) ? this.prevAll()
          .length : -1
      }
      if (typeof e === "string") {
        return b.inArray(this[0], b(e))
      }
      return b.inArray(e.jquery ? e[0] : e, this)
    },
    add: function(e, bv) {
      var bx = typeof e === "string" ? b(e, bv) : b.makeArray(e && e.nodeType ? [e] : e),
        bw = b.merge(this.get(), bx);
      return this.pushStack(B(bx[0]) || B(bw[0]) ? bw : b.unique(bw))
    },
    andSelf: function() {
      return this.add(this.prevObject)
    }
  });

  function B(e) {
    return !e || !e.parentNode || e.parentNode.nodeType === 11
  }
  b.each({
    parent: function(bv) {
      var e = bv.parentNode;
      return e && e.nodeType !== 11 ? e : null
    },
    parents: function(e) {
      return b.dir(e, "parentNode")
    },
    parentsUntil: function(bv, e, bw) {
      return b.dir(bv, "parentNode", bw)
    },
    next: function(e) {
      return b.nth(e, 2, "nextSibling")
    },
    prev: function(e) {
      return b.nth(e, 2, "previousSibling")
    },
    nextAll: function(e) {
      return b.dir(e, "nextSibling")
    },
    prevAll: function(e) {
      return b.dir(e, "previousSibling")
    },
    nextUntil: function(bv, e, bw) {
      return b.dir(bv, "nextSibling", bw)
    },
    prevUntil: function(bv, e, bw) {
      return b.dir(bv, "previousSibling", bw)
    },
    siblings: function(e) {
      return b.sibling((e.parentNode || {})
        .firstChild, e)
    },
    children: function(e) {
      return b.sibling(e.firstChild)
    },
    contents: function(e) {
      return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.makeArray(e.childNodes)
    }
  }, function(e, bv) {
    b.fn[e] = function(by, bw) {
      var bx = b.map(this, bv, by);
      if (!ab.test(e)) {
        bw = by
      }
      if (bw && typeof bw === "string") {
        bx = b.filter(bw, bx)
      }
      bx = this.length > 1 && !ay[e] ? b.unique(bx) : bx;
      if ((this.length > 1 || bb.test(bw)) && aq.test(e)) {
        bx = bx.reverse()
      }
      return this.pushStack(bx, e, P.call(arguments)
        .join(","))
    }
  });
  b.extend({
    filter: function(bw, e, bv) {
      if (bv) {
        bw = ":not(" + bw + ")"
      }
      return e.length === 1 ? b.find.matchesSelector(e[0], bw) ? [e[0]] : [] : b.find.matches(bw, e)
    },
    dir: function(bw, bv, by) {
      var e = [],
        bx = bw[bv];
      while (bx && bx.nodeType !== 9 && (by === L || bx.nodeType !== 1 || !b(bx)
        .is(by))) {
        if (bx.nodeType === 1) {
          e.push(bx)
        }
        bx = bx[bv]
      }
      return e
    },
    nth: function(by, e, bw, bx) {
      e = e || 1;
      var bv = 0;
      for (; by; by = by[bw]) {
        if (by.nodeType === 1 && ++bv === e) {
          break
        }
      }
      return by
    },
    sibling: function(bw, bv) {
      var e = [];
      for (; bw; bw = bw.nextSibling) {
        if (bw.nodeType === 1 && bw !== bv) {
          e.push(bw)
        }
      }
      return e
    }
  });

  function aH(bx, bw, e) {
    bw = bw || 0;
    if (b.isFunction(bw)) {
      return b.grep(bx, function(bz, by) {
        var bA = !! bw.call(bz, by, bz);
        return bA === e
      })
    } else {
      if (bw.nodeType) {
        return b.grep(bx, function(bz, by) {
          return (bz === bw) === e
        })
      } else {
        if (typeof bw === "string") {
          var bv = b.grep(bx, function(by) {
            return by.nodeType === 1
          });
          if (bp.test(bw)) {
            return b.filter(bw, bv, !e)
          } else {
            bw = b.filter(bw, bv)
          }
        }
      }
    }
    return b.grep(bx, function(bz, by) {
      return (b.inArray(bz, bw) >= 0) === e
    })
  }

  function a(e) {
    var bw = aS.split("|"),
      bv = e.createDocumentFragment();
    if (bv.createElement) {
      while (bw.length) {
        bv.createElement(bw.pop())
      }
    }
    return bv
  }
  var aS = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    ah = / jQuery\d+="(?:\d+|null)"/g,
    ar = /^\s+/,
    R = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    d = /<([\w:]+)/,
    v = /<tbody/i,
    W = /<|&#?\w+;/,
    ae = /<(?:script|style)/i,
    O = /<(?:script|object|embed|option|style)/i,
    ai = new RegExp("<(?:" + aS + ")[\\s/>]", "i"),
    o = /checked\s*(?:[^=]|=\s*.checked.)/i,
    bn = /\/(java|ecma)script/i,
    aO = /^\s*<!(?:\[CDATA\[|\-\-)/,
    ax = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      area: [1, "<map>", "</map>"],
      _default: [0, "", ""]
    }, ac = a(av);
  ax.optgroup = ax.option;
  ax.tbody = ax.tfoot = ax.colgroup = ax.caption = ax.thead;
  ax.th = ax.td;
  if (!b.support.htmlSerialize) {
    ax._default = [1, "div<div>", "</div>"]
  }
  b.fn.extend({
    text: function(e) {
      return b.access(this, function(bv) {
        return bv === L ? b.text(this) : this.empty()
          .append((this[0] && this[0].ownerDocument || av)
            .createTextNode(bv))
      }, null, e, arguments.length)
    },
    wrapAll: function(e) {
      if (b.isFunction(e)) {
        return this.each(function(bw) {
          b(this)
            .wrapAll(e.call(this, bw))
        })
      }
      if (this[0]) {
        var bv = b(e, this[0].ownerDocument)
          .eq(0)
          .clone(true);
        if (this[0].parentNode) {
          bv.insertBefore(this[0])
        }
        bv.map(function() {
          var bw = this;
          while (bw.firstChild && bw.firstChild.nodeType === 1) {
            bw = bw.firstChild
          }
          return bw
        })
          .append(this)
      }
      return this
    },
    wrapInner: function(e) {
      if (b.isFunction(e)) {
        return this.each(function(bv) {
          b(this)
            .wrapInner(e.call(this, bv))
        })
      }
      return this.each(function() {
        var bv = b(this),
          bw = bv.contents();
        if (bw.length) {
          bw.wrapAll(e)
        } else {
          bv.append(e)
        }
      })
    },
    wrap: function(e) {
      var bv = b.isFunction(e);
      return this.each(function(bw) {
        b(this)
          .wrapAll(bv ? e.call(this, bw) : e)
      })
    },
    unwrap: function() {
      return this.parent()
        .each(function() {
          if (!b.nodeName(this, "body")) {
            b(this)
              .replaceWith(this.childNodes)
          }
        })
        .end()
    },
    append: function() {
      return this.domManip(arguments, true, function(e) {
        if (this.nodeType === 1) {
          this.appendChild(e)
        }
      })
    },
    prepend: function() {
      return this.domManip(arguments, true, function(e) {
        if (this.nodeType === 1) {
          this.insertBefore(e, this.firstChild)
        }
      })
    },
    before: function() {
      if (this[0] && this[0].parentNode) {
        return this.domManip(arguments, false, function(bv) {
          this.parentNode.insertBefore(bv, this)
        })
      } else {
        if (arguments.length) {
          var e = b.clean(arguments);
          e.push.apply(e, this.toArray());
          return this.pushStack(e, "before", arguments)
        }
      }
    },
    after: function() {
      if (this[0] && this[0].parentNode) {
        return this.domManip(arguments, false, function(bv) {
          this.parentNode.insertBefore(bv, this.nextSibling)
        })
      } else {
        if (arguments.length) {
          var e = this.pushStack(this, "after", arguments);
          e.push.apply(e, b.clean(arguments));
          return e
        }
      }
    },
    remove: function(e, bx) {
      for (var bv = 0, bw;
        (bw = this[bv]) != null; bv++) {
        if (!e || b.filter(e, [bw])
          .length) {
          if (!bx && bw.nodeType === 1) {
            b.cleanData(bw.getElementsByTagName("*"));
            b.cleanData([bw])
          }
          if (bw.parentNode) {
            bw.parentNode.removeChild(bw)
          }
        }
      }
      return this
    },
    empty: function() {
      for (var e = 0, bv;
        (bv = this[e]) != null; e++) {
        if (bv.nodeType === 1) {
          b.cleanData(bv.getElementsByTagName("*"))
        }
        while (bv.firstChild) {
          bv.removeChild(bv.firstChild)
        }
      }
      return this
    },
    clone: function(bv, e) {
      bv = bv == null ? false : bv;
      e = e == null ? bv : e;
      return this.map(function() {
        return b.clone(this, bv, e)
      })
    },
    html: function(e) {
      return b.access(this, function(by) {
        var bx = this[0] || {}, bw = 0,
          bv = this.length;
        if (by === L) {
          return bx.nodeType === 1 ? bx.innerHTML.replace(ah, "") : null
        }
        if (typeof by === "string" && !ae.test(by) && (b.support.leadingWhitespace || !ar.test(by)) && !ax[(d.exec(by) || ["", ""])[1].toLowerCase()]) {
          by = by.replace(R, "<$1></$2>");
          try {
            for (; bw < bv; bw++) {
              bx = this[bw] || {};
              if (bx.nodeType === 1) {
                b.cleanData(bx.getElementsByTagName("*"));
                bx.innerHTML = by
              }
            }
            bx = 0
          } catch (bz) {}
        }
        if (bx) {
          this.empty()
            .append(by)
        }
      }, null, e, arguments.length)
    },
    replaceWith: function(e) {
      if (this[0] && this[0].parentNode) {
        if (b.isFunction(e)) {
          return this.each(function(bx) {
            var bw = b(this),
              bv = bw.html();
            bw.replaceWith(e.call(this, bx, bv))
          })
        }
        if (typeof e !== "string") {
          e = b(e)
            .detach()
        }
        return this.each(function() {
          var bw = this.nextSibling,
            bv = this.parentNode;
          b(this)
            .remove();
          if (bw) {
            b(bw)
              .before(e)
          } else {
            b(bv)
              .append(e)
          }
        })
      } else {
        return this.length ? this.pushStack(b(b.isFunction(e) ? e() : e), "replaceWith", e) : this
      }
    },
    detach: function(e) {
      return this.remove(e, true)
    },
    domManip: function(bB, bF, bE) {
      var bx, by, bA, bD, bC = bB[0],
        bv = [];
      if (!b.support.checkClone && arguments.length === 3 && typeof bC === "string" && o.test(bC)) {
        return this.each(function() {
          b(this)
            .domManip(bB, bF, bE, true)
        })
      }
      if (b.isFunction(bC)) {
        return this.each(function(bH) {
          var bG = b(this);
          bB[0] = bC.call(this, bH, bF ? bG.html() : L);
          bG.domManip(bB, bF, bE)
        })
      }
      if (this[0]) {
        bD = bC && bC.parentNode;
        if (b.support.parentNode && bD && bD.nodeType === 11 && bD.childNodes.length === this.length) {
          bx = {
            fragment: bD
          }
        } else {
          bx = b.buildFragment(bB, this, bv)
        }
        bA = bx.fragment;
        if (bA.childNodes.length === 1) {
          by = bA = bA.firstChild
        } else {
          by = bA.firstChild
        } if (by) {
          bF = bF && b.nodeName(by, "tr");
          for (var bw = 0, e = this.length, bz = e - 1; bw < e; bw++) {
            bE.call(bF ? bc(this[bw], by) : this[bw], bx.cacheable || (e > 1 && bw < bz) ? b.clone(bA, true, true) : bA)
          }
        }
        if (bv.length) {
          b.each(bv, function(bG, bH) {
            if (bH.src) {
              b.ajax({
                type: "GET",
                global: false,
                url: bH.src,
                async: false,
                dataType: "script"
              })
            } else {
              b.globalEval((bH.text || bH.textContent || bH.innerHTML || "")
                .replace(aO, "/*$0*/"))
            } if (bH.parentNode) {
              bH.parentNode.removeChild(bH)
            }
          })
        }
      }
      return this
    }
  });

  function bc(e, bv) {
    return b.nodeName(e, "table") ? (e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody"))) : e
  }

  function s(bB, bv) {
    if (bv.nodeType !== 1 || !b.hasData(bB)) {
      return
    }
    var by, bx, e, bA = b._data(bB),
      bz = b._data(bv, bA),
      bw = bA.events;
    if (bw) {
      delete bz.handle;
      bz.events = {};
      for (by in bw) {
        for (bx = 0, e = bw[by].length; bx < e; bx++) {
          b.event.add(bv, by, bw[by][bx])
        }
      }
    }
    if (bz.data) {
      bz.data = b.extend({}, bz.data)
    }
  }

  function aj(bv, e) {
    var bw;
    if (e.nodeType !== 1) {
      return
    }
    if (e.clearAttributes) {
      e.clearAttributes()
    }
    if (e.mergeAttributes) {
      e.mergeAttributes(bv)
    }
    bw = e.nodeName.toLowerCase();
    if (bw === "object") {
      e.outerHTML = bv.outerHTML
    } else {
      if (bw === "input" && (bv.type === "checkbox" || bv.type === "radio")) {
        if (bv.checked) {
          e.defaultChecked = e.checked = bv.checked
        }
        if (e.value !== bv.value) {
          e.value = bv.value
        }
      } else {
        if (bw === "option") {
          e.selected = bv.defaultSelected
        } else {
          if (bw === "input" || bw === "textarea") {
            e.defaultValue = bv.defaultValue
          } else {
            if (bw === "script" && e.text !== bv.text) {
              e.text = bv.text
            }
          }
        }
      }
    }
    e.removeAttribute(b.expando);
    e.removeAttribute("_submit_attached");
    e.removeAttribute("_change_attached")
  }
  b.buildFragment = function(bz, bx, bv) {
    var by, e, bw, bA, bB = bz[0];
    if (bx && bx[0]) {
      bA = bx[0].ownerDocument || bx[0]
    }
    if (!bA.createDocumentFragment) {
      bA = av
    }
    if (bz.length === 1 && typeof bB === "string" && bB.length < 512 && bA === av && bB.charAt(0) === "<" && !O.test(bB) && (b.support.checkClone || !o.test(bB)) && (b.support.html5Clone || !ai.test(bB))) {
      e = true;
      bw = b.fragments[bB];
      if (bw && bw !== 1) {
        by = bw
      }
    }
    if (!by) {
      by = bA.createDocumentFragment();
      b.clean(bz, bA, by, bv)
    }
    if (e) {
      b.fragments[bB] = bw ? by : 1
    }
    return {
      fragment: by,
      cacheable: e
    }
  };
  b.fragments = {};
  b.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(e, bv) {
    b.fn[e] = function(bw) {
      var bz = [],
        bC = b(bw),
        bB = this.length === 1 && this[0].parentNode;
      if (bB && bB.nodeType === 11 && bB.childNodes.length === 1 && bC.length === 1) {
        bC[bv](this[0]);
        return this
      } else {
        for (var bA = 0, bx = bC.length; bA < bx; bA++) {
          var by = (bA > 0 ? this.clone(true) : this)
            .get();
          b(bC[bA])[bv](by);
          bz = bz.concat(by)
        }
        return this.pushStack(bz, e, bC.selector)
      }
    }
  });

  function bh(e) {
    if (typeof e.getElementsByTagName !== "undefined") {
      return e.getElementsByTagName("*")
    } else {
      if (typeof e.querySelectorAll !== "undefined") {
        return e.querySelectorAll("*")
      } else {
        return []
      }
    }
  }

  function az(e) {
    if (e.type === "checkbox" || e.type === "radio") {
      e.defaultChecked = e.checked
    }
  }

  function D(e) {
    var bv = (e.nodeName || "")
      .toLowerCase();
    if (bv === "input") {
      az(e)
    } else {
      if (bv !== "script" && typeof e.getElementsByTagName !== "undefined") {
        b.grep(e.getElementsByTagName("input"), az)
      }
    }
  }

  function am(e) {
    var bv = av.createElement("div");
    ac.appendChild(bv);
    bv.innerHTML = e.outerHTML;
    return bv.firstChild
  }
  b.extend({
    clone: function(by, bA, bw) {
      var e, bv, bx, bz = b.support.html5Clone || b.isXMLDoc(by) || !ai.test("<" + by.nodeName + ">") ? by.cloneNode(true) : am(by);
      if ((!b.support.noCloneEvent || !b.support.noCloneChecked) && (by.nodeType === 1 || by.nodeType === 11) && !b.isXMLDoc(by)) {
        aj(by, bz);
        e = bh(by);
        bv = bh(bz);
        for (bx = 0; e[bx]; ++bx) {
          if (bv[bx]) {
            aj(e[bx], bv[bx])
          }
        }
      }
      if (bA) {
        s(by, bz);
        if (bw) {
          e = bh(by);
          bv = bh(bz);
          for (bx = 0; e[bx]; ++bx) {
            s(e[bx], bv[bx])
          }
        }
      }
      e = bv = null;
      return bz
    },
    clean: function(bI, bw, bv, bx) {
      var bA, bH, bD, bJ = [];
      bw = bw || av;
      if (typeof bw.createElement === "undefined") {
        bw = bw.ownerDocument || bw[0] && bw[0].ownerDocument || av
      }
      for (var bE = 0, bG;
        (bG = bI[bE]) != null; bE++) {
        if (typeof bG === "number") {
          bG += ""
        }
        if (!bG) {
          continue
        }
        if (typeof bG === "string") {
          if (!W.test(bG)) {
            bG = bw.createTextNode(bG)
          } else {
            bG = bG.replace(R, "<$1></$2>");
            var bN = (d.exec(bG) || ["", ""])[1].toLowerCase(),
              bz = ax[bN] || ax._default,
              bK = bz[0],
              bB = bw.createElement("div"),
              bL = ac.childNodes,
              bM;
            if (bw === av) {
              ac.appendChild(bB)
            } else {
              a(bw)
                .appendChild(bB)
            }
            bB.innerHTML = bz[1] + bG + bz[2];
            while (bK--) {
              bB = bB.lastChild
            }
            if (!b.support.tbody) {
              var by = v.test(bG),
                e = bN === "table" && !by ? bB.firstChild && bB.firstChild.childNodes : bz[1] === "<table>" && !by ? bB.childNodes : [];
              for (bD = e.length - 1; bD >= 0; --bD) {
                if (b.nodeName(e[bD], "tbody") && !e[bD].childNodes.length) {
                  e[bD].parentNode.removeChild(e[bD])
                }
              }
            }
            if (!b.support.leadingWhitespace && ar.test(bG)) {
              bB.insertBefore(bw.createTextNode(ar.exec(bG)[0]), bB.firstChild)
            }
            bG = bB.childNodes;
            if (bB) {
              bB.parentNode.removeChild(bB);
              if (bL.length > 0) {
                bM = bL[bL.length - 1];
                if (bM && bM.parentNode) {
                  bM.parentNode.removeChild(bM)
                }
              }
            }
          }
        }
        var bF;
        if (!b.support.appendChecked) {
          if (bG[0] && typeof(bF = bG.length) === "number") {
            for (bD = 0; bD < bF; bD++) {
              D(bG[bD])
            }
          } else {
            D(bG)
          }
        }
        if (bG.nodeType) {
          bJ.push(bG)
        } else {
          bJ = b.merge(bJ, bG)
        }
      }
      if (bv) {
        bA = function(bO) {
          return !bO.type || bn.test(bO.type)
        };
        for (bE = 0; bJ[bE]; bE++) {
          bH = bJ[bE];
          if (bx && b.nodeName(bH, "script") && (!bH.type || bn.test(bH.type))) {
            bx.push(bH.parentNode ? bH.parentNode.removeChild(bH) : bH)
          } else {
            if (bH.nodeType === 1) {
              var bC = b.grep(bH.getElementsByTagName("script"), bA);
              bJ.splice.apply(bJ, [bE + 1, 0].concat(bC))
            }
            bv.appendChild(bH)
          }
        }
      }
      return bJ
    },
    cleanData: function(bv) {
      var by, bw, e = b.cache,
        bB = b.event.special,
        bA = b.support.deleteExpando;
      for (var bz = 0, bx;
        (bx = bv[bz]) != null; bz++) {
        if (bx.nodeName && b.noData[bx.nodeName.toLowerCase()]) {
          continue
        }
        bw = bx[b.expando];
        if (bw) {
          by = e[bw];
          if (by && by.events) {
            for (var bC in by.events) {
              if (bB[bC]) {
                b.event.remove(bx, bC)
              } else {
                b.removeEvent(bx, bC, by.handle)
              }
            }
            if (by.handle) {
              by.handle.elem = null
            }
          }
          if (bA) {
            delete bx[b.expando]
          } else {
            if (bx.removeAttribute) {
              bx.removeAttribute(b.expando)
            }
          }
          delete e[bw]
        }
      }
    }
  });
  var al = /alpha\([^)]*\)/i,
    au = /opacity=([^)]*)/,
    y = /([A-Z]|^ms)/g,
    bo = /^[\-+]?(?:\d*\.)?\d+$/i,
    a1 = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
    I = /^([\-+])=([\-+.\de]+)/,
    aE = /^margin/,
    a9 = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    }, G = ["Top", "Right", "Bottom", "Left"],
    Z, aJ, aY;
  b.fn.css = function(e, bv) {
    return b.access(this, function(bx, bw, by) {
      return by !== L ? b.style(bx, bw, by) : b.css(bx, bw)
    }, e, bv, arguments.length > 1)
  };
  b.extend({
    cssHooks: {
      opacity: {
        get: function(bw, bv) {
          if (bv) {
            var e = Z(bw, "opacity");
            return e === "" ? "1" : e
          } else {
            return bw.style.opacity
          }
        }
      }
    },
    cssNumber: {
      fillOpacity: true,
      fontWeight: true,
      lineHeight: true,
      opacity: true,
      orphans: true,
      widows: true,
      zIndex: true,
      zoom: true
    },
    cssProps: {
      "float": b.support.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(bx, bw, bD, by) {
      if (!bx || bx.nodeType === 3 || bx.nodeType === 8 || !bx.style) {
        return
      }
      var bB, bC, bz = b.camelCase(bw),
        bv = bx.style,
        bE = b.cssHooks[bz];
      bw = b.cssProps[bz] || bz;
      if (bD !== L) {
        bC = typeof bD;
        if (bC === "string" && (bB = I.exec(bD))) {
          bD = (+(bB[1] + 1) * +bB[2]) + parseFloat(b.css(bx, bw));
          bC = "number"
        }
        if (bD == null || bC === "number" && isNaN(bD)) {
          return
        }
        if (bC === "number" && !b.cssNumber[bz]) {
          bD += "px"
        }
        if (!bE || !("set" in bE) || (bD = bE.set(bx, bD)) !== L) {
          try {
            bv[bw] = bD
          } catch (bA) {}
        }
      } else {
        if (bE && "get" in bE && (bB = bE.get(bx, false, by)) !== L) {
          return bB
        }
        return bv[bw]
      }
    },
    css: function(by, bx, bv) {
      var bw, e;
      bx = b.camelCase(bx);
      e = b.cssHooks[bx];
      bx = b.cssProps[bx] || bx;
      if (bx === "cssFloat") {
        bx = "float"
      }
      if (e && "get" in e && (bw = e.get(by, true, bv)) !== L) {
        return bw
      } else {
        if (Z) {
          return Z(by, bx)
        }
      }
    },
    swap: function(by, bx, bz) {
      var e = {}, bw, bv;
      for (bv in bx) {
        e[bv] = by.style[bv];
        by.style[bv] = bx[bv]
      }
      bw = bz.call(by);
      for (bv in bx) {
        by.style[bv] = e[bv]
      }
      return bw
    }
  });
  b.curCSS = b.css;
  if (av.defaultView && av.defaultView.getComputedStyle) {
    aJ = function(bA, bw) {
      var bv, bz, e, by, bx = bA.style;
      bw = bw.replace(y, "-$1")
        .toLowerCase();
      if ((bz = bA.ownerDocument.defaultView) && (e = bz.getComputedStyle(bA, null))) {
        bv = e.getPropertyValue(bw);
        if (bv === "" && !b.contains(bA.ownerDocument.documentElement, bA)) {
          bv = b.style(bA, bw)
        }
      }
      if (!b.support.pixelMargin && e && aE.test(bw) && a1.test(bv)) {
        by = bx.width;
        bx.width = bv;
        bv = e.width;
        bx.width = by
      }
      return bv
    }
  }
  if (av.documentElement.currentStyle) {
    aY = function(bz, bw) {
      var bA, e, by, bv = bz.currentStyle && bz.currentStyle[bw],
        bx = bz.style;
      if (bv == null && bx && (by = bx[bw])) {
        bv = by
      }
      if (a1.test(bv)) {
        bA = bx.left;
        e = bz.runtimeStyle && bz.runtimeStyle.left;
        if (e) {
          bz.runtimeStyle.left = bz.currentStyle.left
        }
        bx.left = bw === "fontSize" ? "1em" : bv;
        bv = bx.pixelLeft + "px";
        bx.left = bA;
        if (e) {
          bz.runtimeStyle.left = e
        }
      }
      return bv === "" ? "auto" : bv
    }
  }
  Z = aJ || aY;

  function af(by, bw, bv) {
    var bz = bw === "width" ? by.offsetWidth : by.offsetHeight,
      bx = bw === "width" ? 1 : 0,
      e = 4;
    if (bz > 0) {
      if (bv !== "border") {
        for (; bx < e; bx += 2) {
          if (!bv) {
            bz -= parseFloat(b.css(by, "padding" + G[bx])) || 0
          }
          if (bv === "margin") {
            bz += parseFloat(b.css(by, bv + G[bx])) || 0
          } else {
            bz -= parseFloat(b.css(by, "border" + G[bx] + "Width")) || 0
          }
        }
      }
      return bz + "px"
    }
    bz = Z(by, bw);
    if (bz < 0 || bz == null) {
      bz = by.style[bw]
    }
    if (a1.test(bz)) {
      return bz
    }
    bz = parseFloat(bz) || 0;
    if (bv) {
      for (; bx < e; bx += 2) {
        bz += parseFloat(b.css(by, "padding" + G[bx])) || 0;
        if (bv !== "padding") {
          bz += parseFloat(b.css(by, "border" + G[bx] + "Width")) || 0
        }
        if (bv === "margin") {
          bz += parseFloat(b.css(by, bv + G[bx])) || 0
        }
      }
    }
    return bz + "px"
  }
  b.each(["height", "width"], function(bv, e) {
    b.cssHooks[e] = {
      get: function(by, bx, bw) {
        if (bx) {
          if (by.offsetWidth !== 0) {
            return af(by, e, bw)
          } else {
            return b.swap(by, a9, function() {
              return af(by, e, bw)
            })
          }
        }
      },
      set: function(bw, bx) {
        return bo.test(bx) ? bx + "px" : bx
      }
    }
  });
  if (!b.support.opacity) {
    b.cssHooks.opacity = {
      get: function(bv, e) {
        return au.test((e && bv.currentStyle ? bv.currentStyle.filter : bv.style.filter) || "") ? (parseFloat(RegExp.$1) / 100) + "" : e ? "1" : ""
      },
      set: function(by, bz) {
        var bx = by.style,
          bv = by.currentStyle,
          e = b.isNumeric(bz) ? "alpha(opacity=" + bz * 100 + ")" : "",
          bw = bv && bv.filter || bx.filter || "";
        bx.zoom = 1;
        if (bz >= 1 && b.trim(bw.replace(al, "")) === "") {
          bx.removeAttribute("filter");
          if (bv && !bv.filter) {
            return
          }
        }
        bx.filter = al.test(bw) ? bw.replace(al, e) : bw + " " + e
      }
    }
  }
  b(function() {
    if (!b.support.reliableMarginRight) {
      b.cssHooks.marginRight = {
        get: function(bv, e) {
          return b.swap(bv, {
            display: "inline-block"
          }, function() {
            if (e) {
              return Z(bv, "margin-right")
            } else {
              return bv.style.marginRight
            }
          })
        }
      }
    }
  });
  if (b.expr && b.expr.filters) {
    b.expr.filters.hidden = function(bw) {
      var bv = bw.offsetWidth,
        e = bw.offsetHeight;
      return (bv === 0 && e === 0) || (!b.support.reliableHiddenOffsets && ((bw.style && bw.style.display) || b.css(bw, "display")) === "none")
    };
    b.expr.filters.visible = function(e) {
      return !b.expr.filters.hidden(e)
    }
  }
  b.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(e, bv) {
    b.cssHooks[e + bv] = {
      expand: function(by) {
        var bx, bz = typeof by === "string" ? by.split(" ") : [by],
          bw = {};
        for (bx = 0; bx < 4; bx++) {
          bw[e + G[bx] + bv] = bz[bx] || bz[bx - 2] || bz[0]
        }
        return bw
      }
    }
  });
  var k = /%20/g,
    ap = /\[\]$/,
    bs = /\r?\n/g,
    bq = /#.*$/,
    aD = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
    a0 = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    aN = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
    aR = /^(?:GET|HEAD)$/,
    c = /^\/\//,
    M = /\?/,
    a7 = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    p = /^(?:select|textarea)/i,
    h = /\s+/,
    br = /([?&])_=[^&]*/,
    K = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    z = b.fn.load,
    aa = {}, q = {}, aF, r, aW = ["*/"] + ["*"];
  try {
    aF = bm.href
  } catch (aw) {
    aF = av.createElement("a");
    aF.href = "";
    aF = aF.href
  }
  r = K.exec(aF.toLowerCase()) || [];

  function f(e) {
    return function(by, bA) {
      if (typeof by !== "string") {
        bA = by;
        by = "*"
      }
      if (b.isFunction(bA)) {
        var bx = by.toLowerCase()
          .split(h),
          bw = 0,
          bz = bx.length,
          bv, bB, bC;
        for (; bw < bz; bw++) {
          bv = bx[bw];
          bC = /^\+/.test(bv);
          if (bC) {
            bv = bv.substr(1) || "*"
          }
          bB = e[bv] = e[bv] || [];
          bB[bC ? "unshift" : "push"](bA)
        }
      }
    }
  }

  function aX(bv, bE, bz, bD, bB, bx) {
    bB = bB || bE.dataTypes[0];
    bx = bx || {};
    bx[bB] = true;
    var bA = bv[bB],
      bw = 0,
      e = bA ? bA.length : 0,
      by = (bv === aa),
      bC;
    for (; bw < e && (by || !bC); bw++) {
      bC = bA[bw](bE, bz, bD);
      if (typeof bC === "string") {
        if (!by || bx[bC]) {
          bC = L
        } else {
          bE.dataTypes.unshift(bC);
          bC = aX(bv, bE, bz, bD, bC, bx)
        }
      }
    }
    if ((by || !bC) && !bx["*"]) {
      bC = aX(bv, bE, bz, bD, "*", bx)
    }
    return bC
  }

  function an(bw, bx) {
    var bv, e, by = b.ajaxSettings.flatOptions || {};
    for (bv in bx) {
      if (bx[bv] !== L) {
        (by[bv] ? bw : (e || (e = {})))[bv] = bx[bv]
      }
    }
    if (e) {
      b.extend(true, bw, e)
    }
  }
  b.fn.extend({
    load: function(bw, bz, bA) {
      if (typeof bw !== "string" && z) {
        return z.apply(this, arguments)
      } else {
        if (!this.length) {
          return this
        }
      }
      var by = bw.indexOf(" ");
      if (by >= 0) {
        var e = bw.slice(by, bw.length);
        bw = bw.slice(0, by)
      }
      var bx = "GET";
      if (bz) {
        if (b.isFunction(bz)) {
          bA = bz;
          bz = L
        } else {
          if (typeof bz === "object") {
            bz = b.param(bz, b.ajaxSettings.traditional);
            bx = "POST"
          }
        }
      }
      var bv = this;
      b.ajax({
        url: bw,
        type: bx,
        dataType: "html",
        data: bz,
        complete: function(bC, bB, bD) {
          bD = bC.responseText;
          if (bC.isResolved()) {
            bC.done(function(bE) {
              bD = bE
            });
            bv.html(e ? b("<div>")
              .append(bD.replace(a7, ""))
              .find(e) : bD)
          }
          if (bA) {
            bv.each(bA, [bD, bB, bC])
          }
        }
      });
      return this
    },
    serialize: function() {
      return b.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        return this.elements ? b.makeArray(this.elements) : this
      })
        .filter(function() {
          return this.name && !this.disabled && (this.checked || p.test(this.nodeName) || a0.test(this.type))
        })
        .map(function(e, bv) {
          var bw = b(this)
            .val();
          return bw == null ? null : b.isArray(bw) ? b.map(bw, function(by, bx) {
            return {
              name: bv.name,
              value: by.replace(bs, "\r\n")
            }
          }) : {
            name: bv.name,
            value: bw.replace(bs, "\r\n")
          }
        })
        .get()
    }
  });
  b.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, bv) {
    b.fn[bv] = function(bw) {
      return this.on(bv, bw)
    }
  });
  b.each(["get", "post"], function(e, bv) {
    b[bv] = function(bw, by, bz, bx) {
      if (b.isFunction(by)) {
        bx = bx || bz;
        bz = by;
        by = L
      }
      return b.ajax({
        type: bv,
        url: bw,
        data: by,
        success: bz,
        dataType: bx
      })
    }
  });
  b.extend({
    getScript: function(e, bv) {
      return b.get(e, L, bv, "script")
    },
    getJSON: function(e, bv, bw) {
      return b.get(e, bv, bw, "json")
    },
    ajaxSetup: function(bv, e) {
      if (e) {
        an(bv, b.ajaxSettings)
      } else {
        e = bv;
        bv = b.ajaxSettings
      }
      an(bv, e);
      return bv
    },
    ajaxSettings: {
      url: aF,
      isLocal: aN.test(r[1]),
      global: true,
      type: "GET",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      processData: true,
      async: true,
      accepts: {
        xml: "application/xml, text/xml",
        html: "text/html",
        text: "text/plain",
        json: "application/json, text/javascript",
        "*": aW
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText"
      },
      converters: {
        "* text": bd.String,
        "text html": true,
        "text json": b.parseJSON,
        "text xml": b.parseXML
      },
      flatOptions: {
        context: true,
        url: true
      }
    },
    ajaxPrefilter: f(aa),
    ajaxTransport: f(q),
    ajax: function(bz, bx) {
      if (typeof bz === "object") {
        bx = bz;
        bz = L
      }
      bx = bx || {};
      var bD = b.ajaxSetup({}, bx),
        bS = bD.context || bD,
        bG = bS !== bD && (bS.nodeType || bS instanceof b) ? b(bS) : b.event,
        bR = b.Deferred(),
        bN = b.Callbacks("once memory"),
        bB = bD.statusCode || {}, bC, bH = {}, bO = {}, bQ, by, bL, bE, bI, bA = 0,
        bw, bK, bJ = {
          readyState: 0,
          setRequestHeader: function(bT, bU) {
            if (!bA) {
              var e = bT.toLowerCase();
              bT = bO[e] = bO[e] || bT;
              bH[bT] = bU
            }
            return this
          },
          getAllResponseHeaders: function() {
            return bA === 2 ? bQ : null
          },
          getResponseHeader: function(bT) {
            var e;
            if (bA === 2) {
              if (!by) {
                by = {};
                while ((e = aD.exec(bQ))) {
                  by[e[1].toLowerCase()] = e[2]
                }
              }
              e = by[bT.toLowerCase()]
            }
            return e === L ? null : e
          },
          overrideMimeType: function(e) {
            if (!bA) {
              bD.mimeType = e
            }
            return this
          },
          abort: function(e) {
            e = e || "abort";
            if (bL) {
              bL.abort(e)
            }
            bF(0, e);
            return this
          }
        };

      function bF(bZ, bU, b0, bW) {
        if (bA === 2) {
          return
        }
        bA = 2;
        if (bE) {
          clearTimeout(bE)
        }
        bL = L;
        bQ = bW || "";
        bJ.readyState = bZ > 0 ? 4 : 0;
        var bT, b4, b3, bX = bU,
          bY = b0 ? bk(bD, bJ, b0) : L,
          bV, b2;
        if (bZ >= 200 && bZ < 300 || bZ === 304) {
          if (bD.ifModified) {
            if ((bV = bJ.getResponseHeader("Last-Modified"))) {
              b.lastModified[bC] = bV
            }
            if ((b2 = bJ.getResponseHeader("Etag"))) {
              b.etag[bC] = b2
            }
          }
          if (bZ === 304) {
            bX = "notmodified";
            bT = true
          } else {
            try {
              b4 = F(bD, bY);
              bX = "success";
              bT = true
            } catch (b1) {
              bX = "parsererror";
              b3 = b1
            }
          }
        } else {
          b3 = bX;
          if (!bX || bZ) {
            bX = "error";
            if (bZ < 0) {
              bZ = 0
            }
          }
        }
        bJ.status = bZ;
        bJ.statusText = "" + (bU || bX);
        if (bT) {
          bR.resolveWith(bS, [b4, bX, bJ])
        } else {
          bR.rejectWith(bS, [bJ, bX, b3])
        }
        bJ.statusCode(bB);
        bB = L;
        if (bw) {
          bG.trigger("ajax" + (bT ? "Success" : "Error"), [bJ, bD, bT ? b4 : b3])
        }
        bN.fireWith(bS, [bJ, bX]);
        if (bw) {
          bG.trigger("ajaxComplete", [bJ, bD]);
          if (!(--b.active)) {
            b.event.trigger("ajaxStop")
          }
        }
      }
      bR.promise(bJ);
      bJ.success = bJ.done;
      bJ.error = bJ.fail;
      bJ.complete = bN.add;
      bJ.statusCode = function(bT) {
        if (bT) {
          var e;
          if (bA < 2) {
            for (e in bT) {
              bB[e] = [bB[e], bT[e]]
            }
          } else {
            e = bT[bJ.status];
            bJ.then(e, e)
          }
        }
        return this
      };
      bD.url = ((bz || bD.url) + "")
        .replace(bq, "")
        .replace(c, r[1] + "//");
      bD.dataTypes = b.trim(bD.dataType || "*")
        .toLowerCase()
        .split(h);
      if (bD.crossDomain == null) {
        bI = K.exec(bD.url.toLowerCase());
        bD.crossDomain = !! (bI && (bI[1] != r[1] || bI[2] != r[2] || (bI[3] || (bI[1] === "http:" ? 80 : 443)) != (r[3] || (r[1] === "http:" ? 80 : 443))))
      }
      if (bD.data && bD.processData && typeof bD.data !== "string") {
        bD.data = b.param(bD.data, bD.traditional)
      }
      aX(aa, bD, bx, bJ);
      if (bA === 2) {
        return false
      }
      bw = bD.global;
      bD.type = bD.type.toUpperCase();
      bD.hasContent = !aR.test(bD.type);
      if (bw && b.active++ === 0) {
        b.event.trigger("ajaxStart")
      }
      if (!bD.hasContent) {
        if (bD.data) {
          bD.url += (M.test(bD.url) ? "&" : "?") + bD.data;
          delete bD.data
        }
        bC = bD.url;
        if (bD.cache === false) {
          var bv = b.now(),
            bP = bD.url.replace(br, "$1_=" + bv);
          bD.url = bP + ((bP === bD.url) ? (M.test(bD.url) ? "&" : "?") + "_=" + bv : "")
        }
      }
      if (bD.data && bD.hasContent && bD.contentType !== false || bx.contentType) {
        bJ.setRequestHeader("Content-Type", bD.contentType)
      }
      if (bD.ifModified) {
        bC = bC || bD.url;
        if (b.lastModified[bC]) {
          bJ.setRequestHeader("If-Modified-Since", b.lastModified[bC])
        }
        if (b.etag[bC]) {
          bJ.setRequestHeader("If-None-Match", b.etag[bC])
        }
      }
      bJ.setRequestHeader("Accept", bD.dataTypes[0] && bD.accepts[bD.dataTypes[0]] ? bD.accepts[bD.dataTypes[0]] + (bD.dataTypes[0] !== "*" ? ", " + aW + "; q=0.01" : "") : bD.accepts["*"]);
      for (bK in bD.headers) {
        bJ.setRequestHeader(bK, bD.headers[bK])
      }
      if (bD.beforeSend && (bD.beforeSend.call(bS, bJ, bD) === false || bA === 2)) {
        bJ.abort();
        return false
      }
      for (bK in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        bJ[bK](bD[bK])
      }
      bL = aX(q, bD, bx, bJ);
      if (!bL) {
        bF(-1, "No Transport")
      } else {
        bJ.readyState = 1;
        if (bw) {
          bG.trigger("ajaxSend", [bJ, bD])
        }
        if (bD.async && bD.timeout > 0) {
          bE = setTimeout(function() {
            bJ.abort("timeout")
          }, bD.timeout)
        }
        try {
          bA = 1;
          bL.send(bH, bF)
        } catch (bM) {
          if (bA < 2) {
            bF(-1, bM)
          } else {
            throw bM
          }
        }
      }
      return bJ
    },
    param: function(e, bw) {
      var bv = [],
        by = function(bz, bA) {
          bA = b.isFunction(bA) ? bA() : bA;
          bv[bv.length] = encodeURIComponent(bz) + "=" + encodeURIComponent(bA)
        };
      if (bw === L) {
        bw = b.ajaxSettings.traditional
      }
      if (b.isArray(e) || (e.jquery && !b.isPlainObject(e))) {
        b.each(e, function() {
          by(this.name, this.value)
        })
      } else {
        for (var bx in e) {
          u(bx, e[bx], bw, by)
        }
      }
      return bv.join("&")
        .replace(k, "+")
    }
  });

  function u(bw, by, bv, bx) {
    if (b.isArray(by)) {
      b.each(by, function(bA, bz) {
        if (bv || ap.test(bw)) {
          bx(bw, bz)
        } else {
          u(bw + "[" + (typeof bz === "object" ? bA : "") + "]", bz, bv, bx)
        }
      })
    } else {
      if (!bv && b.type(by) === "object") {
        for (var e in by) {
          u(bw + "[" + e + "]", by[e], bv, bx)
        }
      } else {
        bx(bw, by)
      }
    }
  }
  b.extend({
    active: 0,
    lastModified: {},
    etag: {}
  });

  function bk(bD, bC, bz) {
    var bv = bD.contents,
      bB = bD.dataTypes,
      bw = bD.responseFields,
      by, bA, bx, e;
    for (bA in bw) {
      if (bA in bz) {
        bC[bw[bA]] = bz[bA]
      }
    }
    while (bB[0] === "*") {
      bB.shift();
      if (by === L) {
        by = bD.mimeType || bC.getResponseHeader("content-type")
      }
    }
    if (by) {
      for (bA in bv) {
        if (bv[bA] && bv[bA].test(by)) {
          bB.unshift(bA);
          break
        }
      }
    }
    if (bB[0] in bz) {
      bx = bB[0]
    } else {
      for (bA in bz) {
        if (!bB[0] || bD.converters[bA + " " + bB[0]]) {
          bx = bA;
          break
        }
        if (!e) {
          e = bA
        }
      }
      bx = bx || e
    } if (bx) {
      if (bx !== bB[0]) {
        bB.unshift(bx)
      }
      return bz[bx]
    }
  }

  function F(bH, bz) {
    if (bH.dataFilter) {
      bz = bH.dataFilter(bz, bH.dataType)
    }
    var bD = bH.dataTypes,
      bG = {}, bA, bE, bw = bD.length,
      bB, bC = bD[0],
      bx, by, bF, bv, e;
    for (bA = 1; bA < bw; bA++) {
      if (bA === 1) {
        for (bE in bH.converters) {
          if (typeof bE === "string") {
            bG[bE.toLowerCase()] = bH.converters[bE]
          }
        }
      }
      bx = bC;
      bC = bD[bA];
      if (bC === "*") {
        bC = bx
      } else {
        if (bx !== "*" && bx !== bC) {
          by = bx + " " + bC;
          bF = bG[by] || bG["* " + bC];
          if (!bF) {
            e = L;
            for (bv in bG) {
              bB = bv.split(" ");
              if (bB[0] === bx || bB[0] === "*") {
                e = bG[bB[1] + " " + bC];
                if (e) {
                  bv = bG[bv];
                  if (bv === true) {
                    bF = e
                  } else {
                    if (e === true) {
                      bF = bv
                    }
                  }
                  break
                }
              }
            }
          }
          if (!(bF || e)) {
            b.error("No conversion from " + by.replace(" ", " to "))
          }
          if (bF !== true) {
            bz = bF ? bF(bz) : e(bv(bz))
          }
        }
      }
    }
    return bz
  }
  var aC = b.now(),
    t = /(\=)\?(&|$)|\?\?/i;
  b.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      return b.expando + "_" + (aC++)
    }
  });
  b.ajaxPrefilter("json jsonp", function(bD, bA, bC) {
    var bx = (typeof bD.data === "string") && /^application\/x\-www\-form\-urlencoded/.test(bD.contentType);
    if (bD.dataTypes[0] === "jsonp" || bD.jsonp !== false && (t.test(bD.url) || bx && t.test(bD.data))) {
      var bB, bw = bD.jsonpCallback = b.isFunction(bD.jsonpCallback) ? bD.jsonpCallback() : bD.jsonpCallback,
        bz = bd[bw],
        e = bD.url,
        by = bD.data,
        bv = "$1" + bw + "$2";
      if (bD.jsonp !== false) {
        e = e.replace(t, bv);
        if (bD.url === e) {
          if (bx) {
            by = by.replace(t, bv)
          }
          if (bD.data === by) {
            e += (/\?/.test(e) ? "&" : "?") + bD.jsonp + "=" + bw
          }
        }
      }
      bD.url = e;
      bD.data = by;
      bd[bw] = function(bE) {
        bB = [bE]
      };
      bC.always(function() {
        bd[bw] = bz;
        if (bB && b.isFunction(bz)) {
          bd[bw](bB[0])
        }
      });
      bD.converters["script json"] = function() {
        if (!bB) {
          b.error(bw + " was not called")
        }
        return bB[0]
      };
      bD.dataTypes[0] = "json";
      return "script"
    }
  });
  b.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /javascript|ecmascript/
    },
    converters: {
      "text script": function(e) {
        b.globalEval(e);
        return e
      }
    }
  });
  b.ajaxPrefilter("script", function(e) {
    if (e.cache === L) {
      e.cache = false
    }
    if (e.crossDomain) {
      e.type = "GET";
      e.global = false
    }
  });
  b.ajaxTransport("script", function(bw) {
    if (bw.crossDomain) {
      var e, bv = av.head || av.getElementsByTagName("head")[0] || av.documentElement;
      return {
        send: function(bx, by) {
          e = av.createElement("script");
          e.async = "async";
          if (bw.scriptCharset) {
            e.charset = bw.scriptCharset
          }
          e.src = bw.url;
          e.onload = e.onreadystatechange = function(bA, bz) {
            if (bz || !e.readyState || /loaded|complete/.test(e.readyState)) {
              e.onload = e.onreadystatechange = null;
              if (bv && e.parentNode) {
                bv.removeChild(e)
              }
              e = L;
              if (!bz) {
                by(200, "success")
              }
            }
          };
          bv.insertBefore(e, bv.firstChild)
        },
        abort: function() {
          if (e) {
            e.onload(0, 1)
          }
        }
      }
    }
  });
  var A = bd.ActiveXObject ? function() {
      for (var e in N) {
        N[e](0, 1)
      }
    } : false,
    x = 0,
    N;

  function aM() {
    try {
      return new bd.XMLHttpRequest()
    } catch (bv) {}
  }

  function ak() {
    try {
      return new bd.ActiveXObject("Microsoft.XMLHTTP")
    } catch (bv) {}
  }
  b.ajaxSettings.xhr = bd.ActiveXObject ? function() {
    return !this.isLocal && aM() || ak()
  } : aM;
  (function(e) {
    b.extend(b.support, {
      ajax: !! e,
      cors: !! e && ("withCredentials" in e)
    })
  })(b.ajaxSettings.xhr());
  if (b.support.ajax) {
    b.ajaxTransport(function(e) {
      if (!e.crossDomain || b.support.cors) {
        var bv;
        return {
          send: function(bB, bw) {
            var bA = e.xhr(),
              bz, by;
            if (e.username) {
              bA.open(e.type, e.url, e.async, e.username, e.password)
            } else {
              bA.open(e.type, e.url, e.async)
            } if (e.xhrFields) {
              for (by in e.xhrFields) {
                bA[by] = e.xhrFields[by]
              }
            }
            if (e.mimeType && bA.overrideMimeType) {
              bA.overrideMimeType(e.mimeType)
            }
            if (!e.crossDomain && !bB["X-Requested-With"]) {
              bB["X-Requested-With"] = "XMLHttpRequest"
            }
            try {
              for (by in bB) {
                bA.setRequestHeader(by, bB[by])
              }
            } catch (bx) {}
            bA.send((e.hasContent && e.data) || null);
            bv = function(bK, bE) {
              var bF, bD, bC, bI, bH;
              try {
                if (bv && (bE || bA.readyState === 4)) {
                  bv = L;
                  if (bz) {
                    bA.onreadystatechange = b.noop;
                    if (A) {
                      delete N[bz]
                    }
                  }
                  if (bE) {
                    if (bA.readyState !== 4) {
                      bA.abort()
                    }
                  } else {
                    bF = bA.status;
                    bC = bA.getAllResponseHeaders();
                    bI = {};
                    bH = bA.responseXML;
                    if (bH && bH.documentElement) {
                      bI.xml = bH
                    }
                    try {
                      bI.text = bA.responseText
                    } catch (bK) {}
                    try {
                      bD = bA.statusText
                    } catch (bJ) {
                      bD = ""
                    }
                    if (!bF && e.isLocal && !e.crossDomain) {
                      bF = bI.text ? 200 : 404
                    } else {
                      if (bF === 1223) {
                        bF = 204
                      }
                    }
                  }
                }
              } catch (bG) {
                if (!bE) {
                  bw(-1, bG)
                }
              }
              if (bI) {
                bw(bF, bD, bI, bC)
              }
            };
            if (!e.async || bA.readyState === 4) {
              bv()
            } else {
              bz = ++x;
              if (A) {
                if (!N) {
                  N = {};
                  b(bd)
                    .unload(A)
                }
                N[bz] = bv
              }
              bA.onreadystatechange = bv
            }
          },
          abort: function() {
            if (bv) {
              bv(0, 1)
            }
          }
        }
      }
    })
  }
  var Q = {}, ba, m, aB = /^(?:toggle|show|hide)$/,
    aU = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
    a4, aI = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]],
    a5;
  b.fn.extend({
    show: function(bx, bA, bz) {
      var bw, by;
      if (bx || bx === 0) {
        return this.animate(a2("show", 3), bx, bA, bz)
      } else {
        for (var bv = 0, e = this.length; bv < e; bv++) {
          bw = this[bv];
          if (bw.style) {
            by = bw.style.display;
            if (!b._data(bw, "olddisplay") && by === "none") {
              by = bw.style.display = ""
            }
            if ((by === "" && b.css(bw, "display") === "none") || !b.contains(bw.ownerDocument.documentElement, bw)) {
              b._data(bw, "olddisplay", w(bw.nodeName))
            }
          }
        }
        for (bv = 0; bv < e; bv++) {
          bw = this[bv];
          if (bw.style) {
            by = bw.style.display;
            if (by === "" || by === "none") {
              bw.style.display = b._data(bw, "olddisplay") || ""
            }
          }
        }
        return this
      }
    },
    hide: function(bx, bA, bz) {
      if (bx || bx === 0) {
        return this.animate(a2("hide", 3), bx, bA, bz)
      } else {
        var bw, by, bv = 0,
          e = this.length;
        for (; bv < e; bv++) {
          bw = this[bv];
          if (bw.style) {
            by = b.css(bw, "display");
            if (by !== "none" && !b._data(bw, "olddisplay")) {
              b._data(bw, "olddisplay", by)
            }
          }
        }
        for (bv = 0; bv < e; bv++) {
          if (this[bv].style) {
            this[bv].style.display = "none"
          }
        }
        return this
      }
    },
    _toggle: b.fn.toggle,
    toggle: function(bw, bv, bx) {
      var e = typeof bw === "boolean";
      if (b.isFunction(bw) && b.isFunction(bv)) {
        this._toggle.apply(this, arguments)
      } else {
        if (bw == null || e) {
          this.each(function() {
            var by = e ? bw : b(this)
              .is(":hidden");
            b(this)[by ? "show" : "hide"]()
          })
        } else {
          this.animate(a2("toggle", 3), bw, bv, bx)
        }
      }
      return this
    },
    fadeTo: function(e, bx, bw, bv) {
      return this.filter(":hidden")
        .css("opacity", 0)
        .show()
        .end()
        .animate({
          opacity: bx
        }, e, bw, bv)
    },
    animate: function(bz, bw, by, bx) {
      var e = b.speed(bw, by, bx);
      if (b.isEmptyObject(bz)) {
        return this.each(e.complete, [false])
      }
      bz = b.extend({}, bz);

      function bv() {
        if (e.queue === false) {
          b._mark(this)
        }
        var bE = b.extend({}, e),
          bL = this.nodeType === 1,
          bJ = bL && b(this)
            .is(":hidden"),
          bB, bG, bD, bK, bN, bF, bI, bC, bH, bM, bA;
        bE.animatedProperties = {};
        for (bD in bz) {
          bB = b.camelCase(bD);
          if (bD !== bB) {
            bz[bB] = bz[bD];
            delete bz[bD]
          }
          if ((bN = b.cssHooks[bB]) && "expand" in bN) {
            bF = bN.expand(bz[bB]);
            delete bz[bB];
            for (bD in bF) {
              if (!(bD in bz)) {
                bz[bD] = bF[bD]
              }
            }
          }
        }
        for (bB in bz) {
          bG = bz[bB];
          if (b.isArray(bG)) {
            bE.animatedProperties[bB] = bG[1];
            bG = bz[bB] = bG[0]
          } else {
            bE.animatedProperties[bB] = bE.specialEasing && bE.specialEasing[bB] || bE.easing || "swing"
          } if (bG === "hide" && bJ || bG === "show" && !bJ) {
            return bE.complete.call(this)
          }
          if (bL && (bB === "height" || bB === "width")) {
            bE.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
            if (b.css(this, "display") === "inline" && b.css(this, "float") === "none") {
              if (!b.support.inlineBlockNeedsLayout || w(this.nodeName) === "inline") {
                this.style.display = "inline-block"
              } else {
                this.style.zoom = 1
              }
            }
          }
        }
        if (bE.overflow != null) {
          this.style.overflow = "hidden"
        }
        for (bD in bz) {
          bK = new b.fx(this, bE, bD);
          bG = bz[bD];
          if (aB.test(bG)) {
            bA = b._data(this, "toggle" + bD) || (bG === "toggle" ? bJ ? "show" : "hide" : 0);
            if (bA) {
              b._data(this, "toggle" + bD, bA === "show" ? "hide" : "show");
              bK[bA]()
            } else {
              bK[bG]()
            }
          } else {
            bI = aU.exec(bG);
            bC = bK.cur();
            if (bI) {
              bH = parseFloat(bI[2]);
              bM = bI[3] || (b.cssNumber[bD] ? "" : "px");
              if (bM !== "px") {
                b.style(this, bD, (bH || 1) + bM);
                bC = ((bH || 1) / bK.cur()) * bC;
                b.style(this, bD, bC + bM)
              }
              if (bI[1]) {
                bH = ((bI[1] === "-=" ? -1 : 1) * bH) + bC
              }
              bK.custom(bC, bH, bM)
            } else {
              bK.custom(bC, bG, "")
            }
          }
        }
        return true
      }
      return e.queue === false ? this.each(bv) : this.queue(e.queue, bv)
    },
    stop: function(bw, bv, e) {
      if (typeof bw !== "string") {
        e = bv;
        bv = bw;
        bw = L
      }
      if (bv && bw !== false) {
        this.queue(bw || "fx", [])
      }
      return this.each(function() {
        var bx, by = false,
          bA = b.timers,
          bz = b._data(this);
        if (!e) {
          b._unmark(true, this)
        }

        function bB(bE, bF, bD) {
          var bC = bF[bD];
          b.removeData(bE, bD, true);
          bC.stop(e)
        }
        if (bw == null) {
          for (bx in bz) {
            if (bz[bx] && bz[bx].stop && bx.indexOf(".run") === bx.length - 4) {
              bB(this, bz, bx)
            }
          }
        } else {
          if (bz[bx = bw + ".run"] && bz[bx].stop) {
            bB(this, bz, bx)
          }
        }
        for (bx = bA.length; bx--;) {
          if (bA[bx].elem === this && (bw == null || bA[bx].queue === bw)) {
            if (e) {
              bA[bx](true)
            } else {
              bA[bx].saveState()
            }
            by = true;
            bA.splice(bx, 1)
          }
        }
        if (!(e && by)) {
          b.dequeue(this, bw)
        }
      })
    }
  });

  function bi() {
    setTimeout(at, 0);
    return (a5 = b.now())
  }

  function at() {
    a5 = L
  }

  function a2(bv, e) {
    var bw = {};
    b.each(aI.concat.apply([], aI.slice(0, e)), function() {
      bw[this] = bv
    });
    return bw
  }
  b.each({
    slideDown: a2("show", 1),
    slideUp: a2("hide", 1),
    slideToggle: a2("toggle", 1),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function(e, bv) {
    b.fn[e] = function(bw, by, bx) {
      return this.animate(bv, bw, by, bx)
    }
  });
  b.extend({
    speed: function(bw, bx, bv) {
      var e = bw && typeof bw === "object" ? b.extend({}, bw) : {
        complete: bv || !bv && bx || b.isFunction(bw) && bw,
        duration: bw,
        easing: bv && bx || bx && !b.isFunction(bx) && bx
      };
      e.duration = b.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in b.fx.speeds ? b.fx.speeds[e.duration] : b.fx.speeds._default;
      if (e.queue == null || e.queue === true) {
        e.queue = "fx"
      }
      e.old = e.complete;
      e.complete = function(by) {
        if (b.isFunction(e.old)) {
          e.old.call(this)
        }
        if (e.queue) {
          b.dequeue(this, e.queue)
        } else {
          if (by !== false) {
            b._unmark(this)
          }
        }
      };
      return e
    },
    easing: {
      linear: function(e) {
        return e
      },
      swing: function(e) {
        return (-Math.cos(e * Math.PI) / 2) + 0.5
      }
    },
    timers: [],
    fx: function(bv, e, bw) {
      this.options = e;
      this.elem = bv;
      this.prop = bw;
      e.orig = e.orig || {}
    }
  });
  b.fx.prototype = {
    update: function() {
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this)
      }(b.fx.step[this.prop] || b.fx.step._default)(this)
    },
    cur: function() {
      if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
        return this.elem[this.prop]
      }
      var e, bv = b.css(this.elem, this.prop);
      return isNaN(e = parseFloat(bv)) ? !bv || bv === "auto" ? 0 : bv : e
    },
    custom: function(bz, by, bx) {
      var e = this,
        bw = b.fx;
      this.startTime = a5 || bi();
      this.end = by;
      this.now = this.start = bz;
      this.pos = this.state = 0;
      this.unit = bx || this.unit || (b.cssNumber[this.prop] ? "" : "px");

      function bv(bA) {
        return e.step(bA)
      }
      bv.queue = this.options.queue;
      bv.elem = this.elem;
      bv.saveState = function() {
        if (b._data(e.elem, "fxshow" + e.prop) === L) {
          if (e.options.hide) {
            b._data(e.elem, "fxshow" + e.prop, e.start)
          } else {
            if (e.options.show) {
              b._data(e.elem, "fxshow" + e.prop, e.end)
            }
          }
        }
      };
      if (bv() && b.timers.push(bv) && !a4) {
        a4 = setInterval(bw.tick, bw.interval)
      }
    },
    show: function() {
      var e = b._data(this.elem, "fxshow" + this.prop);
      this.options.orig[this.prop] = e || b.style(this.elem, this.prop);
      this.options.show = true;
      if (e !== L) {
        this.custom(this.cur(), e)
      } else {
        this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur())
      }
      b(this.elem)
        .show()
    },
    hide: function() {
      this.options.orig[this.prop] = b._data(this.elem, "fxshow" + this.prop) || b.style(this.elem, this.prop);
      this.options.hide = true;
      this.custom(this.cur(), 0)
    },
    step: function(by) {
      var bA, bB, bv, bx = a5 || bi(),
        e = true,
        bz = this.elem,
        bw = this.options;
      if (by || bx >= bw.duration + this.startTime) {
        this.now = this.end;
        this.pos = this.state = 1;
        this.update();
        bw.animatedProperties[this.prop] = true;
        for (bA in bw.animatedProperties) {
          if (bw.animatedProperties[bA] !== true) {
            e = false
          }
        }
        if (e) {
          if (bw.overflow != null && !b.support.shrinkWrapBlocks) {
            b.each(["", "X", "Y"], function(bC, bD) {
              bz.style["overflow" + bD] = bw.overflow[bC]
            })
          }
          if (bw.hide) {
            b(bz)
              .hide()
          }
          if (bw.hide || bw.show) {
            for (bA in bw.animatedProperties) {
              b.style(bz, bA, bw.orig[bA]);
              b.removeData(bz, "fxshow" + bA, true);
              b.removeData(bz, "toggle" + bA, true)
            }
          }
          bv = bw.complete;
          if (bv) {
            bw.complete = false;
            bv.call(bz)
          }
        }
        return false
      } else {
        if (bw.duration == Infinity) {
          this.now = bx
        } else {
          bB = bx - this.startTime;
          this.state = bB / bw.duration;
          this.pos = b.easing[bw.animatedProperties[this.prop]](this.state, bB, 0, 1, bw.duration);
          this.now = this.start + ((this.end - this.start) * this.pos)
        }
        this.update()
      }
      return true
    }
  };
  b.extend(b.fx, {
    tick: function() {
      var bw, bv = b.timers,
        e = 0;
      for (; e < bv.length; e++) {
        bw = bv[e];
        if (!bw() && bv[e] === bw) {
          bv.splice(e--, 1)
        }
      }
      if (!bv.length) {
        b.fx.stop()
      }
    },
    interval: 13,
    stop: function() {
      clearInterval(a4);
      a4 = null
    },
    speeds: {
      slow: 600,
      fast: 200,
      _default: 400
    },
    step: {
      opacity: function(e) {
        b.style(e.elem, "opacity", e.now)
      },
      _default: function(e) {
        if (e.elem.style && e.elem.style[e.prop] != null) {
          e.elem.style[e.prop] = e.now + e.unit
        } else {
          e.elem[e.prop] = e.now
        }
      }
    }
  });
  b.each(aI.concat.apply([], aI), function(e, bv) {
    if (bv.indexOf("margin")) {
      b.fx.step[bv] = function(bw) {
        b.style(bw.elem, bv, Math.max(0, bw.now) + bw.unit)
      }
    }
  });
  if (b.expr && b.expr.filters) {
    b.expr.filters.animated = function(e) {
      return b.grep(b.timers, function(bv) {
        return e === bv.elem
      })
        .length
    }
  }

  function w(bx) {
    if (!Q[bx]) {
      var e = av.body,
        bv = b("<" + bx + ">")
          .appendTo(e),
        bw = bv.css("display");
      bv.remove();
      if (bw === "none" || bw === "") {
        if (!ba) {
          ba = av.createElement("iframe");
          ba.frameBorder = ba.width = ba.height = 0
        }
        e.appendChild(ba);
        if (!m || !ba.createElement) {
          m = (ba.contentWindow || ba.contentDocument)
            .document;
          m.write((b.support.boxModel ? "<!doctype html>" : "") + "<html><body>");
          m.close()
        }
        bv = m.createElement(bx);
        m.body.appendChild(bv);
        bw = b.css(bv, "display");
        e.removeChild(ba)
      }
      Q[bx] = bw
    }
    return Q[bx]
  }
  var a8, V = /^t(?:able|d|h)$/i,
    ad = /^(?:body|html)$/i;
  if ("getBoundingClientRect" in av.documentElement) {
    a8 = function(by, bH, bw, bB) {
      try {
        bB = by.getBoundingClientRect()
      } catch (bF) {}
      if (!bB || !b.contains(bw, by)) {
        return bB ? {
          top: bB.top,
          left: bB.left
        } : {
          top: 0,
          left: 0
        }
      }
      var bC = bH.body,
        bD = aL(bH),
        bA = bw.clientTop || bC.clientTop || 0,
        bE = bw.clientLeft || bC.clientLeft || 0,
        bv = bD.pageYOffset || b.support.boxModel && bw.scrollTop || bC.scrollTop,
        bz = bD.pageXOffset || b.support.boxModel && bw.scrollLeft || bC.scrollLeft,
        bG = bB.top + bv - bA,
        bx = bB.left + bz - bE;
      return {
        top: bG,
        left: bx
      }
    }
  } else {
    a8 = function(bz, bE, bx) {
      var bC, bw = bz.offsetParent,
        bv = bz,
        bA = bE.body,
        bB = bE.defaultView,
        e = bB ? bB.getComputedStyle(bz, null) : bz.currentStyle,
        bD = bz.offsetTop,
        by = bz.offsetLeft;
      while ((bz = bz.parentNode) && bz !== bA && bz !== bx) {
        if (b.support.fixedPosition && e.position === "fixed") {
          break
        }
        bC = bB ? bB.getComputedStyle(bz, null) : bz.currentStyle;
        bD -= bz.scrollTop;
        by -= bz.scrollLeft;
        if (bz === bw) {
          bD += bz.offsetTop;
          by += bz.offsetLeft;
          if (b.support.doesNotAddBorder && !(b.support.doesAddBorderForTableAndCells && V.test(bz.nodeName))) {
            bD += parseFloat(bC.borderTopWidth) || 0;
            by += parseFloat(bC.borderLeftWidth) || 0
          }
          bv = bw;
          bw = bz.offsetParent
        }
        if (b.support.subtractsBorderForOverflowNotVisible && bC.overflow !== "visible") {
          bD += parseFloat(bC.borderTopWidth) || 0;
          by += parseFloat(bC.borderLeftWidth) || 0
        }
        e = bC
      }
      if (e.position === "relative" || e.position === "static") {
        bD += bA.offsetTop;
        by += bA.offsetLeft
      }
      if (b.support.fixedPosition && e.position === "fixed") {
        bD += Math.max(bx.scrollTop, bA.scrollTop);
        by += Math.max(bx.scrollLeft, bA.scrollLeft)
      }
      return {
        top: bD,
        left: by
      }
    }
  }
  b.fn.offset = function(e) {
    if (arguments.length) {
      return e === L ? this : this.each(function(bx) {
        b.offset.setOffset(this, e, bx)
      })
    }
    var bv = this[0],
      bw = bv && bv.ownerDocument;
    if (!bw) {
      return null
    }
    if (bv === bw.body) {
      return b.offset.bodyOffset(bv)
    }
    return a8(bv, bw, bw.documentElement)
  };
  b.offset = {
    bodyOffset: function(e) {
      var bw = e.offsetTop,
        bv = e.offsetLeft;
      if (b.support.doesNotIncludeMarginInBodyOffset) {
        bw += parseFloat(b.css(e, "marginTop")) || 0;
        bv += parseFloat(b.css(e, "marginLeft")) || 0
      }
      return {
        top: bw,
        left: bv
      }
    },
    setOffset: function(bx, bG, bA) {
      var bB = b.css(bx, "position");
      if (bB === "static") {
        bx.style.position = "relative"
      }
      var bz = b(bx),
        bv = bz.offset(),
        e = b.css(bx, "top"),
        bE = b.css(bx, "left"),
        bF = (bB === "absolute" || bB === "fixed") && b.inArray("auto", [e, bE]) > -1,
        bD = {}, bC = {}, bw, by;
      if (bF) {
        bC = bz.position();
        bw = bC.top;
        by = bC.left
      } else {
        bw = parseFloat(e) || 0;
        by = parseFloat(bE) || 0
      } if (b.isFunction(bG)) {
        bG = bG.call(bx, bA, bv)
      }
      if (bG.top != null) {
        bD.top = (bG.top - bv.top) + bw
      }
      if (bG.left != null) {
        bD.left = (bG.left - bv.left) + by
      }
      if ("using" in bG) {
        bG.using.call(bx, bD)
      } else {
        bz.css(bD)
      }
    }
  };
  b.fn.extend({
    position: function() {
      if (!this[0]) {
        return null
      }
      var bw = this[0],
        bv = this.offsetParent(),
        bx = this.offset(),
        e = ad.test(bv[0].nodeName) ? {
          top: 0,
          left: 0
        } : bv.offset();
      bx.top -= parseFloat(b.css(bw, "marginTop")) || 0;
      bx.left -= parseFloat(b.css(bw, "marginLeft")) || 0;
      e.top += parseFloat(b.css(bv[0], "borderTopWidth")) || 0;
      e.left += parseFloat(b.css(bv[0], "borderLeftWidth")) || 0;
      return {
        top: bx.top - e.top,
        left: bx.left - e.left
      }
    },
    offsetParent: function() {
      return this.map(function() {
        var e = this.offsetParent || av.body;
        while (e && (!ad.test(e.nodeName) && b.css(e, "position") === "static")) {
          e = e.offsetParent
        }
        return e
      })
    }
  });
  b.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(bw, bv) {
    var e = /Y/.test(bv);
    b.fn[bw] = function(bx) {
      return b.access(this, function(by, bB, bA) {
        var bz = aL(by);
        if (bA === L) {
          return bz ? (bv in bz) ? bz[bv] : b.support.boxModel && bz.document.documentElement[bB] || bz.document.body[bB] : by[bB]
        }
        if (bz) {
          bz.scrollTo(!e ? bA : b(bz)
            .scrollLeft(), e ? bA : b(bz)
            .scrollTop())
        } else {
          by[bB] = bA
        }
      }, bw, bx, arguments.length, null)
    }
  });

  function aL(e) {
    return b.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false
  }
  b.each({
    Height: "height",
    Width: "width"
  }, function(bw, bx) {
    var bv = "client" + bw,
      e = "scroll" + bw,
      by = "offset" + bw;
    b.fn["inner" + bw] = function() {
      var bz = this[0];
      return bz ? bz.style ? parseFloat(b.css(bz, bx, "padding")) : this[bx]() : null
    };
    b.fn["outer" + bw] = function(bA) {
      var bz = this[0];
      return bz ? bz.style ? parseFloat(b.css(bz, bx, bA ? "margin" : "border")) : this[bx]() : null
    };
    b.fn[bx] = function(bz) {
      return b.access(this, function(bC, bB, bD) {
        var bF, bE, bG, bA;
        if (b.isWindow(bC)) {
          bF = bC.document;
          bE = bF.documentElement[bv];
          return b.support.boxModel && bE || bF.body && bF.body[bv] || bE
        }
        if (bC.nodeType === 9) {
          bF = bC.documentElement;
          if (bF[bv] >= bF[e]) {
            return bF[bv]
          }
          return Math.max(bC.body[e], bF[e], bC.body[by], bF[by])
        }
        if (bD === L) {
          bG = b.css(bC, bB);
          bA = parseFloat(bG);
          return b.isNumeric(bA) ? bA : bG
        }
        b(bC)
          .css(bB, bD)
      }, bx, bz, arguments.length, null)
    }
  });
  bd.jQuery = bd.$ = b;
  if (typeof define === "function" && define.amd && define.amd.jQuery) {
    define("jquery", [], function() {
      return b
    })
  }
})(window);
(function(d) {
  var h, g = {}, p = {
      16: false,
      18: false,
      17: false,
      91: false
    }, e = "all",
    a = {
      "⇧": 16,
      shift: 16,
      "⌥": 18,
      alt: 18,
      option: 18,
      "⌃": 17,
      ctrl: 17,
      control: 17,
      "⌘": 91,
      command: 91
    }, q = {
      backspace: 8,
      tab: 9,
      clear: 12,
      enter: 13,
      "return": 13,
      esc: 27,
      escape: 27,
      space: 32,
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      del: 46,
      "delete": 46,
      home: 36,
      end: 35,
      pageup: 33,
      pagedown: 34,
      ",": 188,
      ".": 190,
      "/": 191,
      "`": 192,
      "-": 189,
      "=": 187,
      ";": 186,
      "'": 222,
      "[": 219,
      "]": 221,
      "\\": 220
    };
  for (h = 1; h < 20; h++) {
    a["f" + h] = 111 + h
  }

  function n(t, s) {
    var k = t.length;
    while (k--) {
      if (t[k] === s) {
        return k
      }
    }
    return -1
  }

  function o(w) {
    var u, v, s, t, x;
    u = w.keyCode;
    if (u == 93 || u == 224) {
      u = 91
    }
    if (u in p) {
      p[u] = true;
      for (s in a) {
        if (a[s] == u) {
          c[s] = true
        }
      }
      return
    }
    if (!c.filter.call(this, w)) {
      return
    }
    if (!(u in g)) {
      return
    }
    for (t = 0; t < g[u].length; t++) {
      v = g[u][t];
      if (v.scope == e || v.scope == "all") {
        x = v.mods.length > 0;
        for (s in p) {
          if ((!p[s] && n(v.mods, +s) > -1) || (p[s] && n(v.mods, +s) == -1)) {
            x = false
          }
        }
        if ((v.mods.length == 0 && !p[16] && !p[18] && !p[17] && !p[91]) || x) {
          if (v.method(w, v) === false) {
            if (w.preventDefault) {
              w.preventDefault()
            } else {
              w.returnValue = false
            } if (w.stopPropagation) {
              w.stopPropagation()
            }
            if (w.cancelBubble) {
              w.cancelBubble = true
            }
          }
        }
      }
    }
  }

  function f(u) {
    var t = u.keyCode,
      s;
    if (t == 93 || t == 224) {
      t = 91
    }
    if (t in p) {
      p[t] = false;
      for (s in a) {
        if (a[s] == t) {
          c[s] = false
        }
      }
    }
  }

  function r() {
    for (h in p) {
      p[h] = false
    }
    for (h in a) {
      c[h] = false
    }
  }

  function c(t, u, x) {
    var w, v, s, k;
    if (x === undefined) {
      x = u;
      u = "all"
    }
    t = t.replace(/\s/g, "");
    w = t.split(",");
    if ((w[w.length - 1]) == "") {
      w[w.length - 2] += ","
    }
    for (s = 0; s < w.length; s++) {
      v = [];
      t = w[s].split("+");
      if (t.length > 1) {
        v = t.slice(0, t.length - 1);
        for (k = 0; k < v.length; k++) {
          v[k] = a[v[k]]
        }
        t = [t[t.length - 1]]
      }
      t = t[0];
      t = q[t] || t.toUpperCase()
        .charCodeAt(0);
      if (!(t in g)) {
        g[t] = []
      }
      g[t].push({
        shortcut: w[s],
        scope: u,
        method: x,
        key: w[s],
        mods: v
      })
    }
  }

  function b(s) {
    var k = (s.target || s.srcElement)
      .tagName;
    return !(k == "INPUT" || k == "SELECT" || k == "TEXTAREA")
  }
  for (h in a) {
    c[h] = false
  }

  function j(k) {
    e = k || "all"
  }

  function l() {
    return e || "all"
  }

  function m(u) {
    var t, k, s;
    for (t in g) {
      k = g[t];
      for (s = 0; s < k.length;) {
        if (k[s].scope === u) {
          k.splice(s, 1)
        } else {
          s++
        }
      }
    }
  }

  function i(k, s, t) {
    if (k.addEventListener) {
      k.addEventListener(s, t, false)
    } else {
      if (k.attachEvent) {
        k.attachEvent("on" + s, function() {
          t(window.event)
        })
      }
    }
  }
  i(document, "keydown", o);
  i(document, "keyup", f);
  i(window, "focus", r);
  d.key = c;
  d.key.setScope = j;
  d.key.getScope = l;
  d.key.deleteScope = m;
  d.key.filter = b;
  if (typeof module !== "undefined") {
    module.exports = key
  }
})(this);
(function() {
  var v = this;
  var j = v._;
  var D = {};
  var C = Array.prototype,
    f = Object.prototype,
    q = Function.prototype;
  var m = C.slice,
    z = C.unshift,
    c = f.toString,
    h = f.hasOwnProperty;
  var L = C.forEach,
    o = C.map,
    E = C.reduce,
    b = C.reduceRight,
    a = C.filter,
    A = C.every,
    n = C.some,
    l = C.indexOf,
    k = C.lastIndexOf,
    s = Array.isArray,
    e = Object.keys,
    F = q.bind;
  var M = function(p) {
    return new t(p)
  };
  if (typeof exports !== "undefined") {
    if (typeof module !== "undefined" && module.exports) {
      exports = module.exports = M
    }
    exports._ = M
  } else {
    v._ = M
  }
  M.VERSION = "1.3.3";
  var I = M.each = M.forEach = function(R, Q, P) {
    if (R == null) {
      return
    }
    if (L && R.forEach === L) {
      R.forEach(Q, P)
    } else {
      if (R.length === +R.length) {
        for (var O = 0, p = R.length; O < p; O++) {
          if (O in R && Q.call(P, R[O], O, R) === D) {
            return
          }
        }
      } else {
        for (var N in R) {
          if (M.has(R, N)) {
            if (Q.call(P, R[N], N, R) === D) {
              return
            }
          }
        }
      }
    }
  };
  M.map = M.collect = function(P, O, N) {
    var p = [];
    if (P == null) {
      return p
    }
    if (o && P.map === o) {
      return P.map(O, N)
    }
    I(P, function(S, Q, R) {
      p[p.length] = O.call(N, S, Q, R)
    });
    if (P.length === +P.length) {
      p.length = P.length
    }
    return p
  };
  M.reduce = M.foldl = M.inject = function(Q, P, p, O) {
    var N = arguments.length > 2;
    if (Q == null) {
      Q = []
    }
    if (E && Q.reduce === E) {
      if (O) {
        P = M.bind(P, O)
      }
      return N ? Q.reduce(P, p) : Q.reduce(P)
    }
    I(Q, function(T, R, S) {
      if (!N) {
        p = T;
        N = true
      } else {
        p = P.call(O, p, T, R, S)
      }
    });
    if (!N) {
      throw new TypeError("Reduce of empty array with no initial value")
    }
    return p
  };
  M.reduceRight = M.foldr = function(Q, P, p, O) {
    var N = arguments.length > 2;
    if (Q == null) {
      Q = []
    }
    if (b && Q.reduceRight === b) {
      if (O) {
        P = M.bind(P, O)
      }
      return N ? Q.reduceRight(P, p) : Q.reduceRight(P)
    }
    var R = M.toArray(Q)
      .reverse();
    if (O && !N) {
      P = M.bind(P, O)
    }
    return N ? M.reduce(R, P, p, O) : M.reduce(R, P)
  };
  M.find = M.detect = function(P, O, N) {
    var p;
    y(P, function(S, Q, R) {
      if (O.call(N, S, Q, R)) {
        p = S;
        return true
      }
    });
    return p
  };
  M.filter = M.select = function(P, O, N) {
    var p = [];
    if (P == null) {
      return p
    }
    if (a && P.filter === a) {
      return P.filter(O, N)
    }
    I(P, function(S, Q, R) {
      if (O.call(N, S, Q, R)) {
        p[p.length] = S
      }
    });
    return p
  };
  M.reject = function(P, O, N) {
    var p = [];
    if (P == null) {
      return p
    }
    I(P, function(S, Q, R) {
      if (!O.call(N, S, Q, R)) {
        p[p.length] = S
      }
    });
    return p
  };
  M.every = M.all = function(P, O, N) {
    var p = true;
    if (P == null) {
      return p
    }
    if (A && P.every === A) {
      return P.every(O, N)
    }
    I(P, function(S, Q, R) {
      if (!(p = p && O.call(N, S, Q, R))) {
        return D
      }
    });
    return !!p
  };
  var y = M.some = M.any = function(P, O, N) {
    O || (O = M.identity);
    var p = false;
    if (P == null) {
      return p
    }
    if (n && P.some === n) {
      return P.some(O, N)
    }
    I(P, function(S, Q, R) {
      if (p || (p = O.call(N, S, Q, R))) {
        return D
      }
    });
    return !!p
  };
  M.include = M.contains = function(O, N) {
    var p = false;
    if (O == null) {
      return p
    }
    if (l && O.indexOf === l) {
      return O.indexOf(N) != -1
    }
    p = y(O, function(P) {
      return P === N
    });
    return p
  };
  M.invoke = function(N, O) {
    var p = m.call(arguments, 2);
    return M.map(N, function(P) {
      return (M.isFunction(O) ? O || P : P[O])
        .apply(P, p)
    })
  };
  M.pluck = function(N, p) {
    return M.map(N, function(O) {
      return O[p]
    })
  };
  M.max = function(P, O, N) {
    if (!O && M.isArray(P) && P[0] === +P[0]) {
      return Math.max.apply(Math, P)
    }
    if (!O && M.isEmpty(P)) {
      return -Infinity
    }
    var p = {
      computed: -Infinity
    };
    I(P, function(T, Q, S) {
      var R = O ? O.call(N, T, Q, S) : T;
      R >= p.computed && (p = {
        value: T,
        computed: R
      })
    });
    return p.value
  };
  M.min = function(P, O, N) {
    if (!O && M.isArray(P) && P[0] === +P[0]) {
      return Math.min.apply(Math, P)
    }
    if (!O && M.isEmpty(P)) {
      return Infinity
    }
    var p = {
      computed: Infinity
    };
    I(P, function(T, Q, S) {
      var R = O ? O.call(N, T, Q, S) : T;
      R < p.computed && (p = {
        value: T,
        computed: R
      })
    });
    return p.value
  };
  M.shuffle = function(O) {
    var p = [],
      N;
    I(O, function(R, P, Q) {
      N = Math.floor(Math.random() * (P + 1));
      p[P] = p[N];
      p[N] = R
    });
    return p
  };
  M.sortBy = function(O, P, p) {
    var N = M.isFunction(P) ? P : function(Q) {
        return Q[P]
      };
    return M.pluck(M.map(O, function(S, Q, R) {
        return {
          value: S,
          criteria: N.call(p, S, Q, R)
        }
      })
      .sort(function(T, S) {
        var R = T.criteria,
          Q = S.criteria;
        if (R === void 0) {
          return 1
        }
        if (Q === void 0) {
          return -1
        }
        return R < Q ? -1 : R > Q ? 1 : 0
      }), "value")
  };
  M.groupBy = function(O, P) {
    var p = {};
    var N = M.isFunction(P) ? P : function(Q) {
        return Q[P]
      };
    I(O, function(S, Q) {
      var R = N(S, Q);
      (p[R] || (p[R] = []))
        .push(S)
    });
    return p
  };
  M.sortedIndex = function(R, Q, O) {
    O || (O = M.identity);
    var p = 0,
      P = R.length;
    while (p < P) {
      var N = (p + P) >> 1;
      O(R[N]) < O(Q) ? p = N + 1 : P = N
    }
    return p
  };
  M.toArray = function(p) {
    if (!p) {
      return []
    }
    if (M.isArray(p)) {
      return m.call(p)
    }
    if (M.isArguments(p)) {
      return m.call(p)
    }
    if (p.toArray && M.isFunction(p.toArray)) {
      return p.toArray()
    }
    return M.values(p)
  };
  M.size = function(p) {
    return M.isArray(p) ? p.length : M.keys(p)
      .length
  };
  M.first = M.head = M.take = function(O, N, p) {
    return (N != null) && !p ? m.call(O, 0, N) : O[0]
  };
  M.initial = function(O, N, p) {
    return m.call(O, 0, O.length - ((N == null) || p ? 1 : N))
  };
  M.last = function(O, N, p) {
    if ((N != null) && !p) {
      return m.call(O, Math.max(O.length - N, 0))
    } else {
      return O[O.length - 1]
    }
  };
  M.rest = M.tail = function(O, p, N) {
    return m.call(O, (p == null) || N ? 1 : p)
  };
  M.compact = function(p) {
    return M.filter(p, function(N) {
      return !!N
    })
  };
  M.flatten = function(N, p) {
    return M.reduce(N, function(O, P) {
      if (M.isArray(P)) {
        return O.concat(p ? P : M.flatten(P))
      }
      O[O.length] = P;
      return O
    }, [])
  };
  M.without = function(p) {
    return M.difference(p, m.call(arguments, 1))
  };
  M.uniq = M.unique = function(Q, P, O) {
    var p = O ? M.map(Q, O) : Q;
    var N = [];
    if (Q.length < 3) {
      P = true
    }
    M.reduce(p, function(R, T, S) {
      if (P ? M.last(R) !== T || !R.length : !M.include(R, T)) {
        R.push(T);
        N.push(Q[S])
      }
      return R
    }, []);
    return N
  };
  M.union = function() {
    return M.uniq(M.flatten(arguments, true))
  };
  M.intersection = M.intersect = function(N) {
    var p = m.call(arguments, 1);
    return M.filter(M.uniq(N), function(O) {
      return M.every(p, function(P) {
        return M.indexOf(P, O) >= 0
      })
    })
  };
  M.difference = function(N) {
    var p = M.flatten(m.call(arguments, 1), true);
    return M.filter(N, function(O) {
      return !M.include(p, O)
    })
  };
  M.zip = function() {
    var p = m.call(arguments);
    var P = M.max(M.pluck(p, "length"));
    var O = new Array(P);
    for (var N = 0; N < P; N++) {
      O[N] = M.pluck(p, "" + N)
    }
    return O
  };
  M.indexOf = function(Q, O, P) {
    if (Q == null) {
      return -1
    }
    var N, p;
    if (P) {
      N = M.sortedIndex(Q, O);
      return Q[N] === O ? N : -1
    }
    if (l && Q.indexOf === l) {
      return Q.indexOf(O)
    }
    for (N = 0, p = Q.length; N < p; N++) {
      if (N in Q && Q[N] === O) {
        return N
      }
    }
    return -1
  };
  M.lastIndexOf = function(O, N) {
    if (O == null) {
      return -1
    }
    if (k && O.lastIndexOf === k) {
      return O.lastIndexOf(N)
    }
    var p = O.length;
    while (p--) {
      if (p in O && O[p] === N) {
        return p
      }
    }
    return -1
  };
  M.range = function(R, P, Q) {
    if (arguments.length <= 1) {
      P = R || 0;
      R = 0
    }
    Q = arguments[2] || 1;
    var N = Math.max(Math.ceil((P - R) / Q), 0);
    var p = 0;
    var O = new Array(N);
    while (p < N) {
      O[p++] = R;
      R += Q
    }
    return O
  };
  var G = function() {};
  M.bind = function d(P, N) {
    var O, p;
    if (P.bind === F && F) {
      return F.apply(P, m.call(arguments, 1))
    }
    if (!M.isFunction(P)) {
      throw new TypeError
    }
    p = m.call(arguments, 2);
    return O = function() {
      if (!(this instanceof O)) {
        return P.apply(N, p.concat(m.call(arguments)))
      }
      G.prototype = P.prototype;
      var R = new G;
      var Q = P.apply(R, p.concat(m.call(arguments)));
      if (Object(Q) === Q) {
        return Q
      }
      return R
    }
  };
  M.bindAll = function(N) {
    var p = m.call(arguments, 1);
    if (p.length == 0) {
      p = M.functions(N)
    }
    I(p, function(O) {
      N[O] = M.bind(N[O], N)
    });
    return N
  };
  M.memoize = function(O, N) {
    var p = {};
    N || (N = M.identity);
    return function() {
      var P = N.apply(this, arguments);
      return M.has(p, P) ? p[P] : (p[P] = O.apply(this, arguments))
    }
  };
  M.delay = function(N, O) {
    var p = m.call(arguments, 2);
    return setTimeout(function() {
      return N.apply(null, p)
    }, O)
  };
  M.defer = function(p) {
    return M.delay.apply(M, [p, 1].concat(m.call(arguments, 1)))
  };
  M.throttle = function(O, P) {
    var N, R, S, T, Q, U;
    var p = M.debounce(function() {
      Q = T = false
    }, P);
    return function() {
      N = this;
      R = arguments;
      var V = function() {
        S = null;
        if (Q) {
          O.apply(N, R)
        }
        p()
      };
      if (!S) {
        S = setTimeout(V, P)
      }
      if (T) {
        Q = true
      } else {
        U = O.apply(N, R)
      }
      p();
      T = true;
      return U
    }
  };
  M.debounce = function(N, P, p) {
    var O;
    return function() {
      var S = this,
        R = arguments;
      var Q = function() {
        O = null;
        if (!p) {
          N.apply(S, R)
        }
      };
      if (p && !O) {
        N.apply(S, R)
      }
      clearTimeout(O);
      O = setTimeout(Q, P)
    }
  };
  M.once = function(O) {
    var p = false,
      N;
    return function() {
      if (p) {
        return N
      }
      p = true;
      return N = O.apply(this, arguments)
    }
  };
  M.wrap = function(p, N) {
    return function() {
      var O = [p].concat(m.call(arguments, 0));
      return N.apply(this, O)
    }
  };
  M.compose = function() {
    var p = arguments;
    return function() {
      var N = arguments;
      for (var O = p.length - 1; O >= 0; O--) {
        N = [p[O].apply(this, N)]
      }
      return N[0]
    }
  };
  M.after = function(N, p) {
    if (N <= 0) {
      return p()
    }
    return function() {
      if (--N < 1) {
        return p.apply(this, arguments)
      }
    }
  };
  M.keys = e || function(O) {
    if (O !== Object(O)) {
      throw new TypeError("Invalid object")
    }
    var N = [];
    for (var p in O) {
      if (M.has(O, p)) {
        N[N.length] = p
      }
    }
    return N
  };
  M.values = function(p) {
    return M.map(p, M.identity)
  };
  M.functions = M.methods = function(O) {
    var N = [];
    for (var p in O) {
      if (M.isFunction(O[p])) {
        N.push(p)
      }
    }
    return N.sort()
  };
  M.extend = function(p) {
    I(m.call(arguments, 1), function(N) {
      for (var O in N) {
        p[O] = N[O]
      }
    });
    return p
  };
  M.pick = function(N) {
    var p = {};
    I(M.flatten(m.call(arguments, 1)), function(O) {
      if (O in N) {
        p[O] = N[O]
      }
    });
    return p
  };
  M.defaults = function(p) {
    I(m.call(arguments, 1), function(N) {
      for (var O in N) {
        if (p[O] == null) {
          p[O] = N[O]
        }
      }
    });
    return p
  };
  M.clone = function(p) {
    if (!M.isObject(p)) {
      return p
    }
    return M.isArray(p) ? p.slice() : M.extend({}, p)
  };
  M.tap = function(N, p) {
    p(N);
    return N
  };

  function J(P, O, N) {
    if (P === O) {
      return P !== 0 || 1 / P == 1 / O
    }
    if (P == null || O == null) {
      return P === O
    }
    if (P._chain) {
      P = P._wrapped
    }
    if (O._chain) {
      O = O._wrapped
    }
    if (P.isEqual && M.isFunction(P.isEqual)) {
      return P.isEqual(O)
    }
    if (O.isEqual && M.isFunction(O.isEqual)) {
      return O.isEqual(P)
    }
    var S = c.call(P);
    if (S != c.call(O)) {
      return false
    }
    switch (S) {
      case "[object String]":
        return P == String(O);
      case "[object Number]":
        return P != +P ? O != +O : (P == 0 ? 1 / P == 1 / O : P == +O);
      case "[object Date]":
      case "[object Boolean]":
        return +P == +O;
      case "[object RegExp]":
        return P.source == O.source && P.global == O.global && P.multiline == O.multiline && P.ignoreCase == O.ignoreCase
    }
    if (typeof P != "object" || typeof O != "object") {
      return false
    }
    var T = N.length;
    while (T--) {
      if (N[T] == P) {
        return true
      }
    }
    N.push(P);
    var R = 0,
      p = true;
    if (S == "[object Array]") {
      R = P.length;
      p = R == O.length;
      if (p) {
        while (R--) {
          if (!(p = R in P == R in O && J(P[R], O[R], N))) {
            break
          }
        }
      }
    } else {
      if ("constructor" in P != "constructor" in O || P.constructor != O.constructor) {
        return false
      }
      for (var Q in P) {
        if (M.has(P, Q)) {
          R++;
          if (!(p = M.has(O, Q) && J(P[Q], O[Q], N))) {
            break
          }
        }
      }
      if (p) {
        for (Q in O) {
          if (M.has(O, Q) && !(R--)) {
            break
          }
        }
        p = !R
      }
    }
    N.pop();
    return p
  }
  M.isEqual = function(N, p) {
    return J(N, p, [])
  };
  M.isEmpty = function(N) {
    if (N == null) {
      return true
    }
    if (M.isArray(N) || M.isString(N)) {
      return N.length === 0
    }
    for (var p in N) {
      if (M.has(N, p)) {
        return false
      }
    }
    return true
  };
  M.isElement = function(p) {
    return !!(p && p.nodeType == 1)
  };
  M.isArray = s || function(p) {
    return c.call(p) == "[object Array]"
  };
  M.isObject = function(p) {
    return p === Object(p)
  };
  M.isArguments = function(p) {
    return c.call(p) == "[object Arguments]"
  };
  if (!M.isArguments(arguments)) {
    M.isArguments = function(p) {
      return !!(p && M.has(p, "callee"))
    }
  }
  M.isFunction = function(p) {
    return c.call(p) == "[object Function]"
  };
  M.isString = function(p) {
    return c.call(p) == "[object String]"
  };
  M.isNumber = function(p) {
    return c.call(p) == "[object Number]"
  };
  M.isFinite = function(p) {
    return M.isNumber(p) && isFinite(p)
  };
  M.isNaN = function(p) {
    return p !== p
  };
  M.isBoolean = function(p) {
    return p === true || p === false || c.call(p) == "[object Boolean]"
  };
  M.isDate = function(p) {
    return c.call(p) == "[object Date]"
  };
  M.isRegExp = function(p) {
    return c.call(p) == "[object RegExp]"
  };
  M.isNull = function(p) {
    return p === null
  };
  M.isUndefined = function(p) {
    return p === void 0
  };
  M.has = function(N, p) {
    return h.call(N, p)
  };
  M.noConflict = function() {
    v._ = j;
    return this
  };
  M.identity = function(p) {
    return p
  };
  M.times = function(P, O, N) {
    for (var p = 0; p < P; p++) {
      O.call(N, p)
    }
  };
  M.escape = function(p) {
    return ("" + p)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;")
      .replace(/\//g, "&#x2F;")
  };
  M.result = function(p, O) {
    if (p == null) {
      return null
    }
    var N = p[O];
    return M.isFunction(N) ? N.call(p) : N
  };
  M.mixin = function(p) {
    I(M.functions(p), function(N) {
      w(N, M[N] = p[N])
    })
  };
  var x = 0;
  M.uniqueId = function(p) {
    var N = x++;
    return p ? p + N : N
  };
  M.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };
  var u = /.^/;
  var g = {
    "\\": "\\",
    "'": "'",
    r: "\r",
    n: "\n",
    t: "\t",
    u2028: "\u2028",
    u2029: "\u2029"
  };
  for (var H in g) {
    g[g[H]] = H
  }
  var i = /\\|'|\r|\n|\t|\u2028|\u2029/g;
  var B = /\\(\\|'|r|n|t|u2028|u2029)/g;
  var K = function(p) {
    return p.replace(B, function(N, O) {
      return g[O]
    })
  };
  M.template = function(R, Q, O) {
    O = M.defaults(O || {}, M.templateSettings);
    var P = "__p+='" + R.replace(i, function(S) {
      return "\\" + g[S]
    })
      .replace(O.escape || u, function(S, T) {
        return "'+\n_.escape(" + K(T) + ")+\n'"
      })
      .replace(O.interpolate || u, function(S, T) {
        return "'+\n(" + K(T) + ")+\n'"
      })
      .replace(O.evaluate || u, function(S, T) {
        return "';\n" + K(T) + "\n;__p+='"
      }) + "';\n";
    if (!O.variable) {
      P = "with(obj||{}){\n" + P + "}\n"
    }
    P = "var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n" + P + "return __p;\n";
    var N = new Function(O.variable || "obj", "_", P);
    if (Q) {
      return N(Q, M)
    }
    var p = function(S) {
      return N.call(this, S, M)
    };
    p.source = "function(" + (O.variable || "obj") + "){\n" + P + "}";
    return p
  };
  M.chain = function(p) {
    return M(p)
      .chain()
  };
  var t = function(p) {
    this._wrapped = p
  };
  M.prototype = t.prototype;
  var r = function(N, p) {
    return p ? M(N)
      .chain() : N
  };
  var w = function(p, N) {
    t.prototype[p] = function() {
      var O = m.call(arguments);
      z.call(O, this._wrapped);
      return r(N.apply(M, O), this._chain)
    }
  };
  M.mixin(M);
  I(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(p) {
    var N = C[p];
    t.prototype[p] = function() {
      var O = this._wrapped;
      N.apply(O, arguments);
      var P = O.length;
      if ((p == "shift" || p == "splice") && P === 0) {
        delete O[0]
      }
      return r(O, this._chain)
    }
  });
  I(["concat", "join", "slice"], function(p) {
    var N = C[p];
    t.prototype[p] = function() {
      return r(N.apply(this._wrapped, arguments), this._chain)
    }
  });
  t.prototype.chain = function() {
    this._chain = true;
    return this
  };
  t.prototype.value = function() {
    return this._wrapped
  }
})
  .call(this);
(function() {
  $(document)
    .ready(function() {
      var a;
      $("#search_frame")
        .hide();
      window.lastSearch = "";
      if (window.top.frames.main) {
        $("body")
          .addClass("frames")
      } else {
        $("body")
          .addClass("noframes")
      }
      $("pre code")
        .each(function(b, c) {
          return hljs.highlightBlock(c, "  ")
        });
      $("#search_frame")
        .on("load", function(b) {
          return $("#search_frame")
            .show()
        });
      $(".frames #content a")
        .each(function() {
          if (/^https?:\/\//i.test($(this)
            .attr("href"))) {
            return $(this)
              .attr("target", "_top")
          }
        });
      $("#search input")
        .focus();
      $("#search a")
        .click(function(b) {
          var c = this;
          b.preventDefault();
          if ($(this)
            .hasClass("active")) {
            $(this)
              .removeClass("active");
            return $("#search_frame")
              .hide()
          } else {
            $("#search a")
              .removeClass("active");
            $("#search_frame")
              .one("load", function() {
                return $(c)
                  .addClass("active")
              });
            return $("#search_frame")
              .attr("src", $(this)
                .attr("href"))
          }
        });
      $("#content.list #search input")
        .keyup(function(c) {
          var b;
          b = $(this)
            .val()
            .toLowerCase();
          if (b.length === 0) {
            $("#content.list ul li")
              .each(function() {
                if ($("#content")
                  .hasClass("tree")) {
                  $(this)
                    .removeClass("result");
                  $(this)
                    .css("padding-left", $(this)
                      .data("padding"))
                }
                return $(this)
                  .show()
              })
          } else {
            $("#content.list ul li")
              .each(function() {
                var d;
                if ($(this)
                  .find("a")
                  .text()
                  .toLowerCase()
                  .indexOf(b) === -1) {
                  return $(this)
                    .hide()
                } else {
                  if ($("#content")
                    .hasClass("tree")) {
                    $(this)
                      .addClass("result");
                    d = $(this)
                      .css("padding-left");
                    if (d !== "0px") {
                      $(this)
                        .data("padding", d)
                    }
                    $(this)
                      .css("padding-left", 0)
                  }
                  return $(this)
                    .show()
                }
              })
          }
          return window.createStripes()
        });
      $("#fuzzySearch input")
        .keyup(function(b) {
          var d, g, h, i, f, e, l, c, k, j;
          k = $(this)
            .val();
          c = $("#fuzzySearch ol");
          if (b.keyCode === 13) {
            return location.href = $("#fuzzySearch ol li.selected a")
              .attr("href")
          } else {
            if (b.keyCode === 38) {
              i = c.children();
              h = i.index($("#fuzzySearch ol li.selected"));
              $(i.get(h))
                .removeClass("selected");
              h -= 1;
              if (h === -1) {
                h = i.length - 1
              }
              return $(i.get(h))
                .addClass("selected")
            } else {
              if (b.keyCode === 40) {
                i = c.children();
                h = i.index($("#fuzzySearch ol li.selected"));
                $(i.get(h))
                  .removeClass("selected");
                h += 1;
                if (h === i.length) {
                  h = 0
                }
                return $(i.get(h))
                  .addClass("selected")
              } else {
                if (k && k !== lastSearch) {
                  window.lastSearch = k;
                  c.empty();
                  l = $("#base")
                    .attr("data-path");
                  e = fuzzy(k, _.pluck(searchData, "t"), {
                    limit: 25
                  });
                  g = fuzzy(k, _.pluck(searchData, "t"), {
                    pre: "<span>",
                    post: "</span>",
                    limit: 25
                  });
                  for (h = 0, j = e.length; h < j; h++) {
                    f = e[h];
                    d = _.find(searchData, function(m) {
                      return m.t === f
                    });
                    c.append($("<li><a href='" + l + d.p + "'>" + g[h] + "</a>" + (d.h ? "<small>(" + d.h + ")</small>" : "") + "</li>"))
                  }
                  $("#fuzzySearch ol li:first")
                    .addClass("selected");
                  $("#fuzzySearch")
                    .height(c.height() + 45);
                  return $("#fuzzySearch ol li")
                    .each(function(m, n) {
                      if (m % 2 === 0) {
                        return $(n)
                          .addClass("stripe")
                      } else {
                        return $(n)
                          .removeClass("stripe")
                      }
                    })
                } else {
                  if (k !== lastSearch) {
                    c.empty();
                    return $("#fuzzySearch")
                      .height(45)
                  }
                }
              }
            }
          }
        });
      $("body #content.list ul")
        .on("click", "li", function(c) {
          var b;
          b = $(this)
            .find("a:not(.toggle)")
            .attr("href");
          if (b) {
            if ($("body")
              .hasClass("noframes")) {
              if (b !== "#") {
                window.parent.location.href = b
              }
            } else {
              if (b !== "#") {
                top.frames.main.location.href = b
              }
            }
          }
          return c.preventDefault()
        });
      $("#content.tree ul > ul")
        .each(function() {
          return $(this)
            .prev()
            .prepend($('<a href="#" class="toggle"></a>'))
        });
      window.createStripes = function() {
        return $("#content.list li:visible")
          .each(function(b, c) {
            if (b % 2 === 0) {
              return $(c)
                .addClass("stripe")
            } else {
              return $(c)
                .removeClass("stripe")
            }
          })
      };
      $("#content.tree a.toggle")
        .click(function() {
          $(this)
            .toggleClass("collapsed");
          $(this)
            .parent()
            .next()
            .toggle();
          return window.createStripes()
        });
      $("a.frames")
        .click(function(b) {
          location.href = $(this)
            .attr("href");
          return b.preventDefault()
        });
      $("a.noframes")
        .click(function(b) {
          parent.location.href = location.href;
          return b.preventDefault()
        });
      window.indentTree = function(c, b) {
        return $(c)
          .find("> ul")
          .each(function() {
            $(this)
              .find("> li")
              .css("padding-left", "" + b + "px");
            return window.indentTree($(this), b + 20)
          })
      };
      $("#filecontents")
        .each(function() {
          var n, f, m, g, h, c, k, b, j, l, e, d;
          b = $("nav.toc");
          j = b;
          c = 0;
          n = [];
          e = $("h2,h3,h4,h5,h6", this);
          for (h = 0, l = e.length; h < l; h++) {
            m = e[h];
            m = $(m);
            m.before($("<a name='toc_" + h + "'></a>"));
            f = parseInt(m.get(0)
              .tagName.substring(1));
            if (f > c) {
              k = $("<ol></ol>");
              j.append(k);
              n.push(j);
              j = k;
              c = f
            } else {
              if (f < c) {
                for (g = 0, d = c - f; 0 <= d ? g < d : g > d; 0 <= d ? g++ : g--) {
                  j = n.pop()
                }
                if (!j) {
                  j = $("nav.toc ol:first")
                }
                c = f
              }
            }
            j.append($("<li><a href='#toc_" + h + "'>" + (m.text()) + "</a></li>"))
          }
          if ($("ol", b)
            .length === 0) {
            return b.hide()
          }
        });
      $("a.hide_toc")
        .click(function() {
          return $("nav.toc")
            .toggleClass("hidden")
        });
      $("a.float_toc")
        .click(function() {
          $("nav.toc")
            .toggleClass("inline");
          return $(this)
            .text($("nav.toc")
              .hasClass("inline") ? "float" : "left")
        });
      indentTree($("#content.list > ul"), 20);
      createStripes();
      a = function(b, c) {
        if (parent.frames.list) {
          if (!/#{ url }$/.test(parent.frames.list.location.href)) {
            return parent.frames.list.location.href = b
          }
        } else {
          if (parent) {
            return parent.$("#search #" + c)
              .click()
          } else {
            return $("#search #" + c)
              .click()
          }
        }
      };
      key.filter = function(c) {
        var b;
        b = (event.target || event.srcElement)
          .tagName;
        return b !== "INPUT" || c.keyCode === 27 || c.ctrlKey === true
      };
      key("s", function(b) {
        $("#search input")
          .focus()
          .select();
        if (parent.frames.list) {
          parent.frames.list.$("#search input")
            .focus()
            .select()
        }
        return b.preventDefault()
      });
      key("esc", function() {
        if (parent.frames.list) {
          parent.frames.list.$("#search input")
            .blur();
          parent.frames.main.$("#help")
            .hide();
          return parent.frames.main.$("#fuzzySearch")
            .hide()
        } else {
          if (parent) {
            parent.$("#search .active")
              .click();
            parent.$("#help")
              .hide();
            return parent.$("#fuzzySearch")
              .hide()
          } else {
            $("#search input")
              .blur();
            $("#help")
              .hide();
            return $("#fuzzySearch")
              .hide()
          }
        }
      });
      key("⌃+l", function() {
        var b;
        b = $(parent.document.body);
        if (b.data("toggled")) {
          parent.document.body.cols = "20%, *";
          return b.data("toggled", false)
        } else {
          parent.document.body.cols = "0, *";
          return b.data("toggled", true)
        }
      });
      key("⌃+c", function() {
        return a("class_list.html", "class_list_link")
      });
      key("⌃+m", function() {
        return a("method_list.html", "method_list_link")
      });
      key("⌃+i", function() {
        return a("mixin_list.html", "mixin_list_link")
      });
      key("⌃+f", function() {
        return a("file_list.html", "file_list_link")
      });
      key("⌃+h", function() {
        if (parent.frames.main) {
          return parent.frames.main.$("#help")
            .toggle()
        } else {
          if (parent) {
            return parent.$("#help")
              .toggle()
          } else {
            return $("#help")
              .toggle()
          }
        }
      });
      return key("⌃+t", function(b) {
        $("#fuzzySearch")
          .toggle();
        $("#fuzzySearch input")
          .focus()
          .select();
        if (parent.frames.main) {
          parent.frames.main.$("#fuzzySearch")
            .show();
          parent.frames.main.$("#fuzzySearch input")
            .focus()
            .select()
        }
        return b.preventDefault()
      })
    })
})
  .call(this);
(function() {
  var b, a;
  window.fuzzy = function(A, u, k) {
    var m, i, t, r, f, l, n, I, d, H, q, E, y, C, g, w, x, D, s, o, v, c, B, e, z, F, p, j, h, G;
    if (k == null) {
      k = {}
    }
    v = k.pre, x = k.post, C = k.limit, j = k.separator, I = k.ignorecase, d = k.ignorespace, p = k.separate;
    if (I == null) {
      I = true
    }
    if (d == null) {
      d = true
    }
    if (p == null) {
      p = false
    }
    if (p && !j) {
      throw new Error("You must pass a separator when options.separate is true.")
    }
    if (d) {
      A = A.replace(/\s/g, "")
    }
    g = [];
    l = (I && "i") || "";
    f = v && x;
    m = function(J, K, L) {
      if (p) {
        return g[L]([J, K])
      } else {
        if (J) {
          return g[L](J + j + K)
        } else {
          return g[L](K)
        }
      }
    };
    t = function(J, K) {
      return m(J, K, "push")
    };
    F = function(J, K) {
      return m(J, K, "unshift")
    };
    if (j) {
      B = A.split(j);
      D = B.pop();
      c = B.join(j);
      H = _.map(B, (function(J) {
        return b(J)
      }));
      H = H.join(".*?" + j + ".*?");
      z = new RegExp("^.*?" + H + ".*?$", l)
    } else {
      B = false;
      D = A;
      z = false
    }
    o = new RegExp("^.*?" + (b(D)) + ".*$", l);
    for (h = 0, G = u.length; h < G; h++) {
      E = u[h];
      if (g.length === C) {
        break
      }
      n = j && !! ~E.indexOf(j);
      if (!n && E.indexOf(A) === 0) {
        if (f) {
          y = A.length;
          F("", v + E.slice(0, y) + x + E.slice(y))
        } else {
          F("", E)
        }
        continue
      }
      if (n) {
        w = E.split(j);
        e = w.slice(0, -1)
          .join(j);
        s = _.last(w)
      } else {
        e = "";
        s = E
      }
      q = !z || z.test(e);
      q && (q = !o || o.test(s));
      if (!q) {
        continue
      }
      if (f) {
        i = a(s, D, v, x, I);
        if (n) {
          r = a(e, c, v, x, I);
          t(r, i)
        } else {
          t("", i)
        }
      } else {
        t(e, s)
      }
    }
    return g
  };
  b = function(h) {
    var i, f, e, g, d;
    f = h.split("");
    e = [];
    for (g = 0, d = f.length; g < d; g++) {
      i = f[g];
      e.push("([" + i + "])")
    }
    return e.join("[^/]*?")
  };
  a = function(j, k, f, n, e) {
    var l, h, d, o, g, m, i;
    h = "";
    k = k.split("");
    d = k.shift();
    i = j.split("");
    for (g = 0, m = i.length; g < m; g++) {
      l = i[g];
      if (d) {
        o = false;
        if (e && l.toLowerCase() === d.toLowerCase()) {
          o = true
        } else {
          if (!e && l === d) {
            o = true
          }
        } if (o) {
          h += "" + f + l + n;
          d = k.shift();
          continue
        }
      }
      h += l
    }
    return h
  }
})
  .call(this);
var hljs = new function() {
    function m(p) {
      return p.replace(/&/gm, "&amp;")
        .replace(/</gm, "&lt;")
    }

    function f(r, q, p) {
      return RegExp(q, "m" + (r.case_insensitive ? "i" : "") + (p ? "g" : ""))
    }

    function b(r) {
      for (var p = 0; p < r.childNodes.length; p++) {
        var q = r.childNodes[p];
        if (q.nodeName == "CODE") {
          return q
        }
        if (!(q.nodeType == 3 && q.nodeValue.match(/\s+/))) {
          break
        }
      }
    }

    function h(t, s) {
      var p = "";
      for (var r = 0; r < t.childNodes.length; r++) {
        if (t.childNodes[r].nodeType == 3) {
          var q = t.childNodes[r].nodeValue;
          if (s) {
            q = q.replace(/\n/g, "")
          }
          p += q
        } else {
          if (t.childNodes[r].nodeName == "BR") {
            p += "\n"
          } else {
            p += h(t.childNodes[r])
          }
        }
      }
      if (/MSIE [678]/.test(navigator.userAgent)) {
        p = p.replace(/\r/g, "\n")
      }
      return p
    }

    function a(s) {
      var r = s.className.split(/\s+/);
      r = r.concat(s.parentNode.className.split(/\s+/));
      for (var q = 0; q < r.length; q++) {
        var p = r[q].replace(/^language-/, "");
        if (e[p] || p == "no-highlight") {
          return p
        }
      }
    }

    function c(q) {
      var p = [];
      (function(s, t) {
        for (var r = 0; r < s.childNodes.length; r++) {
          if (s.childNodes[r].nodeType == 3) {
            t += s.childNodes[r].nodeValue.length
          } else {
            if (s.childNodes[r].nodeName == "BR") {
              t += 1
            } else {
              if (s.childNodes[r].nodeType == 1) {
                p.push({
                  event: "start",
                  offset: t,
                  node: s.childNodes[r]
                });
                t = arguments.callee(s.childNodes[r], t);
                p.push({
                  event: "stop",
                  offset: t,
                  node: s.childNodes[r]
                })
              }
            }
          }
        }
        return t
      })(q, 0);
      return p
    }

    function k(y, w, x) {
      var q = 0;
      var z = "";
      var s = [];

      function u() {
        if (y.length && w.length) {
          if (y[0].offset != w[0].offset) {
            return (y[0].offset < w[0].offset) ? y : w
          } else {
            return w[0].event == "start" ? y : w
          }
        } else {
          return y.length ? y : w
        }
      }

      function t(D) {
        var A = "<" + D.nodeName.toLowerCase();
        for (var B = 0; B < D.attributes.length; B++) {
          var C = D.attributes[B];
          A += " " + C.nodeName.toLowerCase();
          if (C.value !== undefined && C.value !== false && C.value !== null) {
            A += '="' + m(C.value) + '"'
          }
        }
        return A + ">"
      }
      while (y.length || w.length) {
        var v = u()
          .splice(0, 1)[0];
        z += m(x.substr(q, v.offset - q));
        q = v.offset;
        if (v.event == "start") {
          z += t(v.node);
          s.push(v.node)
        } else {
          if (v.event == "stop") {
            var p, r = s.length;
            do {
              r--;
              p = s[r];
              z += ("</" + p.nodeName.toLowerCase() + ">")
            } while (p != v.node);
            s.splice(r, 1);
            while (r < s.length) {
              z += t(s[r]);
              r++
            }
          }
        }
      }
      return z + m(x.substr(q))
    }

    function j() {
      function q(w, x, v) {
        if (w.compiled) {
          return
        }
        var u;
        if (!v) {
          w.beginRe = f(x, w.begin ? w.begin : "\\B|\\b");
          if (!w.end && !w.endsWithParent) {
            w.end = "\\B|\\b"
          }
          if (w.end) {
            w.endRe = f(x, w.end)
          }
        }
        if (w.illegal) {
          w.illegalRe = f(x, w.illegal)
        }
        if (w.relevance === undefined) {
          w.relevance = 1
        }
        if (w.keywords) {
          w.lexemsRe = f(x, w.lexems || hljs.IDENT_RE, true);
          for (var t in w.keywords) {
            if (!w.keywords.hasOwnProperty(t)) {
              continue
            }
            if (w.keywords[t] instanceof Object) {
              u = w.keywords[t]
            } else {
              u = w.keywords;
              t = "keyword"
            }
            for (var r in u) {
              if (!u.hasOwnProperty(r)) {
                continue
              }
              w.keywords[r] = [t, u[r]]
            }
          }
        }
        if (!w.contains) {
          w.contains = []
        }
        w.compiled = true;
        for (var s = 0; s < w.contains.length; s++) {
          if (w.contains[s] == "self") {
            w.contains[s] = w
          }
          q(w.contains[s], x, false)
        }
        if (w.starts) {
          q(w.starts, x, false)
        }
      }
      for (var p in e) {
        if (!e.hasOwnProperty(p)) {
          continue
        }
        q(e[p].defaultMode, e[p], true)
      }
    }

    function d(B, C) {
      if (!j.called) {
        j();
        j.called = true
      }

      function r(K, M) {
        for (var L = 0; L < M.contains.length; L++) {
          if (M.contains[L].beginRe.test(K)) {
            return M.contains[L]
          }
        }
      }

      function w(L, K) {
        if (p[L].end && p[L].endRe.test(K)) {
          return 1
        }
        if (p[L].endsWithParent) {
          var M = w(L - 1, K);
          return M ? M + 1 : 0
        }
        return 0
      }

      function x(K, L) {
        return L.illegal && L.illegalRe.test(K)
      }

      function J(N, O) {
        var K = [];
        for (var M = 0; M < N.contains.length; M++) {
          K.push(N.contains[M].begin)
        }
        var L = p.length - 1;
        do {
          if (p[L].end) {
            K.push(p[L].end)
          }
          L--
        } while (p[L + 1].endsWithParent);
        if (N.illegal) {
          K.push(N.illegal)
        }
        return f(O, "(" + K.join("|") + ")", true)
      }

      function q(M, L) {
        var N = p[p.length - 1];
        if (!N.terminators) {
          N.terminators = J(N, D)
        }
        N.terminators.lastIndex = L;
        var K = N.terminators.exec(M);
        if (K) {
          return [M.substr(L, K.index - L), K[0], false]
        } else {
          return [M.substr(L), "", true]
        }
      }

      function A(N, K) {
        var L = D.case_insensitive ? K[0].toLowerCase() : K[0];
        var M = N.keywords[L];
        if (M && M instanceof Array) {
          return M
        }
        return false
      }

      function E(L, P) {
        L = m(L);
        if (!P.keywords) {
          return L
        }
        var K = "";
        var O = 0;
        P.lexemsRe.lastIndex = 0;
        var M = P.lexemsRe.exec(L);
        while (M) {
          K += L.substr(O, M.index - O);
          var N = A(P, M);
          if (N) {
            y += N[1];
            K += '<span class="' + N[0] + '">' + M[0] + "</span>"
          } else {
            K += M[0]
          }
          O = P.lexemsRe.lastIndex;
          M = P.lexemsRe.exec(L)
        }
        return K + L.substr(O, L.length - O)
      }

      function I(L, M) {
        if (M.subLanguage && e[M.subLanguage]) {
          var K = d(M.subLanguage, L);
          y += K.keyword_count;
          return K.value
        } else {
          return E(L, M)
        }
      }

      function H(M, K) {
        var L = M.className ? '<span class="' + M.className + '">' : "";
        if (M.returnBegin) {
          z += L;
          M.buffer = ""
        } else {
          if (M.excludeBegin) {
            z += m(K) + L;
            M.buffer = ""
          } else {
            z += L;
            M.buffer = K
          }
        }
        p.push(M);
        u += M.relevance
      }

      function F(O, N, M) {
        var R = p[p.length - 1];
        if (M) {
          z += I(R.buffer + O, R);
          return false
        }
        var Q = r(N, R);
        if (Q) {
          z += I(R.buffer + O, R);
          H(Q, N);
          return Q.returnBegin
        }
        var L = w(p.length - 1, N);
        if (L) {
          var P = R.className ? "</span>" : "";
          if (R.returnEnd) {
            z += I(R.buffer + O, R) + P
          } else {
            if (R.excludeEnd) {
              z += I(R.buffer + O, R) + P + m(N)
            } else {
              z += I(R.buffer + O + N, R) + P
            }
          }
          while (L > 1) {
            P = p[p.length - 2].className ? "</span>" : "";
            z += P;
            L--;
            p.length--
          }
          var K = p[p.length - 1];
          p.length--;
          p[p.length - 1].buffer = "";
          if (K.starts) {
            H(K.starts, "")
          }
          return R.returnEnd
        }
        if (x(N, R)) {
          throw "Illegal"
        }
      }
      var D = e[B];
      var p = [D.defaultMode];
      var u = 0;
      var y = 0;
      var z = "";
      try {
        var s, v = 0;
        D.defaultMode.buffer = "";
        do {
          s = q(C, v);
          var t = F(s[0], s[1], s[2]);
          v += s[0].length;
          if (!t) {
            v += s[1].length
          }
        } while (!s[2]);
        if (p.length > 1) {
          throw "Illegal"
        }
        return {
          relevance: u,
          keyword_count: y,
          value: z
        }
      } catch (G) {
        if (G == "Illegal") {
          return {
            relevance: 0,
            keyword_count: 0,
            value: m(C)
          }
        } else {
          throw G
        }
      }
    }

    function g(t) {
      var p = {
        keyword_count: 0,
        relevance: 0,
        value: m(t)
      };
      var r = p;
      for (var q in e) {
        if (!e.hasOwnProperty(q)) {
          continue
        }
        var s = d(q, t);
        s.language = q;
        if (s.keyword_count + s.relevance > r.keyword_count + r.relevance) {
          r = s
        }
        if (s.keyword_count + s.relevance > p.keyword_count + p.relevance) {
          r = p;
          p = s
        }
      }
      if (r.language) {
        p.second_best = r
      }
      return p
    }

    function i(r, q, p) {
      if (q) {
        r = r.replace(/^((<[^>]+>|\t)+)/gm, function(t, w, v, u) {
          return w.replace(/\t/g, q)
        })
      }
      if (p) {
        r = r.replace(/\n/g, "<br>")
      }
      return r
    }

    function n(t, w, r) {
      var x = h(t, r);
      var v = a(t);
      var y, s;
      if (v == "no-highlight") {
        return
      }
      if (v) {
        y = d(v, x)
      } else {
        y = g(x);
        v = y.language
      }
      var q = c(t);
      if (q.length) {
        s = document.createElement("pre");
        s.innerHTML = y.value;
        y.value = k(q, c(s), x)
      }
      y.value = i(y.value, w, r);
      var u = t.className;
      if (!u.match("(\\s|^)(language-)?" + v + "(\\s|$)")) {
        u = u ? (u + " " + v) : v
      }
      if (/MSIE [678]/.test(navigator.userAgent) && t.tagName == "CODE" && t.parentNode.tagName == "PRE") {
        s = t.parentNode;
        var p = document.createElement("div");
        p.innerHTML = "<pre><code>" + y.value + "</code></pre>";
        t = p.firstChild.firstChild;
        p.firstChild.className = s.className;
        s.parentNode.replaceChild(p.firstChild, s)
      } else {
        t.innerHTML = y.value
      }
      t.className = u;
      t.result = {
        language: v,
        kw: y.keyword_count,
        re: y.relevance
      };
      if (y.second_best) {
        t.second_best = {
          language: y.second_best.language,
          kw: y.second_best.keyword_count,
          re: y.second_best.relevance
        }
      }
    }

    function o() {
      if (o.called) {
        return
      }
      o.called = true;
      var r = document.getElementsByTagName("pre");
      for (var p = 0; p < r.length; p++) {
        var q = b(r[p]);
        if (q) {
          n(q, hljs.tabReplace)
        }
      }
    }

    function l() {
      if (window.addEventListener) {
        window.addEventListener("DOMContentLoaded", o, false);
        window.addEventListener("load", o, false)
      } else {
        if (window.attachEvent) {
          window.attachEvent("onload", o)
        } else {
          window.onload = o
        }
      }
    }
    var e = {};
    this.LANGUAGES = e;
    this.highlight = d;
    this.highlightAuto = g;
    this.fixMarkup = i;
    this.highlightBlock = n;
    this.initHighlighting = o;
    this.initHighlightingOnLoad = l;
    this.IDENT_RE = "[a-zA-Z][a-zA-Z0-9_]*";
    this.UNDERSCORE_IDENT_RE = "[a-zA-Z_][a-zA-Z0-9_]*";
    this.NUMBER_RE = "\\b\\d+(\\.\\d+)?";
    this.C_NUMBER_RE = "\\b(0[xX][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
    this.BINARY_NUMBER_RE = "\\b(0b[01]+)";
    this.RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
    this.BACKSLASH_ESCAPE = {
      begin: "\\\\.",
      relevance: 0
    };
    this.APOS_STRING_MODE = {
      className: "string",
      begin: "'",
      end: "'",
      illegal: "\\n",
      contains: [this.BACKSLASH_ESCAPE],
      relevance: 0
    };
    this.QUOTE_STRING_MODE = {
      className: "string",
      begin: '"',
      end: '"',
      illegal: "\\n",
      contains: [this.BACKSLASH_ESCAPE],
      relevance: 0
    };
    this.C_LINE_COMMENT_MODE = {
      className: "comment",
      begin: "//",
      end: "$"
    };
    this.C_BLOCK_COMMENT_MODE = {
      className: "comment",
      begin: "/\\*",
      end: "\\*/"
    };
    this.HASH_COMMENT_MODE = {
      className: "comment",
      begin: "#",
      end: "$"
    };
    this.NUMBER_MODE = {
      className: "number",
      begin: this.NUMBER_RE,
      relevance: 0
    };
    this.C_NUMBER_MODE = {
      className: "number",
      begin: this.C_NUMBER_RE,
      relevance: 0
    };
    this.BINARY_NUMBER_MODE = {
      className: "number",
      begin: this.BINARY_NUMBER_RE,
      relevance: 0
    };
    this.inherit = function(r, s) {
      var p = {};
      for (var q in r) {
        p[q] = r[q]
      }
      if (s) {
        for (var q in s) {
          p[q] = s[q]
        }
      }
      return p
    }
  }();
hljs.LANGUAGES.apache = function() {
  var a = {
    className: "number",
    begin: "[\\$%]\\d+"
  };
  return {
    case_insensitive: true,
    defaultMode: {
      keywords: {
        keyword: {
          acceptfilter: 1,
          acceptmutex: 1,
          acceptpathinfo: 1,
          accessfilename: 1,
          action: 1,
          addalt: 1,
          addaltbyencoding: 1,
          addaltbytype: 1,
          addcharset: 1,
          adddefaultcharset: 1,
          adddescription: 1,
          addencoding: 1,
          addhandler: 1,
          addicon: 1,
          addiconbyencoding: 1,
          addiconbytype: 1,
          addinputfilter: 1,
          addlanguage: 1,
          addmoduleinfo: 1,
          addoutputfilter: 1,
          addoutputfilterbytype: 1,
          addtype: 1,
          alias: 1,
          aliasmatch: 1,
          allow: 1,
          allowconnect: 1,
          allowencodedslashes: 1,
          allowoverride: 1,
          anonymous: 1,
          anonymous_logemail: 1,
          anonymous_mustgiveemail: 1,
          anonymous_nouserid: 1,
          anonymous_verifyemail: 1,
          authbasicauthoritative: 1,
          authbasicprovider: 1,
          authdbduserpwquery: 1,
          authdbduserrealmquery: 1,
          authdbmgroupfile: 1,
          authdbmtype: 1,
          authdbmuserfile: 1,
          authdefaultauthoritative: 1,
          authdigestalgorithm: 1,
          authdigestdomain: 1,
          authdigestnccheck: 1,
          authdigestnonceformat: 1,
          authdigestnoncelifetime: 1,
          authdigestprovider: 1,
          authdigestqop: 1,
          authdigestshmemsize: 1,
          authgroupfile: 1,
          authldapbinddn: 1,
          authldapbindpassword: 1,
          authldapcharsetconfig: 1,
          authldapcomparednonserver: 1,
          authldapdereferencealiases: 1,
          authldapgroupattribute: 1,
          authldapgroupattributeisdn: 1,
          authldapremoteuserattribute: 1,
          authldapremoteuserisdn: 1,
          authldapurl: 1,
          authname: 1,
          authnprovideralias: 1,
          authtype: 1,
          authuserfile: 1,
          authzdbmauthoritative: 1,
          authzdbmtype: 1,
          authzdefaultauthoritative: 1,
          authzgroupfileauthoritative: 1,
          authzldapauthoritative: 1,
          authzownerauthoritative: 1,
          authzuserauthoritative: 1,
          balancermember: 1,
          browsermatch: 1,
          browsermatchnocase: 1,
          bufferedlogs: 1,
          cachedefaultexpire: 1,
          cachedirlength: 1,
          cachedirlevels: 1,
          cachedisable: 1,
          cacheenable: 1,
          cachefile: 1,
          cacheignorecachecontrol: 1,
          cacheignoreheaders: 1,
          cacheignorenolastmod: 1,
          cacheignorequerystring: 1,
          cachelastmodifiedfactor: 1,
          cachemaxexpire: 1,
          cachemaxfilesize: 1,
          cacheminfilesize: 1,
          cachenegotiateddocs: 1,
          cacheroot: 1,
          cachestorenostore: 1,
          cachestoreprivate: 1,
          cgimapextension: 1,
          charsetdefault: 1,
          charsetoptions: 1,
          charsetsourceenc: 1,
          checkcaseonly: 1,
          checkspelling: 1,
          chrootdir: 1,
          contentdigest: 1,
          cookiedomain: 1,
          cookieexpires: 1,
          cookielog: 1,
          cookiename: 1,
          cookiestyle: 1,
          cookietracking: 1,
          coredumpdirectory: 1,
          customlog: 1,
          dav: 1,
          davdepthinfinity: 1,
          davgenericlockdb: 1,
          davlockdb: 1,
          davmintimeout: 1,
          dbdexptime: 1,
          dbdkeep: 1,
          dbdmax: 1,
          dbdmin: 1,
          dbdparams: 1,
          dbdpersist: 1,
          dbdpreparesql: 1,
          dbdriver: 1,
          defaulticon: 1,
          defaultlanguage: 1,
          defaulttype: 1,
          deflatebuffersize: 1,
          deflatecompressionlevel: 1,
          deflatefilternote: 1,
          deflatememlevel: 1,
          deflatewindowsize: 1,
          deny: 1,
          directoryindex: 1,
          directorymatch: 1,
          directoryslash: 1,
          documentroot: 1,
          dumpioinput: 1,
          dumpiologlevel: 1,
          dumpiooutput: 1,
          enableexceptionhook: 1,
          enablemmap: 1,
          enablesendfile: 1,
          errordocument: 1,
          errorlog: 1,
          example: 1,
          expiresactive: 1,
          expiresbytype: 1,
          expiresdefault: 1,
          extendedstatus: 1,
          extfilterdefine: 1,
          extfilteroptions: 1,
          fileetag: 1,
          filterchain: 1,
          filterdeclare: 1,
          filterprotocol: 1,
          filterprovider: 1,
          filtertrace: 1,
          forcelanguagepriority: 1,
          forcetype: 1,
          forensiclog: 1,
          gracefulshutdowntimeout: 1,
          group: 1,
          header: 1,
          headername: 1,
          hostnamelookups: 1,
          identitycheck: 1,
          identitychecktimeout: 1,
          imapbase: 1,
          imapdefault: 1,
          imapmenu: 1,
          include: 1,
          indexheadinsert: 1,
          indexignore: 1,
          indexoptions: 1,
          indexorderdefault: 1,
          indexstylesheet: 1,
          isapiappendlogtoerrors: 1,
          isapiappendlogtoquery: 1,
          isapicachefile: 1,
          isapifakeasync: 1,
          isapilognotsupported: 1,
          isapireadaheadbuffer: 1,
          keepalive: 1,
          keepalivetimeout: 1,
          languagepriority: 1,
          ldapcacheentries: 1,
          ldapcachettl: 1,
          ldapconnectiontimeout: 1,
          ldapopcacheentries: 1,
          ldapopcachettl: 1,
          ldapsharedcachefile: 1,
          ldapsharedcachesize: 1,
          ldaptrustedclientcert: 1,
          ldaptrustedglobalcert: 1,
          ldaptrustedmode: 1,
          ldapverifyservercert: 1,
          limitinternalrecursion: 1,
          limitrequestbody: 1,
          limitrequestfields: 1,
          limitrequestfieldsize: 1,
          limitrequestline: 1,
          limitxmlrequestbody: 1,
          listen: 1,
          listenbacklog: 1,
          loadfile: 1,
          loadmodule: 1,
          lockfile: 1,
          logformat: 1,
          loglevel: 1,
          maxclients: 1,
          maxkeepaliverequests: 1,
          maxmemfree: 1,
          maxrequestsperchild: 1,
          maxrequestsperthread: 1,
          maxspareservers: 1,
          maxsparethreads: 1,
          maxthreads: 1,
          mcachemaxobjectcount: 1,
          mcachemaxobjectsize: 1,
          mcachemaxstreamingbuffer: 1,
          mcacheminobjectsize: 1,
          mcacheremovalalgorithm: 1,
          mcachesize: 1,
          metadir: 1,
          metafiles: 1,
          metasuffix: 1,
          mimemagicfile: 1,
          minspareservers: 1,
          minsparethreads: 1,
          mmapfile: 1,
          mod_gzip_on: 1,
          mod_gzip_add_header_count: 1,
          mod_gzip_keep_workfiles: 1,
          mod_gzip_dechunk: 1,
          mod_gzip_min_http: 1,
          mod_gzip_minimum_file_size: 1,
          mod_gzip_maximum_file_size: 1,
          mod_gzip_maximum_inmem_size: 1,
          mod_gzip_temp_dir: 1,
          mod_gzip_item_include: 1,
          mod_gzip_item_exclude: 1,
          mod_gzip_command_version: 1,
          mod_gzip_can_negotiate: 1,
          mod_gzip_handle_methods: 1,
          mod_gzip_static_suffix: 1,
          mod_gzip_send_vary: 1,
          mod_gzip_update_static: 1,
          modmimeusepathinfo: 1,
          multiviewsmatch: 1,
          namevirtualhost: 1,
          noproxy: 1,
          nwssltrustedcerts: 1,
          nwsslupgradeable: 1,
          options: 1,
          order: 1,
          passenv: 1,
          pidfile: 1,
          protocolecho: 1,
          proxybadheader: 1,
          proxyblock: 1,
          proxydomain: 1,
          proxyerroroverride: 1,
          proxyftpdircharset: 1,
          proxyiobuffersize: 1,
          proxymaxforwards: 1,
          proxypass: 1,
          proxypassinterpolateenv: 1,
          proxypassmatch: 1,
          proxypassreverse: 1,
          proxypassreversecookiedomain: 1,
          proxypassreversecookiepath: 1,
          proxypreservehost: 1,
          proxyreceivebuffersize: 1,
          proxyremote: 1,
          proxyremotematch: 1,
          proxyrequests: 1,
          proxyset: 1,
          proxystatus: 1,
          proxytimeout: 1,
          proxyvia: 1,
          readmename: 1,
          receivebuffersize: 1,
          redirect: 1,
          redirectmatch: 1,
          redirectpermanent: 1,
          redirecttemp: 1,
          removecharset: 1,
          removeencoding: 1,
          removehandler: 1,
          removeinputfilter: 1,
          removelanguage: 1,
          removeoutputfilter: 1,
          removetype: 1,
          requestheader: 1,
          require: 2,
          rewritebase: 1,
          rewritecond: 10,
          rewriteengine: 1,
          rewritelock: 1,
          rewritelog: 1,
          rewriteloglevel: 1,
          rewritemap: 1,
          rewriteoptions: 1,
          rewriterule: 10,
          rlimitcpu: 1,
          rlimitmem: 1,
          rlimitnproc: 1,
          satisfy: 1,
          scoreboardfile: 1,
          script: 1,
          scriptalias: 1,
          scriptaliasmatch: 1,
          scriptinterpretersource: 1,
          scriptlog: 1,
          scriptlogbuffer: 1,
          scriptloglength: 1,
          scriptsock: 1,
          securelisten: 1,
          seerequesttail: 1,
          sendbuffersize: 1,
          serveradmin: 1,
          serveralias: 1,
          serverlimit: 1,
          servername: 1,
          serverpath: 1,
          serverroot: 1,
          serversignature: 1,
          servertokens: 1,
          setenv: 1,
          setenvif: 1,
          setenvifnocase: 1,
          sethandler: 1,
          setinputfilter: 1,
          setoutputfilter: 1,
          ssienableaccess: 1,
          ssiendtag: 1,
          ssierrormsg: 1,
          ssistarttag: 1,
          ssitimeformat: 1,
          ssiundefinedecho: 1,
          sslcacertificatefile: 1,
          sslcacertificatepath: 1,
          sslcadnrequestfile: 1,
          sslcadnrequestpath: 1,
          sslcarevocationfile: 1,
          sslcarevocationpath: 1,
          sslcertificatechainfile: 1,
          sslcertificatefile: 1,
          sslcertificatekeyfile: 1,
          sslciphersuite: 1,
          sslcryptodevice: 1,
          sslengine: 1,
          sslhonorciperorder: 1,
          sslmutex: 1,
          ssloptions: 1,
          sslpassphrasedialog: 1,
          sslprotocol: 1,
          sslproxycacertificatefile: 1,
          sslproxycacertificatepath: 1,
          sslproxycarevocationfile: 1,
          sslproxycarevocationpath: 1,
          sslproxyciphersuite: 1,
          sslproxyengine: 1,
          sslproxymachinecertificatefile: 1,
          sslproxymachinecertificatepath: 1,
          sslproxyprotocol: 1,
          sslproxyverify: 1,
          sslproxyverifydepth: 1,
          sslrandomseed: 1,
          sslrequire: 1,
          sslrequiressl: 1,
          sslsessioncache: 1,
          sslsessioncachetimeout: 1,
          sslusername: 1,
          sslverifyclient: 1,
          sslverifydepth: 1,
          startservers: 1,
          startthreads: 1,
          substitute: 1,
          suexecusergroup: 1,
          threadlimit: 1,
          threadsperchild: 1,
          threadstacksize: 1,
          timeout: 1,
          traceenable: 1,
          transferlog: 1,
          typesconfig: 1,
          unsetenv: 1,
          usecanonicalname: 1,
          usecanonicalphysicalport: 1,
          user: 1,
          userdir: 1,
          virtualdocumentroot: 1,
          virtualdocumentrootip: 1,
          virtualscriptalias: 1,
          virtualscriptaliasip: 1,
          win32disableacceptex: 1,
          xbithack: 1
        },
        literal: {
          on: 1,
          off: 1
        }
      },
      contains: [hljs.HASH_COMMENT_MODE, {
          className: "sqbracket",
          begin: "\\s\\[",
          end: "\\]$"
        }, {
          className: "cbracket",
          begin: "[\\$%]\\{",
          end: "\\}",
          contains: ["self", a]
        },
        a, {
          className: "tag",
          begin: "</?",
          end: ">"
        },
        hljs.QUOTE_STRING_MODE]
    }
  }
}();
hljs.LANGUAGES.bash = function() {
  var e = {
    "true": 1,
    "false": 1
  };
  var b = {
    className: "variable",
    begin: "\\$([a-zA-Z0-9_]+)\\b"
  };
  var a = {
    className: "variable",
    begin: "\\$\\{(([^}])|(\\\\}))+\\}",
    contains: [hljs.C_NUMBER_MODE]
  };
  var f = {
    className: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [hljs.BACKSLASH_ESCAPE, b, a],
    relevance: 0
  };
  var c = {
    className: "string",
    begin: "'",
    end: "'",
    relevance: 0
  };
  var d = {
    className: "test_condition",
    begin: "",
    end: "",
    contains: [f, c, b, a, hljs.C_NUMBER_MODE],
    keywords: {
      literal: e
    },
    relevance: 0
  };
  return {
    defaultMode: {
      keywords: {
        keyword: {
          "if": 1,
          then: 1,
          "else": 1,
          fi: 1,
          "for": 1,
          "break": 1,
          "continue": 1,
          "while": 1,
          "in": 1,
          "do": 1,
          done: 1,
          echo: 1,
          exit: 1,
          "return": 1,
          set: 1,
          declare: 1
        },
        literal: e
      },
      contains: [{
          className: "shebang",
          begin: "(#!\\/bin\\/bash)|(#!\\/bin\\/sh)",
          relevance: 10
        },
        b, a, hljs.HASH_COMMENT_MODE, hljs.C_NUMBER_MODE, f, c, hljs.inherit(d, {
          begin: "\\[ ",
          end: " \\]",
          relevance: 0
        }), hljs.inherit(d, {
          begin: "\\[\\[ ",
          end: " \\]\\]"
        })]
    }
  }
}();
hljs.LANGUAGES.coffeescript = function() {
  var d = {
    keyword: {
      "in": 1,
      "if": 1,
      "for": 1,
      "while": 1,
      "finally": 1,
      "new": 1,
      "do": 1,
      "return": 1,
      "else": 1,
      "break": 1,
      "catch": 1,
      "instanceof": 1,
      "throw": 1,
      "try": 1,
      "this": 1,
      "switch": 1,
      "continue": 1,
      "typeof": 1,
      "delete": 1,
      "debugger": 1,
      "class": 1,
      "extends": 1,
      "super": 1,
      then: 1,
      unless: 1,
      until: 1,
      loop: 2,
      of: 2,
      by: 1,
      when: 2,
      and: 1,
      or: 1,
      is: 1,
      isnt: 2,
      not: 1
    },
    literal: {
      "true": 1,
      "false": 1,
      "null": 1,
      "undefined": 1,
      yes: 1,
      no: 1,
      on: 1,
      off: 1
    },
    reserved: {
      "case": 1,
      "default": 1,
      "function": 1,
      "var": 1,
      "void": 1,
      "with": 1,
      "const": 1,
      let: 1,
      "enum": 1,
      "export": 1,
      "import": 1,
      "native": 1,
      __hasProp: 1,
      __extends: 1,
      __slice: 1,
      __bind: 1,
      __indexOf: 1
    }
  };
  var a = "[A-Za-z$_][0-9A-Za-z$_]*";
  var g = {
    className: "subst",
    begin: "#\\{",
    end: "}",
    keywords: d,
    contains: [hljs.C_NUMBER_MODE, hljs.BINARY_NUMBER_MODE]
  };
  var b = {
    className: "string",
    begin: '"',
    end: '"',
    relevance: 0,
    contains: [hljs.BACKSLASH_ESCAPE, g]
  };
  var i = {
    className: "string",
    begin: '"""',
    end: '"""',
    contains: [hljs.BACKSLASH_ESCAPE, g]
  };
  var e = {
    className: "comment",
    begin: "###",
    end: "###"
  };
  var f = {
    className: "regexp",
    begin: "///",
    end: "///",
    contains: [hljs.HASH_COMMENT_MODE]
  };
  var h = {
    className: "function",
    begin: a + "\\s*=\\s*(\\(.+\\))?\\s*[-=]>",
    returnBegin: true,
    contains: [{
      className: "title",
      begin: a
    }, {
      className: "params",
      begin: "\\(",
      end: "\\)"
    }]
  };
  var c = {
    className: "javascript",
    begin: "`",
    end: "`",
    excludeBegin: true,
    excludeEnd: true,
    subLanguage: "javascript"
  };
  return {
    defaultMode: {
      keywords: d,
      contains: [hljs.C_NUMBER_MODE, hljs.BINARY_NUMBER_MODE, hljs.APOS_STRING_MODE, i, b, e, hljs.HASH_COMMENT_MODE, f, c, h]
    }
  }
}();
hljs.LANGUAGES.css = function() {
  var a = {
    className: "function",
    begin: hljs.IDENT_RE + "\\(",
    end: "\\)",
    contains: [{
      endsWithParent: true,
      excludeEnd: true,
      contains: [hljs.NUMBER_MODE, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE]
    }]
  };
  return {
    case_insensitive: true,
    defaultMode: {
      illegal: "[=/|']",
      contains: [hljs.C_BLOCK_COMMENT_MODE, {
        className: "id",
        begin: "\\#[A-Za-z0-9_-]+"
      }, {
        className: "class",
        begin: "\\.[A-Za-z0-9_-]+",
        relevance: 0
      }, {
        className: "attr_selector",
        begin: "\\[",
        end: "\\]",
        illegal: "$"
      }, {
        className: "pseudo",
        begin: ":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"
      }, {
        className: "at_rule",
        begin: "@(font-face|page)",
        lexems: "[a-z-]+",
        keywords: {
          "font-face": 1,
          page: 1
        }
      }, {
        className: "at_rule",
        begin: "@",
        end: "[{;]",
        excludeEnd: true,
        keywords: {
          "import": 1,
          page: 1,
          media: 1,
          charset: 1
        },
        contains: [a, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.NUMBER_MODE]
      }, {
        className: "tag",
        begin: hljs.IDENT_RE,
        relevance: 0
      }, {
        className: "rules",
        begin: "{",
        end: "}",
        illegal: "[^\\s]",
        relevance: 0,
        contains: [hljs.C_BLOCK_COMMENT_MODE, {
          className: "rule",
          begin: "[^\\s]",
          returnBegin: true,
          end: ";",
          endsWithParent: true,
          contains: [{
            className: "attribute",
            begin: "[A-Z\\_\\.\\-]+",
            end: ":",
            excludeEnd: true,
            illegal: "[^\\s]",
            starts: {
              className: "value",
              endsWithParent: true,
              excludeEnd: true,
              contains: [a, hljs.NUMBER_MODE, hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE, hljs.C_BLOCK_COMMENT_MODE, {
                className: "hexcolor",
                begin: "\\#[0-9A-F]+"
              }, {
                className: "important",
                begin: "!important"
              }]
            }
          }]
        }]
      }]
    }
  }
}();
hljs.LANGUAGES.diff = {
  case_insensitive: true,
  defaultMode: {
    contains: [{
      className: "chunk",
      begin: "^\\@\\@ +\\-\\d+,\\d+ +\\+\\d+,\\d+ +\\@\\@$",
      relevance: 10
    }, {
      className: "chunk",
      begin: "^\\*\\*\\* +\\d+,\\d+ +\\*\\*\\*\\*$",
      relevance: 10
    }, {
      className: "chunk",
      begin: "^\\-\\-\\- +\\d+,\\d+ +\\-\\-\\-\\-$",
      relevance: 10
    }, {
      className: "header",
      begin: "Index: ",
      end: "$"
    }, {
      className: "header",
      begin: "=====",
      end: "=====$"
    }, {
      className: "header",
      begin: "^\\-\\-\\-",
      end: "$"
    }, {
      className: "header",
      begin: "^\\*{3} ",
      end: "$"
    }, {
      className: "header",
      begin: "^\\+\\+\\+",
      end: "$"
    }, {
      className: "header",
      begin: "\\*{5}",
      end: "\\*{5}$"
    }, {
      className: "addition",
      begin: "^\\+",
      end: "$"
    }, {
      className: "deletion",
      begin: "^\\-",
      end: "$"
    }, {
      className: "change",
      begin: "^\\!",
      end: "$"
    }]
  }
};
hljs.LANGUAGES.javascript = {
  defaultMode: {
    keywords: {
      keyword: {
        "in": 1,
        "if": 1,
        "for": 1,
        "while": 1,
        "finally": 1,
        "var": 1,
        "new": 1,
        "function": 1,
        "do": 1,
        "return": 1,
        "void": 1,
        "else": 1,
        "break": 1,
        "catch": 1,
        "instanceof": 1,
        "with": 1,
        "throw": 1,
        "case": 1,
        "default": 1,
        "try": 1,
        "this": 1,
        "switch": 1,
        "continue": 1,
        "typeof": 1,
        "delete": 1
      },
      literal: {
        "true": 1,
        "false": 1,
        "null": 1
      }
    },
    contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.C_NUMBER_MODE, {
      begin: "(" + hljs.RE_STARTERS_RE + "|case|return|throw)\\s*",
      keywords: {
        "return": 1,
        "throw": 1,
        "case": 1
      },
      contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, {
        className: "regexp",
        begin: "/",
        end: "/[gim]*",
        contains: [{
          begin: "\\\\/"
        }]
      }],
      relevance: 0
    }, {
      className: "function",
      begin: "\\bfunction\\b",
      end: "{",
      keywords: {
        "function": 1
      },
      contains: [{
        className: "title",
        begin: "[A-Za-z$_][0-9A-Za-z$_]*"
      }, {
        className: "params",
        begin: "\\(",
        end: "\\)",
        contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
      }]
    }]
  }
};
hljs.LANGUAGES.nginx = function() {
  var c = {
    className: "variable",
    begin: "\\$\\d+"
  };
  var b = {
    className: "variable",
    begin: "\\${",
    end: "}"
  };
  var a = {
    className: "variable",
    begin: "[\\$\\@]" + hljs.UNDERSCORE_IDENT_RE
  };
  return {
    defaultMode: {
      contains: [hljs.HASH_COMMENT_MODE, {
        begin: hljs.UNDERSCORE_IDENT_RE,
        end: ";|{",
        returnEnd: true,
        keywords: {
          accept_mutex: 1,
          accept_mutex_delay: 1,
          access_log: 1,
          add_after_body: 1,
          add_before_body: 1,
          add_header: 1,
          addition_types: 1,
          alias: 1,
          allow: 1,
          ancient_browser: 1,
          ancient_browser_value: 1,
          auth_basic: 1,
          auth_basic_user_file: 1,
          autoindex: 1,
          autoindex_exact_size: 1,
          autoindex_localtime: 1,
          "break": 1,
          charset: 1,
          charset_map: 1,
          charset_types: 1,
          client_body_buffer_size: 1,
          client_body_in_file_only: 1,
          client_body_in_single_buffer: 1,
          client_body_temp_path: 1,
          client_body_timeout: 1,
          client_header_buffer_size: 1,
          client_header_timeout: 1,
          client_max_body_size: 1,
          connection_pool_size: 1,
          connections: 1,
          create_full_put_path: 1,
          daemon: 1,
          dav_access: 1,
          dav_methods: 1,
          debug_connection: 1,
          debug_points: 1,
          default_type: 1,
          deny: 1,
          directio: 1,
          directio_alignment: 1,
          echo: 1,
          echo_after_body: 1,
          echo_before_body: 1,
          echo_blocking_sleep: 1,
          echo_duplicate: 1,
          echo_end: 1,
          echo_exec: 1,
          echo_flush: 1,
          echo_foreach_split: 1,
          echo_location: 1,
          echo_location_async: 1,
          echo_read_request_body: 1,
          echo_request_body: 1,
          echo_reset_timer: 1,
          echo_sleep: 1,
          echo_subrequest: 1,
          echo_subrequest_async: 1,
          empty_gif: 1,
          env: 1,
          error_log: 1,
          error_page: 1,
          events: 1,
          expires: 1,
          fastcgi_bind: 1,
          fastcgi_buffer_size: 1,
          fastcgi_buffers: 1,
          fastcgi_busy_buffers_size: 1,
          fastcgi_cache: 1,
          fastcgi_cache_key: 1,
          fastcgi_cache_methods: 1,
          fastcgi_cache_min_uses: 1,
          fastcgi_cache_path: 1,
          fastcgi_cache_use_stale: 1,
          fastcgi_cache_valid: 1,
          fastcgi_catch_stderr: 1,
          fastcgi_connect_timeout: 1,
          fastcgi_hide_header: 1,
          fastcgi_ignore_client_abort: 1,
          fastcgi_ignore_headers: 1,
          fastcgi_index: 1,
          fastcgi_intercept_errors: 1,
          fastcgi_max_temp_file_size: 1,
          fastcgi_next_upstream: 1,
          fastcgi_param: 1,
          fastcgi_pass: 1,
          fastcgi_pass_header: 1,
          fastcgi_pass_request_body: 1,
          fastcgi_pass_request_headers: 1,
          fastcgi_read_timeout: 1,
          fastcgi_send_lowat: 1,
          fastcgi_send_timeout: 1,
          fastcgi_split_path_info: 1,
          fastcgi_store: 1,
          fastcgi_store_access: 1,
          fastcgi_temp_file_write_size: 1,
          fastcgi_temp_path: 1,
          fastcgi_upstream_fail_timeout: 1,
          fastcgi_upstream_max_fails: 1,
          flv: 1,
          geo: 1,
          geoip_city: 1,
          geoip_country: 1,
          gzip: 1,
          gzip_buffers: 1,
          gzip_comp_level: 1,
          gzip_disable: 1,
          gzip_hash: 1,
          gzip_http_version: 1,
          gzip_min_length: 1,
          gzip_no_buffer: 1,
          gzip_proxied: 1,
          gzip_static: 1,
          gzip_types: 1,
          gzip_vary: 1,
          gzip_window: 1,
          http: 1,
          "if": 1,
          if_modified_since: 1,
          ignore_invalid_headers: 1,
          image_filter: 1,
          image_filter_buffer: 1,
          image_filter_jpeg_quality: 1,
          image_filter_transparency: 1,
          include: 1,
          index: 1,
          internal: 1,
          ip_hash: 1,
          js: 1,
          js_load: 1,
          js_require: 1,
          js_utf8: 1,
          keepalive_requests: 1,
          keepalive_timeout: 1,
          kqueue_changes: 1,
          kqueue_events: 1,
          large_client_header_buffers: 1,
          limit_conn: 1,
          limit_conn_log_level: 1,
          limit_except: 1,
          limit_rate: 1,
          limit_rate_after: 1,
          limit_req: 1,
          limit_req_log_level: 1,
          limit_req_zone: 1,
          limit_zone: 1,
          lingering_time: 1,
          lingering_timeout: 1,
          listen: 1,
          location: 1,
          lock_file: 1,
          log_format: 1,
          log_not_found: 1,
          log_subrequest: 1,
          map: 1,
          map_hash_bucket_size: 1,
          map_hash_max_size: 1,
          master_process: 1,
          memcached_bind: 1,
          memcached_buffer_size: 1,
          memcached_connect_timeout: 1,
          memcached_next_upstream: 1,
          memcached_pass: 1,
          memcached_read_timeout: 1,
          memcached_send_timeout: 1,
          memcached_upstream_fail_timeout: 1,
          memcached_upstream_max_fails: 1,
          merge_slashes: 1,
          min_delete_depth: 1,
          modern_browser: 1,
          modern_browser_value: 1,
          more_clear_headers: 1,
          more_clear_input_headers: 1,
          more_set_headers: 1,
          more_set_input_headers: 1,
          msie_padding: 1,
          msie_refresh: 1,
          multi_accept: 1,
          open_file_cache: 1,
          open_file_cache_errors: 1,
          open_file_cache_events: 1,
          open_file_cache_min_uses: 1,
          open_file_cache_retest: 1,
          open_file_cache_valid: 1,
          open_log_file_cache: 1,
          optimize_server_names: 1,
          output_buffers: 1,
          override_charset: 1,
          perl: 1,
          perl_modules: 1,
          perl_require: 1,
          perl_set: 1,
          pid: 1,
          port_in_redirect: 1,
          post_action: 1,
          postpone_gzipping: 1,
          postpone_output: 1,
          proxy_bind: 1,
          proxy_buffer_size: 1,
          proxy_buffering: 1,
          proxy_buffers: 1,
          proxy_busy_buffers_size: 1,
          proxy_cache: 1,
          proxy_cache_key: 1,
          proxy_cache_methods: 1,
          proxy_cache_min_uses: 1,
          proxy_cache_path: 1,
          proxy_cache_use_stale: 1,
          proxy_cache_valid: 1,
          proxy_connect_timeout: 1,
          proxy_headers_hash_bucket_size: 1,
          proxy_headers_hash_max_size: 1,
          proxy_hide_header: 1,
          proxy_ignore_client_abort: 1,
          proxy_ignore_headers: 1,
          proxy_intercept_errors: 1,
          proxy_max_temp_file_size: 1,
          proxy_method: 1,
          proxy_next_upstream: 1,
          proxy_pass: 1,
          proxy_pass_header: 1,
          proxy_pass_request_body: 1,
          proxy_pass_request_headers: 1,
          proxy_read_timeout: 1,
          proxy_redirect: 1,
          proxy_send_lowat: 1,
          proxy_send_timeout: 1,
          proxy_set_body: 1,
          proxy_set_header: 1,
          proxy_store: 1,
          proxy_store_access: 1,
          proxy_temp_file_write_size: 1,
          proxy_temp_path: 1,
          proxy_upstream_fail_timeout: 1,
          proxy_upstream_max_fails: 1,
          push_authorized_channels_only: 1,
          push_channel_group: 1,
          push_max_channel_id_length: 1,
          push_max_channel_subscribers: 1,
          push_max_message_buffer_length: 1,
          push_max_reserved_memory: 1,
          push_message_buffer_length: 1,
          push_message_timeout: 1,
          push_min_message_buffer_length: 1,
          push_min_message_recipients: 1,
          push_publisher: 1,
          push_store_messages: 1,
          push_subscriber: 1,
          push_subscriber_concurrency: 1,
          random_index: 1,
          read_ahead: 1,
          real_ip_header: 1,
          recursive_error_pages: 1,
          request_pool_size: 1,
          reset_timedout_connection: 1,
          resolver: 1,
          resolver_timeout: 1,
          "return": 1,
          rewrite: 1,
          rewrite_log: 1,
          root: 1,
          satisfy: 1,
          satisfy_any: 1,
          send_lowat: 1,
          send_timeout: 1,
          sendfile: 1,
          sendfile_max_chunk: 1,
          server: 1,
          server_name: 1,
          server_name_in_redirect: 1,
          server_names_hash_bucket_size: 1,
          server_names_hash_max_size: 1,
          server_tokens: 1,
          set: 1,
          set_real_ip_from: 1,
          source_charset: 1,
          ssi: 1,
          ssi_ignore_recycled_buffers: 1,
          ssi_min_file_chunk: 1,
          ssi_silent_errors: 1,
          ssi_types: 1,
          ssi_value_length: 1,
          ssl: 1,
          ssl_certificate: 1,
          ssl_certificate_key: 1,
          ssl_ciphers: 1,
          ssl_client_certificate: 1,
          ssl_crl: 1,
          ssl_dhparam: 1,
          ssl_prefer_server_ciphers: 1,
          ssl_protocols: 1,
          ssl_session_cache: 1,
          ssl_session_timeout: 1,
          ssl_verify_client: 1,
          ssl_verify_depth: 1,
          sub_filter: 1,
          sub_filter_once: 1,
          sub_filter_types: 1,
          tcp_nodelay: 1,
          tcp_nopush: 1,
          timer_resolution: 1,
          try_files: 1,
          types: 1,
          types_hash_bucket_size: 1,
          types_hash_max_size: 1,
          underscores_in_headers: 1,
          uninitialized_variable_warn: 1,
          upstream: 1,
          use: 1,
          user: 1,
          userid: 1,
          userid_domain: 1,
          userid_expires: 1,
          userid_mark: 1,
          userid_name: 1,
          userid_p3p: 1,
          userid_path: 1,
          userid_service: 1,
          valid_referers: 1,
          variables_hash_bucket_size: 1,
          variables_hash_max_size: 1,
          worker_connections: 1,
          worker_cpu_affinity: 1,
          worker_priority: 1,
          worker_processes: 1,
          worker_rlimit_core: 1,
          worker_rlimit_nofile: 1,
          worker_rlimit_sigpending: 1,
          working_directory: 1,
          xml_entities: 1,
          xslt_stylesheet: 1,
          xslt_types: 1
        },
        relevance: 0,
        contains: [hljs.HASH_COMMENT_MODE, {
          begin: "\\s",
          end: "[;{]",
          returnBegin: true,
          returnEnd: true,
          lexems: "[a-z/]+",
          keywords: {
            built_in: {
              on: 1,
              off: 1,
              yes: 1,
              no: 1,
              "true": 1,
              "false": 1,
              none: 1,
              blocked: 1,
              debug: 1,
              info: 1,
              notice: 1,
              warn: 1,
              error: 1,
              crit: 1,
              select: 1,
              permanent: 1,
              redirect: 1,
              kqueue: 1,
              rtsig: 1,
              epoll: 1,
              poll: 1,
              "/dev/poll": 1
            }
          },
          relevance: 0,
          contains: [hljs.HASH_COMMENT_MODE, {
              className: "string",
              begin: '"',
              end: '"',
              contains: [hljs.BACKSLASH_ESCAPE, c, b, a],
              relevance: 0
            }, {
              className: "string",
              begin: "'",
              end: "'",
              contains: [hljs.BACKSLASH_ESCAPE, c, b, a],
              relevance: 0
            }, {
              className: "string",
              begin: "([a-z]+):/",
              end: "[;\\s]",
              returnEnd: true
            }, {
              className: "regexp",
              begin: "\\s\\^",
              end: "\\s|{|;",
              returnEnd: true,
              contains: [hljs.BACKSLASH_ESCAPE, c, b, a]
            }, {
              className: "regexp",
              begin: "~\\*?\\s+",
              end: "\\s|{|;",
              returnEnd: true,
              contains: [hljs.BACKSLASH_ESCAPE, c, b, a]
            }, {
              className: "regexp",
              begin: "\\*(\\.[a-z\\-]+)+",
              contains: [hljs.BACKSLASH_ESCAPE, c, b, a]
            }, {
              className: "regexp",
              begin: "([a-z\\-]+\\.)+\\*",
              contains: [hljs.BACKSLASH_ESCAPE, c, b, a]
            }, {
              className: "number",
              begin: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b"
            }, {
              className: "number",
              begin: "\\s\\d+[kKmMgGdshdwy]*\\b",
              relevance: 0
            },
            c, b, a]
        }]
      }]
    }
  }
}();
hljs.LANGUAGES.ruby = function() {
  var a = "[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?";
  var j = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";
  var f = {
    keyword: {
      and: 1,
      "false": 1,
      then: 1,
      defined: 1,
      module: 1,
      "in": 1,
      "return": 1,
      redo: 1,
      "if": 1,
      BEGIN: 1,
      retry: 1,
      end: 1,
      "for": 1,
      "true": 1,
      self: 1,
      when: 1,
      next: 1,
      until: 1,
      "do": 1,
      begin: 1,
      unless: 1,
      END: 1,
      rescue: 1,
      nil: 1,
      "else": 1,
      "break": 1,
      undef: 1,
      not: 1,
      "super": 1,
      "class": 1,
      "case": 1,
      require: 1,
      yield: 1,
      alias: 1,
      "while": 1,
      ensure: 1,
      elsif: 1,
      or: 1,
      def: 1
    },
    keymethods: {
      __id__: 1,
      __send__: 1,
      abort: 1,
      abs: 1,
      "all?": 1,
      allocate: 1,
      ancestors: 1,
      "any?": 1,
      arity: 1,
      assoc: 1,
      at: 1,
      at_exit: 1,
      autoload: 1,
      "autoload?": 1,
      "between?": 1,
      binding: 1,
      binmode: 1,
      "block_given?": 1,
      call: 1,
      callcc: 1,
      caller: 1,
      capitalize: 1,
      "capitalize!": 1,
      casecmp: 1,
      "catch": 1,
      ceil: 1,
      center: 1,
      chomp: 1,
      "chomp!": 1,
      chop: 1,
      "chop!": 1,
      chr: 1,
      "class": 1,
      class_eval: 1,
      "class_variable_defined?": 1,
      class_variables: 1,
      clear: 1,
      clone: 1,
      close: 1,
      close_read: 1,
      close_write: 1,
      "closed?": 1,
      coerce: 1,
      collect: 1,
      "collect!": 1,
      compact: 1,
      "compact!": 1,
      concat: 1,
      "const_defined?": 1,
      const_get: 1,
      const_missing: 1,
      const_set: 1,
      constants: 1,
      count: 1,
      crypt: 1,
      "default": 1,
      default_proc: 1,
      "delete": 1,
      "delete!": 1,
      delete_at: 1,
      delete_if: 1,
      detect: 1,
      display: 1,
      div: 1,
      divmod: 1,
      downcase: 1,
      "downcase!": 1,
      downto: 1,
      dump: 1,
      dup: 1,
      each: 1,
      each_byte: 1,
      each_index: 1,
      each_key: 1,
      each_line: 1,
      each_pair: 1,
      each_value: 1,
      each_with_index: 1,
      "empty?": 1,
      entries: 1,
      eof: 1,
      "eof?": 1,
      "eql?": 1,
      "equal?": 1,
      "eval": 1,
      exec: 1,
      exit: 1,
      "exit!": 1,
      extend: 1,
      fail: 1,
      fcntl: 1,
      fetch: 1,
      fileno: 1,
      fill: 1,
      find: 1,
      find_all: 1,
      first: 1,
      flatten: 1,
      "flatten!": 1,
      floor: 1,
      flush: 1,
      for_fd: 1,
      foreach: 1,
      fork: 1,
      format: 1,
      freeze: 1,
      "frozen?": 1,
      fsync: 1,
      getc: 1,
      gets: 1,
      global_variables: 1,
      grep: 1,
      gsub: 1,
      "gsub!": 1,
      "has_key?": 1,
      "has_value?": 1,
      hash: 1,
      hex: 1,
      id: 1,
      include: 1,
      "include?": 1,
      included_modules: 1,
      index: 1,
      indexes: 1,
      indices: 1,
      induced_from: 1,
      inject: 1,
      insert: 1,
      inspect: 1,
      instance_eval: 1,
      instance_method: 1,
      instance_methods: 1,
      "instance_of?": 1,
      "instance_variable_defined?": 1,
      instance_variable_get: 1,
      instance_variable_set: 1,
      instance_variables: 1,
      "integer?": 1,
      intern: 1,
      invert: 1,
      ioctl: 1,
      "is_a?": 1,
      isatty: 1,
      "iterator?": 1,
      join: 1,
      "key?": 1,
      keys: 1,
      "kind_of?": 1,
      lambda: 1,
      last: 1,
      length: 1,
      lineno: 1,
      ljust: 1,
      load: 1,
      local_variables: 1,
      loop: 1,
      lstrip: 1,
      "lstrip!": 1,
      map: 1,
      "map!": 1,
      match: 1,
      max: 1,
      "member?": 1,
      merge: 1,
      "merge!": 1,
      method: 1,
      "method_defined?": 1,
      method_missing: 1,
      methods: 1,
      min: 1,
      module_eval: 1,
      modulo: 1,
      name: 1,
      nesting: 1,
      "new": 1,
      next: 1,
      "next!": 1,
      "nil?": 1,
      nitems: 1,
      "nonzero?": 1,
      object_id: 1,
      oct: 1,
      open: 1,
      pack: 1,
      partition: 1,
      pid: 1,
      pipe: 1,
      pop: 1,
      popen: 1,
      pos: 1,
      prec: 1,
      prec_f: 1,
      prec_i: 1,
      print: 1,
      printf: 1,
      private_class_method: 1,
      private_instance_methods: 1,
      "private_method_defined?": 1,
      private_methods: 1,
      proc: 1,
      protected_instance_methods: 1,
      "protected_method_defined?": 1,
      protected_methods: 1,
      public_class_method: 1,
      public_instance_methods: 1,
      "public_method_defined?": 1,
      public_methods: 1,
      push: 1,
      putc: 1,
      puts: 1,
      quo: 1,
      raise: 1,
      rand: 1,
      rassoc: 1,
      read: 1,
      read_nonblock: 1,
      readchar: 1,
      readline: 1,
      readlines: 1,
      readpartial: 1,
      rehash: 1,
      reject: 1,
      "reject!": 1,
      remainder: 1,
      reopen: 1,
      replace: 1,
      require: 1,
      "respond_to?": 1,
      reverse: 1,
      "reverse!": 1,
      reverse_each: 1,
      rewind: 1,
      rindex: 1,
      rjust: 1,
      round: 1,
      rstrip: 1,
      "rstrip!": 1,
      scan: 1,
      seek: 1,
      select: 1,
      send: 1,
      set_trace_func: 1,
      shift: 1,
      singleton_method_added: 1,
      singleton_methods: 1,
      size: 1,
      sleep: 1,
      slice: 1,
      "slice!": 1,
      sort: 1,
      "sort!": 1,
      sort_by: 1,
      split: 1,
      sprintf: 1,
      squeeze: 1,
      "squeeze!": 1,
      srand: 1,
      stat: 1,
      step: 1,
      store: 1,
      strip: 1,
      "strip!": 1,
      sub: 1,
      "sub!": 1,
      succ: 1,
      "succ!": 1,
      sum: 1,
      superclass: 1,
      swapcase: 1,
      "swapcase!": 1,
      sync: 1,
      syscall: 1,
      sysopen: 1,
      sysread: 1,
      sysseek: 1,
      system: 1,
      syswrite: 1,
      taint: 1,
      "tainted?": 1,
      tell: 1,
      test: 1,
      "throw": 1,
      times: 1,
      to_a: 1,
      to_ary: 1,
      to_f: 1,
      to_hash: 1,
      to_i: 1,
      to_int: 1,
      to_io: 1,
      to_proc: 1,
      to_s: 1,
      to_str: 1,
      to_sym: 1,
      tr: 1,
      "tr!": 1,
      tr_s: 1,
      "tr_s!": 1,
      trace_var: 1,
      transpose: 1,
      trap: 1,
      truncate: 1,
      "tty?": 1,
      type: 1,
      ungetc: 1,
      uniq: 1,
      "uniq!": 1,
      unpack: 1,
      unshift: 1,
      untaint: 1,
      untrace_var: 1,
      upcase: 1,
      "upcase!": 1,
      update: 1,
      upto: 1,
      "value?": 1,
      values: 1,
      values_at: 1,
      warn: 1,
      write: 1,
      write_nonblock: 1,
      "zero?": 1,
      zip: 1
    }
  };
  var c = {
    className: "yardoctag",
    begin: "@[A-Za-z]+"
  };
  var k = [{
    className: "comment",
    begin: "#",
    end: "$",
    contains: [c]
  }, {
    className: "comment",
    begin: "^\\=begin",
    end: "^\\=end",
    contains: [c],
    relevance: 10
  }, {
    className: "comment",
    begin: "^__END__",
    end: "\\n$"
  }];
  var d = {
    className: "subst",
    begin: "#\\{",
    end: "}",
    lexems: a,
    keywords: f
  };
  var i = [hljs.BACKSLASH_ESCAPE, d];
  var b = [{
    className: "string",
    begin: "'",
    end: "'",
    contains: i,
    relevance: 0
  }, {
    className: "string",
    begin: '"',
    end: '"',
    contains: i,
    relevance: 0
  }, {
    className: "string",
    begin: "%[qw]?\\(",
    end: "\\)",
    contains: i,
    relevance: 10
  }, {
    className: "string",
    begin: "%[qw]?\\[",
    end: "\\]",
    contains: i,
    relevance: 10
  }, {
    className: "string",
    begin: "%[qw]?{",
    end: "}",
    contains: i,
    relevance: 10
  }, {
    className: "string",
    begin: "%[qw]?<",
    end: ">",
    contains: i,
    relevance: 10
  }, {
    className: "string",
    begin: "%[qw]?/",
    end: "/",
    contains: i,
    relevance: 10
  }, {
    className: "string",
    begin: "%[qw]?%",
    end: "%",
    contains: i,
    relevance: 10
  }, {
    className: "string",
    begin: "%[qw]?-",
    end: "-",
    contains: i,
    relevance: 10
  }, {
    className: "string",
    begin: "%[qw]?\\|",
    end: "\\|",
    contains: i,
    relevance: 10
  }];
  var h = {
    className: "function",
    begin: "\\bdef\\s+",
    end: " |$|;",
    lexems: a,
    keywords: f,
    contains: [{
      className: "title",
      begin: j,
      lexems: a,
      keywords: f
    }, {
      className: "params",
      begin: "\\(",
      end: "\\)",
      lexems: a,
      keywords: f
    }].concat(k)
  };
  var g = {
    className: "identifier",
    begin: a,
    lexems: a,
    keywords: f,
    relevance: 0
  };
  var e = k.concat(b.concat([{
      className: "class",
      begin: "\\b(class|module)\\b",
      end: "$|;",
      keywords: {
        "class": 1,
        module: 1
      },
      contains: [{
        className: "title",
        begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?",
        relevance: 0
      }, {
        className: "inheritance",
        begin: "<\\s*",
        contains: [{
          className: "parent",
          begin: "(" + hljs.IDENT_RE + "::)?" + hljs.IDENT_RE
        }]
      }].concat(k)
    },
    h, {
      className: "constant",
      begin: "(::)?([A-Z]\\w*(::)?)+",
      relevance: 0
    }, {
      className: "symbol",
      begin: ":",
      contains: b.concat([g]),
      relevance: 0
    }, {
      className: "number",
      begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
      relevance: 0
    }, {
      className: "number",
      begin: "\\?\\w"
    }, {
      className: "variable",
      begin: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
    },
    g, {
      begin: "(" + hljs.RE_STARTERS_RE + ")\\s*",
      contains: k.concat([{
        className: "regexp",
        begin: "/",
        end: "/[a-z]*",
        illegal: "\\n",
        contains: [hljs.BACKSLASH_ESCAPE]
      }]),
      relevance: 0
    }]));
  d.contains = e;
  h.contains[1].contains = e;
  return {
    defaultMode: {
      lexems: a,
      keywords: f,
      contains: e
    }
  }
}();
hljs.LANGUAGES.sql = {
  case_insensitive: true,
  defaultMode: {
    illegal: "[^\\s]",
    contains: [{
        className: "operator",
        begin: "(begin|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant)\\b",
        end: ";|$",
        keywords: {
          keyword: {
            all: 1,
            partial: 1,
            global: 1,
            month: 1,
            current_timestamp: 1,
            using: 1,
            go: 1,
            revoke: 1,
            smallint: 1,
            indicator: 1,
            "end-exec": 1,
            disconnect: 1,
            zone: 1,
            "with": 1,
            character: 1,
            assertion: 1,
            to: 1,
            add: 1,
            current_user: 1,
            usage: 1,
            input: 1,
            local: 1,
            alter: 1,
            match: 1,
            collate: 1,
            real: 1,
            then: 1,
            rollback: 1,
            get: 1,
            read: 1,
            timestamp: 1,
            session_user: 1,
            not: 1,
            integer: 1,
            bit: 1,
            unique: 1,
            day: 1,
            minute: 1,
            desc: 1,
            insert: 1,
            execute: 1,
            like: 1,
            ilike: 2,
            level: 1,
            decimal: 1,
            drop: 1,
            "continue": 1,
            isolation: 1,
            found: 1,
            where: 1,
            constraints: 1,
            domain: 1,
            right: 1,
            national: 1,
            some: 1,
            module: 1,
            transaction: 1,
            relative: 1,
            second: 1,
            connect: 1,
            escape: 1,
            close: 1,
            system_user: 1,
            "for": 1,
            deferred: 1,
            section: 1,
            cast: 1,
            current: 1,
            sqlstate: 1,
            allocate: 1,
            intersect: 1,
            deallocate: 1,
            numeric: 1,
            "public": 1,
            preserve: 1,
            full: 1,
            "goto": 1,
            initially: 1,
            asc: 1,
            no: 1,
            key: 1,
            output: 1,
            collation: 1,
            group: 1,
            by: 1,
            union: 1,
            session: 1,
            both: 1,
            last: 1,
            language: 1,
            constraint: 1,
            column: 1,
            of: 1,
            space: 1,
            foreign: 1,
            deferrable: 1,
            prior: 1,
            connection: 1,
            unknown: 1,
            action: 1,
            commit: 1,
            view: 1,
            or: 1,
            first: 1,
            into: 1,
            "float": 1,
            year: 1,
            primary: 1,
            cascaded: 1,
            except: 1,
            restrict: 1,
            set: 1,
            references: 1,
            names: 1,
            table: 1,
            outer: 1,
            open: 1,
            select: 1,
            size: 1,
            are: 1,
            rows: 1,
            from: 1,
            prepare: 1,
            distinct: 1,
            leading: 1,
            create: 1,
            only: 1,
            next: 1,
            inner: 1,
            authorization: 1,
            schema: 1,
            corresponding: 1,
            option: 1,
            declare: 1,
            precision: 1,
            immediate: 1,
            "else": 1,
            timezone_minute: 1,
            external: 1,
            varying: 1,
            translation: 1,
            "true": 1,
            "case": 1,
            exception: 1,
            join: 1,
            hour: 1,
            "default": 1,
            "double": 1,
            scroll: 1,
            value: 1,
            cursor: 1,
            descriptor: 1,
            values: 1,
            dec: 1,
            fetch: 1,
            procedure: 1,
            "delete": 1,
            and: 1,
            "false": 1,
            "int": 1,
            is: 1,
            describe: 1,
            "char": 1,
            as: 1,
            at: 1,
            "in": 1,
            varchar: 1,
            "null": 1,
            trailing: 1,
            any: 1,
            absolute: 1,
            current_time: 1,
            end: 1,
            grant: 1,
            privileges: 1,
            when: 1,
            cross: 1,
            check: 1,
            write: 1,
            current_date: 1,
            pad: 1,
            begin: 1,
            temporary: 1,
            exec: 1,
            time: 1,
            update: 1,
            catalog: 1,
            user: 1,
            sql: 1,
            date: 1,
            on: 1,
            identity: 1,
            timezone_hour: 1,
            natural: 1,
            whenever: 1,
            interval: 1,
            work: 1,
            order: 1,
            cascade: 1,
            diagnostics: 1,
            nchar: 1,
            having: 1,
            left: 1,
            call: 1,
            "do": 1,
            handler: 1,
            load: 1,
            replace: 1,
            truncate: 1,
            start: 1,
            lock: 1,
            show: 1,
            pragma: 1
          },
          aggregate: {
            count: 1,
            sum: 1,
            min: 1,
            max: 1,
            avg: 1
          }
        },
        contains: [{
            className: "string",
            begin: "'",
            end: "'",
            contains: [hljs.BACKSLASH_ESCAPE, {
              begin: "''"
            }],
            relevance: 0
          }, {
            className: "string",
            begin: '"',
            end: '"',
            contains: [hljs.BACKSLASH_ESCAPE, {
              begin: '""'
            }],
            relevance: 0
          }, {
            className: "string",
            begin: "`",
            end: "`",
            contains: [hljs.BACKSLASH_ESCAPE]
          },
          hljs.C_NUMBER_MODE, {
            begin: "\\n"
          }]
      },
      hljs.C_BLOCK_COMMENT_MODE, {
        className: "comment",
        begin: "--",
        end: "$"
      }]
  }
};
hljs.LANGUAGES.xml = function() {
  var b = "[A-Za-z0-9\\._:-]+";
  var a = {
    endsWithParent: true,
    contains: [{
      className: "attribute",
      begin: b,
      relevance: 0
    }, {
      begin: '="',
      returnBegin: true,
      end: '"',
      contains: [{
        className: "value",
        begin: '"',
        endsWithParent: true
      }]
    }, {
      begin: "='",
      returnBegin: true,
      end: "'",
      contains: [{
        className: "value",
        begin: "'",
        endsWithParent: true
      }]
    }, {
      begin: "=",
      contains: [{
        className: "value",
        begin: "[^\\s/>]+"
      }]
    }]
  };
  return {
    case_insensitive: true,
    defaultMode: {
      contains: [{
        className: "pi",
        begin: "<\\?",
        end: "\\?>",
        relevance: 10
      }, {
        className: "doctype",
        begin: "<!DOCTYPE",
        end: ">",
        relevance: 10,
        contains: [{
          begin: "\\[",
          end: "\\]"
        }]
      }, {
        className: "comment",
        begin: "<!--",
        end: "-->",
        relevance: 10
      }, {
        className: "cdata",
        begin: "<\\!\\[CDATA\\[",
        end: "\\]\\]>",
        relevance: 10
      }, {
        className: "tag",
        begin: "<style(?=\\s|>|$)",
        end: ">",
        keywords: {
          title: {
            style: 1
          }
        },
        contains: [a],
        starts: {
          className: "css",
          end: "</style>",
          returnEnd: true,
          subLanguage: "css"
        }
      }, {
        className: "tag",
        begin: "<script(?=\\s|>|$)",
        end: ">",
        keywords: {
          title: {
            script: 1
          }
        },
        contains: [a],
        starts: {
          className: "javascript",
          end: "<\/script>",
          returnEnd: true,
          subLanguage: "javascript"
        }
      }, {
        className: "vbscript",
        begin: "<%",
        end: "%>",
        subLanguage: "vbscript"
      }, {
        className: "tag",
        begin: "</?",
        end: "/?>",
        contains: [{
            className: "title",
            begin: "[^ />]+"
          },
          a]
      }]
    }
  }
}();