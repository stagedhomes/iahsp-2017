(function() {
    angular.module("iahsp2017")
        .controller("ctrlSendEmail", ["$scope", "$http", "factorySendEmail", "vcRecaptchaService", function($scope, $http, factorySendEmail, vcRecaptchaService){
            $scope.contactDetails = factorySendEmail.contact;
            var btnSubmit = document.getElementById("submit");

            /* ==================================================================
                Form Functions
            ==================================================================*/
            $scope.fnClearForm = function() {
                $scope.contactDetails = {
                    "name": null,
                    "email": null,
                    "subject": null,
                    "message": null
                }; // contact

                btnSubmit.innerHTML = "Send Message";
                btnSubmit.classList.remove("btn-success");
                btnSubmit.classList.remove("btn-danger");
                btnSubmit.classList.add("btn-primary");
            }; // clearForm()

            $scope.fnSendForm = function() {
                if(vcRecaptchaService.getResponse() === "") { //if string is empty
                    $("#submit").text("reCaptcha Problem. Please fix.");
                } else {
                    // add response from reCAPTCHA
                    $scope.contactDetails.googleResponse = vcRecaptchaService.getResponse();

                    // Put up some sort of loading sign.
                    btnSubmit.innerHTML = "Please Wait...";
                    btnSubmit.classList.remove("btn-primary");
                    btnSubmit.classList.add("btn-info");
                    btnSubmit.disabled = true;

                    // send POST data
                    $http.post("https://www.leemtek.com/forms/stagedhomes/iahsp2017", $scope.contactDetails)
                        .then(function successCallback(response) {
                            if(response.data.sent === "yes") {
                                // update submit button to indicate success
                                factorySendEmail.fnSendSuccessDOM();
                            } else {
                                // update submit button to indicate an error
                                factorySendEmail.fnSendErrorDOM();
                            } // if
                        }, function errorCallback(response) {
                            // update submit button to indicate an error
                            factorySendEmail.fnSendErrorDOM();
                        }) // .then
                    ; // $http.post
                } // if
            }; // fnSendForm()
        }]) // .controller("ctrlSendEmail")
    ; // angular.module("getredbox")
})(); // function()
