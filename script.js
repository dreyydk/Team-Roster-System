function draft() {
  const nameInput = document.getElementById("player-name");
  const positionInput = document.getElementById("player-position");
  const numberInput = document.getElementById("player-number");
  const lineup = document.getElementById("lineup");
  const newUl = document.createElement("ul");
  const nameLi = document.createElement("li");
  const positionLi = document.createElement("li");
  const numberLi = document.createElement("li");
  let confirm = window.confirm("Confirm the draft?");

  if (confirm === true) {
    nameLi.innerText = nameInput.value;
    positionLi.innerText = positionInput.value;
    numberLi.innerText = numberInput.value;

    newUl.appendChild(nameLi);
    newUl.appendChild(positionLi);
    newUl.appendChild(numberLi);

    lineup.appendChild(newUl);
  } else {
    window.alert("Draft canceled.");
  }
}

function remove() {
  const lineup = document.getElementById("lineup");
  const ulList = lineup.getElementsByTagName("ul");
  const selection = window.prompt("Enter the number of the player to remove:");

  if (selection !== null) {
    for (let i = 0; i < ulList.length; i++) {
      const numberLi = ulList[i].getElementsByTagName("li")[2];
      if (numberLi.innerText === selection) {
        lineup.removeChild(ulList[i]);
        window.alert("Player removed.");
      }
    }
  } else {
    window.alert("No players were removed.");
  }
}
