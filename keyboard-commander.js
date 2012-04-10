var KeyboardCommander = (function () {
  function startScreen () {
    var startScreen = document.getElementById('start-screen')

    gameScreen.appendChild(startScreen)
    document.getElementsByClassName('game-start')[0].addEventListener('click', function gameStartClick (ev) {
      this.removeEventListener('click', gameStartClick)
      screens.appendChild(startScreen)
      Gamifier.start()
    }, false)
  }

  function start () {

  }

  function update () {

  }

  function success () {

  }

  function failure () {

  }

  function levelSuccess () {

  }

  function levelFailure () {

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
