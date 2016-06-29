function bodyInputs(){
  $("main").on("click", ".body-input", function(){
    this.setAttribute('contenteditable', 'true');
    console.log("clicked!");
  });

  $("main").on("blur", ".body-input", function(){
    this.setAttribute('readonly', 'readonly');
    var body = this.textContent;
    var id = this.id.slice(5);
    editBody(id, body);
  });

  $("main").on("keydown", ".body-input", function(e){
    var code = e.keyCode;
    if(code === 13){
      this.setAttribute('contenteditable', 'false');
      e.preventDefault();
      var body = this.textContent;
      var id = this.id.slice(5);
      editBody(id, body);
    }
  });
}

function editBody(id, body) {
  var params = {body: body};
  $.ajax({
    url: "api/v1/ideas/" + id,
    type: "PATCH",
    data: params,
  });
}
