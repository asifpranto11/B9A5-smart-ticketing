
 function changeBackgroundColor(buttonId) {
    const sitButton = document.getElementById(buttonId);
    sitButton.style.backgroundColor = 'green'; 
    

    

   
      
    
}
//seat count
const allBtn=document.getElementsByClassName('button')
let count = 0;
let nextSeatToUpdate = 'seat-booking-one'; // Track which seat to update next
let totalPrice = 0;
let seatLeft = 40;
let grandTotal= 0;

for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        count = count + 1;
        totalPrice =  count*550;
        seatLeft = seatLeft -1;
        grandTotal =totalPrice ;


        const seatName = e.target.innerText;

        // Update the inner text of the seat booking elements in order
        if (nextSeatToUpdate === 'seat-booking-one') {
            setInnerText('seat-booking-one', seatName);
            nextSeatToUpdate = 'seat-booking-two'; // Update the next seat to be booked
        } else if (nextSeatToUpdate === 'seat-booking-two') {
            setInnerText('seat-booking-two', seatName);
            nextSeatToUpdate = 'seat-booking-one'; // Reset to the first seat for the next booking
        }


        
       
        setInnerText('grand-total', grandTotal);
        setInnerText('seat-count', count);
        setInnerText('total-price',totalPrice);
        setInnerText('seat-left',seatLeft)


    });
}


function setInnerText(id,value){
    document.getElementById(id).innerText = value; 
}


 