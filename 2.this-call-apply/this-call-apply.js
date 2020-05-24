var name = 'window';

function sayName() {

    console.log(this.name);
}

var temp = {
    name: 'temp'
}

sayName.call(temp)