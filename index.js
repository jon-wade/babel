//ES2015 code examples
'use strict';

var evens = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// Expression bodies
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i); //i = index location
var pairs = evens.map(v => ({even: v, odd: v + 1}));

console.log('odds=', odds);
console.log('nums=', nums);
console.log('pairs=', pairs);

var fives = [];

// Statement bodies
nums.forEach(v => {
    if (v % 5 === 0)
        fives.push(v);
});

console.log('fives=', fives);

// Lexical this
var bob = {
    _name: "Bob",
    _friends: ["Jon"],
    printFriends() {
        this._friends.forEach(f =>
            console.log(this._name + " knows " + f));   //normally this would refer to the this of
                                                        // the printFriends() method, not the surrounding code
                                                        //check the build script for details
    }
};

bob.printFriends();

//classes
class Test {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    print(){
        console.log('a=', this.a);
        console.log('b=', this.b);
    }
}

var newObj = new Test('hello', 'world');
newObj.print();

// String interpolation
var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

// list matching
var [a, , b] = [1,2,3]; //this doesn't work in node 5.11.0 but Babel does convert it properly
console.log('a=', a);
console.log('b=', b);

//default parameters
function f(x, y=12) {
    // y is 12 if not passed (or passed as undefined)
    return x + y;
}
console.log('f(3)=', f(3));

//rest parameters
function g(x, ...y) {
    // y is an Array
    return x * y.length;
}
console.log('g(3)=', g(3, "hello", true));

//spread parameters
function h(x, y, z) {
    return x + y + z;
}
// Pass each elem of array as argument
console.log('h(...[1,2,3])', h(...[1,2,3]));

//let and constants
function i() {
    {
        let x;
        {
            // okay, block scoped name
            const x = "sneaky";
            // x = "foo"; error, const
        }
        // let x ="inner" error, already declared in block
    }
}

//iterators
let fibonacci = {
    [Symbol.iterator]() {
        let pre = 0, cur = 1;
        return {
            next() {
                [pre, cur] = [cur, pre + cur];
                return { done: false, value: cur }
            }
        }
    }
}

for (var n of fibonacci) {
    // truncate the sequence at 1000
    if (n > 1000)
        break;
    console.log(n);
}

//promises
function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })
}

var p = timeout(1000).then(() => {
    return timeout(2000);
}).then(() => {
    throw new Error("hmm");
}).catch(err => {
    return Promise.all([timeout(100), timeout(200)]);
});


