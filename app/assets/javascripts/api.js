function getIdeas(callback) {
  console.log("Callback: " + callback);
  $.ajax({
    url: 'api/v1/ideas',
    success: callback
  })
}

function firePost(params) {
  $.ajax({
    url: 'api/v1/ideas',
    type: 'POST',
    data: params,
    success: addIdea(params)
  })
}

