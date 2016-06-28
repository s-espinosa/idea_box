function formatIdeas(ideas) {
  formatted = ""
  ideas = ideas.reverse();
  for (var i = 0; i < ideas.length; i++) {
    formatted += "<p>"+ ideas[i]["title"] + "<br>" + ideas[i]["body"] + "<br>" + ideas[i]["quality"] + "</p>"
  }
  return formatted
}

function renderIdeas(ideas) {
  formattedIdeas = formatIdeas(ideas)
  $("main").html(formattedIdeas)
}

function addIdea(params) {
  idea = params;
  idea["quality"] = "swill";
  formattedIdea = formatIdeas([idea]);
  $("main").prepend(formattedIdea);
}

