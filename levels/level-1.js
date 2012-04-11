var Level1 = (function () {
  var levelId = 'level-1'
    , levelForm = null
    , formSubmitted = false

    , saveInput = null

  function update () {
    var status = {status : 'continue'}

    if (
      formSubmitted
      && saveInput.value.toLowerCase() == 's'
    ) {
      status.status = 'success'
      return status
    }

    if (
      formSubmitted
      && (
        saveInput.value.toLowerCase() != 's'
      )
    ) {
      formSubmitted = false
      status.status = 'failure'
      return status
    }

    return status
  }

  function startUp () {
    formSubmitted = false

    levelForm = document.getElementById(levelId + '-form')
    levelForm.addEventListener('submit', onFormSubmit, false)

    saveInput = document.getElementById('shortcut-save')
  }

  function cleanUp () {
    levelForm.removeEventListener('submit', onFormSubmit)
    levelForm = null

    saveInput = null
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
