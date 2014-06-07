var person = {
    name: 'matt',
    say: function(){
        return 'Hello from ' + this.name;
    }
};

log('one', person.say()); // one

// How do I create a second person without repeating everything?
