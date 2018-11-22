const getFirstSelector = (selector) => {
    return document.querySelector(`${selector}`)
};

const nestedTarget = () => {
    return document.querySelector('#nested .target')
};

const deepestChild = () => {
   const grandNode = document.getElementById('grand-node').querySelectorAll('div')
   return grandNode[grandNode.length - 1]
};

const increaseRankBy = (n) => {
    const rankedLists = document.getElementsByClassName('ranked-list');

    for (let i = 0; i<rankedLists.length; i++) {

        let listEl = rankedLists[i].children;
        
        for(let x = 0; x<listEl.length; x++) {

            listEl[x].innerHTML = parseInt(listEl[x].innerHTML) + n;
        }
    }
    
};