function t(t){return t&&t.__esModule?t.default:t}var e;e=JSON.parse('[{"task":"купити хліба","isDone":false},{"task":"купити молоко","isDone":false},{"task":"поповнити телефон","isDone":true}]');const s={body:document.body,form:document.querySelector(".add-task-form"),list:document.querySelector(".task-list"),input:document.querySelector(".add-task-form__input"),addBtn:document.querySelector(".add-task-form__btn")},n=()=>{s.list.innerHTML="",s.list.insertAdjacentHTML("beforeend",t(e).map((({task:t,isDone:e})=>`<li class="task-list__item">\n          <div class="task-list__box">\n            <input class="task-list__check" type="checkbox" ${e?"checked":""}/>\n            <span class="task-list__text">${t}</span>\n          </div>\n          <button class="task-list__delbtn" type="button"><img src="./src/images/iconmonstr-trash-can-10.svg" alt="X" width="24"/></button>\n        </li>`)).join(""))};s.form.addEventListener("submit",(a=>{a.preventDefault();const o={task:a.target.elements.text.value,isDone:!1};t(e).push(o),s.form.reset(),n()})),n();
//# sourceMappingURL=module-06-11.c50889ae.js.map
