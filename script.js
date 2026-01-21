const carousel = document.querySelector('.carousel3d-container');
const images = document.querySelectorAll('.carousel3d-container img');
const numImages = images.length; // automatically counts images
let angle = 0;

// Arrange images in a circle
images.forEach((img, i) => {
    img.style.transform = `rotateY(${i * (360 / numImages)}deg) translateZ(400px)`;
});

// Rotate the carousel continuously
setInterval(() => {
    angle += 360 / numImages; // 360° divided by total images
    carousel.style.transform = `rotateY(${angle}deg)`;
}, 3000);
// FORM VALIDATION
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            let errors = [];

            if (document.getElementById("name").value.trim() === "") {
                errors.push("Please enter your name.");
            }
            if (document.getElementById("email").value.trim() === "") {
                errors.push("Please enter your email.");
            }
            if (document.getElementById("message").value.trim() === "") {
                errors.push("Please enter your message.");
            }

            if (errors.length > 0) {
                e.preventDefault();
                alert(errors.join("\n"));
            }
        });
    }
});

// QUIZ FUNCTION
const correctAnswers = {
        1: "Skopje",
        2: "Southern Europe (Balkans)",
        3: "Macedonian",
        4:  "Denar",
        5: "Croatia"
    };

const totalQuestions = Object.keys(correctAnswers).length;

let score = 0;
let answeredQuestions = 0;

function checkAnswer(questionNumber, answer) {
    

    
    const result = document.getElementById("result" + questionNumber);
    const scoreDisplay = document.getElementById("score");
    const progressDisplay = document.getElementById("progress");

    //If answered, STOP!
    if (!result || result.dataset.answered === "true") return;

    // Mark as answered
    result.dataset.answered = "true";
    answeredQuestions++;

    // Check answer
    if (answer === correctAnswers[questionNumber]) {
        result.textContent = "Correct!";
        result.style.color = "green"
        score++;
        scoreDisplay.textContent = score;
    } else {
        result.textContent = "Wrong!";
        result.style.color = "red"
    }

     // Update progress
    progressDisplay.textContent = `${answeredQuestions} / ${totalQuestions}`;

     // Disable buttons for this question
    disableQuestionButtons(questionNumber);

 

}
   // Disable all buttons for a specific question
function disableQuestionButtons(questionNumber) {
    const buttons = document.querySelectorAll(
        `button[onclick^="checkAnswer(${questionNumber},"]`
    );

    buttons.forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = "0.6";
        btn.style.cursor = "not-allowed";
    });
}