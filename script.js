//complete this code
class Person {
	constructor(name, age){
		this.name = name;
		this.age= age;
	}
	getName(){
		return this.name
	}
	setAge(x){
		this.age = x;
	}
}

class Student extends Person {
	constructor(name, age){
		super.name = name;
		super.age= age;
	}
	study(){
		console.log(`${super.name} is studying`)
		document.getElementById('p').innertText=`${super.name} is studying`
	}
}

class Teacher extends Person {
	constructor(name, age){
		super.name = name;
		super.age= age;
	}
	teach(){
		console.log(`${super.name} is teaching`)
	}
}

// let s = new Student('pranav', 56)

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
