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

