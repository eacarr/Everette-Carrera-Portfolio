const retreveBoard = async () => {
  const board = await fetch("js/board.json");
  const boardData = await board.json();
  fillBoard(boardData);
};
retreveBoard();

const fillBoard = (boardData) => {
  boardData.forEach((data) => {
    Object.values(data).forEach((arr) => {
      displayBoard(arr);
    });
  });
};

const displayBoard = (arr) => {
  arr.forEach((e) => {
    let html = `
          <tr> 
           <td>${e[0]}</td> 
           <td>${e[1]}</td> 
           <td>${e[2]}</td> 
           <td>${e[3]}</td> 
           <td>${e[4]}</td> 
           <td>${e[5]}</td> 
           <td>${e[6]}</td> 
           <td>${e[7]}</td> 
           <td>${e[8]}</td> 
          </tr> `;
    document.querySelector("tbody").insertAdjacentHTML("beforeend", html);
    letterClasses(e);
  });
};

////////////Add id's for padding///////////////

const letterClasses = (e) => {
  e.forEach((char) => {
    if (/[a-zA-Z]/.test(char)) {
      checkTableData(char);
      // console.log(char);
    }
  });
};

const checkTableData = (char) => {
  const tds = document.querySelectorAll("td");
  tds.forEach((td) => {
    if (td.innerHTML === char) {
      td.classList.add("letter", "pulse");
      if (char === "'m") {
        td.setAttribute("id", "m");
      } else if (char === "I") {
        td.setAttribute("id", "i");
      }
      // console.log(td);
    }
  });
};

///////////////clear form after submit/////////

// const inputs = document.querySelectorAll("input");
// const submit = document.querySelector("button");

// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   inputs.forEach((input) => (input.value = ""));
//   document.querySelector("textarea").value = "";
// });

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
