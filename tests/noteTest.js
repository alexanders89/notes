(function(exports) {
  function testNoteText() {
    var note = new Note("Mary Berry");

    if (note.text !== "Mary Berry") {
      throw new Error("Note has incorrect text!")
    }
  };

  testNoteText();
})(this);
