parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {var d,b=document.getElementById("select"),c=document.getElementById("config"),e=document.getElementById("high_score_box");localStorage.setItem("difficulty","easy"),c.addEventListener("submit",function(e){e.preventDefault()}),b.addEventListener("change",function(e){console.log(e.target.value),localStorage.setItem("difficulty",e.target.value)});var a=localStorage.getItem("high_score");null==a&&(localStorage.setItem("high_score","0"),a=localStorage.getItem("high_score")),document.getElementById("score_ele").textContent=a;return{"JkLK":{}};});