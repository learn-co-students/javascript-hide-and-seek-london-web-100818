const getFirstSelector = (selector) => {
  return document.querySelector(selector)
}

const nestedTarget = () => {
  return document.querySelector('#nested .target')
}

const deepestChild = () => document.querySelector('#grand-node div div div div');

const increaseRankBy = (n) => {
  const lis = document
  .getElementById('app')
  .querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + 3
  }
}
