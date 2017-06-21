function testNoteControllerCanBeInstantiated () {
  var notecontroller = new NoteController("fakenotelist");
  assert.isTrue( notecontroller.notelist === "fakenotelist");
}

function testNoteUpdatesControllerInnerHTML(){

  function AppDouble () {
    this.innerHTML = null;
  }

  var appDouble = new AppDouble();
  var notelist = new NoteList();
  notelist.addNewNote('Favourite drink: seltzer')
  var notecontroller = new NoteController(notelist);
  assert.isTrue( appDouble.createView(appDouble) === "<ul><li><div>Faaavourite food: pesto</div></li></ul>" )
}

testNoteControllerCanBeInstantiated();
testNoteControllerUpdatesInnerHTML();
