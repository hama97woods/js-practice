{
  let total = 0;                    // 👈 NEW: outside, remembered every round
  let playing = true;               // 👈 NEW: the "keep playing" switch

  while (playing) {                 // 👈 NEW: start of the big box

    // ----- your game, exactly as before -----
    let secret = Math.floor(Math.random() * 10) + 1;
    let won = false;

    for (let tries = 1; tries <= 3; tries++) {
      let guess = Number(prompt("Guess a number from 1 to 10"));

      if (guess === secret) {
        let points = 4 - tries;
        total = total + points;     // 👈 NEW: add this round's points to the total
        console.log("You Win!! It was " + secret + ". You scored " + points + " points!");
        won = true;
        break;
      } else if (guess > secret) {
        console.log("Too High");
      } else {
        console.log("Too Low");
      }
    }

    if (!won) {
      console.log("Game over! It was " + secret);
    }
    // ----- end of your game -----

    playing = confirm("Play again?");   // 👈 NEW: OK = true (loop again), Cancel = false (stop)
  }                                     // 👈 NEW: end of the big box

  console.log("Thanks for playing! Total score: " + total);   // 👈 NEW: after the loop
}
