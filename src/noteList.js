(function(exports) {
  function NoteList() {
    this.notes = [];
  };

  NoteList.prototype.addToList = function(note) {
    this.notes.push(new Note(note));
  }

  NoteList.prototype.viewNotes = function() {
    return this.notes
  }

  exports.NoteList = NoteList;
  // exports.NoteList.prototype.addToList = NoteList.prototype.addToList
  // exports.NoteList.prototype.viewNotes = NoteList.prototype.viewNotes
})(this);
