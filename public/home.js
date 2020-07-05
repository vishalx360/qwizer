var difficulty;
var form_select = document.getElementById('select')
var form = document.getElementById("config")
var high_score_box = document.getElementById("high_score_box")

localStorage.setItem("difficulty", "easy")


form.addEventListener("submit", function(e) {
    e.preventDefault()
})

form_select.addEventListener('change', function(e) {
    console.log(e.target.value);
    localStorage.setItem("difficulty", e.target.value)
});

var high_score = localStorage.getItem("high_score")
if (high_score == null) {
    localStorage.setItem("high_score", "0")
    high_score = localStorage.getItem("high_score")
}

document.getElementById("score_ele").textContent = high_score