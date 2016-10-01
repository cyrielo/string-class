'use strict';
String.prototype.hasVowels = function () {
  var regex = /[aeiou]/ig;
  return regex.test(this);
};

String.prototype.toUpper = function () {
  return this.replace(/[a-z]/g, (match, pos) => {
    return String.fromCharCode(this.charCodeAt(pos) - 32);
  });
};

String.prototype.toLower = function () {
  return this.replace(/[A-Z]/g, (match, pos) => {
    return String.fromCharCode(this.charCodeAt(pos) + 32);
  });
};

String.prototype.ucFirst = function () {
  return this.replace(/^\S/, function (match) {
    return match.toUpper();
  });
};
