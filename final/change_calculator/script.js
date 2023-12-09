const dollarColumn = document.getElementById("dollar")
const quarterColumn = document.getElementById("quarter")
const dimeColumn = document.getElementById("dime")
const nickelColumn = document.getElementById("nickel")
const pennyColumn = document.getElementById("penny")
const changeInput = document.getElementById("change")
const result = document.getElementById("result")

function countChange() {
  const change = parseInt(changeInput.value)

  if (!requireNumber(change, "Change")) return

  let moneyleft = change
  const dollar = Math.floor(moneyleft / 100)
  moneyleft = moneyleft % 100
  const quarter =  Math.floor(moneyleft / 25)
  moneyleft = moneyleft % 25 
  const dime =  Math.floor(moneyleft / 10)
  moneyleft = moneyleft % 10 
  const nickel =  Math.floor(moneyleft / 5)
  moneyleft = moneyleft % 5
  const penny =  Math.floor(moneyleft / 1)

  dollarColumn.innerHTML = dollar
  quarterColumn.innerHTML = quarter
  dimeColumn.innerHTML = dime
  nickelColumn.innerHTML = nickel
  pennyColumn.innerHTML = penny

  result.style.display = "block"
}

function requireNumber(num, name) {
  if (isNaN(num) || num < 0){
    alert(`"${name}" input is invalid. Enter a number Greater than zero`);
    return false
  }
  return true
}