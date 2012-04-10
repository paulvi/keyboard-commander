var Level1 = (function () {
  var levelId = 'level-1'
    , saveInput = null
    , levelForm = null
    , formSubmitted = false

  function update () {
    var status = {status : 'continue'}

    if (
      formSubmitted
      && saveInput.value.toLowerCase() == 's'
    )
      status.status = 'success'

    return status
  }

  function startUp () {
    saveInput = document.getElementById('shortcut-save')
    levelForm = document.getElementById('level-1-form')
    levelForm.addEventListener('submit', onFormSubmit, false)
  }

  function cleanUp () {
    saveInput = null
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

Gamifier.registerLevelObject(Level1)
