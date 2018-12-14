var randomScore = 0;
var crystalNumbers = [10, 8, 3, 5];
var crystalColors = ["blueCrystal", "greenCrystal", "purpleCrystal", "redCrystal"];

//Image array:
var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = 'assets/images/redCrystal.png';

imgArray[1] = new Image();
imgArray[1].src = 'assets/images/blueCrystal.png';

imgArray[2] = new Image();
imgArray[2].src = 'assets/images/greenCrystal.png';

imgArray[3] = new Image();
imgArray[3].src = 'assets/images/purpleCrystal.png';

var currentScore = 0;
var wins = 0;
var losses = 0;

$("#wins-score").text(wins);
$("#losses-score").text(losses);


initialize();

function initialize() {

    console.log("IN INITIALIZE FUNCTION");

    $('#crystals').empty();
    $('#number-to-guess').empty();

    currentScore = 0;
    $('#current-score').text(currentScore);

    randomScore = Math.floor(Math.random() * 30) + 20;
    console.log(randomScore);

    tempArray = shuffle(crystalNumbers);
    console.log(shuffle(crystalNumbers));

    var crystalObj = {
        red: tempArray[0],
        blue: tempArray[1],
        green: tempArray[2],
        purple: tempArray[3]
    };
    console.log(crystalObj);
    console.log("HERE 1st.");


    for (var i = 0; i < tempArray.length; i++) {
        console.log("HERE 2nd FOOR LOOP.");

        // For each iteration, we will create an imageCrystal
        var imageCrystal = $("<img>");

        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        imageCrystal.addClass("crystal-image");

        // Each imageCrystal will be given a src link to the crystal image
        imageCrystal.attr("src", imgArray[i].src);
        console.log(imgArray[i].src);

        // Each imageCrystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        imageCrystal.attr("data-crystalValue", tempArray[i]);
        // imageCrystal.attr("data-crystalColor", crystalColors[i]);
        imageCrystal.attr("class", "crystalImage");

        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        $("#crystals").append(imageCrystal);


    }
    $("#number-to-guess").text(randomScore);


};

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

$('#crystals').on('click', '.crystalImage', function (event) {
    var value = parseInt($(this).attr("data-crystalValue"));
    console.log(parseInt($(this).attr("data-crystalValue")));
    console.log(this);
    // console.log($(this).val());
    currentScore += value;
    // display the new number into result box
    $('#current-score').text(currentScore);
    console.log(currentScore);

    if (currentScore == randomScore) {
        wins++;
        console.log(wins);
        $("#wins-score").text(wins);

        alert("You have matched the score and WON! The score was: " + randomScore);
        initialize();
    }
    else if (currentScore > randomScore) {
        losses++;
        console.log(losses);
        $("#losses-score").text(losses);
        alert("You went over the score and LOSE! The Score was: " + randomScore);
        initialize();
    }

});

$('#reset-button').on('click', function () {
    hardReset();
});


function hardReset() {

    wins = 0;
    losses = 0;

    $('#crystals').empty();
    $('#number-to-guess').empty();
    $("#wins-score").text(0);
    $("#losses-score").text(0);

    currentScore = 0;
    $('#current-score').text(currentScore);

    randomScore = Math.floor(Math.random() * 30) + 20;
    console.log(randomScore);

    tempArray = shuffle(crystalNumbers);
    console.log(shuffle(crystalNumbers));

    var crystalObj = {
        red: tempArray[0],
        blue: tempArray[1],
        green: tempArray[2],
        purple: tempArray[3]
    };
    console.log(crystalObj);
    console.log("HERE 1st.");


    for (var i = 0; i < tempArray.length; i++) {
        console.log("HERE 2nd FOOR LOOP.");

        // For each iteration, we will create an imageCrystal
        var imageCrystal = $("<img>");

        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        imageCrystal.addClass("crystal-image");

        // Each imageCrystal will be given a src link to the crystal image
        imageCrystal.attr("src", imgArray[i].src);
        console.log(imgArray[i].src);

        // Each imageCrystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        imageCrystal.attr("data-crystalValue", tempArray[i]);
        // imageCrystal.attr("data-crystalColor", crystalColors[i]);
        imageCrystal.attr("class", "crystalImage");

        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        $("#crystals").append(imageCrystal);


    }
    $("#number-to-guess").text(randomScore);

};




