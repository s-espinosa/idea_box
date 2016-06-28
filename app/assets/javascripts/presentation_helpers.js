function renderIdeas(ideas) {
  formattedIdeas = formatIdeas(ideas);
  $("main").html(formattedIdeas);
}

function formatIdeas(ideas) {
  formatted = "";
  ideas = ideas.reverse();
  for (var i = 0; i < ideas.length; i++) {
    var id      = ideas[i].id;
    var title   = ideas[i].title;
    var body    = ideas[i].body;
    var quality = ideas[i].quality;

    formatted +=
      "<div id='idea-" + id + "'>" +

        "<div id='title-"+ id +"'>" + title + "</div>" +
        "<div id='body-"+ id +"'>" + body + "</div>" +
        "<div id='quality-"+ id +"'>" + quality + "</div>" +

        "<div class='delete-button' id='delete-" + id  + "'>delete</div>" +
        "<div class='upgrade-button' id='upgrade-" + id  + "'>thumbs up</div>" +
        "<div class='downgrade-button' id='downgrade-" + id  + "'>thumbs down</div>" +

      "</div>";
  }
  return formatted;
}