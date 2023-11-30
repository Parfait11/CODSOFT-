window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const task = input.value;
  
      const task_el = createTaskElement(task);
      list_el.appendChild(task_el);
  
      input.value = '';
    });
  
    function createTaskElement(task) {
      const task_el = document.createElement("div");
      task_el.classList.add("task");
  
      const task_content_el = createTaskContentElement(task);
      const task_actions_el = createTaskActionsElement(task_content_el);
  
      task_el.appendChild(task_content_el);
      task_el.appendChild(task_actions_el);
  
      return task_el;
    }
  
    function createTaskContentElement(task) {
      const task_content_el = document.createElement("div");
      task_content_el.classList.add("content");
  
      const task_input_el = document.createElement("input");
      task_input_el.classList.add("text");
      task_input_el.type = "text";
      task_input_el.value = task;
      task_input_el.setAttribute("readonly", "readonly");
  
      task_content_el.appendChild(task_input_el);
  
      return task_content_el;
    }
  
    function createTaskActionsElement(task_content_el) {
      const task_actions_el = document.createElement("div");
      task_actions_el.classList.add("actions");
  
      const task_edit_el = createButton("Edit", () => {
        toggleEdit(task_edit_el, task_content_el);
      });
  
      const task_delete_el = createButton("Delete", () => {
        list_el.removeChild(task_content_el.parentNode);
      });
  
      task_actions_el.appendChild(task_edit_el);
      task_actions_el.appendChild(task_delete_el);
  
      return task_actions_el;
    }
  
    function createButton(text, onClick) {
      const button_el = document.createElement("button");
      button_el.innerText = text;
      button_el.addEventListener("click", onClick);
      return button_el;
    }
  
    function toggleEdit(task_edit_el, task_input_el) {
      if (task_edit_el.innerText.toLowerCase() == "edit") {
        task_edit_el.innerText = "Save";
        task_input_el.querySelector("input").removeAttribute("readonly");
        task_input_el.querySelector("input").focus();
      } else {
        task_edit_el.innerText = "Edit";
        task_input_el.querySelector("input").setAttribute("readonly", "readonly");
      }
    }
  });
  