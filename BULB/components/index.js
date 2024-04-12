var check = true;
var check = (document.querySelector("button").style.backgroundColor = "green");

function onoff() {
  if (check) {
    check = false;
    document.querySelector("button").innerHTML = "OFF";
    document.querySelector("button").style.backgroundColor = "red";
    document.querySelector("#on").src = "/components/images/bulb_off.png";
    document.querySelector("#on").style.width = "422px";
    document.querySelector("body").style.backgroundColor = "black";
  } else {
    check = true;
    document.querySelector("button").innerHTML = "ON";
    document.querySelector("button").style.backgroundColor = "green";
    document.querySelector("#on").src = "/components/images/bulb_on.png";
    document.querySelector("#on").style.width = "400px";
    document.querySelector("body").style.backgroundColor = "white";
  }

  
}
check.addEventListener("keyup",(event)=>
{  
  if(event.key==="Enter")
  {
    onoff();
  }

});

