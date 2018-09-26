var name = 'window';

function sayName() {
    debugger;
    console.log(this.name);
}

var temp = {
    name: 'temp'
}

sayName.call(temp)