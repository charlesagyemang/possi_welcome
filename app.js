function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] === variable) {
            return decodeURIComponent(pair[1].replace(/\+/g, " "));
        }
    }
}

function displayWelcomeMessage() {
    var name  = getQueryVariable("name");
    var event = getQueryVariable("event");

    if (name && event) {
        document.getElementById("name").textContent = "Hi " + name;
        document.getElementById("event").textContent = "Welcome To " + event;
    }
}

var event_url = getQueryVariable("event_url");

if(event_url) {
    event_url = decodeURIComponent(event_url);
    document.getElementById("backLink").href = event_url;
}

function goBack() {
    window.history.back();
}

// Initialize
displayWelcomeMessage();
