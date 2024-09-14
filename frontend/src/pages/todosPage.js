import { createTodoCtrl, updateTodoCtrl, deleteTodoCtrl, getAllTodosCtrl } from "../services/app.js";

export const todosPage = () => {
  const container = document.createElement("div");

  container.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "h-screen",
    "bg-gray-200"
  );

  // Botón Home
  const btnHome = document.createElement("button");
  btnHome.classList.add(
    "bg-blue-500",
    "text-white",
    "p-2",
    "rounded",
    "hover:bg-blue-600",
    "mb-4"
  );
  btnHome.textContent = "Home";
  btnHome.addEventListener("click", () => {
    window.location.pathname = "/home";
  });

  // Botón Crear tarea
  const btnAdd = document.createElement("button");
  btnAdd.classList.add(
    "bg-blue-500",
    "text-white",
    "p-2",
    "rounded",
    "hover:bg-blue-600",
    "mb-4"
  );
  btnAdd.textContent = "Crear tarea";

  // Formulario para crear una tarea
  const formContainer = document.createElement("div");
  formContainer.classList.add( "hidden",
    "p-6",  // Aumentar el padding interno
    "bg-white",
    "shadow-md",
    "rounded-lg",  // Bordes redondeados más grandes
    "max-w-xs" );

  const formTitle = document.createElement("h2");
  formTitle.textContent = "Crear Nueva Tarea";
  formTitle.classList.add("text-xl", "font-bold");

  const form = document.createElement("form");
  form.id = "todoForm";

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.textContent = "Título:";
  titleLabel.classList.add("block", "mb-2"); // Establece el bloque y añade margen abajo
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "title";
  titleInput.name = "title";
  titleInput.required = true;
  titleInput.classList.add("border", "p-2", "mb-2");

  const completedLabel = document.createElement("label");
  completedLabel.setAttribute("for", "completed");
  completedLabel.textContent = "Completada:";
  const completedInput = document.createElement("input");
  completedInput.type = "checkbox";
  completedInput.id = "completed";
  completedInput.name = "completed";

  const ownerLabel = document.createElement("label");
  ownerLabel.setAttribute("for", "owner");
  ownerLabel.textContent = "ID: ";
  ownerLabel.classList.add("block", "mb-1"); // Establece el bloque y añade margen abajo
  const ownerInput = document.createElement("input");
  ownerInput.type = "text";
  ownerInput.id = "owner";
  ownerInput.name = "owner";
  ownerInput.required = true;
  ownerInput.classList.add("border", "p-2", "mb-2");

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.classList.add("bg-blue-500", "text-white", "p-2", "rounded", "hover:bg-blue-600");
  submitButton.textContent = "Agregar Tarea";

  const cancelButton = document.createElement("button");
  cancelButton.type = "button";
  cancelButton.classList.add("bg-red-500", "text-white", "p-2", "rounded", "hover:bg-red-300", "ml-2");
  cancelButton.textContent = "Cancelar";
  cancelButton.addEventListener("click", () => {
    formContainer.classList.add("hidden");
    form.reset(); // Limpiar formulario al cancelar
  });

  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(completedLabel);
  form.appendChild(completedInput);
  form.appendChild(ownerLabel);
  form.appendChild(ownerInput);
  form.appendChild(submitButton);
  form.appendChild(cancelButton);
  formContainer.appendChild(form);

  // Añadir los botones y el formulario al contenedor
  container.appendChild(btnHome);
  container.appendChild(btnAdd);
  container.appendChild(formContainer);

  btnAdd.addEventListener("click", () => {
    formContainer.classList.toggle("hidden");
    form.reset(); // Limpiar formulario al mostrar
  });

  // Tabla para mostrar tareas
  const titleElement = document.createElement("h1");
  titleElement.classList.add("text-3xl", "font-bold", "mb-4");
  titleElement.textContent = "List of Todos";

  const table = document.createElement("table");
  table.classList.add(
    "w-1/2",
    "bg-white",
    "shadow-md",
    "h-[800px]",
    "overflow-y-scroll"
  );

  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  const th1 = document.createElement("th");
  th1.classList.add("border", "px-4", "py-2");
  th1.textContent = "ID";

  const th2 = document.createElement("th");
  th2.classList.add("border", "px-4", "py-2");
  th2.textContent = "Title";

  const th3 = document.createElement("th");
  th3.classList.add("border", "px-4", "py-2");
  th3.textContent = "Completed";

  const th4 = document.createElement("th");
  th4.classList.add("border", "px-4", "py-2");
  th4.textContent = "Owner Id";

  const th5 = document.createElement("th");
  th5.classList.add("border", "px-4", "py-2");
  th5.textContent = "Options";

  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);
  tr.appendChild(th5);

  thead.appendChild(tr);

  const tbody = document.createElement("tbody");
  tbody.classList.add("text-center");
  table.appendChild(thead);
  table.appendChild(tbody);

  container.appendChild(titleElement);
  container.appendChild(table);

  // Función para renderizar tareas
  const renderTodos = async () => {
    try {
      const data = await getAllTodosCtrl();
      if (!data) return;

      tbody.innerHTML = ""; // Limpiar el cuerpo de la tabla

      data.todos.forEach((todo) => {
        const tr = document.createElement("tr");

        const td1 = document.createElement("td");
        td1.classList.add("border", "px-4", "py-2");
        td1.textContent = todo.id;

        const td2 = document.createElement("td");
        td2.classList.add("border", "px-4", "py-2");
        td2.textContent = todo.title;

        const td3 = document.createElement("td");
        td3.classList.add("border", "px-4", "py-2");
        td3.textContent = todo.completed ? "Sí" : "No";

        const td4 = document.createElement("td");
        td4.classList.add("border", "px-4", "py-2");
        td4.textContent = todo.owner;

        const td5 = document.createElement("td");
        td5.classList.add("border", "px-4", "py-2", "flex", "justify-center", "items-center", "space-x-2");

        // Crear botón Editar
        const btnEdit = document.createElement("button");
        btnEdit.classList.add(
          "bg-blue-500",
          "text-white",
          "p-1",
          "rounded",
          "hover:bg-blue-600"
        );
        btnEdit.textContent = "Editar";
        btnEdit.addEventListener("click", () => {
          formContainer.classList.remove("hidden");
          titleInput.value = todo.title;
          completedInput.checked = todo.completed;
          ownerInput.value = todo.owner;
          form.dataset.id = todo.id; // Establecer el ID de la tarea en el formulario
        });

        // Crear botón Eliminar
        const btnDelete = document.createElement("button");
        btnDelete.classList.add(
          "bg-red-500",
          "text-white",
          "p-1",
          "rounded",
          "hover:bg-red-600"
        );
        btnDelete.textContent = "Eliminar";
        btnDelete.addEventListener("click", async () => {
          if (confirm("¿Estás seguro de que quieres eliminar esta tarea?")) {
            try {
              await deleteTodoCtrl(todo.id);
              renderTodos();
            } catch (error) {
              console.error("Error eliminando tarea:", error);
            }
          }
        });

        td5.appendChild(btnEdit);
        td5.appendChild(btnDelete);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tbody.appendChild(tr);
      });
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  // Manejar el envío del formulario
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = titleInput.value;
    const completed = completedInput.checked;
    const owner = ownerInput.value;
    const id = form.dataset.id; // Obtener el ID de la tarea si se está editando

    try {
      if (id) {
        // Si hay un ID, actualizar la tarea
        await updateTodoCtrl(id, { title, completed, owner });
      } else {
        // Si no hay ID, crear una nueva tarea
        await createTodoCtrl({ title, completed, owner });
      }
      form.reset();
      form.dataset.id = ""; // Limpiar el ID del formulario
      formContainer.classList.add("hidden");
      renderTodos();
    } catch (error) {
      console.error("Error saving todo:", error);
    }
  });

  renderTodos();

  return container;
};
