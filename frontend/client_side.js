var url = "http://localhost:3000";

// function to check booking availability
//pre condition : button is clicked
//postcondition : returns 'Reservation Confirmed' if table is available otherwise 'Reservation Unavailable'.

function pop(){
    let numPeople = document.getElementById("numPeople").value;
    let bookingDate = document.getElementById("bookingDate").value;
    let time = document.getElementById("time").value;
    $.post(
        url+'/reservation?data='+JSON.stringify({
         'numPeople': numPeople,
         'bookingDate': bookingDate,
         'time': time,
        }),
        clientResponse
    );
}

function clientResponse(data){
    alert(data);
}


document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("bgVideo");
    video.play();
  
    var popup = document.getElementById("popup");
    var closeButton = document.querySelector(".close");
  
    popup.style.display = "block";
  
    closeButton.addEventListener("click", function() {
        popup.style.display = "none";
    });
  
    var reservationButton = document.getElementById("reservationButton");
    reservationButton.addEventListener("click", function() {
        window.location.href = "reservation.html";
    });
  });


  //function to subscribe for updates
  //precondition : input is an email ID when button is clicked.
  //post condition : subscription pop up is triggered and email ID is added to subscription list.
  
function returnText(){
    swal("Thank You For Subscribing!", "You will now receive Code and Cuisine's latest news, updates, and special offers.", "success");
    var email = document.getElementsByClassName("emailinput")[0].value;
    console.log(email);
    $.post(
        url+'/subscribe?data='+JSON.stringify(email),
    );
}

