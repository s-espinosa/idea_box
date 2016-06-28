$(document).ready(function() {
  getIdeas();
  setButtons();
});



function getIdeas() {
  $.ajax({
    url: 'api/v1/ideas',
    success: renderIdeas
  });
}

function setButtons() {
  createButton();
  deleteButtons();
}
