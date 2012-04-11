var KeyboardCommander = (function () {
  var activeScreen = document.getElementById('active-screen')
    , inactiveScreens = document.getElementById('inactive-screens')
    , levelSuccessScreen = document.getElementById('level-success')
    , successTimeout = null

  function startScreen () {
    document.getElementsByClassName('game-start')[0].addEventListener('click', function gameStartClick (ev) {
      this.removeEventListener('click', gameStartClick)
      console.log('here')
      Gamifier.start()
    }, false)
  }

  function start () {

  }

  function update () {
    var status = {status : 'continue'}

    return status
  }

  function success () {

  }

  function failure () {

  }

  function levelSuccess () {
    activeScreen.appendChild(levelSuccessScreen)

    successTimeout = setTimeout(function () {
      clearTimeout(successTimeout)
      inactiveScreens.appendChild(levelSuccessScreen)
      Gamifier.nextLevel()
    }, 1500)
  }

  function levelFailure () {
    console.log('failure')
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
