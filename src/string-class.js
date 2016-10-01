'use strict';
String.prototype.hasVowels = function () {
  var regex = /[aeiou]/ig;
  return regex.test(this);
};
