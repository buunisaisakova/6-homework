//1
const button = document.getElementById('button');
const input = document.getElementById('input');
// console.log(button)

button.onclick = () => {
const tag = document.createElement('div');

tag.setAttribute('class','block');
tag.innerHTML = input.value;
document.body.append(tag);

const deleteButtom = document.createElement('button');
deleteButtom.innerText = "Delete"

deleteButtom.onclick = () => {
tag.remove()
}
tag.append(deleteButtom);
input.value = '';
}

// 2

el_1 = document.getElementById('some-block');
function changeSingle(element){
element.innerHTML= 'Пока!'
let a = "changed";
console.log(a);
}

