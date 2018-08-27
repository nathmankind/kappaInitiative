function donate() {
    var txt;
    if (confirm("You are about to make a donation")) {
        window.location.href="paymentform.html";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
}