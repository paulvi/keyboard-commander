var Level3 = (function () {
  var levelId = 'level-3'
    , levelForm = null
    , formSubmitted = false

    , copyInput = null
    , cutInput = null
    , pasteInput = null
    , undoInput = null
    , cutBox = null
    , undoBox = null

  function update () {
    var status = {status : 'continue'}

    if (pasteInput.value.toLowerCase() == 'v')
      cutBox.removeAttribute('hidden')

    if (cutInput.value.toLowerCase() == 'x')
      undoBox.removeAttribute('hidden')

    if (
      formSubmitted
      && copyInput.value.toLowerCase() == 'c'
      && cutInput.value.toLowerCase() == 'x'
      && pasteInput.value.toLowerCase() == 'v'
      && undoInput.value.toLowerCase() == 'z'
    )
      status.status = 'success'

    return status
  }

  function startUp () {
    levelForm = document.getElementById(levelId + '-form')
    levelForm.addEventListener('submit', onFormSubmit, false)

    copyInput = document.getElementById('shortcut-copy')
    cutInput = document.getElementById('shortcut-cut')
    pasteInput = document.getElementById('shortcut-paste')
    undoInput = document.getElementById('shortcut-undo')
    cutBox = document.getElementById('shortcut-cut-box')
    undoBox = document.getElementById('shortcut-undo-box')
  }

  function cleanUp () {
    levelForm.removeEventListener('submit', onFormSubmit)
    levelForm = null

    copyInput = null
    cutInput = null
    pasteInput = null
    undoInput = null
    cutBox = null
    undoBox = null
  }

  function onFormSubmit (ev) {
    ev.preventDefault()

    formSubmitted = true
  }

  return {
    levelId : levelId
    , update : update
    , startUp : startUp
  }
}())

Gamifier.registerLevelObject(Level3)
