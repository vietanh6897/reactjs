import React from "react";
// import { Navigate, Route, Routes } from "react-router-dom";
// import TodoListPage from "./ListPage";
// import TodoDetailPage from "./DetailPage";
import { Outlet } from "react-router-dom";

function TodoFeature(props) {
  return (
    <div>
      <h2>Todo feature - Share UI or feature module</h2>
      {/* <Routes>
        <Route path="" element={<TodoListPage></TodoListPage>}></Route>
        <Route
          path=":todoId"
          element={<TodoDetailPage></TodoDetailPage>}
        ></Route>
        <Route path="*" element={<Navigate to="" replace></Navigate>} />
      </Routes> */}
      <Outlet></Outlet>
    </div>
  );
}

export default TodoFeature;
