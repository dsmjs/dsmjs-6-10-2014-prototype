var Person = function(name){
    this.name = name;
};

Person.prototype.say = function(){
    return 'Hello from ' + this.name;
}

var person1 = new Person('kyle');
var person2 = new Person('carl');

log('one', person1.say()); // one
log('two', person2.say()); // two

// How do I have objects inherit from eachother?
