(function(exports) {
  function testNoteListView() {

    var noteList = new NoteList();
    noteList.addToList("Canard")
    noteList.addToList("Barry")
    noteList.addToList("Owliver")
    var noteListView = new NoteListView(noteList);



    if (noteListView.htmlView(noteList) !== "Hello Canard") {
      console.log(noteListView)
      throw new Error("Not correct HTML view")
    }
  };

  testNoteListView();
})(this);
