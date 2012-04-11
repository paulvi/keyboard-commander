var Level8 = (function () {
  var levelId = 'level-8'
    , windowBlurred = false
    , windowFocused = false

  function update () {
    var status = {status : 'continue'}

    if (
      windowBlurred
      && windowFocused
    )
      status.status = 'success'

    return status
  }

  function startUp () {
    window.addEventListener('blur', onWindowBlur, false)
    window.addEventListener('focus', onWindowFocus, false)
  }

  function cleanUp () {
    window.removeEventListener('blur', onWindowBlur)
    window.removeEventListener('focus', onWindowFocus)
  }

  function onWindowBlur (ev) {
    ev.preventDefault()
    windowBlurred = true
  }

  function onWindowFocus (ev) {
    ev.preventDefault()
    windowFocused = true
  }

  return {
    levelId : levelId
    , update : update
    , startUp : startUp
  }
}())

Gamifier.registerLevelObject(Level8)
