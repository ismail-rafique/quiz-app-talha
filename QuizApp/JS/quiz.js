var time =  document.getElementById("timer");
var ques = document.getElementById("quest");
var option = (document.getElementById("divquest")).getElementsByTagName("span");
var next = document.getElementById("next");
var counter = 0;

var quiz = [
    {
        question : "A discount of 15 percent from a marked price produces a net price which is what percent of the marked price.",
        option : [
                {
                    ans: "0.15%",
                    correct: false
                },
                {
                    ans: "0.85%",
                    correct: false
                },
                {
                    ans: "85%",
                    correct: true
                },
                {
                    ans: "115%",
                    correct: false
                }
        ]
    },
    {
        question : "Twenty students have each sampled one or more of three kinds of candy bars that a school store sells. If 3 students have sampled all three kinds, and 5 have sampled exactly two kinds, how many of these students have sampled only one kind?",
        option : [
                {
                    ans: "8",
                    correct: false
                },
                {
                    ans: "12",
                    correct: true
                },
                {
                    ans: "15",
                    correct: false
                },
                {
                    ans: "17",
                    correct: false
                }
        ]
    },
    {
        question : "Napoleon Bonapart was the king of:",
        option : [
                {
                    ans: "France",
                    correct: true
                },
                {
                    ans: "England",
                    correct: false
                },
                {
                    ans: "Italy",
                    correct: false
                },
                {
                    ans: "Germany",
                    correct: false
                }
        ]
    },
    {
        question : "What is 15% of 32?",
        option : [
                {
                    ans: "4",
                    correct: false
                },
                {
                    ans: "3.50",
                    correct: false
                },
                {
                    ans: "3.80",
                    correct: false
                },
                {
                    ans: "4.80",
                    correct: true
                }
        ]
    },
    {
        question : "5 is to 7 as x is to 35. x =?",
        option : [
                {
                    ans: "7",
                    correct: false
                },
                {
                    ans: "12",
                    correct: false
                },
                {
                    ans: "25",
                    correct: true
                },
                {
                    ans: "49",
                    correct: false
                }
        ]
    },
    {
        question : "The capital of Australia is?",
        option : [
                {
                    ans: "Melbourne",
                    correct: false
                },
                {
                    ans: "Sydney",
                    correct: false
                },
                {
                    ans: "Canberra",
                    correct: true
                },
                {
                    ans: "None of the above",
                    correct: false
                }
        ]
    },
    {
        question : "During a certain week, a post office sold Rs.280 worth of 14-paisas stamps. How many of these stamps did they sell?",
        option : [
                {
                    ans: "2,000",
                    correct: true
                },
                {
                    ans: "3,900",
                    correct: false
                },
                {
                    ans: "20,000",
                    correct: false
                },
                {
                    ans: "39,200",
                    correct: false
                }
        ]
    },
   
    {
        question : "What was the original price of an item if a discount of 20 percent reduced the price to Rs.100?",
        option : [
                {
                    ans: "120",
                    correct: false
                },
                {
                    ans: "125",
                    correct: true
                },
                {
                    ans: "150",
                    correct: false
                },
                {
                    ans: "175",
                    correct: false
                }
        ]
    },
    {
        question : "What is 5% of 20%?",
        option : [
                {
                    ans: "10%",
                    correct: false
                },
                {
                    ans: "15%",
                    correct: false
                },
                {
                    ans: "1%",
                    correct: true
                },
                {
                    ans: "5%",
                    correct: false
                }
        ]
    },
    {
        question : "In a basket containing 180 apples, 9 are spoiled. What percent of the apples in the basket are not spoiled?",
        option : [
                {
                    ans: "85%",
                    correct: false
                },
                {
                    ans: "90%",
                    correct: false
                },
                {
                    ans: "95%",
                    correct: true
                },
                {
                    ans: "75%",
                    correct: false
                }
        ]
    },
    {
        question : "The number missing in the series 2, 6, 12, 20, ?, 42, 56, 72 is:",
        option : [
                {
                    ans: "24)",
                    correct: false
                },
                {
                    ans: "38",
                    correct: false
                },
                {
                    ans: "30",
                    correct: true
                },
                {
                    ans: "36",
                    correct: false
                }
        ]
    },
    {
        question : "What number comes next in this sequence? 25, 32, 27, 36, ?",
        
        option : [
                {
                    ans: "39",
                    correct: false
                },
                {
                    ans: "27",
                    correct: true
                },
                {
                    ans: "29",
                    correct: false
                },
                {
                    ans: "34",
                    correct: false
                }
        ]
    }
];

startTimer();
takeQuiz();

function takeQuiz() {
    if(counter < quiz.length) {
        ques.innerHTML = quiz[counter].question;
        
        for(var i = 0; i<option.length; i++) {
            option[i].innerHTML = '<input type="radio" class="option" name="option">' + (quiz[counter].option[i].ans);
        }
    }
    else {
        result();
    }
}

next.addEventListener("click", function(){
    for(var i = 0; i<option.length; i++) {
        if(option[i].childNodes[0].checked) {
            score();
            counter++;
            takeQuiz();
            break;
        }
    }
});

var second = 0, minute = 20;
function timer() {
    if(second == 0) {
        second = 59
        minute--;
    }
    else {
        second--;
    }

    time.innerHTML = ((minute > 9 ? minute : "0" + minute) + ":" + (second > 9 ? second : "0" + second));

    if(minute === 0 && second === 0){
        result();
    }
}

function startTimer() {
    setInterval(timer, 1000);
}

var score = 0;
function score() {
    for(var i = 0; i<option.length; i++) {
        if(option[i].childNodes[0].checked) {
            if(quiz[counter].option[i].correct) { 
                score += (100 / quiz.length);
            }
            break;
        }
    }
}

function result() {
    localStorage.setItem('score', score);
    window.location = 'result.html';
}
