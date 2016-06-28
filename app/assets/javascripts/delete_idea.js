function deleteButtons(){
  $("main").on("click", ".delete-button", function(){
    var ideaIdNumber = this.id.slice(7);
    deleteIdea(ideaIdNumber);
  });
}

function deleteIdea(id) {
  $.ajax({
    url: "api/v1/ideas/" + id,
    type: 'DELETE',
    success: removeIdea(id)
  });
}

function removeIdea(id) {
  var ideaId = "#idea-" + id;
  $(ideaId).remove();
}
