function rateButtons(){
  $("main").on("click", ".rate", function(){
    var ideaData = this.id.split("-");

    switch(ideaData[0]) {
      case "up":
        upgradeIdea(ideaData[1]);
        break;
      case "dn":
        downgradeIdea(ideaData[1]);
        break;
    }
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
  $(qualitySelector(id)).removeClass('plausible');
  $(qualitySelector(id)).removeClass('swill');
  $(qualitySelector(id)).removeClass('genius');
  $(qualitySelector(id)).addClass(params.quality);
}

function qualitySelector(id) {
  return "#quality-" + id;
}
