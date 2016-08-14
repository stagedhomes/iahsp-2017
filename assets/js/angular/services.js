(function() {
    angular.module("iahsp2017")
        .factory("factorySendEmail", [function() {
            var $facSendEmail = [];

            // Store all contents provided by guest.
            $facSendEmail.contact = {
                "name": "Duane Leem",
                "email": "duaneleem@alumni.ggu.edu",
                "subject": "Test email.",
                "message": "Just a test email."
            }; // contact

            $facSendEmail.fnSendSuccessDOM = function() {
                // update submit button to indicate success
                $('#submit').text('Email Sent');
                $('#submit').removeClass('btn-info').addClass('btn-success');
                $("#submit").prop('disabled', true);
            }; // fnSendSuccessDOM

            $facSendEmail.fnSendErrorDOM = function() {
                // update submit button to indicate an error
                $('#submit').text('Error Sending');
                $('#submit').removeClass('btn-info').addClass('btn-danger');
            }; // fnSendErrorDOM()

            // Used to add a proper date string (testing purposes).
            function fnDateToday() {
                return new Date().toDateString();
            } // fnDateToday()

            return $facSendEmail;
        }]) // .factory("factorySendEmail")
    ; // angular.module("iahsp2017")
})(); // function()
