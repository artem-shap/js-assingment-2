const submitButton = document.getElementById('btn');
const myForm = document.getElementById('myForm');
const body = document.getElementById('bg-dark');
const listItem = document.getElementById('hello');

submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.myForm').style.backgroundColor = 'red';
    document.querySelector('.bg-dark').style.backgroundColor = 'black';
    document.querySelector('.bg-dark').style.color = 'white';
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
     
     
});

