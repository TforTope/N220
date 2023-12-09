const gradingScale = ["A", 90, 100, "B", 80, 89, "C", 70, 79, "D", 60, 69, "F", 59, "lower"];
const tbody = document.getElementById('tbody');
var rows = []
const maxGrade = 500

function calculate() {
  const grade = parseInt(document.getElementById("grade").value)
  if (!requireNumber(grade, "grade")) return
  const ulList = document.getElementById("ul-list")
  const precentage = grade / maxGrade * 100.0

  const inputString = `<li>Input: ${grade}</li>`
  const resultString = `<li>Result: Grade Average: ${precentage}%</li>`
  ulList.innerHTML = inputString + resultString

  createGradeTable(precentage)
}

function createGradeTable(precentage) {
  const result = document.getElementById("result")
  for (const row of rows) {
    tbody.removeChild(row)
  }
  rows = []
  for (let index = 0; index < gradingScale.length; index+=3) {
    const grade = gradingScale[index]
    const min = gradingScale[index + 1]
    const max =gradingScale[index + 2]
    const minScore = max == "lower" ? 0 : min
    const maxScore = max == "lower" ? min : max

    const row = document.createElement('tr');
    rows.push(row);
    const gradeCell = document.createElement('td');
    gradeCell.textContent = grade;
    const scaleCell = document.createElement('td');
    scaleCell.textContent = `${min}-${max}`;
    row.appendChild(gradeCell);
    row.appendChild(scaleCell);
    tbody.appendChild(row);
    if(precentage >= minScore && precentage <= maxScore) {
      row.style.background = "crimson"
    }
  }
  result.style.display = "block"
}

function requireNumber(num, name) {
  if (isNaN(num) || num < 0 || num > maxGrade) {
    alert(`${name} input is invalid. Enter a number between 0 and ${maxGrade}`);
    return false
  }
  return true
}
