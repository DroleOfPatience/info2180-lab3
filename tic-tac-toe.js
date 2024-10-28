document.addEventListener("DOMContentLoaded", function () {
    // Select all divs inside the game board with a specific selector (assuming they have a specific ID or class)
    const squares = document.querySelectorAll("#board div"); // Adjust selector if needed
    let isX = true;
    const GameSquares = Array(9).fill(null)
    // Loop through each square and add the 'square' class
    
    squares.forEach((square, index) => {
        square.setAttribute("class","square");

        square.addEventListener("click", function(){

        if(!GameSquares[index]){
            GameSquares[index] = isX ? "X":"O";
            square.textContent = GameSquares[index];
            square.setAttribute("class", `square ${GameSquares[index]}`)

            isX = !isX;

        }
        });
        
        square.addEventListener("mouseover", function(){
            square.classList.add("hover")
        });
        
        square.addEventListener("mouseout", function(){
            square.classList.remove("hover")
        });
    });


});
