const main = "IraL1/66fQ1JbnWssFxNWg==";
const key = 'UIqWDlOhgP47V02P47WDlOhgfWVN9cdsvUcdsvU';

function encryptPassword(userinput) {
    const encrypted = CryptoJS.AES.encrypt(userinput, key).toString();
    return encrypted;
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("submitButton").addEventListener("click", function() {
        const userinput = document.getElementById("passwordInput").value;
        const enc = encryptPassword(userinput);

        console.log(enc);
        
        if (enc === main) {
            window.location.href = "https://drive.google.com/uc?export=download&id=102P47VkNANWUSUIqWDlOhgfWVN9cdsvU";
        } else {
            alert("Incorrect password. Please try again.");
        }
    });
});
