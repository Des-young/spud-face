window.addEventListener("DOMContentLoaded", (event) => {

    let title = document.querySelector('#title');
    let firstName = document.querySelector('#first-name');
    let lastName = document.querySelector('#last-name');
    let eyeColor = document.querySelector('#eye-color');
    let height = document.querySelector('#height');
    let licenseNum = document.querySelector('#license-num');
    let licenseConfirm = document.querySelector('#license-num-confirm');

    let donorStatus = document.querySelector('#donor-status');

    let submit = document.querySelector('button');
    let count = 0;

  // ** Phase 1B: Update license with event delegation and event.target **

  submit.addEventListener('click', (event) => {
    event.preventDefault();

  let licenseTitle = document.querySelector('#card-title');
  licenseTitle.innerText = title.value;

  let licenseFName = document.querySelector('#card-first-name');
  licenseFName.innerText = firstName.value;

  let licenseLName = document.querySelector('#card-last-name');
  licenseLName.innerText = lastName.value;

  let licenseEyeColor = document.querySelector('#card-eye-color');
  licenseEyeColor.innerText = eyeColor.value;

  let licenseHeight = document.querySelector('#card-height');
  licenseHeight.innerText = height.value;

  let cardNum = document.querySelector('#card-license-num');
  cardNum.innerText = licenseNum.value;

  let cardStatus = document.querySelector('#card-donor-status');
  cardStatus.innerText = "COME BACK TO THIS LATER"


  if(donorStatus.checked){
      cardStatus.innerText = "Yes"
  } else{
     cardStatus.innerText = "No"
  }

  count++;
  submit.innerHTML = `Submitted ${count} times.`
  });

  // ** Phase 2: Add focus and blur events to form inputs **

  let licenseForm = document.getElementById('drivers-license-form'); // storing the form section as a variable

  licenseForm.addEventListener("focus", (event) => {
    event.target.style.backgroundColor = "lightgreen";
}, true);

  licenseForm.addEventListener("blur", (event) => {

      // if(event.target === licenseConfirm){
      //   if(licenseNum.value !== licenseConfirm.value){
      //   licenseNum.stlye.backgroundColor = 'lightcoral';
      //   licenseConfirm.style.backgroundColor = 'lightcoral';
      //   }
      // } else {
      event.target.style.backgroundColor = "";
      // }
  }, true);

  // ** Phase 3: Check that license numbers match **

  licenseConfirm.addEventListener('blur', (event) => {
    if(licenseNum.value !== licenseConfirm.value){
        licenseNum.style.backgroundColor = 'lightcoral';
        licenseConfirm.style.backgroundColor = 'lightcoral';
    }
  }, true);

  // ** Phase 4: Update submit button click count **
  // })
  // let count = 0;
  // submit.addEventListener('click', event => {
  //   event.preventDefault();
  //   count++;
  //   submit.innerHTML = `Submitted ${count} times.`
  // })




});
