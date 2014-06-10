
var Person = function(name){
    this.name = name;
};

Person.prototype.say = function(){
    return 'Hello from ' + this.name;
}

var Programmer = function(name, language){
    this.constructor(name);
    this.language = language;
};
Programmer.prototype = new Person();

Programmer.prototype.writeCode = function(){
    return '01001101011000010111010001110100';
};

Programmer.prototype.favoriteLanguage = function(){
    return this.language;
};

var programmer = new Programmer('Matt', 'JavaScript');

log('prog1', programmer.hasOwnProperty('say')); //prog1
log('prog2', programmer.hasOwnProperty('favoriteLanguage')); //prog2
log('prog3', programmer.hasOwnProperty('hasOwnProperty')); //prog3
log('prog4', programmer.hasOwnProperty('language')); //prog4

// `this` vs `prototype`

// How do I override a parent's behavior?
