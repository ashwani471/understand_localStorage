console.log('this is localstorage tutorial');
let VegArray=['Ginger','garlic','mint'];
localStorage.setItem('Name','Ashwani');
localStorage.setItem('Name2','Kumar');
localStorage.setItem('Vegetable',JSON.stringify(VegArray));

//clear the entire localStorage
// localStorage.clear();

//clear the particular key-value pair
localStorage.removeItem('Name2');

//retrieve an item from the local storage
let name=localStorage.getItem('Name');
name=JSON.parse(localStorage.getItem('VegArray'));
console.log(name);