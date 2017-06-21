(function(exports){
  function testNoteController () {
    var notecontroller = new NoteController("Barry the Biscuit Boy");
    if(notecontroller.notelist !== "Barry the Biscuit Boy") {
      throw new Error("Barry is not there")
    }else{
      console.log("testNoteController - Test Passed :)")
    }
  };

  function testhtmlConverter () {
    function appDouble () {
      this.innerHTML = null;
    }
    var app = new appDouble();
    var notelist = new NoteList;
    notelist.addToList("Gandalf's hat");
    var notecontroller = new NoteController(notelist);
    notecontroller.htmlConverter(app);
    if(app.innerHTML !== "<ul><li><div>Gandalf's hat</div></li></ul>"){
      throw new Error("I am hatless");
    }else{
      console.log("Bob's your uncle")
    }
  };

  testNoteController();
  testhtmlConverter();

})(this);
