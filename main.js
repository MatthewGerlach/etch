// Create two ids to hold the default(main) grid and the rainbow grid
const container = document.querySelector("#container");
const container2 = document.querySelector("#container2");

// Create function to create 256 square divs in the default grid that
// turn black when mouseover occurs; Append to the container
function mainGrid() {
    for(let i = 0; i < 256; i++) {
        const squares = document.createElement("div"); 
        squares.classList.add("squares");
        squares.addEventListener("mouseover", () => {
            squares.style.backgroundColor = "black";
          })
        container.appendChild(squares);
    }
} console.log(mainGrid());

// Create function to create 256 square divs in the rainbow grid that
// turn a random color when mouseover occurs; Append to container2
function rainbowGrid() {
    for(let i = 0; i < 256; i++) {
        const squares = document.createElement("div"); 
        squares.classList.add("squares");
        container2.appendChild(squares);
        squares.addEventListener("mouseover", () => {
        const setColor = () => {
            const randomColor = Math.floor(Math.random()* 3750).toString(16);
            squares.style.backgroundColor = "#" + randomColor;
          }
          squares.addEventListener("mouseover", setColor);
          setColor();
    })
}
}

// Create function to call within the clear grid button that returns
// a blank version of the main grid when clicked
function clearGrid() {
    container.textContent = "";
    container2.textContent = "";
    mainGrid();
}

// Create function to call within the go rainbow button that returns
// a blank version of the rainbow grid when clicked
function goRainbow() {
    container.textContent = "";
    container2.textContent = "";
    rainbowGrid();
}

    const button = document.querySelector(".button");
    button.addEventListener("click", () => {
        clearGrid();
        })    

    const button2 = document.querySelector(".button2");
    button2.addEventListener("click", () => {
        goRainbow();
        })  
        
    const button3 = document.querySelector(".button3");
    button3.addEventListener("click", () => {
        clearGrid();
        })    





 






