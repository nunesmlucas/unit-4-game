var randomScore = 0;
var crystalNumbers = [10, 8, 3, 5];
var blueCrystal = 0;
var greenCrystal = 0;
var redCrystal = 0;
var purpleCrystal = 0;



initialize();

function initialize() {

    var currentScore = 0;

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

    // for (var i = 0; i < numberOptions.length; i++) {

    //     // For each iteration, we will create an imageCrystal
    //     var imageCrystal = $("<img>");
    
    //     // First each crystal will be given the class ".crystal-image".
    //     // This will allow the CSS to take effect.
    //     imageCrystal.addClass("crystal-image");
    
    //     // Each imageCrystal will be given a src link to the crystal image
    //     imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
    
    //     // Each imageCrystal will be given a data attribute called data-crystalValue.
    //     // This data attribute will be set equal to the array value.
    //     imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    
    //     // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    //     $("#crystals").append(imageCrystal);
    //   }

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


    // $('.crystalImage').on('click', function (event) {
    //     console.log(this);
    //     console.log($(this).val());
    //     currentScore += $(this).val();
    //     // display the new number into result box
    //     $('#current-score').text(currentScore);
    // });

};