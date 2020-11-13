var question = document.getElementById("question");
var question_type = document.getElementById("question_type");
var num = document.getElementById("num");
var container = document.getElementById("container");
var quiz_page = document.getElementById("quiz_page");
var result_page = document.getElementById("result_page");
var progress_bar = document.getElementById("progress_bar");
var score_box = document.getElementById("score_box");

//gobal variables
var correct_ans;
var correct_ans_element_id;

var difficulty = localStorage.getItem("difficulty");
if (difficulty == null) {
  difficulty = "easy";
  localStorage.setItem("difficulty", "easy");
}
var score = 0;
var score_ele = document.getElementById("score_ele");
var high_score = localStorage.getItem("high_score");
if (high_score == null) {
  localStorage.setItem("high_score", "0");
  high_score = localStorage.getItem("high_score");
}

var url =
  "https://opentdb.com/api.php?amount=10&encode=url3986&difficulty=" +
  difficulty;

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    start(data);
  });

function start(data) {
  if (data.response_code == 0) {
    var x = 1;

    load(data.results[0], 0);

    setInterval(function () {
      if (x < data.results.length) {
        load(data.results[x], x);
      } else return;
      x++;
    }, 10000);
  } else {
    console.log("ERROR");
  }
}

function load(data, index) {
  // setting question cateory
  question_type.textContent = decodeURIComponent(data.category);
  // setting question
  question.textContent = decodeURIComponent(data.question);
  // setting question number
  num.textContent = index + 1;
  // clearing the container
  container.innerHTML = "";
  // loop over each option and create element to append in container
  // add correct answer to the option list
  correct_ans = decodeURIComponent(data.correct_answer);
  data.incorrect_answers.push(data.correct_answer);
  shuffle(data.incorrect_answers);
  data.incorrect_answers.forEach((element, index) => {
    put_option(element, index);
  });
  var ele = document.getElementById("question_card");
  var fontSize = 35;
  ele.style.fontSize = fontSize + "px";
  for (var x = fontSize; x >= 0; x--) {
    var overflow = isOverflown(ele);
    if (overflow) {
      fontSize--;
      ele.style.fontSize = fontSize + "px";
    }
  }
  if (num.textContent == 10) {
    setTimeout(function () {
      quiz_page.style.display = "none";
      result_page.innerHTML =
        "<p id='res'>You scored <p id='result_score'>" + score + "</p></p>";
      score_box.style.display = "none";
      result_page.style.display = "flex";
    }, 10000);
  }
  progress_bar.classList.remove("animate");
  progress_bar.classList.add("animate");

  addListeners();
}

function isOverflown(element) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

function put_option(element, index) {
  document.getElementById("bottom").style.backgroundColor = "#0A0B0B";
  letters = ["a", "b", "c", "d"];
  // checkbox
  var ele_checkbox = document.createElement("input");
  ele_checkbox.type = "checkbox";
  // id
  ele_checkbox.id = "option_" + letters[index];
  //class
  ele_checkbox.className = "quiz_option";
  // data-attr
  ele_checkbox.setAttribute("data-option-value", decodeURIComponent(element));
  // lable
  var ele_label = document.createElement("label");
  ele_label.setAttribute("for", "option_" + letters[index]);
  // span identifier
  var ele_span_identifier = document.createElement("span");
  ele_span_identifier.className = "option_index";
  ele_span_identifier.textContent = letters[index];
  // span option
  var ele_span_option = document.createElement("span");
  ele_span_option.className = "option";
  ele_span_option.textContent = decodeURIComponent(element);
  // appending to lable
  ele_label.appendChild(ele_span_identifier);
  ele_label.appendChild(ele_span_option);
  // appending to container
  container.appendChild(ele_checkbox);
  container.appendChild(ele_label);

  if (decodeURIComponent(element) == correct_ans) {
    correct_ans_element_id = ele_checkbox.id;
  }
}

function check_answer(e) {
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
  }
  if (e == correct_ans) {
    score += 10;
    score_ele.textContent = score;
    if (score > localStorage.getItem("high_score")) {
      localStorage.setItem("high_score", score);
    }
    document.getElementById("bottom").style.backgroundColor = "#34ca62";
    // console.log(e, "is Correct");
  } else {
    document.getElementById("bottom").style.backgroundColor =
      "rgb(224, 57, 57)";
    // console.log(e, "is Wrong");
    document.getElementById(
      correct_ans_element_id
    ).nextSibling.style.backgroundColor = "#34ca62";
    document.getElementById(correct_ans_element_id).nextSibling.style.border =
      "2px solid #34ca62";
  }
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function addListeners() {
  let options = document.querySelectorAll(".quiz_option");
  // console.log(options);

  options.forEach((option) => {
    option.addEventListener("change", () => {
      // console.log(option.getAttribute("data-option-value"));
      check_answer(option.getAttribute("data-option-value"));
    });
  });
}
