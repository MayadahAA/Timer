const el = document.querySelector(".clock");
const mindiv = document.querySelector(".mins");
const secdiv = document.querySelector(".secs");
const startbtn = document.querySelector(".start");

localStorage.setItem("btn", "focus");

let initial, totalsecs, perc, paused, mins, seconds;

startbtn.addEventListener("click", () => {
    let btn = localStorage.getItem("btn");
  
    if (btn === "focus") {
      mins = +localStorage.getItem("focusTime") || 1;
    } else {
      mins = +localStorage.getItem("breakTime") || 1;
    }
  
    seconds = mins * 60;
    totalsecs = mins * 60;
    setTimeout(decremenT(), 60);
    startbtn.style.transform = "scale(0)";
    paused = false;
  });
  
  function decremenT() {
    mindiv.textContent = Math.floor(seconds / 60);
    secdiv.textContent = seconds % 60 ;

    if (seconds > 0) {
        seconds--;
        initial = window.setTimeout("decremenT()", 1000);
     } else {
        mins = 0;
        seconds = 0;
        let btn = localStorage.getItem("btn");

        if (btn === "focus") {
            startbtn.textContent = "start break";
            startbtn.classList.add("break");
            localStorage.setItem("btn", "break");
        } else {
            startbtn.classList.remove("break");
            startbtn.textContent = "start focus";
            localStorage.setItem("btn", "focus");
        }
        startbtn.style.transform = "scale(1)";
        }
    }