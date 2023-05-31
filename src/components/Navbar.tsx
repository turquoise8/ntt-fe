import ChevronDown from "../assets/ChevronDown";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

const Navbar = () => {
  const [maxAllowedTabs, setMaxAllowedTabs] = useState(4);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMaxAllowedTabs(Math.ceil(window.innerWidth / 100));
    });
  }, []);

  return (
    <nav className="p-2 hidden md:flex justify-center gap-3 ">
      {Array.from({ length: 10 }).map((_, i) => {
        if (maxAllowedTabs < 10 && i === maxAllowedTabs - 1) {
          return (
            <Button
              sx={{ color: "#6A6D70", textTransform: "none" }}
              variant="text"
              key={i}
            >
              <span className="text-xs">More</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          );
        }

        return (
          i < maxAllowedTabs && (
            <Button
              sx={{ color: "#6A6D70", textTransform: "none" }}
              variant="text"
              key={i}
            >
              <span className="text-xs">Menu Item</span>
            </Button>
          )
        );
      })}
    </nav>
  );
};

export default Navbar;
