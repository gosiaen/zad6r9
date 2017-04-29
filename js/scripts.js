

var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var itemsByTagName = document.getElementsByTagName('li');
	console.log(itemsByTagName);
	list.innerHTML += ('<li>item ' + itemsByTagName.length + '</li>');
});

var gameState = 'notStarted'




