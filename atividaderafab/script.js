
function personalizeName() {
    document.getElementById("greetingsMessage").textContent = "Welcome to the Whale Quiz, " + prompt("Please enter your name:") + "!";
}

function sendFeedback() {
    let comment = document.getElementById("comment");
    let feedBack = comment.value;

    document.getElementById("feedbackMessage").textContent = "Feedback successfully sent! Thank you for your input: " + feedBack;
}