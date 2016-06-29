function titleInputs(){
  $("main").on("click", ".title-input", function(){
    this.setAttribute('contenteditable', 'true');
  });

  $("main").on("blur", ".title-input", function(){
    this.setAttribute('contenteditable', 'false');
    var title = this.textContent;
    var id = this.id.slice(6);
    editTitle(id, title);
  });

  $("main").on("keydown", ".title-input", function(e){
    var code = e.keyCode;
    if(code === 13){
      this.setAttribute('contenteditable', 'false');
      e.preventDefault();
      var title = this.textContent;
      var id = this.id.slice(6);
      editTitle(id, title);
    }
  });
}


function editTitle(id, title) {
  var params = {title: title};
  $.ajax({
    url: "api/v1/ideas/" + id,
    type: "PATCH",
    data: params,
  });
}
