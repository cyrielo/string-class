//noinspection Eslint
(function () {
  'use strict';
  let _ = function (id) {
    return document.getElementById(id);
  };

  const submitButton = _('submit-button'),
    stringInput = _('string'),
    method = _('method'),
    resultContainer = _('result');

  submitButton.addEventListener('click',()=>{

    let stringValue = stringInput.value,
      methodValue = method.value,
      result = '';
    console.log();

    switch(methodValue){
      case 'hasVowels':
        result = stringValue.hasVowels();
        break;
      case 'toUpper':
        result = stringValue.toUpper();
        break;
      case 'toLower':
        result = stringValue.toLower();
        break;
      case 'ucFirst':
        result = stringValue.ucFirst();
        break;
      case 'isQuestion':
        result = stringValue.isQuestion();
        break;
      case 'words':
        result = stringValue.words();
        break;
      case 'wordCount':
        result = stringValue.wordCount();
        break;
      case 'toCurrency':
        result = stringValue.toCurrency();
        break;
      case 'fromCurrency':
        result = stringValue.fromCurrency();
        break;
      case 'inverseCase':
        result = stringValue.inverseCase();
        break;
      case 'alternatingCase':
        result = stringValue.alternatingCase();
        break;
      case 'getMiddle':
        result = stringValue.getMiddle();
        break;
      case 'numberWords':
        result = stringValue.numberWords();
        break;
      case 'isDigit':
        result = stringValue.isDigit();
        break;
      case 'doubleCheck':
        result = stringValue.doubleCheck();
        break;
      default:
        result = '';
        break;
    }
    resultContainer.innerText = result;
  },false);
})();

/*
 hasVowels
 toUpper
 toLower
 ucFirst
 isQuestion
 words
 wordCount
 toCurrency
 fromCurrency
 inverseCase
 alternatingCase
 getMiddle
 numberWords
 isDigit
 doubleCheck
*
* */
