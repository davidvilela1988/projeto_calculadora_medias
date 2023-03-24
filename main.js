const form = document.getElementById("form-activity");

const imgApproved =
  '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgDisapproved =
  '<img src="./images/reprovado.png" alt="Emoji decepcionado" />';
const activities = [];
const scores = [];
const spanApproved = '<span class="approved result"> Aprovado</span>';
const spanDisapproved = '<span class="disapproved result"> Reprovado</span>';
const scoreMinimum = parseFloat(prompt("Digite a nota mínima:"));

let lines = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  addLine();
  updateTable();
  updateFinalMedia();
});

function addLine() {
  const inputNameActivity = document.getElementById("name-activity");
  const inputScoreActivity = document.getElementById("score-activity");

  if (activities.includes(inputNameActivity.value)) {
    alert(`A atividade: ${inputNameActivity.value} já foi inserida`);
  } else {
    activities.push(inputNameActivity.value);
    scores.push(parseFloat(inputScoreActivity.value));

    let line = `<tr>`;
    line += `<td>${inputNameActivity.value}</td>`;
    line += `<td>${inputScoreActivity.value}</td>`;
    line += `<td>${
      inputScoreActivity.value >= 7 ? imgApproved : imgDisapproved
    }</td>`;
    line += `</tr>`;

    lines += line;
  }

  inputNameActivity.value = "";
  inputScoreActivity.value = "";
}

function updateTable() {
  const bodyTable = document.querySelector("tbody");
  bodyTable.innerHTML = lines;
}

function updateFinalMedia() {
  const averageFinal = calculateFinalAverage();

  document.getElementById("final-average-value").innerHTML = averageFinal;
  document.getElementById("result-average-final").innerHTML =
    averageFinal >= scoreMinimum ? spanApproved : spanDisapproved;
}

function calculateFinalAverage() {
  let addScores = 0;

  for (let i = 0; i < scores.length; i++) {
    addScores += scores[i];
  }

  return addScores / scores.length;
}
