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
      "<div class='idea' id='idea-" + id + "'>" +

        "<div class='title-input' id='title-"+ id +"'>" + title + "</div>" +
        "<div class='body-input' id='body-"+ id +"'>" + body + "</div>" +

        "<div class='delete-button' id='delete-" + id  + "'>delete</div>" +
        "<div class='rate upgrade' id='up-" + id  + "'>thumbs up</div>" +
        "<div class='rate downgrade' id='dn-" + id  + "'>thumbs down</div>" +
        "<div class='quality "+ quality + "' id='quality-"+ id +"'>" + quality + "</div>" +

      "</div>";
  }
  return formatted;
}
