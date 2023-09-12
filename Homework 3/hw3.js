function calcIntrest() {  
    let principle = parseFloat(document.getElementById('principle').value);
    let rate = parseFloat(document.getElementById('rate').value)
    let time = parseInt(document.getElementById('time').value);
  
    let interest = principle * (rate / 100) * 8
    let grandTotal = (principle * (1 + (rate / 100) * time));
  
    document.getElementById('answer').innerHTML = "With a beginning principal of $" + principle + " and with a growth rate of " + rate + "%  for " + time + " years, your total interest will $" + interest.toFixed(2) + " with a grand total of $" + grandTotal.toFixed(2); 
  } 