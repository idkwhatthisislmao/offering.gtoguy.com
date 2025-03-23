const main = "U2FsdGVkX1+tjXqD8U4szWubd0Knxe5lE68T2vSE5R1GckgU6e74VgT/AAWf7GejD6N3tqg+k7F/poZ3F4e1K70wHmS2cUrFkAIk8J2p6gY=";
const key = 'UIqWDlOhgP47V02P47WDlOhgfWVN9cdsvUcdsvU';

function encryptPassword(userinput) {
    const encrypted = CryptoJS.AES.encrypt(userinput, key).toString();
    return encrypted;
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("submitButton").addEventListener("click", function() {
        const userinput = document.getElementById("passwordInput").value;
        const enc = encryptPassword(userinput);
        
        if (enc === main) {
            window.location.href = "https://drive.google.com/uc?export=download&id=102P47VkNANWUSUIqWDlOhgfWVN9cdsvU";
        } else {
            alert("Incorrect password. Please try again.");
        }
    });
});
