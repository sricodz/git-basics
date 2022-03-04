
function change(){
    var x = document.getElementsByTagName("div");
    console.log(typeof(x));
/*
    x[0].style.fontStyle="italic"
    x[1].style.backgroundColor="yellow";
    x[2].style.fontSize="2rem";

*/
    for(var i =0;i<x.length;i++){
        x[i].style.letterSpacing="2px";
        x[i].style.backgroundColor="black";
        x[i].style.color="white";
        x[i].style.fontSize="2rem";
    }
}

//---------------------------------------

function change2(){
    var arr=document.getElementsByClassName("clas");
    console.log(typeof(arr));
    for(var i=0;i<arr.length;i++){
        arr[i].style.backgroundColor="aqua";
    }
}

// setTimeOut function

var x= setTimeout(()=>{
    console.log("welcome to the set timeout") 
},2000);
console.log(x);

// or

function a(){
    console.log("another way of creating settime out funciton");
}
setTimeout(a,3000);



// callback functions

function nam(bro){
    setTimeout(()=>{  console.log("my name is venkat");},4000);
    bro();
}
function bro(){
    console.log("my brother name is pavan");
}
nam(bro);



// this keyword
/*
this is generally used to point out particular object,if we use this keyword in any object it points to that
object or else if we use this keyword in normal way it default points to window object
*/
console.log(this)
var x=20;
console.log(x);
console.log(window.x);
console.log(this.x);
// above three cases the ouput is 20



// 1.call 2.apply 3.bind
/*the above three methods are used to manipulate the this keyword, generally this points to window object but by using above three
methods we can manipulate this keyword to other objects
 */

var sal=3000;
function getSal(nam,age){
    console.log(nam);
    console.log("age is ",age);
    console.log(this.sal);
}
getSal("sridhar");  // here it prints 3000 sridhar

// using call method we can manipulate this

var emp={
    sal:1000,
    show:()=>console.log(this.sal)
}
var emp1={
    sal:4700,
    show:()=>console.log(this.sal)
}
var emp2={
    sal:2300,
    show:()=>console.log(this.sal)
}
console.log(emp.salary);  //it prints 3000
getSal.call(emp,"venkat",23);

// use apply-->in this method we can pass arguments in array format
getSal.apply(emp1,["pavan",20])

// use bind--->bind method returns function so we declared like below
var data=getSal.bind(emp2,"vishnu",18);
data();