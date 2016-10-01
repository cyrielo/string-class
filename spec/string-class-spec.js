/**
 * Created by sims02 on 9/23/16.
 */
'use strict';
describe('General test for String class',  () => {
  let str;

  beforeEach(() => {
    str = 'Hello world';
  });

  describe('Tests for hasVowels method', () => {

    it('should expect string.hasVowels to be defined', () => {
      expect(str.hasVowels).toBeDefined();
    });

    it('should tell if string has vowel', () => {
      expect(str.hasVowels()).toBe(true);
    });

  });

  describe('Tests for toUpper method', () => {

    it('should expect string.toUpper to be defined', () => {
      expect(str.toUpper).toBeDefined();
    });

    it('should transform the string to uppercase ', () => {
      expect(str.toUpper()).toEqual('HELLO WORLD');
    });

  });

  describe('Tests for toLower method', () => {

    it('should expect string.toLower to be defined', () => {
      expect(str.toLower).toBeDefined();
    });

    it('should transform the string to lowercase', () => {
      expect(str.toLower()).toEqual('hello world');
    });

  });

  describe('Tests for ucFirst method', () => {
    var casedString = 'hi';
    it('should expect string.ucFirst to be defined', () => {
      expect(casedString.ucFirst).toBeDefined();
    });

    it('should transform only the first letter to uppercase', () => {
      expect(casedString.ucFirst()).toEqual('Hi');
    });
  });

  describe('Tests for isQuestion method', () => {
    let question = 'Should I give you money?';

    it('should expect string.isQuestion to be defined', () => {
      expect(question.isQuestion).toBeDefined();
    });

    it('should tell if a string is a question', () => {
      expect(question.isQuestion()).toBe(true);
      expect(str.isQuestion()).toBe(false);
    });

  });

  describe('Tests for words method', () => {

    it('should expect string.words to be defined', () => {
      expect(str.words).toBeDefined();
    });

    it('should return words in a string as array', () => {
      expect(str.words()).toEqual(['Hello', 'world']);
    });

  });

  describe('Tests for wordCount method', () => {

    it('should expect string.wordCount to be defined', () => {
      expect(str.wordCount).toBeDefined();
    });

    it('should count number of words in a string', () => {
      expect(str.wordCount()).toEqual(2);
    });

  });

  describe('Tests for toCurrency method', () => {
    let str = '22500.50';

    it('should expect string.toCurrency to be defined', () => {
      expect(str.toCurrency).toBeDefined();
    });

    it('should properly format string to currency format', () => {
      expect(str.toCurrency()).toEqual('22,500.50');
    });

  });

  describe('Tests for fromCurrency method', () => {
    let money = '22,500.50';

    it('should expect string.fromCurrency to be defined', () => {
      expect(money.fromCurrency).toBeDefined();
    });

    it('should convert a string currency to number', () => {
      expect(money.fromCurrency()).toEqual(22500.50);
      expect(typeof money.fromCurrency()).toEqual('number');

    });

  });

  describe('Tests for inverseCase method', () => {

    it('should expect string.inverseCase to be defined', () => {
      expect(str.inverseCase).toBeDefined();
    });

    it('should inverse character cases in a string', () => {
      expect(str.inverseCase()).toEqual('hELLO WORLD');
    });

  });

  describe('Tests for alternatingCase method', () => {

    it('should expect string.alternatingCase to be defined', () => {
      expect(str.alternatingCase).toBeDefined();
    });

    it('should return alternated casing version of the string', () => {
      expect(str.alternatingCase()).toEqual('hElLo wOrLd');
    });

  });

  describe('Tests for getMiddle method', () => {
    let rodent = 'rat';
    it('should expect string.getMiddle to be defined', () => {
      expect(rodent.getMiddle).toBeDefined();
    });

    it('should return the middle character(s) of the string', () => {
      expect(rodent.getMiddle()).toEqual('a');
    });
  });

  describe('Tests for numberWords method', () => {
    let numbers = '978';
    it('should expect string.numberWords to be defined', () => {
      expect(numbers.numberWords).toBeDefined();
    });

    it('should return the spelling of a numeric number', () => {
      expect(numbers.numberWords()).toEqual('nine seven eight');
    });

  });

  describe('Tests for isDigit method', () => {
    let
      correctDigit = '8',
      wrongDigit = '91';

    it('should expect string.isDigit to be defined', () => {
      expect(correctDigit.isDigit).toBeDefined();
    });

    it('should return true if its a single digit', () => {
      expect(correctDigit.isDigit()).toBe(true);
      expect(wrongDigit.isDigit()).toBe(false);
    });

  });

  describe('Tests for doubleCheck method', () => {
    let doubleStr = 'happy',
      food = 'beans';

    it('should expect string.doubleCheck to be defined', () => {
      expect(doubleStr.doubleCheck).toBeDefined();
    });

    it('should return true if a character occurs twice', () => {
      expect(doubleStr.doubleCheck()).toBe(true);
      expect(food.doubleCheck()).toBe(false);
    });

  });

});
