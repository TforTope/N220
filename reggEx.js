let stringText = document.getElementById('string');
let zipText = document.getElementById('zip');
let ccText = document.getElementById('ccard');
let phoneText = document.getElementById('phone');

// String
function validateString() {
    let vs1=/ralph/i;
    let vs2=/^cat/;
    let stringVal = stringText.value;
    console.log(stringVal);

    document.getElementById('stringAns').innerHTML = vs2.test(stringVal);
}

stringText.addEventListener('blur', validateString);

//Zip Code 
function validateZip() {
    let zipVal =zipText.value;
    let vz1=/^([0-9]{5})([0-9]{4})?$/;
    
    document.getElementById('zipAns').innerHTML = vz1.test(zipVal)
}

zipText.addEventListener('blur', validateZip);

function validateCCard() {
    let ccVal = ccText.value; 
    let vc1 = /^(\d{4})([- ]?)(\d{4})([- ]?)(\d{4})([- ]?)(\d{4})$/;    

    document.getElementById('ccAns').innerHTML = vc1.test(ccVal);
}
ccText.addEventListener('blur', validateCCard); 