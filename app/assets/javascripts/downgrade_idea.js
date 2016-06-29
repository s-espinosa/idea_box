function downgradeButtons(){
  $("main").on("click", ".downgrade-button", function(){
    var ideaIdNumber = this.id.slice(10);
    downgradeIdea(ideaIdNumber);
  });
}

function downgradeIdea(id){
  currentQuality = $(qualitySelector(id)).text();
  if (currentQuality === "genius") {
    patchIdea(id, {quality: "plausible"});
  } else if (currentQuality === "plausible"){
    patchIdea(id, {quality: "swill"});
  }
}

function patchIdea(id, params) {
  $.ajax({
    url: "api/v1/ideas/" + id,
    type: 'PATCH',
    data: params,
    success: downgradeIdeaOnPage(id, params)
  });
}

function downgradeIdeaOnPage(id, params) {
  $(qualitySelector(id)).text(params.quality);
  $(qualitySelector(id)).removeClass('plausible');
  $(qualitySelector(id)).removeClass('swill');
  $(qualitySelector(id)).removeClass('genius');
  $(qualitySelector(id)).addClass(params.quality);
}

function qualitySelector(id) {
  return "#quality-" + id;
}
