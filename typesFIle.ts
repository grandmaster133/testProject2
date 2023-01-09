import * as t from 'io-ts'

let firstName: string = "Mike";
var age: number = 30;
var isCool: boolean = true;

let secondname: string = "Cope";
let experience: number = 10;
var isSuper: boolean = false;


const User =t.type({
    userName: t.string,
    userNumber: t.number
})

var a = User.props.userName;

console.log('test')

let hobbies: string[];

hobbies = ['test','test2']

let person: {
name: number,
age: number,
};

person = {

name: 'Steve',
age: 31,
}

let car: {
color: string,
speed: number,
}

var tree: {
    color: string,
    age: number,
}

let people: {
    name: string,
    age: number,
}[];


let course = 'Some course name';
course = 121351;

let address: string

let kokot: string = "isKokot";

var bus: string|number = "Volvo";

type Human = {
 voice: string,
 old: number,
}

function add(a:number,b:number): number{
    return a + b
}