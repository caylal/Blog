// 变量定义， this指针指向，运算符优先级、原型、继承、全局变量污染、对象属性及原型属性优先级等

function Foo () {
    getName = function () { alert(1) }
    return this
}

Foo.getName = function () { alert(2) }

Foo.prototype.getName = function () { alert(3) }

var getName = function () { alert(4) } //最终赋值再次覆盖function声明

function getName () { alert(5) }  //提升函数声明覆盖var的声明

//输入的值
Foo.getName();      //2  静态属性
getName();         // 4    变量提升，
Foo().getName();   // 1
getName();         // 1
new Foo.getName(); // 2
new Foo().getName();    // 3
new new Foo().getName();// 3