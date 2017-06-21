(function(exports){
  function NoteController (notelist) {
    this.notelist = notelist;
    this.notelistview = new NoteListView(notelist);
};

  NoteController.prototype.htmlConverter = function(element){
    element.innerHTML = this.notelistview.htmlView();

  };
  exports.NoteController = NoteController;
  exports.NoteController.htmlConverter = NoteController.htmlConverter;
})(this);
