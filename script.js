// Event listener for the "Alusta mängu" button on the main page
document.getElementById("startButton").addEventListener("click", function() {
    window.location.href = "task1.html"; // Redirects to the game page
});

// If you need to add functionality on the game page for a new task
document.getElementById("newTaskButton").addEventListener("click", function() {
    alert("Järgmine ülesanne algab!");
    // You can replace the content here or trigger new game tasks
});
