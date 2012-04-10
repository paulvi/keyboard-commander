var Level2 = (function () {
  var levelId = 'level-2'
    , newInput = null
    , openInput = null
    , levelForm = null
    , formSubmitted = false

  function update () {
    var status = {status : 'continue'}

    if (
      formSubmitted
      && newInput.value.toLowerCase() == 'n'
      && openInput.value.toLowerCase() == 'o'
    )
      status.status = 'success'

    return status
  }

  function startUp () {
    newInput = document.getElementById('shortcut-new')
    openInput = document.getElementById('shortcut-open')
    levelForm = document.getElementById('level-2-form')
    levelForm.addEventListener('submit', onFormSubmit, false)
  }

  function cleanUp () {
    newInput = null
    openInput = null
    levelForm.removeEventListener('submit', onFormSubmit)
    levelForm = null
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

Gamifier.registerLevelObject(Level2)
