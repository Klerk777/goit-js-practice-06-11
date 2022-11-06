//------------------ data moodel -> array of objects (tasks):
import items from './items';

//------------------ object of DOM's refs:
const refs = {
  body: document.body,
  form: document.querySelector('.add-task-form'),
  list: document.querySelector('.task-list'),
  input: document.querySelector('.add-task-form__input'),
  addBtn: document.querySelector('.add-task-form__btn'),
};
//---------------------------- function getItemTamplate ---------------------------------------------
/**
 * Function returns string (tamplate for markup) of task list
 * @param {Array} items - array of obj (tasks)
 * @returns {string} string complete to insert in DOM
 */
const getItemTamplate = items => {
  return items
    .map(
      ({ task, isDone }) => `<li class="task-list__item">
          <div class="task-list__box">
            <input class="task-list__check" type="checkbox" ${isDone ? 'checked' : ''}/>
            <span class="task-list__text">${task}</span>
          </div>
          <button class="task-list__delbtn" type="button"><img src="./src/images/iconmonstr-trash-can-10.svg" alt="X" width="24"/></button>
        </li>`,
    )
    .join('');
};

//---------------------------- function addNewTask  ------------------------------------------------
/**
 * Function adds new task to task list
 * @param {Event} event
 * @returns
 */
const addNewTask = event => {
  event.preventDefault();
  const newTask = {
    task: event.target.elements.text.value,
    isDone: false,
  };
  items.push(newTask);
  refs.form.reset();
  render();
};
//------------------------------ function render  ------------------------------------------------
/**
 * Function renders list of tasks in DOM
 * @param {} none
 * @returns
 */
const render = () => {
  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('beforeend', getItemTamplate(items));
};

//----------------------- add event listner on form submit, and adds new task  ---------------------
refs.form.addEventListener('submit', addNewTask);

// run
render();
