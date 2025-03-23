const main = "U2FsdGVkX19hnsxPn2BJLuyhPtBPSnFMMu6W7NJ8arQ=";
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
            alert("corect");
        } else {
           window.location.href = "https://drive.google.com/uc?export=download&id=1-KiHvGPtJP4pvt5zbxSw6mrH3RzPDLLL";
        }
    });
});
