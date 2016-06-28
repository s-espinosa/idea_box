function assignForm(){
  $("#idea-submit").click(function(){
    var title = $("#idea-title").val();
    var body  = $("#idea-body").val();
    var params = {title: title, body: body};
    $("#idea-title").val("");
    $("#idea-body").val("");
    postIdea(params)
  })
}

function deleteButtons(){
  $("main").on("click", ".delete-button", function() {
    var ideaIdNumber = this.id.slice(7);
    deleteIdea(ideaIdNumber);
  })
}
