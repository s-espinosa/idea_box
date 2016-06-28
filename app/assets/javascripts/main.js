$(document).ready(function() {
  getIdeas(renderIdeas);
  assignForm();
})

function getIdeas(callback) {
  console.log("Callback: " + callback);
  $.ajax({
    url: 'api/v1/ideas',
    success: callback
  })
}

function renderIdeas(ideas) {
  formattedIdeas = formatIdeas(ideas)
  $("main").html(formattedIdeas)
}

function formatIdeas(ideas) {
  formatted = ""
  ideas = ideas.reverse();
  for (var i = 0; i < ideas.length; i++) {
    formatted += "<p>"+ ideas[i]["title"] + "<br>" + ideas[i]["body"] + "<br>" + ideas[i]["quality"] + "</p>"
  }
  return formatted
}

function assignForm(){
  $("#idea-submit").click(function(){
    var title = $("#idea-title").val();
    var body  = $("#idea-body").val();
    var params = {title: title, body: body};
    $("#idea-title").val("");
    $("#idea-body").val("");
    firePost(params)
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

function addIdea(params) {
  idea = params;
  idea["quality"] = "swill";
  formattedIdea = formatIdeas([idea]);
  $("main").prepend(formattedIdea);
}

