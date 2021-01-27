export interface TodoListProps {
  todos: ITodo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}
export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}
