// const day = 7;
// switch(day){
//     case 1:
//         console.log("Saturday");
//         break;
//     case 2:
//         console.log("Sunday");
//         break;
//     case 3:
//         console.log("Monday");
//         break;
//     case 4:
//         console.log("Tuesday");
//         break;
//     case 5:
//         console.log("Wednesday");
//         break;
//     case 6:
//         console.log("Thursday");
//         break;
//     case 7:
//         console.log("Friday");
//         break;
//     default:
//         console.log("Invalid day")
// }

// const lightCondition = true;
// switch(true) {
//     case lightCondition:
//         console.log("Light On 💡");
//         break;
//     default:
//         console.log("Light Off 🪔");
//         break; 
// }

// function calcGrading(score) {
//     let gradingScore
//     switch (true) {
//         case (score <= 100 && score >= 90 ):
//             gradingScore = 'A'
//             break;
//         case (score <= 89 && score >= 70):
//             gradingScore = "B"
//             break;
//         case (score <= 69 && score >= 60):
//             gradingScore = "C"
//             break;
//         case (score <= 59 && score >= 0):
//             gradingScore = "F"
//             break;
//         case (score > 100 && score < 0):
//             gradingScore = "Invalid Score"
//             break;
//         default:
//             return "Invalid Score"
//     }
//     return `You got ${ gradingScore } Grade.`;
// }

// const firstPerson = calcGrading(90);
// console.log(firstPerson)

function categorizeFruit(name) {
    switch(name.toLowerCase()) {
        case "apple"
        case "orange"
        case "banana"
            console.log(`${ name } is a common fruit`)
            break;
    }
}