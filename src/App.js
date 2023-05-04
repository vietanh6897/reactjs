import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import TodoFeature from "./features/todo/pages";
import AlbumFeature from "./features/album/pages";
import TodoListPage from "./features/todo/pages/ListPage";
import TodoDetailPage from "./features/todo/pages/DetailPage";
import { useEffect } from "react";
import productApi from "./api/productApi";

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };
    fetchProducts();
  }, []);
  return (
    <div className="App">
      Header
      <p>
        <NavLink
          to="/albums"
          className={({ isActive }) =>
            isActive ? "active-menu" : "inactive-menu"
          }
        >
          Nav-Albums
        </NavLink>
      </p>
      <p>
        <NavLink
          to="/todos"
          className={({ isActive }) =>
            isActive ? "active-menu" : "inactive-menu"
          }
        >
          Nav-Todos
        </NavLink>
      </p>
      <Routes>
        <Route path="" element={<TodoFeature />} exact />
        <Route path="todos" element={<TodoFeature />}>
          <Route path="" element={<TodoListPage></TodoListPage>} />
          <Route
            path="detail/:id"
            element={<TodoDetailPage></TodoDetailPage>}
          />
          {/* <Route path="*" element={<Navigate to="" replace></Navigate>} /> */}
        </Route>
        <Route path="albums" element={<AlbumFeature />} />
        <Route path="*" element={<Navigate to="" replace></Navigate>} />
      </Routes>
      Footer
    </div>
  );
}

export default App;
