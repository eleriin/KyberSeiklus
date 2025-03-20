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

    // When a Wi-Fi network is selected, show its details
    wifiNetworks.forEach(function(network) {
        network.addEventListener("click", function() {
            // Get the info from the selected network's data-info attribute
            var info = network.getAttribute("data-info");

            // Show the selected network's name and details in the info section
            var wifiInfoSection = document.getElementById("wifiInfo");
            var networkName = document.getElementById("networkName");
            var networkDetails = document.getElementById("networkDetails");

            networkName.textContent = network.textContent; // Set the network name
            networkDetails.textContent = info; // Set the network details

            // Show the Wi-Fi info section
            wifiInfoSection.style.display = "block";

            // Hide the Wi-Fi dropdown after selection
            wifiDropdown.style.display = "none";

            // Optionally, show a confirmation message (alert)
            alert('You selected: ' + network.textContent + "\n" + info);
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


function deleteEmail(emailNumber) {
    const email = document.getElementById('email' + emailNumber);
    const emailContent = document.getElementById('content' + emailNumber); // Corresponding email content

    const isScam = email.getAttribute('data-is-scam') === 'true';
    
    if (isScam) {

        const confirmDelete = confirm("Oled kindel, et tahad kustutada kahtlase e-kirja?");
        if (!confirmDelete) {
            return; 
        }
        message="see oli kahtlane kiri!"
    }

    const isNotScam = email.getAttribute('data-is-not-scam') === 'true';

    if(isNotScam) {

        const confirmDelete = confirm("oled kindel et kustutada kirja")
        if (!confirmDelete) {
            return;
        }
        message ="see ei olnud kahtlane kiri!";
    }


    if (email) {
        email.style.display = 'none'; 
    }
    
    if (emailContent) {
        emailContent.style.display = 'none'; 
    }
    
}


function showPopup(message) {
    const popupMessage = document.getElementById('popupMessage');
    popupMessage.textContent = message;
    const modal = document.getElementById('deletePopup');
    modal.style.display = "block"; 
}


function closePopup() {
    const modal = document.getElementById('deletePopup');
    modal.style.display = "none"; 
}


function delete1() {
    deleteEmail(1);
}
function delete2() {
    deleteEmail(2);
}
function delete3() {
    deleteEmail(3);
}
function delete4() {
    deleteEmail(4);
}
function delete5() {
    deleteEmail(5);
}


//TASK 3 - Pank
function fakeLogin() {
    document.getElementById('phishingScreen').classList.add('hidden');
    document.getElementById('warningScreen').classList.remove('hidden');
}


function goBack() {
    document.getElementById('phishingScreen').classList.add('hidden');
    document.getElementById('successScreen').classList.remove('hidden');
}


function goToHome() {
    document.querySelectorAll('.container, .bank-container').forEach(el => el.classList.add('hidden'));
    document.getElementById('startScreen').classList.remove('hidden');
}


function realLogin() {
    const password = document.getElementById("realPassword").value;
    const message = document.getElementById("passwordMessage");
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
   
    if (regex.test(password)) {
        alert("Sisselogimine õnnestus!");
    } else {
        message.textContent = "Parool peab sisaldama vähemalt 8 tähemärki, ühte suurt tähte, ühte väikest tähte, ühte numbrit ja ühte sümbolit.";
    }
}