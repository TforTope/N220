var count = 1

function flipCoin() {
  const number = Math.floor(Math.random() * 2);
  displayImage(number)
  const flip = number === 0 ? "Heads" : "Tail";
  addRow(count, flip)
  count++
}

function addRow(number, fiip) {
  var tbody = document.getElementById('tbody');
  var row = document.createElement('tr');
  var countCell = document.createElement('td');
  countCell.textContent = number;
  var filpCell = document.createElement('td');
  filpCell.textContent = fiip;
  row.appendChild(countCell);
  row.appendChild(filpCell);
  tbody.appendChild(row);
}

function displayImage(number) {
  var tail = document.getElementById('tail');
  var head = document.getElementById('head');
  if (number === 0) {
    head.style.display = 'block';
    tail.style.display = 'none';
  } else {
    head.style.display = 'none';
    tail.style.display = 'block';
  }
}