(function(exports){
  function testNoteController () {
    var notecontroller = new NoteController("Barry the Biscuit Boy");
    if(notecontroller.notelist !== "Barry the Biscuit Boy") {
      throw new Error("Barry is not there")
    }else{
      console.log("testNoteController - Test Passed :)")
    }
  };

  testNoteController();

})(this);
