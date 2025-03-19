// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {

    // PEALEHT - Redirect to the first task page when "Alusta mängu" is clicked
    const startButton = document.getElementById("startButton");
    if (startButton) {
        startButton.addEventListener("click", function() {
            window.location.href = "tasks.html"; // Redirects to the game page
        });
    }

    // TASK 1 - Attach event listeners to task buttons
    document.querySelectorAll(".task-btn").forEach(function(button) {
        button.addEventListener("click", function() {
            var taskId = button.getAttribute("data-task");

            // Redirect to the correct task page based on taskId
            console.log("Task Button Clicked: " + taskId);
            if (taskId === "1") {
                window.location.href = "task1.html";
            } else if (taskId === "2") {
                window.location.href = "task2.html";
            } else if (taskId === "3") {
                window.location.href = "task3.html";
            }
        });
    });
});
