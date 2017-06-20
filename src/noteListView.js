(function(exports) {
  function NoteListView(noteList) {
    this.displayNotesArray = noteList
    this.string = ""
  };

  NoteListView.prototype.htmlView = function(array) {
    var list = this.displayNotesArray;
    list.notes.forEach(function(entry) {
      console.log("<li><div>" + entry.text + "</div></li>");
      return("Hello " + entry.text);
    });
  }

  exports.NoteListView = NoteListView;
})(this);
