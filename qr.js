let qrdiv = document.getElementById("qrdiv");
    let qrimg = document.getElementById("qrimg");
    let qrtext = document.getElementById("qrtext");

    function GenerateQR() {
        if (qrtext.value.length != 0) {
            qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
            document.getElementById("qrContent").textContent = "Generated QR code for: " + qrText.value;
        }
        else alert("Please enter text/url to generate QR code.");
    }
    function openQRWebsite() {
        var qrLink = qrimg.src;
        if (qrLink)
            window.open(qrLink);
    }
