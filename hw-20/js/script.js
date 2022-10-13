// Элементы lable

let a = document.body.getElementsByTagName('label');
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);



// Первый td со словом age

console.log(a[1].nextSibling.nextSibling.nextSibling);



// Форму с именем "name="search""

let c = document.body.getElementsByTagName('form');
console.log(c[0]);



// Первый input в этой форме

let d = document.body.getElementsByTagName('input');
console.log(d[0]);



// Последний input в этой форме

let e = document.body.getElementsByTagName('input');
console.log(e[6]);