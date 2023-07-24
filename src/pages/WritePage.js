import { useRecoilState } from "recoil";
import { todosAtom } from "../states";

function WritePage(){
  const [todos, setTodos] = useRecoilState(todosAtom);
  return (
    <>
      <h1>작성 페이지</h1>
      <div>현재 글 개수: {todos.length}</div>
      <form>
        <input type="text" placeholder="할일 입력"/>
        <input type="submit" value="작성"/>
      </form>

    </>
  )
}

export default WritePage;