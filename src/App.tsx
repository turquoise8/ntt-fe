import CarouselSection from "./sections/CarouselSection";
import HeaderSection from "./sections/HeaderSection";
import ProductsSection from "./sections/ProductsSection";
import { addData, useAppDispatch } from "./store";
import { useEffect } from "react";

function App() {
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
      <ProductsSection />
    </>
  );
}

export default App;
