class Groceries {
	constructor() {
		this.list = [];
	}
	add(value) {
		if (value !== '') {
			this.list.push(value);
		} else {
			alert('Error: empty string.');
		}
		article.value = '';
		display();
	}
	remove(index) {
		this.list.splice(index, 1);
		display();
	}
	clear() {
		this.list = [];
		display();
	}
}

const groceries = new Groceries();

const form = document.getElementById('form');
const article = document.getElementById('article');
const add = document.getElementById('add');
const list = document.getElementById('list');
const data = document.getElementById('data');
const clear = document.getElementById('clear');

function display() {
	list.textContent = '';
	if (groceries.list.length > 0) {
		for (var item in groceries.list) {
			let li = document.createElement('li');
			let span = document.createElement('span');
			span.textContent = groceries.list[item];
			let button = document.createElement('button');
			button.classList.add('remove');
			button.onclick = function () {
				groceries.remove(item);
			}
			let img = document.createElement('img');
			img.src = 'img/minus.svg';
			img.alt = 'Remove';
			button.appendChild(img);
			li.appendChild(span);
			li.appendChild(button);
			list.appendChild(li);
		}
	} else {
		let li = document.createElement('li');
		let span = document.createElement('span');
		span.textContent = 'No article yet!';
		li.appendChild(span);
		list.appendChild(li);
	}
	data.innerHTML = `You have ${groceries.list.length} article(s).`;
}

display();
