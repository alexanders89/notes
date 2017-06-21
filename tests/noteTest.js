(function(exports) {
  function testNoteText() {
    var note = new Note("Mary Berry");

    if (note.text !== "Mary Berry") {
      throw new Error("Note has incorrect text!")
    } else {
      console.log("testNoteText - Test passed :-)")
    }
  };

  testNoteText();
})(this);
