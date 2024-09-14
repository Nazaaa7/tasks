// api.js

export const getAllTodosCtrl = async () => {
  try {
    const response = await fetch("http://localhost:4000/todos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Error fetching todos");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

export const createTodoCtrl = async (todo) => {
  try {
    const response = await fetch("http://localhost:4000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(todo),
    });

    if (!response.ok) {
      throw new Error("Error creating todo");
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error;
  }
};

export const updateTodoCtrl = async (id, todo) => {
  try {
    const response = await fetch(`http://localhost:4000/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(todo),
    });

    if (!response.ok) {
      throw new Error("Error updating todo");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
};

export const deleteTodoCtrl = async (id) => {
  try {
    const response = await fetch(`http://localhost:4000/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Error deleting todo");
    }

    return await response.json();
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};
