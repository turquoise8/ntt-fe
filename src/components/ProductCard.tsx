import { Button } from "@mui/material";
import { Product } from "../types";
import Heart from "../assets/Heart";
import { toggleFavorite, useAppDispatch, useAppSelector } from "../store";
import { useState, useRef, useEffect } from "react";

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.app.favorites);

  const descriptionEl = useRef<HTMLParagraphElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(true);

  // This effect is used to check if the description is clamped or not.
  // If it is clamped, we show the "Devamını gör" button.
  useEffect(() => {
    function handleClamp() {
      if (descriptionEl && descriptionEl.current) {
        setIsClamped(
          descriptionEl.current.scrollHeight >
            descriptionEl.current.clientHeight
        );
      }
    }

    handleClamp();

    window.addEventListener("resize", handleClamp);

    return () => window.removeEventListener("resize", handleClamp);
  }, []);

  return (
    <div
      onClick={() =>
        window.open("https://www.google.com/search?q=" + product.name, "_blank")
      }
      className="md:w-[23%] flex flex-col border rounded p-2 relative hover:shadow-xl transition cursor-pointer"
    >
      <div className="flex items-center justify-center">
        <img
          className="object-cover"
          src={product.imageUrl}
          alt={product.name}
        />
        <div className="z-50 overflow-hidden flex justify-center items-center rounded-full bg-white w-8 h-8 absolute top-4 right-5">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              dispatch(toggleFavorite(product));
            }}
          >
            <Heart
              isActive={favorites.some(
                (favorite) => favorite.id === product.id
              )}
            />
          </Button>
        </div>
      </div>

      <span className="font-medium mt-2 text-navy px-2">{product.name}</span>
      <span className="font-medium mt-2 text-navy bg-[#E6EEF8] px-2">
        {product.price} ₺
      </span>
      <span className="font-medium mt-2 mb-1 text-navy px-2 text-xs">
        Description
      </span>
      <p className="px-2 mt-1 text-xs lg:text-sm text-navy overflow-hidden">
        <span
          ref={descriptionEl}
          className={`${isExpanded ? "" : "line-clamp-2"}`}
        >
          {product.description}
        </span>

        {isClamped && !isExpanded && (
          <span
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(true);
            }}
            className="text-brand font-medium cursor-pointer"
          >
            Devamını gör
          </span>
        )}
      </p>
      <span className="text-[10px] px-2 mt-2">{product.shippingMethod}</span>
    </div>
  );
};

export default ProductCard;
