function Foo(name, age) {
	this.name = name
	this.age = age
	this.class = 'class-1'
}
var f = new Foo ('aaa', 20)
var f1 = new Foo ('bbb', 22)

function Fo(name, age) {
	this.name=name
}
Fo.prototype.alertName = function() {
	alert(this.name)
}
var f = new Foo('aaa')
f.printName = function() {
	console.log(this.name)
}
f.toString()