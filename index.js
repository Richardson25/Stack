//STACK: Lifo, Last-in, first-out

let stack = []

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

//console.log(stack)
let retire = stack.pop()

//console.log(stack)
//console.log(retire)

let retire2 = stack.shift()
//console.log(retire2)
//console.log(stack)

function stack2(){
    this.arr = [];
}

stack2.prototype.add = function(value){
    this.arr.push(value);
}

stack2.prototype.delete = function(value){
    this.arr.pop(value);
}

const pil = new stack2();

pil.add(1);
pil.add(2);
pil.add(3);

//pil.shift();
pil.add(8);
//pil.delete();
console.log(pil);





