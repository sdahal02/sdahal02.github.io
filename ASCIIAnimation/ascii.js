window.onload = function () { // load js code only when DOM is fully loaded
    "use strict";
    function animationSingle() { // actual animation function : using separate function
        if (i == length)
            i = 0;
        textArea.innerHTML = animationArray[i++];
    }
    function startAnimation() { // starting function of animation
        start.disabled = true;
        stop.disabled = false;
        textArea.readOnly = true;
        var animationText = ANIMATIONS[animation.value];
        animationArray = animationText.split("=====\n");
        i = 0;
        length = animationArray.length;
        interval = setInterval(animationSingle, speed);
        animation.disabled = true;
    }
    function stopAnimation() { // stop the animation
        start.disabled = false;
        stop.disabled = true;
        clearInterval(interval);
        interval = null;
        animation.disabled = false;
        textArea.readOnly = false;
    }
    function changeFontSize() { // change the font size
        textArea.style.fontSize = fontsize.value;
    }
    function turboSpeed() { // increase/decrease the speed of animation
        if (turbo.checked == true) {
            speed = 50;
        }
        else {
            speed = 250;
        }
        if (interval != null) { // clear and restart the animation
            clearInterval(interval);
            interval = null;
            interval = setInterval(animationSingle, speed);
        }
    }
    function displayFirstAnimation() { // display whole text of animation when an animation is selected
        textArea.innerHTML = ANIMATIONS[animation.value];
    }
    var i;
    var length;
    var animationArray = null;
    var interval = null;
    var speed = 250;
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var animation = document.getElementById("animation");
    var fontsize = document.getElementById("size");
    var turbo = document.getElementById("turbo");
    var textArea = document.getElementById("textarea");
    animation.onchange = displayFirstAnimation;
    start.onclick = startAnimation;
    stop.onclick = stopAnimation;
    fontsize.onchange = changeFontSize;
    turbo.onchange = turboSpeed;
};