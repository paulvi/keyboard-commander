var Level6 = (function () {
  var levelId = 'level-6'
    , levelForm = null
    , formSubmitted = false

    , highlightInput = null

  function update () {
    var status = {status : 'continue'}

    if (
      formSubmitted
      && highlightInput.value.toLowerCase() == 'shift'
    ) {
      status.status = 'success'
      return status
    }

    if (
      formSubmitted
      && highlightInput.value.toLowerCase() != 'shift'
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
    levelForm.reset()

    highlightInput = document.getElementById('shortcut-highlight')
  }

  function cleanUp () {
    levelForm.removeEventListener('submit', onFormSubmit)
    levelForm = null

    highlightInput = null
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

Gamifier.registerLevelObject(Level6)
