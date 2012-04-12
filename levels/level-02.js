var Level2 = (function () {
  var levelId = 'level-2'
    , levelForm = null
    , formSubmitted = false

    , newInput = null
    , openInput = null

  function update () {
    var status = {status : 'continue'}

    if (
      formSubmitted
      && newInput.value.toLowerCase() == 'n'
      && openInput.value.toLowerCase() == 'o'
    ) {
      status.status = 'success'
      return status
    }

    if (
      formSubmitted
      && (
        newInput.value.toLowerCase() != 'n'
        || openInput.value.toLowerCase() != 'o'
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
    levelForm.reset()

    newInput = document.getElementById('shortcut-new')
    openInput = document.getElementById('shortcut-open')
  }

  function cleanUp () {
    levelForm.removeEventListener('submit', onFormSubmit)
    levelForm = null

    newInput = null
    openInput = null
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
