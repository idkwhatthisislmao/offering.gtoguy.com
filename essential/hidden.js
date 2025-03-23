const main = "jS50aQyWq7Q3PrKxG/tCPw===";
const key = 'UIqWDlOhgP47V02P47WDlOhgfWVN9cdsvUcdsvU';

function encryptPassword(userinput) {
    const iv = CryptoJS.enc.Utf8.parse('0000000000000000');
    const encrypted = CryptoJS.AES.encrypt(userinput, CryptoJS.enc.Utf8.parse(key), {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).toString();
    return encrypted;
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("submitButton").addEventListener("click", function() {
        const userinput = document.getElementById("passwordInput").value;
        const enc = encryptPassword(userinput);

        if (enc === main) {
            alert("corect");
        } else {
           window.location.href = "https://drive.google.com/uc?export=download&id=1-KiHvGPtJP4pvt5zbxSw6mrH3RzPDLLL";
        }
    });
});
