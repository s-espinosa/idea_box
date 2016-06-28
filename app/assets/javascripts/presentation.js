function formatIdeas(ideas) {
  formatted = ""
  ideas = ideas.reverse();
  for (var i = 0; i < ideas.length; i++) {
    formatted += "<div id='idea-" + ideas[i]["id"]+ "'><p>"+ ideas[i]["title"] + "<br>" + ideas[i]["body"] + "<br>" + ideas[i]["quality"] + "</p>" + "<div class='delete-button' id='delete-" + ideas[i]["id"]  + "'>delete</div>" + "</div>"
  }
  return formatted
}

function renderIdeas(ideas) {
  formattedIdeas = formatIdeas(ideas)
  $("main").html(formattedIdeas);
  deleteButtons();
}

function addIdea(idea) {
  formattedIdea = formatIdeas([idea]);
  $("main").prepend(formattedIdea);
}

function removeIdea(id) {
  var ideaId = "#idea-" + id;
  $(ideaId).remove();
}