$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var winCount = document.getElementById("winCount");
    var lossCount = document.getElementById("lossCount");
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

    // document.onkeyup = function(event) {
    //     userText.textContent = event.key;
    //   };

    // Display a random image and blank word pair from the movieList array

    // $("#random-button").on("click", function() {
    //     var rand = Math.floor(100000000 + Math.random() * 900000000);
    //     $("#random-number").prepend("<p><strong>" + rand + "</strong></p>");
    //   })

    // function showImage() {
    //     var movieObject = movieList[Math.floor(0 + Math.random() * movieList.length)];
    //     $("#hint").append("<img src=\"" + movieObject.img + "\">" );
    //     $("#wordGuess").append(movieObject.title);
    // }
    function showMovieObject() {
        var movieObject = movieList[Math.floor(0 + Math.random() * movieList.length)];
        var hiddenTitle = [];
        for (i = 0; i < movieObject.title.length; i++) {
            if (movieObject.title[i] === " ") {
                hiddenTitle.push(" ");
            }
            else {
                hiddenTitle.push("-");
            }
        }
        for (i = 0; i < hiddenTitle.length; i++) {
            $("#wordGuess").append("<span class=letter_" + i + ">" + hiddenTitle[i] + "</span>");
        }
        $("#hint").append("<img src=\"" + movieObject.img + "\">" );
    }

    document.onkeydown = function(event) {
    }


    showMovieObject();

    // var userGuess;
    // function letterGuess() {
    //     userGuess = 
    // }

    // document.onkeyup = function(event) {
    //     userText.textContent = event.key;
    //   };

});

