
//-------------------------------------------- variables

let number = 1;
var name = 'Ahmad';
const PI = 3.14;


//------------------------------------------- selectors 

// . = class
// # = id
// > = direct child
// + = sibling
// space = decedents

//-------------------------------------------- selectors

let paraId = 'mpara';
var inpId = 'minput';

// document.getElementById(paraId);
// document.getElementsByTagName('p');
// document.getElementsByClassName('myclass');

// document.querySelector('#mpara')
// document.querySelector('.mpara')
// document.querySelector('+mpara')
// document.querySelector('body > input')

// functions

function Sum(a, b) {
	return a + b;
}

//--------------------------------------------- built-in functions

// setInterval(() => {
// 	console.log("hello after 5 seconds");
// }, 5000);

// setTimeout(() => {
// 	console.log("hello after 5 seconds");
// }, 5000);

// console.log(Sum(1,3));


//--------------------------------------------- conditionals

// let age = 10;

// if (age < 10) {
// 	console.log(`you're too young`);
// } else if (age == 10) {
// 	console.log('hello there nice to see you using a pc');
// } else {
// 	console.log(`you're a pedo`);
// }

// switch (age) {
// 	case 10:
// 		console.log('hello there nice to see you using a pc');
// 		break;
// 	case 12:
// 		console.log(`you're a pedo`);
// 		break;

// 	default:
// 		console.log(`you're too young`);
// 		break;
// }

//--------------------------------------------- loops

let fruits = ['Apple', 'Mango', 'Angoor', 'Dwana', 'Banana']

console.log('%c for', 'color: #bada55');
for (let index = 0; index < fruits.length; index++) {
	const element = fruits[index];
	console.log(`element at index ${index} = ${element}`);
}

console.log('%c foreach', 'color: #bada55');
fruits.forEach(element => {
	console.log(`element ${element}`);
});

console.log('%c for of', 'color: #bada55');
for (const iterator of fruits) {
	console.log(iterator);
}

console.log('%c for in', 'color: #bada55');
for (const key in fruits) {
	console.log(key);
}


let count = 1;
while (true) {
	console.log(count);
	if (count === 10) {
		console.log('astalavista baby')
		break;
	}
	count++;
}

// -------------------------------------------- Objects

// self invoking functions

let Calculator = (function () {

	function _add(a, b) {
		return a + b;
	}
	function _sub(a, b) {
		return a - b;
	}
	function _mul(a, b) {
		return a * b;
	}

	// arrow function
	let _div = (a, b) => a / b;

	function Calculator() {
		return {
			Add: _add,
			Sub: _sub,
			Mul: _mul,
			Div: _div
		}
	}

	return Calculator;
}());


let calc = new Calculator();
console.log(calc.Add(1, 2));;


// arrow function syntax
let App = (() => {
	return {
		Init: () => {
			console.log('Application Initialized');
		}
	}
})();

App.Init();

class Person {
	constructor(name, age, hasCity, hasCivic, incomeInDigits) {
		this.name = name;
		this.age = age;
		this.hasCity = hasCity;
		this.hasCivic = hasCivic;
		this.incomeInDigits = incomeInDigits;
	}

	set Age(value) {
		this.age = value;
	}
	get Age() {
		return this.age;
	}

	getPersonString() {
		return JSON.stringify(this);
	}
}

const ConsoleColors = {
	Green: '#bada55'
}
class ConsoleHelper {
	constructor() {

	}
	static Log(msg, color) {
		if (color !== undefined && color !== null) {
			console.log(`%c${msg}`, `color:${color}`)
		} else {
			console.log(`${msg}`)
		}
	}
}

let p = new Person(null, 10);
p.name = 'Waqar';
ConsoleHelper.Log('Person', ConsoleColors.Green)
ConsoleHelper.Log(p.getPersonString())
p.Age += 10;
ConsoleHelper.Log(p.getPersonString())

// -------------------------------------------- Promises

// fullfiled, pending, settled, rejected
let millisecond = 1000;
let tenseconds = millisecond * 10;
let deathTime = tenseconds * 7;
let currentTime = 0;

// let jene_marne_k_wade = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		ConsoleHelper.Log('Shadi ho gai 10 sal bad ab man 20 ka hu');
// 		currentTime += tenseconds;
// 	}, tenseconds * 3);

// 	setTimeout(() => {
// 		ConsoleHelper.Log('larai ho gai ');
// 		currentTime += tenseconds;
// 	}, tenseconds * 4);

// 	setTimeout(() => {
// 		ConsoleHelper.Log('sula ho gai');
// 		currentTime += tenseconds;
// 	}, tenseconds * 5);

// 	setTimeout(() => {
// 		ConsoleHelper.Log('budha ho gaya');
// 		currentTime += tenseconds;
// 	}, tenseconds * 6);

// 	setTimeout(() => {
// 		ConsoleHelper.Log('so jane do mar jane do, mit jane do lehron me kahi doob jane do');
// 		currentTime += tenseconds;
// 	}, tenseconds * 7);

// 	let deathHandle = setInterval(() => {
// 		if (currentTime === deathTime) {
// 			clearInterval(deathHandle);
// 			resolve('RIP');
// 		}
// 	}, tenseconds);
// });

console.clear();
ConsoleHelper.Log('Meri Kahani', ConsoleColors.Green);
let p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		currentTime += tenseconds;
		resolve('10 sal guzar gye babu');
	}, tenseconds);
});

let p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('ab man 20 ka hu');
		currentTime += tenseconds;
	}, tenseconds * 2);
});

let p3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('accident me mar gaya');
		currentTime += tenseconds;
	}, tenseconds * 3);
});

// p1.then((res)=>{
// 	console.log(res);
// }).catch((reason)=>{
// 	console.log('reason')
// });

let promisesImade = [p1, p2, p3];

// calling promises individually
// promisesImade.forEach(p => {
// 	p.then((res) => {
// 		console.log(res);
// 	}).catch((reason) => {
// 		console.log(reason)
// 	});
// });

// waiting for all the promises

// Promise.all(promisesImade)
// 	.then((responses) => {
// 		ConsoleHelper.Log('all resp', ConsoleColors.Green);
// 		console.log(responses);
// 	}).catch((reasons) => {
// 		console.log(reasons);
// 	});

// waits for the first response

// Promise.race(promisesImade)
// 	.then((res) => {
// 		ConsoleHelper.Log('race resp', ConsoleColors.Green);
// 		console.log(res);
// 	}).catch((reason) => {
// 		console.log(reason);
// 	});

// getting data from web

// http promises
// let fetchPromise = fetch('https://jsonplaceholder.typicode.com/users');
// fetchPromise
// 	// this returns a new promise
// 	.then(res => res.json())
// 	// convert to json promise
// 	.then((json) => {
// 		console.log(json);
// 	})
// 	.catch((reason) => {
// 		console.log(reason);
// 	});


// rejection example

// let incomeInDigits = 6;
// let hasCivic = false;
// let hasCity = true;

class Woman extends Person {
	decideToGetMarried(person) {
		return new Promise((res, rej) => {
			if (person.incomeInDigits >= 6 && person.hasCity === true && person.hasCivic === true) {
				res(`${person.name} Baba kehte hain use coffee pe bulao`);

			} else if (person.incomeInDigits >= 6 && person.hasCivic == true) {
				res(`${person.name} Man Sb Ko Mana Lugi`);
			}
			else if (person.incomeInDigits >= 5 && person.hasCity == true) {
				res(`${person.name} Man try kru gi`);
			} else {
				rej(`${person.name} Baba nahi manain ge`);
			}
		})
	}
}

let available_men = [
	new Person('Kashif', 25, false, false, 5),
	new Person('Ahmed', 25, true, false, 5),
	new Person('Usman', 25, true, true, 7)
];

let ungreatful_bitch = new Woman('Keren', 25, false, false, 5);

// for (const man of available_men) {
// 	ConsoleHelper.Log(`${man.name}`,'white')
// 	ungreatful_bitch.decideToGetMarried(man)
// 	.then((res) => {
// 		ConsoleHelper.Log(`${res}`,'green')
// 	})
// 	.catch((reason)=>{
// 		ConsoleHelper.Log(`${reason}`,'red')
// 	});
// }

//---------------------------------------------- async promises
async function validateMen() {
	for (const man of available_men) {
		try {
			ConsoleHelper.Log(`${man.name}`, 'white')
			let res = await ungreatful_bitch.decideToGetMarried(man);
			ConsoleHelper.Log(`${res}`, 'green')
		} catch (error) {
			ConsoleHelper.Log(`${error}`, 'red')
		}
	}
}

validateMen();