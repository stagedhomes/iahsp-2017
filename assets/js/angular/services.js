(function() {
    angular.module("iahsp2017")
        .factory("factorySendEmail", [function() {
            var $facSendEmail = [];
            var btnSubmit = document.getElementById("submit");

            // Store all contents provided by guest.
            $facSendEmail.contact = {
                "name": null,
                "email": null,
                "subject": null,
                "message": null
            }; // contact

            // update submit button to indicate success
            $facSendEmail.fnSendSuccessDOM = function() {
                btnSubmit.innerHTML = "Email Sent";
                btnSubmit.classList.add("btn-success");
                btnSubmit.disabled = true;
            }; // fnSendSuccessDOM

            // update submit button to indicate an error
            $facSendEmail.fnSendErrorDOM = function() {
                btnSubmit.innerHTML = "Error Sending";
                btnSubmit.classList.remove("btn-info");
                btnSubmit.classList.add("btn-danger");
            }; // fnSendErrorDOM()

            // Used to add a proper date string (testing purposes).
            function fnDateToday() {
                return new Date().toDateString();
            } // fnDateToday()

            return $facSendEmail;
        }]) // .factory("factorySendEmail")
    ; // angular.module("iahsp2017")
})(); // function()
