// alert("hello world");

// let value;
// value = String(10);
// value = (40).toString();

// value = String(true);

// value = Number('23');
// value = Number(false);

// value = parseInt('200px');
// value = parseFloat('200.212px');


// value = Boolean('hello');
// value = Boolean('');
// value = Boolean(-100);
// value = Boolean(0);
// value = Boolean({});
// value = Boolean([]);


// console.log(value);
// console.log(typeof value);


// const a = 10;
// const b = 20;

// let value;

// value = a + b ;
// value +=100;
// value = value +100;
// value = 5 % 2 ;
// value++;
// value--;
// ++value;
// --value;

// value = Math.PI;
// value = Math.random();
// value = Math.round(2.4);
// value = Math.ceil(2.1);
// value = Math.floor(2.9);
// value = Math.min(2,12,14,15,82);

// value = Math.floor(Math.random()*10 +1);
// console.log(value);
// const a = "andrei";
// const b = "horos";
// let c;
// c=a.concat(" ",b);
// c = a.toUpperCase();
// c = a[a.length -1];
// c = a.indexOf('a');
// c = a.includes('a');
// c = a.slice(0,3);
// c = a.replace('andrei','cristina');
// console.log(c);


// setTimeout(function(){
// console.log("Timer is working!");
// },4000);

// setTimeout(function(){
//     window.alert('hello world')
//     },5000);


// setTimeout(my_func,4000);

// function my_func() {
    // console.log('Timer is working!');
//     window.alert('Hello World')
// }


var id = setInterval(my_func,1000);

var counter=0;

function my_func() {
counter++;
console.log("Counter:" + counter);

if(counter==4) {
clearInterval(id)
}

}

