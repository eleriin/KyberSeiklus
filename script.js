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

    // Wi-Fi Button functionality on task1.html
    var wifiButton = document.querySelector(".wifi-button");
    var wifiModal = document.getElementById("wifiModal");
    var closeModal = document.getElementsByClassName("close")[0];
    var wifiNetworks = document.querySelectorAll(".wifi-network");

    // When Wi-Fi button is clicked, show the modal
    if (wifiButton) {
        wifiButton.addEventListener("click", function() {
            wifiModal.style.display = "block"; // Show the modal
            wifiButton.classList.add("hidden"); // Hide the Wi-Fi button when modal is shown
        });
    }

    // When the user clicks the close button, close the modal
    closeModal.onclick = function() {
        wifiModal.style.display = "none"; // Hide the modal
        wifiButton.classList.remove("hidden"); // Show the Wi-Fi button again
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == wifiModal) {
            wifiModal.style.display = "none"; // Close the modal if clicked outside
            wifiButton.classList.remove("hidden"); // Show the Wi-Fi button again
        }
    };

    // When a Wi-Fi network is selected
    wifiNetworks.forEach(function(network) {
        network.addEventListener("click", function() {
            alert('You selected: ' + network.textContent); // Show an alert with the selected network
            wifiModal.style.display = "none"; // Hide the modal after selection
            wifiButton.classList.remove("hidden"); // Show the Wi-Fi button again
        });
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
