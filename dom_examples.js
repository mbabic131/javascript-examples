// select dom element with id
let elId = document.querySelector('#main');
console.log(elId);

// select dom element with tag (selects first div)
let elTag = document.querySelector('div');
console.log(elTag);

// select dom element with combination
let elMix = document.querySelector('div .normal');
console.log(elMix);

// select dom element from js variable
let elFromVar = elTag.querySelector('.normal');
console.log(elFromVar);

// select multiple elements
let mEl = document.querySelectorAll('div');
mEl.forEach(el => { console.log(el); });

// add event listener
document.querySelector('h1').addEventListener('click', function() {
    alert('Misha Tate is badass whomen!');
});

elTag.addEventListener('click', addClass);

// add class to element
function addClass() {
    // check if class is present
    if (elTag.classList.contains('container')) {
        // remove class
        elTag.classList.remove('container');
    }
    else {
        // add class
        elTag.classList.add('container');
    }
}

// inner HTML
elFromVar.innerHTML = 'More JS examples, please!';

// append to HTML
let ul = document.querySelector('ul');
// create HTML element
let li = document.createElement('li');
li.innerHTML = 'Stipe!';
ul.append(li);

// remove HTML element
ul.addEventListener('click', e => {
    if(ul.children.length) {
        let firstNode = ul.children[0]
        ul.removeChild(firstNode)
    }
});



