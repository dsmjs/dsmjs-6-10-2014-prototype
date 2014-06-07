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
Programmer.prototype.say = function(){
    return "Hello World! I'm " + this.name;
}

var programmer = new Programmer('Matt', 'JavaScript');
log('one', programmer.say()); // one

// How do I call 'super'?
