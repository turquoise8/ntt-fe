import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ProductCard from "../components/ProductCard";
import { useAppSelector } from "../store";
import Heart from "../assets/Heart";

const ProductsSection = () => {
  const [data, favorites] = useAppSelector((state) => [
    state.app.data,
    state.app.favorites,
  ]);

  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [noOfItems, setNoOfItems] = useState(4);

  useEffect(() => {
    // If the user removes all favorites, show all products again
    if (favorites.length === 0) setFavoritesOnly(false);
  }, [favorites]);

  return (
    <div className="flex flex-col p-3 md:px-8 lg:px-32 mt-8">
      {/* Header */}
      <div className="flex justify-between mb-5 gap-3 items-center">
        <span className="text-sm lg:text-xl font-medium text-center">
          Content Title Goes Here
        </span>
        <div className="flex  items-center font-medium text-sm lg:text-base text-center">
          <Heart fill={favorites.length > 0 ? "red" : "black"} />
          <span className="mr-3 ml-2 lg:mr-8 lg:ml-4">
            {favorites.length} ÜRÜN
          </span>
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#0059BC",
            }}
            onClick={() => {
              setFavoritesOnly(!favoritesOnly);
              setNoOfItems(4);
            }}
          >
            Beğenilenler
          </Button>
        </div>
      </div>

      {/* Carousel - hidden in tablet and desktop */}
      <div className="md:hidden">
        <Carousel
          fullHeightHover={false}
          indicatorIconButtonProps={{
            style: {
              color: "#D1D1D1",
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: "#0059BC",
            },
          }}
        >
          {!favoritesOnly || favorites.length === 0
            ? data.map((product) => <ProductCard product={product} />)
            : favorites.map((product) => <ProductCard product={product} />)}
        </Carousel>
      </div>

      {/* Products - hidden in mobile */}
      <div className="hidden md:flex gap-4 flex-wrap">
        {!favoritesOnly || favorites.length === 0
          ? data
              .slice(0, noOfItems)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
          : favorites.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>

      {/* Show more button - visible only in certain states */}
      {data.length >= noOfItems && !favoritesOnly && (
        <div className="mt-5 mx-auto hidden md:flex">
          <Button
            onClick={() => setNoOfItems(noOfItems + 4)}
            size="large"
            variant="contained"
            className="mt-2"
          >
            Daha Fazla Gör
          </Button>
        </div>
      )}

      {/* A basic loading indicator in case the API responds slow */}
      {!data.length && <span>Loading...</span>}
    </div>
  );
};

export default ProductsSection;
