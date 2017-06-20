(function(exports) {
  function testListForOneNote() {
    var noteList = new NoteList();

    noteList.addToList("Hello")
    if (noteList.viewNotes()[0].text !== "Hello") {
      throw new Error("Note list does not contain note")
    }


  };
  function testListForMultipleNotes() {
    var noteList = new NoteList();
    noteList.addToList("Hello")
    noteList.addToList("Goodbye")
    if (noteList.viewNotes()[1].text !== "Goodbye") {
      throw new Error("Note list does not contain note")
    }
  };
  testListForOneNote();
  testListForMultipleNotes();
})(this);
