function createButton(){
  $("#idea-submit").click(function(){
    postIdea({
      title: $("#idea-title").val(),
      body: $("#idea-body").val()
    });

    $("#idea-title").val("");
    $("#idea-body").val("");
  });
}

function postIdea(params) {
  $.ajax({
    url: 'api/v1/ideas',
    type: 'POST',
    data: params,
    success: addIdea
  });
}

function addIdea(idea) {
  formattedIdea = formatIdeas([idea]);
  $("main").prepend(formattedIdea);
}
