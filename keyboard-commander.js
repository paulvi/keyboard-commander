var KeyboardCommander = (function () {
  var activeScreen = document.getElementById('active-screen')
    , inactiveScreens = document.getElementById('inactive-screens')
    , levelSuccessScreen = document.getElementById('level-success')
    , levelFailScreen = document.getElementById('level-fail')
    , screenTimeout = null
    , mouseMoved = false

  function startScreen () {
    document.getElementsByClassName('game-start')[0].addEventListener('click', function gameStartClick (ev) {
      this.removeEventListener('click', gameStartClick)
      Gamifier.start()
    }, false)
  }

  function start () {
    window.addEventListener('mousemove', mouseMoveHandler, false)
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
    activeScreen.appendChild(levelSuccessScreen)

    screenTimeout = setTimeout(function () {
      clearTimeout(screenTimeout)
      inactiveScreens.appendChild(levelSuccessScreen)
      Gamifier.nextLevel()
    }, 700)
  }

  function levelFailure () { }

  function mouseMoveHandler () {
    mouseMoved = true
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
