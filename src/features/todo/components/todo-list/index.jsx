import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import classnames from "classnames";
TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
  const handleTodoClick = (todo, idx) => {
    if (!onTodoClick) return;
    onTodoClick(todo, idx);
  };
  return (
    <div>
      <ul className="todo-list">
        {todoList.map((todo, index) => (
          <li
            key={todo.id}
            className={classnames({
              "todo-item": true,
              completed: todo.status === true,
            })}
            onClick={() => handleTodoClick(todo, index)}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
