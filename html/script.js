var backgroundList = [];
var backgroundIndex = 0;
var onScreen = true;
var a = true;

$(document).ready(function() {
    generateList();
    $("#container").fadeIn(fadeDuration);

    change();
});

var backgroundImagesCount = 12;

function generateList() {
    for (let i = 0; i < backgroundImagesCount; i++) {
        backgroundList.push(i);
    }
    backgroundList = shuffle(backgroundList);
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
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

var duration = 10000;
var fadeDuration = 1000;

function manage() {
    if (onScreen) {
        setTimeout(change, duration);
    } else {
        $("#container").fadeOut(fadeDuration);
    }
}

function change() {
    var background = $("#background");
    background.fadeOut(fadeDuration).fadeIn(fadeDuration);

    setTimeout(changeImg, fadeDuration, background);

    manage();
}

function changeImg(bground) {
    if (backgroundIndex > backgroundList.length - 1) {
        backgroundIndex = 0;
    }

    bground.css('background-image', 'url(assets/background/' + backgroundList[backgroundIndex] + '.jpg)');

    if (a) {
        a = false;
        bground.removeClass("backgroundToLeftAnim").addClass("backgroundToRightAnim");
    } else {
        a = true;
        bground.removeClass("backgroundToRightAnim").addClass("backgroundToLeftAnim");
    }

    backgroundIndex++;
}