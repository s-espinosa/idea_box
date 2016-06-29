function newButton() {
  $("#new-idea").click(function() {
    if($("#idea-form").css("display") === "none"){
      $("#idea-form").slideDown();
    } else {
      $("#idea-form").slideUp();
    }
  })
}
