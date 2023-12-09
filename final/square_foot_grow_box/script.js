function calculate() {
  const width = parseFloat(document.getElementById("width").value)
  const height = parseFloat(document.getElementById("height").value)

  if (!requireNumber(width, "Width")) return
  if (!requireNumber(height, "Height")) return

  const ulList = document.getElementById("ul-list")
  const rectangle = document.getElementById("rectangle")
  const result = document.getElementById("result")

  const area = width * height

  const inputString = `<li>Input: ${width} width ${height} height</li>`
  const resultString = `<li>Result: ${area} square feet</li>`
  ulList.innerHTML = inputString + resultString

  rectangle.style.width = width * 10  + 'px';
  rectangle.style.height = height * 10 + 'px';
  result.style.display = "block"
}

function requireNumber(num, name) {
  if (isNaN(num) || num < 0){
    alert(`"${name}" input is invalid. Enter a number Greater than zero`);
    return false
  }
  return true
}