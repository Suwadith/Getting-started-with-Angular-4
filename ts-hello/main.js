"use strict";
exports.__esModule = true;
function print(message) {
    console.log(message);
}
var message = 'Hello World';
print(message);
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally: " + i); //variables declared using the 'var' keyword can be accessed anywhere within the method.
}
doSomething();
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally: " + i); //variables declared using the 'let' keyword won't allow the anomaly that occured above. 
    //So this won't work. This makes TS more of an organized version of JS.
    //This won't prevent from compiling this file to JS file.
    //But still will help us catch such compilation errors.
}
doSomething();
var count = 5;
count = 'Hello'; //You'll get an compilation error. But it does compile and convert to JS.
var a; //If you can't assign a value straight away it's better to include the variable type.
a = 1;
a = "Hello";
a = true;
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 3;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
; //You don't have to explicitly declare the values from 0..2.
//It's automatically incremented by TS from 0 Onwards.
//But as far as best practices are considered this is a must.
var backgroundColor = Color.Red;
var word = 'Apple';
var endsWithE = word.endsWith('e'); //return a boolean value.
var newWord; //This variable has not been given a Type. So by default it stays as an 'any' Type variable.
newWord = 'Test';
var endsWithT = newWord.endsWith('T'); //In that case you'll have tell the compiler that this is String.
//Or else you won't get IntelliSense.
var alternativeWay = newWord.endsWith('T'); //Alternative way.
var log = function (message) {
    console.log(message);
};
//Alternative #1.
var doLog = function (message) {
    console.log(message);
};
//#Alternative #2 (Can only be used if only 1 function or 1 line exists inside the parentheses).
var mustLog = function (message) { return console.log(message); };
//Can be used if there aren't any parameters.
var keepLog = function () { return console.log(); };
//Use of interface;
/*interface Point {
    x: number,
    y: number
}

//By defining an object of the interface We are reducing
let drawPoint = (point: Point) => {

}

//This makes the code look less complicated
drawPoint({
    x: 1,
    y: 2
})

//Alternatively you can use something like this (But this is not Recommended)
let drawPPoint = (point: {x: number, y: number}) => {

}

let getDistance = (pointA: Point, pointB: Point) => {

}*/
//A much better way
//class Point{
/*private x: number;
private y: number;*/
/*constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
}*/
//Typescript can't have multiple constructors but you can make the parameters optional
//constructor(private _x?: number, private _y?: number) {
/*this.x = x;
this.y = y;*/
//}
//draw(){
//console.log('X: ' + this._x + ', Y: ' + this._y);
//}
/*getX() {
    return this.x;
}

setX(value) {
    if(value < 0)
        throw new Error('Value cannot be less than 0');

    this.x = value;
}*/
/*getDistance(another: Point){

}*/
//get x() {
//return this._x;
//}
//set x(value) {
//if(value < 0)
//throw new Error('Value cannot be less than 0');
//this._x = value;
//}
//}
var point_1 = require("./point");
var point = new point_1.Point(1, 2);
//let point = new Point();
/*point.x = 1;
point.y = 2;*/
//let x = point.getX();
/*let x = point.x;
point.x = 5;*/
point.draw();
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeComponent(10, true);
component.onClick();
//console.log(`likesCount: ${component._likesCount}, isSlected: ${component._isSelected}`);
console.log("likesCount: " + component.likesCount + ", isSlected: " + component.isSelected);
