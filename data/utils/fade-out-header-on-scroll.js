'use strict'

// Get Scroll Position
let scrolPos = document.getElementById("scrol-pos");

scrolPos.onscroll = function scrolPosAnimation() {
  let scrolPos = scrolPos.scrolTop;
  let header = document.getElementById("backdrop");
  // document.getElementById ("pos").innerHTML = y + "px"

  if (scrolPos > 10) {
    header.classList.remove("black");
  } else {
    header.classList.add("black");
  }
};
