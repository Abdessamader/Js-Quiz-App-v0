const highScoresList = document.querySelector("#highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

console.log(highScores);

if(highScoresList){

highScoresList.innerHTML = highScores
  .map((score) => {
    return `<li class='high-score'>${score.name} - ${score.score}</li>`;
  })
  .join("");}

function deleteScores() {
  localStorage.clear();
  location.reload();
}
