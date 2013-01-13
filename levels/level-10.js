var Level10 = (function () {
  var levelId = 'level-10'
    , linkFinish = null
    , linkClicked = false

    , ruleInput = null

  function update () {
    var status = {status : 'continue'}

    if (
      linkClicked
      && ruleInput.checked
    ) {
      status.status = 'success'
      return status
    }

    if (
      linkClicked
      && !ruleInput.checked
    ) {
      linkClicked = false
      status.status = 'failure'
      return status
    }

    return status
  }

  function startUp () {
    linkClicked = false

    linkFinish = document.getElementById('finish')
    linkFinish.addEventListener('click', onLinkClick, false)
    ruleInput = document.getElementById('rule')
  }

  function cleanUp () {
    linkFinish = null
    ruleInput = null
  }

  function onLinkClick (ev) {
    ev.preventDefault()

    linkClicked = true
  }

  return {
    levelId : levelId
    , update : update
    , startUp : startUp
  }
}())

Gamifier.registerLevelObject(Level10)
