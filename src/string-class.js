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

String.prototype.isQuestion = function () {
  var regex = /[?]$/g;
  return regex.test(this);
};

String.prototype.words = function () {
  var regex = /\w+/g;
  return this.match(regex);
};

String.prototype.wordCount = function () {
  return this.words().length;
};

String.prototype.toCurrency = function () {
  return this.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

String.prototype.fromCurrency = function () {
  return Number(this.replace(/[,]/g, ''));
};

String.prototype.inverseCase = function () {

  return this.replace(/\w/g, (match) => {
    if (/[A-Z]/g.test(match)) {
      return match.toLower();
    }else {
      return match.toUpper();
    }
  });

};

String.prototype.alternatingCase = function () {
  var
    inverseString = '',
    x,
    strLen = this.length;
  for (x = 0; x < strLen; x += 1) {
    if (x % 2 == 0) {
      inverseString += this[x].toLower();
    }else {
      inverseString += this[x].toUpper();
    }
  }

  return inverseString;
};

String.prototype.getMiddle = function () {
  var
    strLen = this.length,
    isOdd = ((strLen % 2) == 1),
    halfed = Math.floor(strLen / 2),
    strArray = this.split(''),
    middleCharacter;

  if (!isOdd) {
    halfed = halfed - 1;
  }

  strArray.splice(-halfed, halfed);
  strArray.splice(0, halfed);
  middleCharacter = strArray.toString().replace(/,/g, '');

  return middleCharacter;

};

String.prototype.numberWords = function () {
  let word, str = '', char;
  for (char = 0; char < this.length; char++) {
    switch (this[char]){
      case '1':
        word = 'one';
        break;
      case '2':
        word = 'two';
        break;
      case '3':
        word = 'three';
        break;
      case '4':
        word = 'four';
        break;
      case '5':
        word = 'five';
        break;
      case '6':
        word = 'six';
        break;
      case '7':
        word = 'seven';
        break;
      case '8':
        word = 'eight';
        break;
      case '9':
        word = 'nine';
        break;
      case '0':
        word = 'zero';
        break;
      default:
        word = '';
        break;
    }
    str += (word + ((char + 1) != this.length ? ' ' : ''));
  }

  return str;
};

String.prototype.isDigit = function () {
  return this.match(/\d/g).length === 1;
};
