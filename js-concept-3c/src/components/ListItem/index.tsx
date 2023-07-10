import React, { JSX } from "react";
import styles from "./ListItem.module.css";
import { Task } from "../../App.tsx";

type ListItemProps = {
  task: Task;
  onCheckBoxClick?: (id: number) => void;
};

const ListItem: React.FC<ListItemProps> = ({
  task,
  onCheckBoxClick,
}): JSX.Element => {
  return (
    <li
      className={`${styles.item} ${
        task.completed ? styles.completed : styles.uncompleted
      }`}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onClick={() => onCheckBoxClick && onCheckBoxClick(task.id)}
      />
      <span>{task.name}</span>
    </li>
  );
};

export default ListItem;
