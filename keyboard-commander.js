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
    var randMessage = Math.round(Math.random() * (totalSuccessMessages - 1))

    Gamifier.pause()

    for (var i = 0; i < totalSuccessMessages; i++) {
      if (i == randMessage) {
        successMessages[i].removeAttribute('hidden')
      } else {
        successMessages[i].setAttribute('hidden', true)
      }
    }

    activeScreen.appendChild(levelSuccessScreen)

    screenTimeout = setTimeout(function () {
      clearTimeout(screenTimeout)
      inactiveScreens.appendChild(levelSuccessScreen)
      Gamifier.nextLevel()
    }, 700)
  }

  function levelFailure () {
    var randMessage = Math.round(Math.random() * (totalFailureMessages - 1))

    Gamifier.pause()

    for (var i = 0; i < totalFailureMessages; i++) {
      if (i == randMessage) {
        failureMessages[i].removeAttribute('hidden')
      } else {
        failureMessages[i].setAttribute('hidden', true)
      }
    }

    activeScreen.appendChild(levelFailureScreen)

    screenTimeout = setTimeout(function () {
      clearTimeout(screenTimeout)
      inactiveScreens.appendChild(levelFailureScreen)
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
