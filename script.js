let quiz = document.querySelector("#question")
let options = document.querySelector("#options")
let next = document.querySelector("#next")
let start = document.querySelector("#start")
let resultBox = document.querySelector("#result")
let scoreText = document.querySelector("#score")
let restart = document.querySelector("#restart")

let index = 0;
let score = 0;

let questions = [
  {
    "question": "What is the difference between Heap and Stack memory in Java?",
    "option": [
      "Heap is used for static memory allocation, Stack for dynamic",
      "Heap stores method calls, Stack stores objects",
      "Heap is for objects, Stack is for method calls and local variables",
      "Stack is faster than Heap for storing objects"
    ],
    "correct": "Heap is for objects, Stack is for method calls and local variables"
  },
  {
    "question": "Which Java feature allows multiple methods to have the same name with different parameters?",
    "option": [
      "Inheritance",
      "Polymorphism",
      "Method Overloading",
      "Encapsulation"
    ],
    "correct": "Method Overloading"
  },
  {
    "question": "What will happen if you try to override a final method in Java?",
    "option": [
      "It will compile and run",
      "The method will be hidden",
      "Compilation error",
      "Runtime exception"
    ],
    "correct": "Compilation error"
  },
  {
    "question": "What is the output of the expression: '3 + 4 + \"Java\" + 5 + 6'?",
    "option": [
      "12Java",
      "7Java56",
      "Java3456",
      "Java12"
    ],
    "correct": "7Java56"
  },
  {
    "question": "Which keyword is used to prevent inheritance of a class in Java?",
    "option": [
      "static",
      "abstract",
      "final",
      "private"
    ],
    "correct": "final"
  },
  {
    "question": "What does the 'volatile' keyword mean in Java?",
    "option": [
      "The variable can be accessed only by one thread",
      "The variable value is cached",
      "The variable is thread-safe and always read from main memory",
      "It makes method synchronized"
    ],
    "correct": "The variable is thread-safe and always read from main memory"
  },
  {
    "question": "Which of these is not a Java Collection class?",
    "option": [
      "HashMap",
      "LinkedList",
      "ArrayList",
      "TreeNode"
    ],
    "correct": "TreeNode"
  },
  {
    "question": "Which testing type verifies the integration of different software modules?",
    "option": [
      "Unit Testing",
      "System Testing",
      "Integration Testing",
      "Regression Testing"
    ],
    "correct": "Integration Testing"
  },
  {
    "question": "Which is NOT a feature of TestNG over JUnit?",
    "option": [
      "Parallel Execution",
      "Annotations",
      "Data-Driven Testing",
      "Assertions"
    ],
    "correct": "Assertions"
  },
  {
    "question": "What is the purpose of Selenium WebDriver?",
    "option": [
      "Automate web-based testing",
      "Test database transactions",
      "Test API endpoints",
      "Monitor server logs"
    ],
    "correct": "Automate web-based testing"
  },
  {
    "question": "Which is the correct annotation for running a test case in TestNG?",
    "option": [
      "@Run",
      "@TestCase",
      "@Test",
      "@Execute"
    ],
    "correct": "@Test"
  },
  {
    "question": "What is the role of the Page Object Model in Selenium?",
    "option": [
      "Organize test suites",
      "Improve test speed",
      "Create reusable element locators",
      "Capture screenshots"
    ],
    "correct": "Create reusable element locators"
  },
  {
    "question": "Which Java class is best suited for reading large files line by line?",
    "option": [
      "BufferedReader",
      "Scanner",
      "InputStream",
      "FileReader"
    ],
    "correct": "BufferedReader"
  },
  {
    "question": "Which of the following is used to throw an exception manually in Java?",
    "option": [
      "throw",
      "throws",
      "try",
      "catch"
    ],
    "correct": "throw"
  },
  {
    "question": "Which method is called when an object is garbage collected in Java?",
    "option": [
      "destroy()",
      "delete()",
      "finalize()",
      "remove()"
    ],
    "correct": "finalize()"
  }
];


function loadQuestion() {
  const q = questions[index];
  quiz.textContent = q.question;
  options.innerHTML = "";

  q.option.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "option-btn";
    btn.onclick = () => {
      if (opt === q.correct) {
         btn.style.backgroundColor = "green";
        score++;
      }
      else{
        btn.style.backgroundColor = "red";
      }
      const allbtn = document.querySelectorAll(".option-btn")
      allbtn.forEach(b=>b.disabled = true)
      setTimeout(() => {
        
      index++;
      index < questions.length ? loadQuestion() : showResult();
      }, 2000);
    };
    options.appendChild(btn);
  });
}

function showResult() {
  document.querySelector("#quiz-box").style.display = "none";
  resultBox.style.display = "block";
  scoreText.textContent = `${score} / ${questions.length}`;
}

start.addEventListener("click", () => {
  start.style.display = "none";
  document.querySelector("#quiz-box").style.display = "block";
  loadQuestion();
});

restart.addEventListener("click", () => {
  index = 0;
  score = 0;
  resultBox.style.display = "none";
  document.querySelector("#quiz-box").style.display = "block";
  loadQuestion();
});
