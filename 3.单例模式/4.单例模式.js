//1.自执行函数里面返回了一个函数，就好比：在全局执行环境中定义了一个函数，
//当自执行函数执行完毕后，这个返回的函数还未执行，只有当接受这个函数的变量被调用(变量后面加"()")时,
//返回的函数才会执行；
//2.这里返回闭包的原因是，把instance变量作为标记单例对象是否已存在的一个标记，就好比在window对象中定义了一个变量，
//来标识是否已有单例对象一样，但是用闭包来实现，可以避免全局变量容易被污染的问题（可以看ps2的代码）

//ps1:
var CreateDiv = (function(name) {

    var instance = null;
    return function(name) {

        if (!instance) {
            instance = this;
        }

        this.name = name;
        return instance;
    };
})(name);

var aa = new CreateDiv('aa');
var bb = new CreateDiv('bb');
console.log(aa);
console.log(bb);
console.log(aa === bb);

console.log('-----------------');
//ps2:
//用来说明返回闭包的作用，类似
var instance = null;
var CreateDiv = function(name) {

    if (!instance) {
        instance = this;
    }

    this.name = name;

    return instance;
};

var cc = new CreateDiv('cc');
var dd = new CreateDiv('dd');
console.log(cc);
console.log(dd);
console.log(cc === dd);