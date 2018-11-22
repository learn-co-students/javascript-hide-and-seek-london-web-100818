function getFirstSelector(selector) {
    return document.querySelector(selector)
}


function nestedTarget() {
    return document.querySelector('#nested .target')
}


const increaseRankBy = function (n) {
    const list = document.querySelectorAll('.ranked-list li')
    for (let i = 0; i < list.length; i++) {
        let parsed = parseInt(list[i].innerHTML)
        list[i].innerHTML = parsed + n
    }
}





function deepestChild() {
    const nodes = document.querySelectorAll('#grand-node div')
    const endIndex = nodes.length -1
    return nodes[endIndex]
}

