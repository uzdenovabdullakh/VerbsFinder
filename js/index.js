//обработка кнопки поиска и формы ввода
//передача слова в searching_function
let arr=[];
import {Search} from './searching_function.js';
import {TablePaint} from './TablePaint.js';
function Form(formNode) {
  let elem = formNode.elements.search_input;
  Search(elem.value,arr);
  TablePaint(arr);
  arr.splice(0,arr.length);
}
function eventListener(event) {
    event.preventDefault()
    Form(form)
}
let form = document.querySelector(".search_form");

form.addEventListener('submit',eventListener)

