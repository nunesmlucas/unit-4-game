$(document).ready(function() {

var randomScore = 0;
var crystalNumbers = [10, 8, 3, 5];
// var blueCrystal = 0;
// var greenCrystal = 0;
// var redCrystal = 0;
// var purpleCrystal = 0;
var crystalColors = ["blueCrystal", "greenCrystal", "purpleCrystal", "redCrystal"];
var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = '../unit-4-game/assets/images/redCrystal.png';

imgArray[1] = new Image();
imgArray[1].src = '../unit-4-game/assets/images/blueCrystal.png';

imgArray[2] = new Image();
imgArray[2].src = '../unit-4-game/assets/images/greenCrystal.png';

imgArray[3] = new Image();
imgArray[3].src = '../unit-4-game/assets/images/purpleCrystal.png';

var currentScore = 0;



initialize = function () {

    currentScore = "";

    randomScore = Math.floor(Math.random() * 50) + 1;
    console.log(randomScore);

    tempArray = shuffle(crystalNumbers);
    console.log(shuffle(crystalNumbers));

    var crystalObj = {
        blue: tempArray[0],
        purple: tempArray[1],
        green: tempArray[2],
        red: tempArray[3]
    };
    console.log(crystalObj);

    // USE THIS TO CREATE IMG's THEN SET VALUES IN ORDER TO DO THE MATH. 12.html

    for (var i = 0; i < tempArray.length; i++) {

        // For each iteration, we will create an imageCrystal
        var imageCrystal = $("<img>");

        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        imageCrystal.addClass("crystal-image");

        // Each imageCrystal will be given a src link to the crystal image
        imageCrystal.attr("src", imgArray[i].src);

        // Each imageCrystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        imageCrystal.attr("data-crystalValue", tempArray[i]);
        imageCrystal.attr("data-crystalColor", crystalColors[i]);
        imageCrystal.attr("class", "crystalImage");

        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        $("#crystals").append(imageCrystal);
    }

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

};
initialize();


$('.crystalImage').on('click', function () {
    var value = parseInt($("#crystals").attr("data-crystalValue"));
    console.log(parseInt($("#crystals").attr("data-crystalValue")));
    console.log(this);
    // console.log($(this).val());
    currentScore += value;
    // display the new number into result box
    $('#current-score').text(currentScore);
    console.log(currentScore);
});



});