
        $.ajax({
            type: "POST",
            dataType: "json",
            "contentType": "application/json",
            url: "http://localhost:8080/jira/rest/scriptrunner/latest/custom/gadgetEndpoint",
            data: data
          }).done(function(data) {
            alert(data);
          }).fail(function() {
            alert("Sorry. Server unavailable. ");
          });


function refresh() {
jQuery.ajax({
 type: "POST",
 dataType: "json",
                   "contentType": "application/json",
                   url: "http://localhost:8080/jira/rest/scriptrunner/latest/custom/gadgetEndpoint",
                   data: data
                 }).done(function(data) {
                   alert(data);
                 }).fail(function() {
                   alert("Sorry. Server unavailable. ");
});
}
