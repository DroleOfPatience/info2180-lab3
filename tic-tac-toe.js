document.addEventListener("DOMContentLoaded", function () {
    // Select all divs inside the game board with a specific selector (assuming they have a specific ID or class)
    const squares = document.querySelectorAll("#board div"); // Adjust selector if needed

    // Loop through each square and add the 'square' class
    squares.forEach(square => {
        square.setAttribute("class","square");
    });
});
