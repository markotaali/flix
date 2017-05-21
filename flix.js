window.onload = function() {
    // Get Api Key from Local Storage and place it in the input
    getMyApiKey( function(value) {
        document.getElementById("apikey").value = value.myapikey;
    });
};

// Function for asynchronous request
function getMyApiKey(callback) {  
    chrome.storage.local.get('myapikey', callback);
}

// Put new key into global storage
function setApiKey() {
    var newApiKey = document.getElementById("apikey").value;
    chrome.storage.local.set({'myapikey': newApiKey});
    // Let the user know that the new value was saved
    document.getElementById('messages').innerHTML = "New key set: "+newApiKey;    
}

// Handle clicks
function _clickHandler() {
    // If there's a new value, set it
    if (document.getElementById('apikey').value.length < 1 || document.getElementById('apikey').value == 'Enter your API key') {
        return false;
    } else {
        setApiKey();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submit').onclick = _clickHandler;
});