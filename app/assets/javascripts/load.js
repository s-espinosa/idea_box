$(document).ready(function() {
  getIdeas();
  setButtons();
  setInputs();
  searchIdeas();
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
  rateButtons();
  newButton();
}

function setInputs() {
  titleInputs();
  bodyInputs();
}
