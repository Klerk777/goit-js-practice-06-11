//------------------ data moodel -> array of objects (tasks):
import items from './items';

//------------------ object of DOM's refs:
const refs = {
  body: document.body,
  form: document.querySelector('.add-task-form'),
  addBtn: document.querySelector('.add-task-form__btn'),
  list: document.querySelector('.task-list'),
  taskText: document.querySelector('.task-list__text'),
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
           <button class="task-list__delbtn" type="button"></button>
        </li>`,
    )
    .join('');
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

//---------------------------- function addTaskToTaskArray  ------------------------------------------------
function addTaskToTaskArray(event) {
  const newTask = {
    task: event.target.elements.text.value,
    isDone: false,
  };
  items.push(newTask);
}

//---------------------------- function deleteTaskFromTaskArray  ------------------------------------------------
function deleteTaskFromTaskArray(event) {
  // finde target object in array
  const curentTaskText = event.target.parentNode.querySelector('.task-list__text').textContent;
  const curentObjIndex = items.findIndex(item => item.task === curentTaskText);
  // delet object from array
  items.splice(curentObjIndex, 1);
}

//---------------------------- function onAddTaskBtnClick  ------------------------------------------------
/**
 * Function adds new task to task list
 * @param {Event} event
 * @returns
 */
const onAddTaskBtnClick = event => {
  event.preventDefault();
  addTaskToTaskArray(event);
  refs.form.reset();
  render();
};

//---------------------------- function onDeleteBtnClick  ------------------------------------------------
const onDeleteBtnClick = event => {
  if (!event.target.classList.contains('task-list__delbtn')) {
    return;
  }
  deleteTaskFromTaskArray(event); // delete element from data-model array
  event.target.parentNode.remove(); // delete element from DOM
};

//----------------------- add event listner on form submit, and adds new task  ---------------------
refs.form.addEventListener('submit', onAddTaskBtnClick);
refs.list.addEventListener('click', onDeleteBtnClick);

// run
render();
console.table(items);
