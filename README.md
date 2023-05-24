# extends-multiple-classes
 
Usage:
```js
class Class1 {
    hello = 'Hello';
}

class Class2 {
    world = 'World';
}

class Class3 {
    smile = ':)';
}

class MultipleClass extends Classes(new Class1, new Class2, new Class3) {
    constructor() {
        super();
        console.log(this.hello, this.world, this.smile);
    }
}

new MultipleClass();
//output: Hello World :)
```