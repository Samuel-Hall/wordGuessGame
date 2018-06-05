$(document).ready(function() {

    var wins = 0;
    var oldWins = 0;
    var losses = 0;
    var oldLosses = 0;
    var alreadyGuessed = [];

    var forrestGump = {
        title: "Forrest Gump",
        img: "assets/images/forrest_gump.jpg"
    };
    var matrix = {
        title: "The Matrix",
        img: "assets/images/matrix.jpg"
    };
    var jurassicPark = {
        title: "Jurassic Park",
        img: "assets/images/jurassic_park.jpg"
    };
    var jaws = {
        title: "Jaws",
        img: "assets/images/jaws.jpg"
    };
    var lordOfTheRings = {
        title: "The Lord of the Rings",
        img: "assets/images/lotr.jpg"
    };
    var nationalTreasure = {
        title: "National Treasure",
        img: "assets/images/national_treasure.jpg"
    };

    var movieList = [forrestGump, matrix, jurassicPark, jaws, lordOfTheRings, nationalTreasure];

    function wordGuessingGame() {
        var wrongGuess = 5;
        $("#guessesLeft").text(wrongGuess);
        alreadyGuessed = [];       
        var movieObject = movieList[Math.floor(0 + Math.random() * movieList.length)];
        movieObject.title = movieObject.title.toUpperCase();
        var indices = [];
        var dashes = [];
        var title = movieObject.title.split('');

        function showMovieObject(){
            for (i = 0; i < movieObject.title.length; i++) {
                if (movieObject.title[i] === " ") {
                    dashes.push(" ");
                }
                else {
                    dashes.push("-");
                }
            }            
            $("#wordGuess").html(dashes);
            $("#hint").html("<img src=\"" + movieObject.img + "\">" );
        };

        function guessLetters() {
            document.onkeydown = function(event) {
                var userGuess = event.key;
                userGuess = userGuess.toUpperCase();

                if (alreadyGuessed.includes(userGuess)) {
                    alert("You've already guessed that letter!");
                }
                else {
                alreadyGuessed.push(userGuess);
                $("#lettersGuessed").append(userGuess + ", ");
                };

                if (movieObject.title.includes(userGuess)) {
                    var movieIndex = movieObject.title.indexOf(userGuess);
                    for (i = 0; i < movieObject.title.length; i++) {
                        if (movieObject.title[i] === userGuess) {
                            dashes[i] = userGuess;
                        }
                    }
                }
                else {
                    wrongGuess--;
                    $("#guessesLeft").text(wrongGuess);
                };

                dashes = dashes.join("");
                $("#wordGuess").text(dashes);
                dashes = dashes.split('');
                                                    
                if (title.join("") === dashes.join("")) {
                    alert("YOU WIN!");
                    wins++;
                    $("#winCount").text(wins);
                    $("#lettersGuessed").empty();
                    wordGuessingGame();
                    
                }
                if (wrongGuess == 0) {
                    alert("YOU LOSE!");
                    losses++;
                    $("#lossCount").text(losses);
                    $("#lettersGuessed").empty();
                    wordGuessingGame();
                    
                }
            };                     
        };
         
        showMovieObject();
        guessLetters();
    };

    wordGuessingGame();

    if (oldWins < wins || oldLosses < losses) {
        console.log("it worked");
        wordGuessingGame();
        wrongGuess = 5;
        oldWins = wins;
        oldLosses = losses;
        alreadyGuessed = [];
    }   
    
});

