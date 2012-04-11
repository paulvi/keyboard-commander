var Level4 = (function () {
  var levelId = 'level-4'
    , levelForm = null
    , formSubmitted = false

    , winInput = null
    , tabInput = null
    , findInput = null

  function update () {
    var status = {status : 'continue'}

    if (
      formSubmitted
      && winInput.value.toLowerCase() == 'w'
      && tabInput.value.toLowerCase() == 't'
      && findInput.value.toLowerCase() == 'f'
    ) {
      status.status = 'success'
      return status
    }

    if (
      formSubmitted
      && (
        winInput.value.toLowerCase() != 'w'
        || tabInput.value.toLowerCase() != 't'
        || findInput.value.toLowerCase() != 'f'
      )
    ) {
      formSubmitted = false
      status.status = 'failure'
      return status
    }

    return status
  }

  function startUp () {
    levelForm = document.getElementById(levelId + '-form')
    levelForm.addEventListener('submit', onFormSubmit, false)

    winInput = document.getElementById('shortcut-win')
    tabInput = document.getElementById('shortcut-tab')
    findInput = document.getElementById('shortcut-find')
  }

  function cleanUp () {
    levelForm.removeEventListener('submit', onFormSubmit)
    levelForm = null

    winInput = null
    tabInput = null
    findInput = null
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

Gamifier.registerLevelObject(Level4)
