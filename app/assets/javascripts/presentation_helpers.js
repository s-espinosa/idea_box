function renderIdeas(ideas) {
  formattedIdeas = formatIdeas(ideas);
  $("main").html(formattedIdeas);
}

function formatIdeas(ideas) {
  formatted = "";
  ideas = ideas.reverse();
  for (var i = 0; i < ideas.length; i++) {
    formatted += "<div id='idea-" + ideas[i].id + "'><p>" + ideas[i].title + "<br>" + ideas[i].body + "<br>" + ideas[i].quality + "</p>" + "<div class='delete-button' id='delete-" + ideas[i].id  + "'>delete</div>" + "</div>";
  }
  return formatted;
}
