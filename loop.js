const numbers = [12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(numbers);

for(const one of numbers){
    console.log(one);
    console.log('Print it');
}

const number = 7;
if(number < 10){
    console.log('True');
}
else{
    console.log('false');
}

let num = 1;
let sum = 0;
while(num <= 10 ){
    console.log(num);
    sum = sum + num;
    console.log(sum);
    num++;
}

let num = 1;
let sum = 0;
while(num <= 10){
  
    if(num % 2 !== 0){
        sum = sum + num;
        console.log(num)
    }
    num++;
}