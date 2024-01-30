var myScore = 80;
var friendScore = 30;
if(myScore >= 80){
    if(friendScore >= 80){
        console.log('Go for lunch')
    }
    else {
        if(friendScore < 80 && friendScore >= 60){
            console.log('Good luck next time')
        }
        if(friendScore < 60 && friendScore >= 40 ){
            console.log('Keep Unseen')
        }
         else if(friendScore < 40){
            console.log('Block')
        }
    }
}
else{
    console.log('Go to home and sleep and act sad.')
}