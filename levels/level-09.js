var Level9 = (function () {
  var levelId = 'level-9'
    , hashAdded = false
    , backTriggered = false
    , part1 = null
    , part2 = null

  function update () {
    var status = {status : 'continue'}

    if (
      hashAdded
      && backTriggered
    )
      status.status = 'success'

    return status
  }

  function startUp () {
    hashAdded = false
    backTriggered = false

    window.addEventListener('hashchange', onHashChange, false)
    part1 = document.getElementById('level-9-1')
    part2 = document.getElementById('level-9-2')

    document.getElementById('hash-example-domain').innerHTML = location.href
  }

  function cleanUp () {
    window.removeEventListener('hashchange', onHashChange)
    part1 = null
    part2 = null
  }

  function onHashChange (ev) {
    if (location.hash == '#keyboard') {
      hashAdded = true
      part1.setAttribute('hidden', true)
      part2.removeAttribute('hidden')
    }

    if (hashAdded && location.hash == '')
      backTriggered = true
  }

  return {
    levelId : levelId
    , update : update
    , startUp : startUp
  }
}())

Gamifier.registerLevelObject(Level9)
