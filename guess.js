/*
create a program thats guessses a number from 1 to 10
then asks us to gues that number.
if it higher say "too high" and ask again.
if it lower say "too low"  and ask again.
if its then right number say "congratulation" and exit

*/

import readline from "readline-sync"

let userGuessedRight = false
//while(true) {
// guess a number from 0-10
let Numberchosen = Math.ceil(Math.random() * 10)
//console.log(Numberchosen)


while (!userGuessedRight) {
    let guess = readline.question("what is your guess?")
    if (guess == Numberchosen) {
        //console.log(guess)
        console.log("congratulations")
        userGuessedRight = true
    }
        if (guess > Numberchosen) {
            console.log("too high!")
            

        }
        if (guess < Numberchosen) {
            console.log("too low!")
        }
    
        // console.log("congratulations")
        // userGuessedRight = true 
}
    //}

    // while(!userGuessedRight){
    //     console.log("what is your guess?")
    // }

