/**
 * Shuffles the order of elements on the page
 * http://james.padolsey.com/javascript/shuffling-the-dom/
 */
function shuffle (elems) {
  allElems = (function () {
    var ret = [], l = elems.length
    while (l--) { ret[ret.length] = elems[l] }
    return ret
  })()

  var shuffled = (function () {
      var l = allElems.length, ret = []

      while (l--) {
        var random = Math.floor(Math.random() * allElems.length)
          , randEl = allElems[random].cloneNode(true)

        allElems.splice(random, 1)
        ret[ret.length] = randEl
      }

      return ret
    })()
    , l = elems.length

  while (l--) {
    elems[l].parentNode.insertBefore(shuffled[l], elems[l].nextSibling)
    elems[l].parentNode.removeChild(elems[l])
  }
}

/**
 * Converts a DOM List to an array
 * http://stackoverflow.com/questions/2735067/how-to-convert-a-dom-node-list-to-an-array-in-javascript
 * @param {Object} obj
 * @return {Array}
 */
function toArray (obj) {
  var array = []
  // iterate backwards ensuring that length is an UInt32
  for (var i = obj.length >>> 0; i--;) {
    array[i] = obj[i]
  }

  return array
}
