const numbers =[12, 21, 15, 36, 45, 25];
console.log(numbers);
for(const num of numbers){
    console.log(num)
}

for(let i=0; i <= 5 ; i++){
    console.log(i)
}

let sum = 0;
for(i = 0 ; i <= 20; i++){
    sum = sum + i;
}
console.log(sum)

let num = 0;
while(num < 5){
    console.log("print",num);
    num++;
}
for(let i = 0; i < 5; i++){
    console.log(i)
}

let num = 1;
let sum = 0;
while(num <= 10){
    console.log(num);
    if(num % 2 === 0){
        console.log('even number', num)
        sum = sum + num;
    }
    num++
}
console.log(sum);

for (num = 0 ; num <= 20 ; num++){
    console.log(num);
    if(num % 2 === 0){ 
        console.log('print', num)
    }
}

for(let i= 0 ; i <= 200; i++){
    console.log(i);
    if(i >= 100){
        break;
    }
}

let num = 1;
let sum = 0;
while(num <= 150){
    sum = sum + num ;
    if(sum >= 100){
        break;
    }
    num++;
}
console.log(sum)

for(let num = 1 ; num <= 100; num++){
    console.log(num);
    square = num * num;
    if(square >= 100){
        break;
    }
    console.log(num)
}

for(let i = 1; i <= 40 ; i++){
    if(i % 2 !== 0){
        continue;
    }
    console.log(i)
}

for(let i = 55 ; i <= 85; i++){
    if(i % 5 === 0){
        continue;
    }
    console.log(i)
}

let multi = 9;
for(let i = 1; i <= 10; i++){
    let total = multi * i;
    console.log(total)
}

for( let i = 81; i>= 65; i--){
    console.log(i)
}