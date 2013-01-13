var KeyboardCommander = (function () {
  var levelSuccessScreen = 'level-success'
    , levelFailureScreen = 'level-failure'
    , screenTimeout = null
    , mouseMoved = false
    , lastMousePos = {x : false, y : false}
    , os = (navigator.platform.search(/mac/i) > -1) ? 'mac' : 'win'
    , notOs = (os == 'win') ? 'mac' : 'win'

  function setUp () {
    window.addEventListener('blur', windowBlurHandler, false)
    window.addEventListener('focus', windowFocusHandler, false)
    window.addEventListener('mousemove', mouseMoveHandler, false)

    shuffle(document.getElementById(levelSuccessScreen).getElementsByClassName('message'))
    shuffle(document.getElementById(levelFailureScreen).getElementsByClassName('message'))

    document.getElementById('start-over-link').href = location.href
    document.documentElement.className += 'os-' + os

    toArray(document.getElementsByClassName(notOs)).forEach(function (elem, i, array) {
      elem.parentNode.removeChild(elem)
    })
  }

  function startScreen () {
    document.getElementsByClassName('game-start')[0].addEventListener('click', function gameStartClick (ev) {
      this.removeEventListener('click', gameStartClick, false)
      Gamifier.start()
    }, false)
  }

  function start () {}

  function update () {
    var status = {status : 'continue'}

    if (mouseMoved)
      status.status = 'failure'

    return status
  }

  function success () {
    Gamifier.showScreen('success')
  }

  function failure () {
    Gamifier.showScreen('failure')
  }

  function levelSuccess () {
    Gamifier.pause()

    Gamifier.showScreen(levelSuccessScreen)
    var successMessage = document.getElementById(levelSuccessScreen).getElementsByClassName('message')[0]
    successMessage.removeAttribute('hidden')

    screenTimeout = setTimeout(function () {
      clearTimeout(screenTimeout)
      Gamifier.hideScreen(levelSuccessScreen)
      successMessage.setAttribute('hidden', true)
      successMessage.parentNode.appendChild(successMessage)
      Gamifier.nextLevel()
    }, 700)
  }

  function levelFailure () {
    Gamifier.pause()

    Gamifier.showScreen(levelFailureScreen)
    var failureMessage = document.getElementById(levelFailureScreen).getElementsByClassName('message')[0]
    failureMessage.removeAttribute('hidden')

    screenTimeout = setTimeout(function () {
      clearTimeout(screenTimeout)
      Gamifier.hideScreen(levelFailureScreen)
      failureMessage.setAttribute('hidden', true)
      failureMessage.parentNode.appendChild(failureMessage)
      Gamifier.resume()
    }, 700)
  }

  function mouseMoveHandler (ev) {
    if (lastMousePos.x === false || lastMousePos.y === false) {
      lastMousePos.x = ev.clientX
      lastMousePos.y = ev.clientY
    }

    if (lastMousePos.x != ev.clientX || lastMousePos.y != ev.clientY)
      mouseMoved = true

    lastMousePos.x = ev.clientX
    lastMousePos.y = ev.clientY
  }

  function windowBlurHandler () {
    lastMousePos.x = false
    lastMousePos.y = false
    window.removeEventListener('mousemove', mouseMoveHandler)
  }

  function windowFocusHandler () {
    var timer = setTimeout(function () {
      window.addEventListener('mousemove', mouseMoveHandler, false)
      clearTimeout(timer)
    }, 100)
  }

  return {
    startScreen : startScreen
    , setUp : setUp
    , start : start
    , update : update
    , success : success
    , failure : failure
    , levelSuccess : levelSuccess
    , levelFailure : levelFailure
  }
}())

Gamifier.registerGameObject(KeyboardCommander)
