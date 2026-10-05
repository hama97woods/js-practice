{
let secret = Math.floor(Math.random() * 10) +1;

    for(let tries = 1; tries <= 3; tries++){

let guess = Number(prompt("guess a number from 1 to 10"));

if (guess === secret) {

console.log("You Win!! It was " + secret);

break;
    
} else if(guess > secret) {
    
    console.log(" Too High");
}
    else {

    console.log(" Too Low")
}
}
}
