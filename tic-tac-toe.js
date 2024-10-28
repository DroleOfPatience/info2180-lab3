document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div"); // Adjust selector if needed
    const statusDiv = document.getElementById("status");
    const newGame = document.querySelector(".btn");
    let isX = true;
    const GameSquares = Array(9).fill(null)
    const winS = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    function winCheck(){
        for (const win of winS) {
            const [a, b, c] = win;
            if (GameSquares[a] && GameSquares[a] === GameSquares[b] && GameSquares[a] === GameSquares[c]) {
                return GameSquares[a]; 
            }
        }
        return null;
    }


    squares.forEach((square, index) => {
        square.setAttribute("class","square");

        square.addEventListener("click", function(){

        if(!GameSquares[index]){
            GameSquares[index] = isX ? "X":"O";
            square.textContent = GameSquares[index];
            square.setAttribute("class", `square ${GameSquares[index]}`)

            const winnerWinnerChickenDinner = winCheck();
            if(winnerWinnerChickenDinner){
                statusDiv.textContent = `Congratulations! ${winnerWinnerChickenDinner} is the Winner!`;
                statusDiv.classList.add("you-won");
            }else{
                isX = !isX;                
            }
        }
        });
        
        square.addEventListener("mouseover", function(){
            square.classList.add("hover")
        });
        
        square.addEventListener("mouseout", function(){
            square.classList.remove("hover")
        });

    });

    newGame.addEventListener("click", function(){
        GameSquares.fill(null);
        isX = true;
        squares.forEach(square => {
            square.textContent = "";
            square.classList.add("square");
        });   
        statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
        statusDiv.classList.remove("you-won");  
    });

});
