var Gamifier = (function () {
  var gameObject = null
    , levelObjects = []
    , currentLevel = -1
    , iterationCount = 0
    , startTime = 0
    , gameInterval = null
    , loopInterval = 15

  function start () {
    startTime = new Date()
    iterationCount = 0
    currentLevel = -1

    gameObject.start()
    nextLevel()
  }

  function update () {
    onGameStatus(gameObject.update())
  }

  function pause () {
    clearInterval(gameInterval)
  }

  function resume () {
    gameInterval = setInterval(update, loopInterval)
  }

  function nextLevel () {
    currentLevel++

    if (currentLevel >= levelObjects.length) {
      pause()
      return
    }

    if (levelObjects[currentLevel].start)
      levelObjects[currentLevel].start()

    resume()
  }

  function onGameStatus (gameStatus) {
    switch (gameStatus.status) {
      case 'success' :

        break;

      case 'failure' :

        break;

      case 'continue' :
      default :
        onLevelStatus(levelObjects[currentLevel].update())
        break;
    }
  }

  function onLevelStatus (levelStatus) {
    switch (gameStatus.status) {
      case 'success' :
        if (levelObjects[currentLevel].success) {
          levelObjects[currentLevel].success()
        } else {
          gameObject.levelSuccess()
        }

        pause()
        break;

      case 'failure' :
        if (levelObjects[currentLevel].failure) {
          levelObjects[currentLevel].failure()
        } else {
          gameObject.levelFailure()
        }

        pause()
        break;

      case 'continue' :
      default :
        break;
    }
  }

  function registerGameObject (go) {
    gameObject = go

    if (gameObject.loopInterval)
      loopInterval = gameObject.loopInterval
  }

  function registerLevelObject (lo) {
    levelObjects.push(lo)
  }

  return {
    iterationCount : iterationCount
    , startTime : startTime
    , registerGameObject : registerGameObject
    , registerLevelObject : registerLevelObject
    , start : start
    , nextLevel : nextLevel
  }
}())
