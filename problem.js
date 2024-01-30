// const arr = ["Apple", "Banana", "Coconut", "Grape", "Mango"];
// for (let i = arr.length-1; i >= 0; i-- ){
//     console.log(arr[i]);
// }

// const nums = [10, 20, 30, 40, 50]
// let sum = 0;
// for(let i = 0; i < nums.length; i++){
//     const num = nums[i];
//     sum = sum + num;
// }
// console.log(sum)

//Swap array Element

// const nums2 = [10, 20, 30, 40, 50];
// let temp = nums2[3];
// nums2[3] = nums2[1];
// nums2[1] = temp;
// console.log(nums2)

// const fruits = ["Apple", "Banana", "Coconut", "Grape", "Mango"];
// const target = "Grape";
// let foundIndex = null;
// for(let i = 0; i < fruits.length; i++){
//     const currentFruit = fruits[i];
//     if(currentFruit == target){
//         foundIndex = i;
//     }
// }
// if(foundIndex > null){
//     console.log(foundIndex,"founded")
// }

// const nums3 = [45, 60, 82, 95, 45, 12, 32, 75]
// let maxNum = nums3[0];
// let minNum = nums3[0];
// for(let i = 0; i < nums3.length ; i++){
//     const currentNumber = nums3[i];
//     if(maxNum < currentNumber){
//         maxNum = currentNumber;
//     }
//     if(minNum > currentNumber){
//         minNum = currentNumber;
//     }
// }
// console.log(minNum, maxNum);

const purchaseHistory = [100, 300, 500, 200, 700, 150, 120];
const filterPurchaseHistory = [];
for(let i = 0; i < purchaseHistory.length ; i++){
    const currentElem = purchaseHistory[i];
    if(currentElem <= 200){
        filterPurchaseHistory.push(currentElem);
    }
}
console.log(filterPurchaseHistory)
