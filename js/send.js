emailjs.init("srs1lWSuMjtu-l0S7");
function send() {
    var date = {
        nume: document.getElementById("nume").value,
        prenume: document.getElementById("prenume").value,
        email: document.getElementById("email").value,
        tema: document.getElementById("tema").value,
        mesaj: document.getElementById("mesaj").value
    };
    emailjs.send("service_u39ustn", "template_jevxnqg", date)
        .then(function (raspuns) {
            alert("Vashe pisimo otpravleno")
            document.getElementById("formular").reset();
        },
            function (error) {
                alert("oshibka pri otpravke")
            })
}