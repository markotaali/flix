window.onload = function() {

    console.log('hey hoe.');

    // Get Api Key from Local Storage
    getMyApiKey( function(value) {
        document.getElementById("apikey").value = value.myapikey;
    });

    console.log('finished.');

};

function getMyApiKey(callback) {
    chrome.storage.local.get('myapikey', callback);
}

function setApiKey() {

    console.log('New Key!');

    var newApiKey = document.getElementById("apikey").value;
    chrome.storage.local.set({'myapikey': newApiKey});

    document.getElementById('messages').innerHTML = "New key set: "+newApiKey;    
}

function _clickHandler() {
    if (document.getElementById('apikey').value.length < 1 || document.getElementById('apikey').value == 'Enter your API key') {
        return false;
    } else {
        setApiKey();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submit').onclick = _clickHandler;
});