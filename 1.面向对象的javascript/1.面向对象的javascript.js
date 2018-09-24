var parent = {
    name: 'parent'
}

var A = function (name, age) {
    this.name = name || '';
    this.age = age || 0;
}

A.prototype = parent;

var aa=new A();

console.log(aa)

aa.name
aa.__proto__