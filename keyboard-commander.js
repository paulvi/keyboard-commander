var KeyboardCommander = (function () {
  var gameScreen = document.getElementById('game-screen')

  function startScreen () {
    var startScreen = document.getElementsByClassName('start-screen')[0]

    gameScreen.appendChild(startScreen)
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

window.addEventListener('load', function () {
  KeyboardCommander.startScreen()
});
