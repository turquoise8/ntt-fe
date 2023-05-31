import CarouselSection from "./sections/CarouselSection";
import HeaderSection from "./sections/HeaderSection";
import { addData, useAppDispatch, useAppSelector } from "./store";
import { useEffect } from "react";

function App() {
  const data = useAppSelector((state) => state.app.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch("https://honey-badgers-ecommerce.glitch.me/products")
      .then((res) => res.json())
      .then((data) => dispatch(addData(data)));
  }, []);

  return (
    <>
      <HeaderSection />
      <CarouselSection />
    </>
  );
}

export default App;
