var Singleton = function sin(name) {

    this.name = name;
    this.instance = null;
}

Singleton.prototype.getName = function () {

    console.log(this.name);
}

Singleton.getInstance = function (name) {

    if (!this.instance) {
        this.instance = new Singleton(name);
    }

    return this.instance;
}

var one = Singleton.getInstance('one');
var two = Singleton.getInstance('two');

console.log(one === two)

var Single = function (name) {

    this.name = name;
}

Single.prototype.getName = function () {
    console.log(this.name);
}

Single.getInstance = (function () {

    var instance = null;

    return function (name) {

        if (!instance) {
            instance = new Single();
        }

        return instance;
    }
})();

var aa = Single.getInstance();
var bb = Single.getInstance();

console.log(aa === bb);

// var SingleOne = function (name) {
//     this.name = name;
// }


// SingleOne.getInstance = function () {

//     var instance = null;

//     return (function () {

//         if (instance == null)
//             instance = new SingleOne();

//         return instance;
//     })()
// }

// var cc = SingleOne.getInstance();
// var dd = SingleOne.getInstance();
// debugger;
// console.log(cc === dd);