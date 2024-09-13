// addPage.js
export const addPage = () => {
  const container = document.createElement("div");

  container.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "h-screen",
    "bg-gray-200"
  );

  const title = document.createElement("h1");
  title.classList.add("text-3xl", "font-bold", "mb-4");
  title.textContent = "Crear Nueva Tarea";

  const form = document.createElement("form");
  form.classList.add("flex", "flex-col", "items-center");

  const inputTitle = document.createElement("input");
  inputTitle.type = "text";
  inputTitle.placeholder = "Título";
  inputTitle.classList.add("mb-4", "p-2", "border", "border-gray-400", "rounded");

  const inputOwner = document.createElement("input");
  inputOwner.type = "text";
  inputOwner.placeholder = "ID del Propietario";
  inputOwner.classList.add("mb-4", "p-2", "border", "border-gray-400", "rounded");

  const inputCompleted = document.createElement("input");
  inputCompleted.type = "checkbox";
  inputCompleted.id = "completed";
  const labelCompleted = document.createElement("label");
  labelCompleted.htmlFor = "completed";
  labelCompleted.textContent = "Completado";
  labelCompleted.classList.add("mb-4");

  const btnSubmit = document.createElement("button");
  btnSubmit.textContent = "Crear Tarea";
  btnSubmit.type = "submit";
  btnSubmit.classList.add(
    "bg-blue-500",
    "text-white",
    "p-2",
    "rounded",
    "hover:bg-blue-600"
  );

  form.appendChild(inputTitle);
  form.appendChild(inputOwner);
  form.appendChild(labelCompleted);
  form.appendChild(inputCompleted);
  form.appendChild(btnSubmit);

  container.appendChild(title);
  container.appendChild(form);

  return container;
};
