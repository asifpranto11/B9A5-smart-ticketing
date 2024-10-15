
function started(){
    hideElementById('home-screen')
    hideElementById('offer-section')
   
  

}


//disabled button

const cuponInput =document.getElementById('cupon-input')
const applyButton =document.getElementById('apply-button')
cuponInput.addEventListener('input', function () {
     
    if (cuponInput.value === 'NEW15') {
        applyButton.disabled = false; 

     

    } 
    
    
    else {
        applyButton.disabled = true;
    }
});























function hideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden');
}