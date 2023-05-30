import { addData, useAppDispatch, useAppSelector } from "./store";

function App() {
  const data = useAppSelector((state) => state.app.data);
  const dispatch = useAppDispatch();

  return <></>;
}

export default App;
