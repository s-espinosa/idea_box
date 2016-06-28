function upgradeButtons(){
  $("main").on("click", ".upgrade-button", function(){
    var ideaIdNumber = this.id.slice(8);
    upgradeIdea(ideaIdNumber);
  });
}

function upgradeIdea(id){
  currentQuality = $(qualitySelector(id)).text();
  if (currentQuality === "plausible") {
    patchIdea(id, {quality: "genius"});
  } else if (currentQuality === "swill"){
    patchIdea(id, {quality: "plausible"});
  }
}

function patchIdea(id, params) {
  $.ajax({
    url: "api/v1/ideas/" + id,
    type: 'PATCH',
    data: params,
    success: upgradeIdeaOnPage(id, params)
  });
}

function upgradeIdeaOnPage(id, params) {
  $(qualitySelector(id)).text(params.quality);
}

function qualitySelector(id) {
  return "#quality-" + id;
}
