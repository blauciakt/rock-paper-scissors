//Computer behaviour
function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    let randomMove = Math.floor(Math.random() * options.length);
    return options[randomMove];
}

console.log(computerPlay());