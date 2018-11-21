
function getFirstSelector(selector){
    return document.querySelector(selector);
}

function nestedTarget(){
    return document.querySelector("#nested .target");
}

function deepestChild(){
    return document.querySelector("#grand-node div div div div");
}

function increaseRankBy(n){
    const lists = document.querySelectorAll(".ranked-list");
    const firstList = lists[0];
    const secondList = lists[1];

    let children = firstList.children;
    for(let i = 0; i < children.length; i++){
        children[i].innerHTML = parseInt(children[i].innerHTML) + n
    }

    children = secondList.children;
    for(let i = 0; i < children.length; i++){
        children[i].innerHTML = parseInt(children[i].innerHTML) + n
    }

    
}