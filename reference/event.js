const EventEmitter = require('events');

class MyEvent extends EventEmitter{
    log(msg){
        this.emit('message', msg);
    }
}

module.exports = MyEvent;
