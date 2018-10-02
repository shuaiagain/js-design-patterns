var Singleton = function (name) {

    this.name = name;
    this.instance = null;
}

Singleton.prototype.getName = function () {

    console.log(this.name);
}

Singleton.getInstance = function (name) {
    debugger;
    if (!this.instance) {
        this.instance = new Singleton(name);
    }

    return this.instance;
}

var one = Singleton.getInstance('one');
var two = Singleton.getInstance('two');

console.log(one===two)