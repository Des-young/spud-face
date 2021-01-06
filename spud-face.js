window.addEventListener("DOMContentLoaded", (event) => {

    let title = document.querySelector('#title');
    let firstName = document.querySelector('#first-name');
    let lastName = document.querySelector('#last-name');
    let eyeColor = document.querySelector('#eye-color');
    let height = document.querySelector('#height');
    let licenseNum = document.querySelector('#license-num');
    let licenseConfirm = document.querySelector('#license-num-confirm');

    let donorStatus = document.querySelector('#donor-status');

    let submit = document.querySelector('#button');


  // ** Phase 1B: Update license with event delegation and event.target ** 

  let licenseTitle = document.querySelector('#card-title');
  licenseTitle.innerText = title.value;

  let licenseFName = document.querySelector('#card-first-name');
  licenseFName.innerText = firstName.value;





  // ** Phase 2: Add focus and blur events to form inputs **
 

  // ** Phase 3: Check that license numbers match **
 

  // ** Phase 4: Update submit button click count **

 
});