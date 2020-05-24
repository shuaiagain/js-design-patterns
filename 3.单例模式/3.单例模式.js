//1.
var SingleTon = function(name) {

    this.name = name;
};

SingleTon.prototype.getName = function() {

    alert(this.name);
};

SingleTon.getInstance = (function(name) {

    var singleObj = null;
    if (!this.singleObj) {
        this.singleObj = new SingleTon(name);
    }
    debugger;
    return this.singleObj;
})('name');

console.log(SingleTon.getInstance);
console.log(SingleTon.getInstance);
console.log(SingleTon.getInstance === SingleTon.getInstance);
//2.
SingleTon.getInstance = function(name) {

    if (!this.value) {
        return this.value = new SingleTon(name);
    }

    return this.value;
};

var aa = SingleTon.getInstance('aa');
var bb = SingleTon.getInstance('bb');
console.log(SingleTon.getInstance('aa'));
console.log(SingleTon.getInstance('bb'));
console.log(aa === bb);

//3.
SingleTon.getInstance = (function(name) {

    var instance;
    return function(name) {

        if (!instance) {
            instance = new SingleTon(name);
        }

        return instance;
    };
})(name);

var aa = SingleTon.getInstance('aa');
var bb = SingleTon.getInstance('bb');
console.log(SingleTon.getInstance('aa'));
console.log(SingleTon.getInstance('bb'));
console.log(aa === bb);