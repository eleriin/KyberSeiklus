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
        button.addEventListener("click", function(event) {
            var taskId = button.getAttribute("data-task");

            // Prevent redirection and show modal for Task 1
            if (taskId === "1") {
                event.preventDefault(); // Prevent default page redirection
                localStorage.setItem('selectedTask', taskId); // Store selected task in localStorage
                window.location.href = "task1.html"; // Redirect to task1.html
            } else {
                // Redirect to other task pages
                console.log("Task Button Clicked: " + taskId);
                if (taskId === "2") {
                    window.location.href = "task2.html";
                } else if (taskId === "3") {
                    window.location.href = "task3.html";
                }
            }
        });
    });

    // Wi-Fi Button functionality on task1.html (updated for dropdown functionality)
    var wifiButton = document.querySelector(".wifi-button");
    var wifiDropdown = document.getElementById("wifiDropdown"); // Dropdown for Wi-Fi networks
    var wifiNetworks = document.querySelectorAll(".wifi-network");

    // When Wi-Fi button is clicked, toggle the dropdown list
    if (wifiButton) {
        wifiButton.addEventListener("click", function() {
            // Toggle the display of the Wi-Fi dropdown
            wifiDropdown.style.display = (wifiDropdown.style.display === "block") ? "none" : "block";
        });
    }

    // When a Wi-Fi network is selected
    wifiNetworks.forEach(function(network) {
        network.addEventListener("click", function() {
            alert('You selected: ' + network.textContent); // Show an alert with the selected network
            wifiDropdown.style.display = "none"; // Hide the dropdown after selection
        });
    });

    // When the user clicks anywhere outside of the dropdown, close it
    window.addEventListener("click", function(event) {
        if (!wifiButton.contains(event.target) && !wifiDropdown.contains(event.target)) {
            wifiDropdown.style.display = "none"; // Close the dropdown if clicked outside
        }
    });

    // Modal Handling for Ülesanne 1
    var taskModal = document.getElementById("taskModal");
    var taskClose = taskModal.getElementsByClassName("close")[0];

    // Show the task modal when the page is loaded on task1.html
    taskModal.style.display = "block"; // Display the task modal

    // When the user clicks on <span> (x), close the task modal
    taskClose.onclick = function() {
        taskModal.style.display = "none"; // Close the task modal
    }

    // When the user clicks anywhere outside of the task modal, close it
    window.onclick = function(event) {
        if (event.target == taskModal) {
            taskModal.style.display = "none"; // Close the task modal if clicked outside
        }
    }
});
