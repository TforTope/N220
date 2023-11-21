

let zipText = document.getElementById('zip');
let zipAns = document.getElementById('zipAns')

let ccText = document.getElementById('ccard');
let ccAns = document.getElementById('ccAns')

let phoneText = document.getElementById('phone');
let phoneAns = document.getElementById('phoneAns');

function validateZip() {
    let zipVal =zipText.value;
    let vz1=/^\d{5}([ -]?\d{4})?$/;

    zipAns.innerHTML = vz1.test(zipVal)
}
zipText.addEventListener('input', validateZip);

function validateCCard() {
    let ccVal = ccText.value; 
    let vc1 = /^((\d{4}(-\d{4}){3})|(\d{4}(\s\d{4}){3}))|(\d{16})$/;

    ccAns.innerHTML = vc1.test(ccVal);
}
ccText.addEventListener('input', validateCCard);

function validatePhoneNumber() {
  let phoneNumberVal = phoneText.value; 
  let vp1 = /^(\(\d{3}\)\s?\d{3}-|\d{3}(-\d{3}-|\.\d{3}\.|\d{3}))\d{4}$/;

  phoneAns.innerHTML = vp1.test(phoneNumberVal);
}
phoneText.addEventListener('input', validatePhoneNumber);