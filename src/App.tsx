import Header from "./sections/Header";
import { addData, useAppDispatch, useAppSelector } from "./store";

function App() {
  const data = useAppSelector((state) => state.app.data);
  const dispatch = useAppDispatch();

  return (
    <>
      <Header />
    </>
  );
}

export default App;
