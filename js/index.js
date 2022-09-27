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

const checkTableData = (char) => {
  const tds = document.querySelectorAll("td");
  tds.forEach((td) => {
    // console.log(td);
    if (td.innerHTML === char) {
      td.classList.add("letter", "pulse");
    }
  });
};

const letterClasses = (e) => {
  e.forEach((char) => {
    if (/[a-zA-Z]/.test(char)) {
      checkTableData(char);
    }
  });
};

///////////////////////
