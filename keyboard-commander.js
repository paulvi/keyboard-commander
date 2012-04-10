var KeyboardCommander = (function () {
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
    console.log('success')
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
