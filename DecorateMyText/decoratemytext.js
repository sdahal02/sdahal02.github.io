

function setTimer() {
    setInterval(biggerDecorations, 3000);

}
function biggerDecorations() {
    // alert("Hello World");
    // document.getElementById("inputTextArea").style.fontSize = "24px";

    var text = document.getElementById("inputTextArea");
    var size = window.getComputedStyle(text).fontSize;
    size = parseInt(size);
    size = size + 2;
    text.style.fontSize = size + "pt";
    //console.log("font size  " + size);
    //setInterval(biggerDecorations(), 500);
}


function blingCheckbox(checkbox) {
    var text = document.getElementById("inputTextArea").style;
    if (checkbox.checked) {
        text.fontWeight = "bold";
        text.color = "green";
        text.textDecoration = "underline";
        document.body.style.background = "#f3f3f3 url('https://courses.cs.washington.edu/courses/cse190m/12su/labs/6/hundred-dollar-bill.jpg')  no-repeat right top";


    } else {
        text.fontWeight = "normal";
        text.color = "black";
        text.textDecoration = "none";
        document.body.style.background = "none";
    }

}

function malkovitch() {
    var text = document.getElementById("inputTextArea");
    var size = text.value.length;
    if (size > 4) {
        text.value = "Malkovitch";
    }

}