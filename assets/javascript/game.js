// Main Variables
var targetPoints = 80;
var wins = 0;
var losses = 0;
var totalPoints = 0;

// Displays main points
$("#target-points").text(targetPoints);
$("#wins").text(wins);
$("#losses").text(losses);
$("#total-points").text(totalPoints);

var attackPoints = [10, 8, 6, 4];

for (var i = 3; i < attackPoints.length; i++) {
    var imagePika = $("<img>");
        imagePika.addClass("pika-image");
            imagePika.attr("src", "assets/images/pokemon/pika.gif");
            imagePika.attr("data-pika", attackPoints[0]);
                $("#pokemon").append(imagePika);
    var imageClefairy = $("<img>");
        imageClefairy.addClass("clefairy-image");
            imageClefairy.attr("src", "assets/images/pokemon/clefairy.gif");
            imageClefairy.attr("data-clefairy", attackPoints[1]);
                $("#pokemon").append(imageClefairy);    
    var imageEevee = $("<img>");
        imageEevee.addClass("eevee-image");
            imageEevee.attr("src", "assets/images/pokemon/eevee.gif");
            imageEevee.attr("data-eevee", attackPoints[2]);
                $("#pokemon").append(imageEevee);
    var imageKoffing = $("<img>");
        imageKoffing.addClass("koffing-image");
            imageKoffing.attr("src", "assets/images/pokemon/koffing.gif");
            imageKoffing.attr("data-koffing", attackPoints[3]);
                $("#pokemon").append(imageKoffing);      
}

$(".pika-image").on("click", function() {
    var pikaValue = ($(this).attr("data-pika"));
        pikaValue = parseInt(pikaValue);
        totalPoints += pikaValue;
        $("#total-points").text(totalPoints)
    if (totalPoints === targetPoints) {
        wins++;
        totalPoints = 0;
    }
    else if (totalPoints > targetPoints) {
        losses++
        totalPoints = 0;
    }
    $("#hit-points").append(totalPoints)
    $("#wins").text(wins)
    $("#losses").text(losses)
});

$(".clefairy-image").on("click", function() {
    var clefairyValue = ($(this).attr("data-clefairy"));
        clefairyValue = parseInt(clefairyValue);
        totalPoints += clefairyValue;
        $("#total-points").text(totalPoints)
    if (totalPoints === targetPoints) {
        wins++;
        totalPoints = 0;
    }
    else if (totalPoints > targetPoints) {
        losses++
        totalPoints = 0;
    }
    $("#hit-points").append(totalPoints)
    $("#wins").text(wins)
    $("#losses").text(losses)
});

$(".eevee-image").on("click", function() {
    var eeveeValue = ($(this).attr("data-eevee"));
        eeveeValue = parseInt(eeveeValue);
        totalPoints += eeveeValue;
        $("#total-points").text(totalPoints)
    if (totalPoints === targetPoints) {
        wins++;
        totalPoints = 0;
    }
    else if (totalPoints > targetPoints) {
        losses++
        totalPoints = 0;
    }
    $("#hit-points").append(totalPoints)
    $("#wins").text(wins)
    $("#losses").text(losses)
});

$(".koffing-image").on("click", function() {
    var koffingValue = ($(this).attr("data-koffing"));
        koffingValue = parseInt(koffingValue);
        totalPoints += koffingValue;
        $("#total-points").text(totalPoints)
    if (totalPoints === targetPoints) {
        wins++;
        totalPoints = 0;
    }
    else if (totalPoints > targetPoints) {
        losses++
        totalPoints = 0;
    }
    $("#hit-points").append(totalPoints)
    $("#wins").text(wins)
    $("#losses").text(losses)
});
  