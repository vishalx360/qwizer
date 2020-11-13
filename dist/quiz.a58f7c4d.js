// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"quiz.js":[function(require,module,exports) {
var question = document.getElementById("question");
var question_type = document.getElementById("question_type");
var num = document.getElementById("num");
var container = document.getElementById("container");
var quiz_page = document.getElementById("quiz_page");
var result_page = document.getElementById("result_page");
var progress_bar = document.getElementById("progress_bar");
var score_box = document.getElementById("score_box"); //gobal variables

var correct_ans;
var correct_ans_element_id;
var difficulty = localStorage.getItem("difficulty");

if (difficulty == null) {
  difficulty = "easy";
  localStorage.setItem("difficulty", "easy");
}

var score = 0;
var score_ele = document.getElementById("score_ele");
var high_score = localStorage.getItem("high_score");

if (high_score == null) {
  localStorage.setItem("high_score", "0");
  high_score = localStorage.getItem("high_score");
}

var url = "https://opentdb.com/api.php?amount=10&encode=url3986&difficulty=" + difficulty;
fetch(url).then(function (response) {
  return response.json();
}).then(function (data) {
  start(data);
});

function start(data) {
  if (data.response_code == 0) {
    var x = 1;
    load(data.results[0], 0);
    setInterval(function () {
      if (x < data.results.length) {
        load(data.results[x], x);
      } else return;

      x++;
    }, 10000);
  } else {
    console.log("ERROR");
  }
}

function load(data, index) {
  // setting question cateory
  question_type.textContent = decodeURIComponent(data.category); // setting question

  question.textContent = decodeURIComponent(data.question); // setting question number

  num.textContent = index + 1; // clearing the container

  container.innerHTML = ""; // loop over each option and create element to append in container
  // add correct answer to the option list

  correct_ans = decodeURIComponent(data.correct_answer);
  data.incorrect_answers.push(data.correct_answer);
  shuffle(data.incorrect_answers);
  data.incorrect_answers.forEach(function (element, index) {
    put_option(element, index);
  });
  var ele = document.getElementById("question_card");
  var fontSize = 35;
  ele.style.fontSize = fontSize + "px";

  for (var x = fontSize; x >= 0; x--) {
    var overflow = isOverflown(ele);

    if (overflow) {
      fontSize--;
      ele.style.fontSize = fontSize + "px";
    }
  }

  if (num.textContent == 10) {
    setTimeout(function () {
      quiz_page.style.display = "none";
      result_page.innerHTML = "<p id='res'>You scored <p id='result_score'>" + score + "</p></p>";
      score_box.style.display = "none";
      result_page.style.display = "flex";
    }, 10000);
  }

  progress_bar.classList.remove("animate");
  progress_bar.classList.add("animate");
  addListeners();
}

function isOverflown(element) {
  return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

function put_option(element, index) {
  document.getElementById("bottom").style.backgroundColor = "#0A0B0B";
  letters = ["a", "b", "c", "d"]; // checkbox

  var ele_checkbox = document.createElement("input");
  ele_checkbox.type = "checkbox"; // id

  ele_checkbox.id = "option_" + letters[index]; //class

  ele_checkbox.className = "quiz_option"; // data-attr

  ele_checkbox.setAttribute("data-option-value", decodeURIComponent(element)); // lable

  var ele_label = document.createElement("label");
  ele_label.setAttribute("for", "option_" + letters[index]); // span identifier

  var ele_span_identifier = document.createElement("span");
  ele_span_identifier.className = "option_index";
  ele_span_identifier.textContent = letters[index]; // span option

  var ele_span_option = document.createElement("span");
  ele_span_option.className = "option";
  ele_span_option.textContent = decodeURIComponent(element); // appending to lable

  ele_label.appendChild(ele_span_identifier);
  ele_label.appendChild(ele_span_option); // appending to container

  container.appendChild(ele_checkbox);
  container.appendChild(ele_label);

  if (decodeURIComponent(element) == correct_ans) {
    correct_ans_element_id = ele_checkbox.id;
  }
}

function check_answer(e) {
  var inputs = document.getElementsByTagName("input");

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
  }

  if (e == correct_ans) {
    score += 10;
    score_ele.textContent = score;

    if (score > localStorage.getItem("high_score")) {
      localStorage.setItem("high_score", score);
    }

    document.getElementById("bottom").style.backgroundColor = "#34ca62"; // console.log(e, "is Correct");
  } else {
    document.getElementById("bottom").style.backgroundColor = "rgb(224, 57, 57)"; // console.log(e, "is Wrong");

    document.getElementById(correct_ans_element_id).nextSibling.style.backgroundColor = "#34ca62";
    document.getElementById(correct_ans_element_id).nextSibling.style.border = "2px solid #34ca62";
  }
}

function shuffle(array) {
  var currentIndex = array.length,
      temporaryValue,
      randomIndex; // While there remain elements to shuffle...

  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; // And swap it with the current element.

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function addListeners() {
  var options = document.querySelectorAll(".quiz_option"); // console.log(options);

  options.forEach(function (option) {
    option.addEventListener("change", function () {
      // console.log(option.getAttribute("data-option-value"));
      check_answer(option.getAttribute("data-option-value"));
    });
  });
}
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "36265" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","quiz.js"], null)
//# sourceMappingURL=/quiz.a58f7c4d.js.map