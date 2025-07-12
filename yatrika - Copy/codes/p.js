// function in JavaScript
// function sayhello(a,b){
//     return a+b;
// }
// let a = 20
// let b = 89
// let c = sayhello(a,b)
// console.log('The sum of '+ a + ' and ' + b + ' is ' +c);

// arguments keyword in JavaScript
// function sum(){
//     let ans = 0
//     for(let i =0; i<arguments.length; i++){
//         ans = ans + arguments[i];
// }
// return ans;
// }
// let a = sum(90,80)
// console.log(a)

// Arrow function in JavaScript
// const add = (a,b) => a+b;
// let a = add(20,90)
// console.log(a)

// Arguments keyword is not available in js 
// const sum =(...numbers) =>{
// let ans=0
// for(let i=0; i<numbers.length;i++){
//     ans = ans + numbers[i];
// }
// return ans
// }
// let a = sum(90,89,70)
// console.log(a)

// hoisting is js 
// sayhello()
// function sayhello(){
//     console.log("hello")
// }

// hoisting is not available in arrow function
// const sayhello=()=>{
//     console.log("hello")
// }
// sayhello()

// object in js 
// const students ={
//     name : "ram",
//     age : 20,
//     rollno : 23,
// }
// students["age"] = students["age"] + 1
// console.log(students)

// conditional statement in js 
// let mode = "dark"
// let color;
// if(mode === "dark"){
//     color = "black"
// }
// else{
//     color = "white"
// }

// alert("hello") it gives message 

// prompt("Write your name"); it gives message and user can also input 

// while loop in js 
// function sum (){
//     let ans = 0;
//     let i=0;
//     while (i<arguments.length){
//     ans = ans + arguments[i]
//     i++;
//     }
//     return ans;
// }
// let a = sum(20,30)
// console.log(a)

// this keyword in js 
// const person={
//     name : "Ram",
//     sayhello : function(){
//     console.log("Hey! This is "+ this.name)
//     }
// }
// person.sayhello()

// this keyword in arrow function 
// const person ={
// name : "Ram",
// sayhello : () =>{
//     console.log("hey! this is" + this.name)
// }
// }
// person.sayhello() this is not used in arrow function 

// high order function 
// function sum(a,b,cb){
//     let add = a + b
//     cb(add)
// }
// sum(20,90,function(val){
//     console.log(val)
// })

// array in js 
// const multi = [true,"ram", 20]
// multi.push({name : "shyam"})
// console.log(multi)

