"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _wavegunner = require("./wavegunner");
Object.keys(_wavegunner).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _wavegunner[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _wavegunner[key];
    }
  });
});
