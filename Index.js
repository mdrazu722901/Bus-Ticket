const kbdClassElements = document.getElementsByClassName("kbd");

for (const element of kbdClassElements) {
    document.getElementById(element.id).addEventListener("click", function () {
        element.classList.toggle("bg-red-600")
        element.classList.toggle("text-white")


        const check = document.querySelectorAll(".bg-red-600")
        bookingSeat(check)
        selectedSeat(check)
        getOffcer(check)

       const perseatPrice = 550;
       let allseatPrice = 550 * check.length;
       
       let totalPrice = document.getElementById("totolTicketPrice");
       totalPrice.innerText = allseatPrice;
       
    })
}


function bookingSeat(checkSeat) {
    forNextButton(checkSeat.length)
    let selectSeat = document.getElementById("SetBookingCount");
    selectSeat.innerText = checkSeat.length;

    let unSelectSeat = kbdClassElements.length - checkSeat.length;
    let seatsLeft2 = document.getElementById("seatsLeft");
    seatsLeft2.innerText = unSelectSeat;

}


function selectedSeat(selectElements) {
    if (selectElements.length === 4) {
        for (const element of kbdClassElements) {

            if (element.classList.contains("bg-red-600") === false) {

                element.classList.add("btn-disabled")

            }

        }
    }
    else {
        for (const element of kbdClassElements) {

            if (element.classList.contains("bg-red-600") === false) {

                element.classList.remove("btn-disabled")
            }

        }
    }
}
function getOffcer(selectSeat) {
    if (selectSeat.length === 4) {
        const offerCoupnUseBox = document.getElementById("getOfficeInput");
        offerCoupnUseBox.classList.remove("btn-disabled")
    }
    else {
        const offerCoupnUseBox = document.getElementById("getOfficeInput");
        offerCoupnUseBox.classList.add("btn-disabled")
    }
}



function forNextButton(bookingSeatNumber) {
    document.getElementById("Number").addEventListener("keyup", function () {

        let numbers = document.getElementById("Number").value;
        let convertNumber = numbers.toString();

        conditions(convertNumber, bookingSeatNumber)

    })
};

function conditions(convertNumber, bookingSeatNumber) {

    if (convertNumber.length >= 11 && bookingSeatNumber >= 1) {
        let nextButton = document.getElementById("btn-Next");
        nextButton.classList.remove("btn-disabled");
    }
    else {
        let nextButton = document.getElementById("btn-Next");
        nextButton.classList.add("btn-disabled");
    }
}


// =====================
for (const element of kbdClassElements) {
    document.getElementById(element.id).addEventListener("click", function (event) {

        const mainDivOfDetails = document.getElementById("seatdatilsDiv");
        let selectSeatID = element.id;

        element.toggleAttribute("booking");


        if (element.hasAttribute("booking") === true) {
            let createP = document.createElement("p");
            createP.innerText = element.id + "----------------Econome--------------" + 550;
            mainDivOfDetails.appendChild(createP);
            console.log("has a attirbute booking")
            createP.setAttribute("id", element.id)

        }
        else {
            let childElements = mainDivOfDetails.children;
            for (const selectSeatElement of childElements) {
                if (selectSeatElement.id === selectSeatID) {
                    console.log(selectSeatElement);
                    selectSeatElement.remove();
                }
            }
        }

    })
}