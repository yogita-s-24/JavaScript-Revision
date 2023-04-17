// Array can hold many values in a single variables.
//Array Methods:
//There are 12 array methods in the array.

let name = "Harry";

//1.length():- to check te length of the string
console.log(name.length);

//----------------------------------------------------------------

//2.toUpperCase:- for upper case letter
console.log(name.toUpperCase());

//-----------------------------------------------------------------

//3.toLowerCase:- for lower case letter
console.log(name.toLowerCase());

//4.slice():- for print string to given index to given index
console.log(name.slice(2, 4));
console.log(name.slice(1, 3));

//-----------------------------------------------------------------

//5.replce()-for replacing the string
console.log(name.replace("Har", "Per"));

//------------------------------------------------------------------

//6.concat()-for combining the string
let friend = "Nikesh";
console.log(name.concat(" is frined of ", friend));

//-----------------------------------------------------------------

//7.trim()-for remove the whitespaces
let frnd = "       Nilu is a frnd of Nikhil";
console.log(frnd.trim());

//------------------------------------------------------------------
let fr = "Ramesh" + "Suresh" + "Nikesh";
console.log(fr[0]);
console.log(fr[1]);
console.log(fr[2]);

//------------------------------------------------------------------

//8.push()-element added at the end of the array
let num = [1, 2, 3, 4, 5, 6];
let r = num.push(23)
 console.log(num,r);

 //--------------------------------------------------------------------

//9.pop()-remove the element from the last
let s = num.pop();
console.log(num, s);

//--------------------------------------------------------------------

//10.shift()-remove an element from starting of the array
let t = num.shift();
console.log(t, num);

//--------------------------------------------------------------------

//11.unshift()-add an element from starting of the array
let u = num.unshift();
console.log(u, num);

//----------------------------------------------------------------------

//12.toString()-Convert an array to the string of comma seperator values
let f = num.toString();
console.log(f, num);