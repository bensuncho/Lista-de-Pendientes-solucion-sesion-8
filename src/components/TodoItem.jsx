export function TodoItem({ id, description, onToggle, isDone = false }) {
  const className = isDone ? "done" : "";

  return (
    <li className={"item " + className} onClick={() => onToggle(id)}>
      {description}
    </li>
  );
}
