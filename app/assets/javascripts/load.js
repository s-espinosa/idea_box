$(document).ready(function() {
  getIdeas();
  setButtons();
  setInputs();
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
  upgradeButtons();
  downgradeButtons();
}

function setInputs() {
  titleInputs();
  bodyInputs();
}
