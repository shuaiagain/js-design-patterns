var SingleTon = function(name) {

    this.name = name;
    this.instance = null;
};

SingleTon.prototype.getName = function() {

    alert(this.name);
};

SingleTon.getInstance = function(name) {

    if (!this.singleObj) {
        this.singleObj = new SingleTon(name);
    }

    return this.singleObj;
}

SingleTon.oneName = '123';
var aa = new SingleTon('aa');
aa.getName();
var bb = new SingleTon('bb');
bb.getName();

SingleTon.getInstance('cc');
console.log(aa.instance);
console.log(bb.instance);
console.log(SingleTon.instance);
console.log(SingleTon.getInstance());
console.log(SingleTon.getInstance('dd') == SingleTon.getInstance());
console.log(SingleTon.singleObj)