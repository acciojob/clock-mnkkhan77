//your JS code here. If required.
function updateTimer() {
    let now = new Date(); // Get current date & time
    let formattedDateTime = now.toLocaleString(); // Format both date & time

    document.getElementById("timer").innerText = formattedDateTime;
}

// Ensure timer exists in DOM & update it every second
window.onload = function () {
    if (document.getElementById("timer")) {
        updateTimer(); // Show date-time on load
        setInterval(updateTimer, 1000); // Update every second
    }
};