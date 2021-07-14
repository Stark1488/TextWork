const selectableTextArea = document.querySelectorAll("body");
const popupWin = document.querySelector("#twitter");

selectableTextArea.forEach(elem => {
  elem.addEventListener("mouseup", selectableTextAreaMouseUp);
});

document.addEventListener("mousedown", documentMouseDown);

function selectableTextAreaMouseUp(event) {
  setTimeout(() => {
    const selectedText = window.getSelection().toString().trim();
    if(selectedText.length) {
      const x = event.pageX;
      const y = event.pageY;
      const popupWinWidth = Number(getComputedStyle(popupWin).width.slice(0,-2));
      const popupWinHeight = Number(getComputedStyle(popupWin).height.slice(0,-2));

      if(document.activeElement !== popupWin) {
        popupWin.style.left = `${x - popupWinWidth*0.5}px`;
        popupWin.style.top = `${y - popupWinHeight*1.25}px`;
        popupWin.style.display = "block";
      }
      else {
        popupWin.style.left = `${x-popupWinWidth*0.5}px`;
        popupWin.style.top = `${y-popupWinHeight*0.5}px`;
      }
    }
  }, 0);
}

function documentMouseDown(event) {
  if(event.target.id!=="twitter" && getComputedStyle(popupWin).display==="block") {
    popupWin.style.display = "none";
    window.getSelection().empty();
  }
}


function popupWinClick(event) {
  const selectedText = window.getSelection().toString().trim();
}
