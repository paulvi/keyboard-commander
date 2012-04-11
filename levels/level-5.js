var Level5 = (function () {
  var levelId = 'level-5'
    , levelForm = null
    , formSubmitted = false

    , tInput = null
    , fInput = null

  function update () {
    var status = {status : 'continue'}

    if (
      formSubmitted
      && fInput.checked
    ) {
      status.status = 'success'
      return status
    }

    if (
      formSubmitted
      && (
        !fInput.checked
        || !tInput.checked
        || tInput.checked
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

    tInput = document.getElementById('shortcut-refresh-t')
    fInput = document.getElementById('shortcut-refresh-f')
  }

  function cleanUp () {
    levelForm.removeEventListener('submit', onFormSubmit)
    levelForm = null

    tInput = null
    fInput = null
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

Gamifier.registerLevelObject(Level5)
