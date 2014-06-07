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
    var result = Person.prototype.say.call(this);
    return result + "! I write " + this.language + "!";;
}

var programmer = new Programmer('Matt', 'JavaScript');
log('one', programmer.say()); // one
