!function(){function t(t){return t&&t.__esModule?t.default:t}var e;e=JSON.parse('[{"task":"поповнити телефон","isDone":true},{"task":"купити хліба","isDone":false},{"task":"купити молоко","isDone":false},{"task":"обрати подарунок дружині","isDone":false},{"task":"спалити московію","isDone":true}]');var n={body:document.body,form:document.querySelector(".add-task-form"),addBtn:document.querySelector(".add-task-form__btn"),list:document.querySelector(".task-list"),taskText:document.querySelector(".task-list__text")},s=function(){n.list.innerHTML="",n.list.insertAdjacentHTML("beforeend",t(e).map((function(t){var e=t.task,n=t.isDone;return'<li class="task-list__item">\n          <div class="task-list__box">\n            <input class="task-list__check" type="checkbox" '.concat(n?"checked":"",'/>\n            <span class="task-list__text">').concat(e,'</span>\n          </div>\n           <button class="task-list__delbtn" type="button"></button>\n        </li>')})).join(""))};n.form.addEventListener("submit",(function(a){a.preventDefault(),function(n){var s={task:n.target.elements.text.value,isDone:!1};t(e).push(s)}(a),n.form.reset(),s()})),n.list.addEventListener("click",(function(n){n.target.classList.contains("task-list__delbtn")&&(!function(n){var s=n.target.parentNode.querySelector(".task-list__text").textContent,a=t(e).findIndex((function(t){return t.task===s}));t(e).splice(a,1)}(n),n.target.parentNode.remove())})),s(),console.table(t(e))}();
//# sourceMappingURL=module-06-11.5d4b353e.js.map