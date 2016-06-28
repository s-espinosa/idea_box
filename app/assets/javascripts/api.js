function getIdeas(callback) {
  $.ajax({
    url: 'api/v1/ideas',
    success: callback
  })
}

function postIdea(params) {
  $.ajax({
    url: 'api/v1/ideas',
    type: 'POST',
    data: params,
    success: addIdea
  })
}

function deleteIdea(id) {
  $.ajax({
    url: "api/v1/ideas/" + id,
    type: 'DELETE',
    success: removeIdea(id)
  })
}
