function getFirstSelector(selector) {

    return document.querySelector(selector)
}

function nestedTarget() {

 
    return document.getElementById('nested').querySelector('.target')
}

function deepestChild() {
    let  grand = document.getElementById('grand-node').querySelectorAll('div')
    return grand[grand.length -1]
}

function increaseRankBy(n) {

   let list = document.querySelectorAll('.ranked-list')
   


   for (const i in list) {
       let ranks = list[i].children
   
       for (const el in ranks) {
   
            ranks[el].innerHTML = parseInt(ranks[el].innerHTML) + n
        }
       }

  
}