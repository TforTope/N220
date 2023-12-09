function calculate() {
  const num1 = parseInt(document.getElementById("num1").value)
  const num2 = parseInt(document.getElementById("num2").value)

  if (!requireNumber(num1, "First number")) return
  if (!requireNumber(num2, "Second number")) return

  const operator = document.getElementById("operator").value
  const ulList = document.getElementById("ul-list")
  const value = getValue(num1, num2, operator)
  const result = document.getElementById("result")

  const inputString = `<li>Input: ${num1}, ${num2} and ${operator}</li>`
  const resultString = `<li>Result: ${num1}${operator}${num2}=${value}</li>`
  ulList.innerHTML = inputString + resultString

  result.style.display = "block"
}

function getValue(num1, num2, operator) {
  if (operator === "+")
    return num1 + num2
  if (operator === "-") 
    return num1 - num2
  if (operator === "/")
    return num1 / num2
  if (operator === "*")
    return num1 * num2
  return num1 + num2
}

function requireNumber(num, name) {
  if (isNaN(num)) {
    alert(`"${name}" input is invalid. Enter a number`);
    return false
  }
  return true
}