function toggleClass(){
    document.getElementById('nav-menu').classList.toggle('open');
}

function checkQuiz() {

var answersCorrect = 0;
  
    for(var i = 1; i <= 3; i++) {
        var quizRef = document.getElementsByName('question'+i);
    
    for (var j = 0; j < quizRef.length; j++) {
        var quizValue = quizRef[j];
        if (quizValue.checked) {
        if (quizValue.value == "correct") {
            answersCorrect++;
            } 
        } 
    }
}

  document.getElementById('results').innerHTML =
  "Correct Answers: " + answersCorrect + "/3";
}

