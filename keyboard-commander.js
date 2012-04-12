var KeyboardCommander = (function () {
  var activeScreen = document.getElementById('active-screen')
    , inactiveScreens = document.getElementById('inactive-screens')
    , levelSuccessScreen = document.getElementById('level-success')
    , successMessages = levelSuccessScreen.getElementsByClassName('message')
    , totalSuccessMessages = successMessages.length
    , levelFailureScreen = document.getElementById('level-failure')
    , failureMessages = levelFailureScreen.getElementsByClassName('message')
    , totalFailureMessages = failureMessages.length
    , screenTimeout = null
    , mouseMoved = false
    , lastMousePos = {x : false, y : false}

  function startScreen () {
    document.getElementsByClassName('game-start')[0].addEventListener('click', function gameStartClick (ev) {
      this.removeEventListener('click', gameStartClick, false)
      Gamifier.start()
    }, false)
  }

  function start () {
    window.addEventListener('blur', windowBlurHandler, false)
    window.addEventListener('focus', windowFocusHandler, false)
    window.addEventListener('mousemove', mouseMoveHandler, false)

    shuffle(successMessages)
    shuffle(failureMessages)

    document.getElementById('start-over-link').href = location.href
  }

  function update () {
    var status = {status : 'continue'}

    if (mouseMoved)
      status.status = 'failure'

    return status
  }

  function success () {
    activeScreen.appendChild(document.getElementById('success'))
  }

  function failure () {
    activeScreen.appendChild(document.getElementById('failure'))
  }

  function levelSuccess () {
    Gamifier.pause()

    successMessages[0].removeAttribute('hidden')
    activeScreen.appendChild(levelSuccessScreen)

    screenTimeout = setTimeout(function () {
      clearTimeout(screenTimeout)
      inactiveScreens.appendChild(levelSuccessScreen)
      successMessages[0].setAttribute('hidden', true)
      successMessages[0].parentElement.appendChild(successMessages[0])
      Gamifier.nextLevel()
    }, 700)
  }

  function levelFailure () {
    Gamifier.pause()

    failureMessages[0].removeAttribute('hidden')
    activeScreen.appendChild(levelFailureScreen)

    screenTimeout = setTimeout(function () {
      clearTimeout(screenTimeout)
      inactiveScreens.appendChild(levelFailureScreen)
      failureMessages[0].setAttribute('hidden', true)
      failureMessages[0].parentElement.appendChild(failureMessages[0])
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
    , start : start
    , update : update
    , success : success
    , failure : failure
    , levelSuccess : levelSuccess
    , levelFailure : levelFailure
  }
}())

Gamifier.registerGameObject(KeyboardCommander)
