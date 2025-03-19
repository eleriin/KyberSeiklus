document.addEventListener("DOMContentLoaded", function () {
    let newTaskButton = document.getElementById("newTaskButton");
    if (newTaskButton) {
        newTaskButton.addEventListener("click", nextTask);
    } else {
        console.error("newTaskButton not found on this page.");
    }
});

let currentTask = localStorage.getItem("currentTask") ? parseInt(localStorage.getItem("currentTask")) : 0;

document.addEventListener("DOMContentLoaded", function () {
    // Check if we are on the starting page (index.html)
    if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
        console.log("Resetting task progress to 0");
        localStorage.setItem("currentTask", "0"); // Reset task progress
        console.log("Task progress reset to 0");
    }
})

// Event listener for the "Alusta mängu" button on the main page
function startGame() {
    currentTask = 1
    localStorage.setItem("currentTask", currentTask);
    console.log(currentTask)
    window.location.href = "task1.html"; // Redirects to the game page
};


// If you need to add functionality on the game page for a new task
function nextTask() {
    // alert("Järgmine ülesanne algab!");
    console.log("Next task.")
    currentTask += 1;
    localStorage.setItem("currentTask", currentTask);
    window.location.href = `task${currentTask}.html`;
    console.log(currentTask)
    // You can replace the content here or trigger new game tasks
};
