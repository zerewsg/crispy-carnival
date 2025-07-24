const headerOld = document.getElementById('header');
const headerNew = document.querySelector('#header');
console.log('Header (старый способ):', headerOld);
console.log('Header (новый способ):', headerNew);


const itemsOld = document.getElementsByClassName('item');
const itemsNew = document.querySelectorAll('.item');
console.log('Элементы с классом item (старый способ):', itemsOld);
console.log('Элементы с классом item (новый способ):', itemsNew);


const divsOld = document.getElementsByTagName('div');
const divsNew = document.querySelectorAll('div');
console.log('Div элементы (старый способ):', divsOld);
console.log('Div элементы (новый способ):', divsNew);


headerNew.textContent = 'Новый заголовок';
headerNew.innerHTML = 'Новый заголовок <span>со спаном</span>';
headerNew.style.color = 'blue';
headerNew.style.fontSize = '24px';


const firstItem = itemsNew[0];
firstItem.setAttribute('data-id', '123');
const dataId = firstItem.getAttribute('data-id');
console.log('Значение data-id:', dataId);
firstItem.setAttribute('data-id', '456');


const newDiv = document.createElement('div');
newDiv.className = 'new-item';
newDiv.textContent = 'Я новый элемент';


document.body.appendChild(newDiv.cloneNode(true));


const firstItemElement = document.querySelector('.item');
document.body.insertBefore(newDiv, firstItemElement);