const result = document.getElementById("result")
const ulList = document.getElementById("ul-list")

function getName() {
  const originalFirstName = document.getElementById("firstName").value.trim()
  const originalLastName = document.getElementById("lastName").value.trim()

  if (!requireName(originalFirstName, "First name")) return false
  if (!requireName(originalLastName, "Last name")) return false

  const firstName = capitalizeFirstLetter(originalFirstName)
  const lastName = capitalizeFirstLetter(originalLastName)

  const pigLatinFirstName = pigLatin(originalFirstName)
  const pigLatinLastName = pigLatin(originalLastName)
  
  const inputString = `<li>Input: ${firstName} ${lastName}</li>`
  const resultString = `<li>Your pig latin name is ${pigLatinFirstName} ${pigLatinLastName}.</li>`

  ulList.innerHTML = inputString + resultString

  result.style.display = "block"
}

function capitalizeFirstLetter(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

function pigLatin(name) {
  const pigLatinName = name.slice(1) + name.charAt(0) + "ay"
  return capitalizeFirstLetter(pigLatinName)
}

function requireName(value, name) {
  if (value.length == 0) {
    alert(`"${name}" input is invalid. Enter a name`);
    return false
  }
  return true
}