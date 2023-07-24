import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage";
import WritePage from "./pages/WritePage";

function App() {
  return (
    <>
      <header className="flex">
        <NavLink to="/list" className="font-bold hover:text-red-500 p-3">리스트</NavLink>
        <NavLink to="/write" className="font-bold hover:text-red-500 p-3">작성</NavLink>
      </header>
      <Routes>
        <Route path="/list" element={<ListPage/>}/>
        <Route path="/write" element={<WritePage/>}/>
        <Route path="*" element={<Navigate to="/list"/>}/>
      </Routes>
    </>
  );
}

export default App;
