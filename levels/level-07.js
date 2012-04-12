var Level7 = (function () {
  var levelId = 'level-7'
    , levelForm = null
    , formSubmitted = false

    , selectMetaInput = null
    , selectLetterInput = null
    , startMetaInput = null
    , endMetaInput = null
    , nextMetaInput = null
    , nextLetterInput = null
    , prevMetaInput = null
    , prevLetterInput = null

  function update () {
    var status = {status : 'continue'}

    if (
      formSubmitted
      && selectMetaInput.value.toLowerCase() == 'ctrl'
      && selectLetterInput.value.toLowerCase() == 'a'
      && startMetaInput.value.toLowerCase() == 'home'
      && endMetaInput.value.toLowerCase() == 'end'
      && nextMetaInput.value.toLowerCase() == 'ctrl'
      && nextLetterInput.value.toLowerCase() == 'right'
      && prevMetaInput.value.toLowerCase() == 'ctrl'
      && prevLetterInput.value.toLowerCase() == 'left'
    ) {
      status.status = 'success'
      return status
    }

    if (
      formSubmitted
      && (
        selectMetaInput.value.toLowerCase() != 'ctrl'
        || selectLetterInput.value.toLowerCase() != 'a'
        || startMetaInput.value.toLowerCase() != 'home'
        || endMetaInput.value.toLowerCase() != 'end'
        || nextMetaInput.value.toLowerCase() != 'ctrl'
        || nextLetterInput.value.toLowerCase() != 'right'
        || prevMetaInput.value.toLowerCase() != 'ctrl'
        || prevLetterInput.value.toLowerCase() != 'left'
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

    selectMetaInput = document.getElementById('shortcut-select-meta')
    selectLetterInput = document.getElementById('shortcut-select-letter')
    startMetaInput = document.getElementById('shortcut-start-meta')
    endMetaInput = document.getElementById('shortcut-end-meta')
    nextMetaInput = document.getElementById('shortcut-next-meta')
    nextLetterInput = document.getElementById('shortcut-next-letter')
    prevMetaInput = document.getElementById('shortcut-prev-meta')
    prevLetterInput = document.getElementById('shortcut-prev-letter')
  }

  function cleanUp () {
    levelForm.removeEventListener('submit', onFormSubmit)
    levelForm = null

    selectMetaInput = null
    selectLetterInput = null
    startMetaInput = null
    endMetaInput = null
    nextMetaInput = null
    nextLetterInput = null
    prevMetaInput = null
    prevLetterInput = null
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

Gamifier.registerLevelObject(Level7)
