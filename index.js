function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(num) {
  let ranked = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < ranked.length; i++) {
    let chillen = ranked[i].children

    for (let j = 0; j < chillen.length; j++) {
      chillen[j].innerHTML = parseInt(chillen[j].innerHTML) + num
    }
  }
}

function deepestChild() {
  let grandList = document.querySelector('div#grand-node').querySelectorAll('div')
  return grandList[grandList.length-1]
}
