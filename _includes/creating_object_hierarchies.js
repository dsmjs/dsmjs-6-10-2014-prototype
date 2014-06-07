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
log('one', programmer.say()); // one
log('two', programmer.writeCode()); // two
log('three', programmer.favoriteLanguage()); // three

// How do I override a parent's behavior?
