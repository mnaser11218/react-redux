const BASE_URL = 'http://localhost:4000/todos';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
export const fetchTodos = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
