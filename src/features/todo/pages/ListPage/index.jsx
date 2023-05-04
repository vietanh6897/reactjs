import React, { useState } from "react";
import TodoList from "../../components/todo-list";
import { useSearchParams } from "react-router-dom";

function TodoListPage(props) {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("status"));
  let initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: true,
      url: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/2/0/1/e20121d239e5536869d4544cbef7a9ae.jpg",
    },
    {
      id: 2,
      title: "Eat2",
      status: true,
      url: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/2/0/1/e20121d239e5536869d4544cbef7a9ae.jpg",
    },
    {
      id: 3,
      title: "Eat3",
      status: true,
      url: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/2/0/1/e20121d239e5536869d4544cbef7a9ae.jpg",
    },
  ];
  let [todoList, setTodoList] = useState(initTodoList);
  let [renderedTodoList, setRenderedTodoList] = useState(initTodoList);
  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];
    newTodoList[idx].status = !newTodoList[idx].status;
    setTodoList(newTodoList);
  };
  const handleFilter = (status) => {
    console.log(status);
    let newTodoList = [];
    if (status === "all") {
      newTodoList = [...todoList];
    } else {
      newTodoList = [...todoList];
      newTodoList = newTodoList.filter((item) => item.status === status);
    }
    setRenderedTodoList(newTodoList);
  };
  return (
    <div>
      <h3>Todo List</h3>
      <TodoList
        todoList={renderedTodoList}
        onTodoClick={handleTodoClick}
      ></TodoList>
      <div>
        <button onClick={() => handleFilter("all")}>Show all</button>
        <button onClick={() => handleFilter(true)}>Show all</button>
        <button onClick={() => handleFilter(false)}>Show all</button>
      </div>
    </div>
  );
}

export default TodoListPage;
