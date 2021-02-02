$(document).ready(function() {
    $("body").append("<p>The DOM is now loaded.</p>");
});

let selectInputById = $("#btnSubmit");

function notify() {
    alert("The Submit Button has been Clicked.");
}

$(selectInputById).on("click", notify);