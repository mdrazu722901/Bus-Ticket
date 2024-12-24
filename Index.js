const kbdClassElements = document.getElementsByClassName("kbd");
for (const element of kbdClassElements) {
    document.getElementById(element.id).addEventListener("click", function () {
        element.classList.toggle("bg-red-600")
        element.classList.toggle("text-white")
        
        const check = document.querySelectorAll(".bg-red-600")
        console.log(check.length)
       bookingSeat(check)

    })
   
}


function bookingSeat(checkSeat){
   let selectSeat = document.getElementById("SetBookingCount");
   selectSeat.innerText = checkSeat.length;
   for (const element of checkSeat) {
    console.log(element.id);
   }
   let PastSelect = checkSeat[0];
   let secondSelect = checkSeat[1];
   let thirdSelect = checkSeat[2];
   let fourthSelect = checkSeat[3];
   const parentDiv = document.getElementById("seatdatilsDiv");
   if(PastSelect =! undefined){
    
   }

}