
        $.ajax({
            type: "POST",
            dataType: "json",
            "contentType": "application/json",
            url: "https://avst-prod511.adaptavist.cloud/rest/scriptrunner/latest/custom/gadgetEndpoint",
            data: data
          }).done(function(data) {
            alert(data);
          }).fail(function() {
            alert("Sorry. Server unavailable. ");
          });

$('form').submit(function(event) {
function refresh() {
jQuery.ajax({
 type: "GET",
 dataType: "json",
                   "contentType": "application/json",
                   url: "https://avst-prod511.adaptavist.cloud/rest/scriptrunner/latest/custom/gadgetEndpoint",
                   data: data
                 }).done(function(data) {
                   alert(data);
                 }).fail(function() {
                   alert("Sorry. Server unavailable. ");
});
}
});
