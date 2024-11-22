
let isAvailable = false;

function toggleStatus() {
    const statusElement = document.getElementById("current-status");
    const button = document.getElementById("toggle-status");
    isAvailable = !isAvailable;

    if (isAvailable) {
        statusElement.innerHTML = "Status: <span class='available'>Available</span>";
        button.innerText = "Set as Unavailable";
    } else {
        statusElement.innerHTML = "Status: <span class='unavailable'>Unavailable</span>";
        button.innerText = "Set as Available";
    }
}

function logCall(event) {
    event.preventDefault();
    const name = document.getElementById("caller-name").value;
    const phone = document.getElementById("phone-number").value;
    const type = document.getElementById("emergency-type").value;
    const table = document.getElementById("call-log-table");

    const time = new Date().toLocaleString();
    const newRow = `<tr><td>${name}</td><td>${phone}</td><td>${type}</td><td>${time}</td></tr>`;

    table.innerHTML += newRow;

    document.getElementById("log-call-form").reset();
}

function sendRadio() {
    const message = document.getElementById("radio-comm").value;
    if (message.trim()) {
        alert(`Radio Message Sent: ${message}`);
        document.getElementById("radio-comm").value = "";
    } else {
        alert("Please enter a radio message before sending.");
    }
}
